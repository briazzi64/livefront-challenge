import DefaultLayout from "@/components/layouts/DefaultLayout";
import LoadingIndicator from "@/components/LoadingIndicator";
import PostsList from "@/components/posts/PostsList";
import { COLORS } from "@/constants/color";
import { FONT_SIZES } from "@/constants/fontSizes";
import { useGetPostsList } from "@/hooks/usePosts";
import { Text } from "react-native";

export default function PostsListScreen() {
  const { postsList, isPostsListPending, refetchPosts } = useGetPostsList();

  if (isPostsListPending) {
    return (
      <DefaultLayout header="All Posts">
        <LoadingIndicator />
      </DefaultLayout>
    );
  }

  if (postsList.length === 0) {
    return (
      <DefaultLayout header="No Posts">
        <Text style={{ fontSize: FONT_SIZES.md, color: COLORS.negative }}>
          No posts have been made yet. Please check back again soon
        </Text>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout header="All Posts">
      <PostsList
        postsList={postsList}
        refetchPosts={refetchPosts}
        isPostsListPending={isPostsListPending}
      />
    </DefaultLayout>
  );
}
