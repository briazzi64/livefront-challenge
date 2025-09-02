import { FONT_SIZES } from "@/constants/fontSizes";
import { SPACING } from "@/constants/spacing";
import { ReactNode } from "react";
import { View, Text } from "react-native";

type DefaultLayoutProps = {
  header: string;
  children: ReactNode;
};

export default function DefaultLayout({
  header,
  children,
}: DefaultLayoutProps) {
  return (
    <View style={{ padding: SPACING.md }}>
      <Text style={{ fontSize: FONT_SIZES.xl, marginBottom: SPACING.md }}>
        {header}
      </Text>
      {children}
    </View>
  );
}
