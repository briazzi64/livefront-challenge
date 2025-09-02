import { COLORS } from "@/constants/color";
import { FONT_SIZES } from "@/constants/fontSizes";
import { SPACING } from "@/constants/spacing";
import { Pressable, Text } from "react-native";

type ButtonProps = {
  onPress: () => void;
  text: string;
  type: "primary" | "secondary" | "tertiary" | "negative" | "positive";
};

export default function Button({ onPress, text, type }: ButtonProps) {
  return (
    <Pressable
      testID="button"
      onPress={onPress}
      style={{
        padding: SPACING.md,
        backgroundColor: COLORS[type],
        borderRadius: 12,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: FONT_SIZES.sm,
          color: COLORS.white,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
}
