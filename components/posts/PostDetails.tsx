import { FONT_SIZES } from "@/constants/fontSizes";
import { PostListItem } from "@/types/posts";
import { Image, Text } from "react-native";
import Button from "../Button";
import { SPACING } from "@/constants/spacing";
import { router } from "expo-router";

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
        accessibilityLabel="The major image related to the post"
        defaultSource={require("@/assets/images/image-blur.jpg")}
      />
      <Text style={{ fontSize: FONT_SIZES.md, marginVertical: SPACING.md }}>
        {body}
      </Text>
      <Button
        onPress={() => router.navigate(`/user/${userId}`)}
        text={`More Posts By ${userId}`}
        type="secondary"
      />
    </>
  );
}
