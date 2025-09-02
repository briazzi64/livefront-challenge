import testSetup from "@/utils/testUtils";
import { screen } from "expo-router/testing-library";
import PostDetailsScreen from "../app/details/[id]";
import { postMock } from "@/mocks/posts";
import { useGetPostDetails } from "@/hooks/usePosts";

jest.mock("@/hooks/usePosts");

describe("PostsList", () => {
  it("should render the loading state", () => {
    (useGetPostDetails as jest.Mock).mockReturnValueOnce({
      postDetails: undefined,
      isPostDetailsPending: true,
    });

    testSetup(<PostDetailsScreen />);

    expect(screen.getByLabelText("Loading...")).not.toBeNull();
  });

  it("should render the no data state", () => {
    (useGetPostDetails as jest.Mock).mockReturnValueOnce({
      postDetails: undefined,
      isPostDetailsPending: false,
    });

    testSetup(<PostDetailsScreen />);

    expect(
      screen.getByText(
        "Something went wrong retreiving the post details. Please try again"
      )
    ).not.toBeNull();
  });

  it("should render the post details", () => {
    (useGetPostDetails as jest.Mock).mockReturnValueOnce({
      postDetails: postMock,
      isPostDetailsPending: false,
    });

    testSetup(<PostDetailsScreen />);

    expect(screen.getByText(postMock.title)).not.toBeNull();
  });
});
