import { COLORS } from "@/constants/color";
import { FONT_SIZES } from "@/constants/fontSizes";
import { SPACING } from "@/constants/spacing";
import { ReactElement } from "react";
import { ActivityIndicator, View, Text } from "react-native";

type DefaultLayoutProps = {
  header: string;
  isLoading: boolean;
  children: ReactElement;
};

export default function DefaultLayout({
  header,
  isLoading,
  children,
}: DefaultLayoutProps) {
  return (
    <View style={{ padding: SPACING.md }}>
      {isLoading ? (
        <ActivityIndicator
          accessibilityLabel="Loading..."
          size="large"
          color={COLORS.secondary}
        />
      ) : (
        <>
          <Text style={{ color: "black", fontSize: FONT_SIZES.xl }}>
            {header}
          </Text>
          {children}
        </>
      )}
    </View>
  );
}
