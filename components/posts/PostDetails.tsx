import { FONT_SIZES } from "@/constants/fontSizes";
import { PostListItem } from "@/types/posts";
import { Image, Text } from "react-native";

type PostDetailsProps = {
  post: PostListItem;
};
export default function PostDetails({ post }: PostDetailsProps) {
  const { id, body, userId } = post;

  return (
    <>
      <Image
        source={{ uri: `https://picsum.photos/500?random=${id}` }}
        style={{ width: "100%", height: 250 }}
      />
      <Text style={{ fontSize: FONT_SIZES.md }}>By {userId}</Text>
      <Text style={{ fontSize: FONT_SIZES.md }}>{body}</Text>
    </>
  );
}
