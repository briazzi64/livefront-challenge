import { SPACING } from "@/constants/spacing";
import { PostListItem } from "@/types/posts";
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";
import { FlatList, RefreshControl } from "react-native";
import PostsListItem from "./PostsListItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useOrientation } from "@/hooks/useOrientation";

type PostsListProps = {
  postsList: PostListItem[];
  isPostsListPending: boolean;
  refetchPosts: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<PostListItem[], Error>>;
};

export default function PostsList({
  postsList,
  isPostsListPending,
  refetchPosts,
}: PostsListProps) {
  const { isPortrait } = useOrientation();
  const insets = useSafeAreaInsets();

  return (
    <FlatList
      data={postsList}
      renderItem={({ item }) => <PostsListItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        gap: SPACING.md,
        paddingBottom: (isPortrait ? SPACING.md : SPACING.lg) + insets.bottom,
      }}
      refreshing={isPostsListPending}
      refreshControl={
        <RefreshControl
          refreshing={isPostsListPending}
          onRefresh={refetchPosts}
        />
      }
    />
  );
}
