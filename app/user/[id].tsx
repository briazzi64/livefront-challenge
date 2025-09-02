import DefaultLayout from "@/components/layouts/DefaultLayout";
import LoadingIndicator from "@/components/LoadingIndicator";
import PostsList from "@/components/posts/PostsList";
import { COLORS } from "@/constants/color";
import { FONT_SIZES } from "@/constants/fontSizes";
import { useGetPostsList } from "@/hooks/usePosts";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function UserPostsListScreen() {
  const { id = "" } = useLocalSearchParams<{ id: string }>();
  const { postsList, isPostsListPending, refetchPosts } = useGetPostsList(id);
  const header = `Posts by ${id}`;

  if (isPostsListPending) {
    return (
      <DefaultLayout header={header}>
        <LoadingIndicator />
      </DefaultLayout>
    );
  }

  if (postsList.length === 0) {
    return (
      <DefaultLayout header={header}>
        <Text style={{ fontSize: FONT_SIZES.md, color: COLORS.negative }}>
          User {id} has no posts!
        </Text>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout header={header}>
      <PostsList
        postsList={postsList}
        refetchPosts={refetchPosts}
        isPostsListPending={isPostsListPending}
      />
    </DefaultLayout>
  );
}
