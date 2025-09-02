import { COLORS } from "@/constants/color";
import { FONT_SIZES } from "@/constants/fontSizes";
import { SPACING } from "@/constants/spacing";
import { PostListItem } from "@/types/posts";
import { router } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";

type PostsListItemProps = {
  item: PostListItem;
};

export default function PostsListItem({ item }: PostsListItemProps) {
  const { id, title, body } = item;

  return (
    <Pressable
      style={{
        borderColor: COLORS.inactive,
        borderWidth: 2,
        padding: SPACING.sm,
        borderRadius: 10,
      }}
      onPress={() => router.navigate(`/details/${id}`)}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: FONT_SIZES.md,
          marginBottom: SPACING.sm,
          color: COLORS.primary,
          textTransform: "capitalize",
        }}
      >
        {title}
      </Text>
      <View style={{ flexDirection: "row", gap: SPACING.md }}>
        <Image
          source={{ uri: `https://picsum.photos/500?random=${id}` }}
          style={{ width: 100, height: 100 }}
          accessibilityLabel="The major image related to the post"
          defaultSource={require("@/assets/images/image-blur.jpg")}
        />
        <Text style={{ fontSize: FONT_SIZES.xs, flexShrink: 1 }}>{body}</Text>
      </View>
    </Pressable>
  );
}
