import { PostListItem } from "@/types/posts";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useGetPostsList = () => {
  const { data, isPending, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await api<PostListItem[]>({
        url: "/posts",
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
    queryKey: ["posts", uuid],
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
