import testSetup from "@/utils/testUtils";
import { screen } from "expo-router/testing-library";
import UserPostsListScreen from "../app/user/[id]";
import { postMock } from "@/mocks/posts";
import { useGetPostsList } from "@/hooks/usePosts";

jest.mock("@/hooks/usePosts");

describe("PostsList", () => {
  it("should render the loading state", () => {
    (useGetPostsList as jest.Mock).mockReturnValueOnce({
      postsList: [],
      isPostsListPending: true,
      refetchPosts: jest.fn(),
    });

    testSetup(<UserPostsListScreen />);

    expect(screen.getByLabelText("Loading...")).not.toBeNull();
  });

  it("should render the no data state", () => {
    (useGetPostsList as jest.Mock).mockReturnValueOnce({
      postsList: [],
      isPostsListPending: false,
      refetchPosts: jest.fn(),
    });

    testSetup(<UserPostsListScreen />);

    expect(screen.getByText(/has no posts!/)).not.toBeNull();
  });

  it("should render the list of posts", () => {
    (useGetPostsList as jest.Mock).mockReturnValueOnce({
      postsList: [postMock],
      isPostsListPending: false,
      refetchPosts: jest.fn(),
    });

    testSetup(<UserPostsListScreen />);

    expect(screen.getByText(postMock.title)).not.toBeNull();
  });
});
