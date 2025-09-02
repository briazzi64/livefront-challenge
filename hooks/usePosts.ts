import { PostListItem } from "@/types/posts";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useGetPostsList = (userId?: string) => {
  const { data, isPending, refetch } = useQuery({
    queryKey: userId ? ["posts", userId] : ["posts"],
    queryFn: async () => {
      const { data } = await api<PostListItem[]>({
        url: userId ? `/users/${userId}/posts` : "/posts",
        method: "GET",
      });

      return data;
    },
  });

  return {
    postsList: data || [],
    isPostsListPending: isPending,
    refetchPosts: refetch,
  };
};

export const useGetPostDetails = (uuid: string) => {
  const { data, isPending } = useQuery({
    queryKey: ["postDetails", uuid],
    queryFn: async () => {
      const { data } = await api<PostListItem>({
        url: `/posts/${uuid}`,
        method: "GET",
      });

      return data;
    },
    enabled: !!uuid,
  });

  return {
    postDetails: data,
    isPostDetailsPending: isPending,
  };
};
