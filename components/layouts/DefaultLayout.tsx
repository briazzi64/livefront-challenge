import { COLORS } from "@/constants/color";
import { FONT_SIZES } from "@/constants/fontSizes";
import { SPACING } from "@/constants/spacing";
import { ReactNode } from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type DefaultLayoutProps = {
  header: string;
  children: ReactNode;
};

export default function DefaultLayout({
  header,
  children,
}: DefaultLayoutProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ padding: SPACING.md, paddingBottom: SPACING.md + insets.bottom }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: FONT_SIZES.xl,
          marginBottom: SPACING.md,
          color: COLORS.secondary,
          textTransform: "capitalize",
        }}
      >
        {header}
      </Text>
      {children}
    </View>
  );
}
