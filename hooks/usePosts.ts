import { PostListItem } from "@/types/posts";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useGetPostsList = () => {
  const { data, isPending } = useQuery({
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
  };
};

export const useGetPostDetails = (uuid: string) => {
  const { data, isPending } = useQuery({
    queryKey: ["posts", uuid],
    queryFn: async () => {
      const { data } = await api<PostListItem[]>({
        url: `/posts/${uuid}`,
        method: "GET",
      });

      return data;
    },
  });

  return {
    postDetails: data,
    isPostDetailsPending: isPending,
  };
};
