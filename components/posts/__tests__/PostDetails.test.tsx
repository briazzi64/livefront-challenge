import testSetup from "@/utils/testUtils";
import { fireEvent, screen } from "expo-router/testing-library";
import PostDetails from "../PostDetails";
import { postMock } from "@/mocks/posts";
import { router } from "expo-router";

describe("PostDetails", () => {
  it("should navigate to the user posts list screen when the button is pressed", () => {
    testSetup(<PostDetails post={postMock} />);
    const navigateSpy = jest.spyOn(router, "navigate").mockReturnThis();

    expect(screen.getByText(postMock.body)).not.toBeNull();

    fireEvent.press(screen.getByText(/More Posts By/));
    expect(navigateSpy).toHaveBeenCalledWith(`/user/${postMock.userId}`);
  });
});
