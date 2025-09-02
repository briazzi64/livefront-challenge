import testSetup from "@/utils/testUtils";
import { fireEvent, screen } from "expo-router/testing-library";
import PostsListItem from "../PostsListItem";
import { postMock } from "@/mocks/posts";
import { router } from "expo-router";

describe("PostsListItem", () => {
  it("should navigate to the post details when the item is pressed", () => {
    testSetup(<PostsListItem item={postMock} />);
    const navigateSpy = jest.spyOn(router, "navigate").mockReturnThis();

    expect(screen.getByText(postMock.body)).not.toBeNull();

    fireEvent.press(screen.getByText(postMock.title));
    expect(navigateSpy).toHaveBeenCalledWith(`/details/${postMock.id}`);
  });
});
