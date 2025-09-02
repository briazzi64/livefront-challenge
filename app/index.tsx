import DefaultLayout from "@/components/layouts/DefaultLayout";
import PostsList from "@/components/posts/PostsList";
import { useGetPostsList } from "@/hooks/usePosts";

export default function ListScreen() {
  const { postsList, isPostsListPending } = useGetPostsList();

  return (
    <DefaultLayout isLoading={isPostsListPending} header="Posts">
      <PostsList postsList={postsList} />
    </DefaultLayout>
  );
}
