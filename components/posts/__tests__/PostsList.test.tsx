import testSetup from "@/utils/testUtils";
import { screen } from "expo-router/testing-library";
import PostsList from "../PostsList";
import { postMock } from "@/mocks/posts";

describe("PostsList", () => {
  it("should render all of the items", () => {
    testSetup(
      <PostsList
        postsList={[
          postMock,
          { id: 2, title: "Title 2", body: "Body 2", userId: 5 },
        ]}
        isPostsListPending={false}
        refetchPosts={jest.fn()}
      />
    );

    expect(screen.getByText(postMock.title)).not.toBeNull();
    expect(screen.getByText("Title 2")).not.toBeNull();

    expect(screen.getByText(postMock.body)).not.toBeNull();
    expect(screen.getByText("Body 2")).not.toBeNull();
  });
});
