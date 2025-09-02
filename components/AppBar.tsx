import Constants from "expo-constants";

import { COLORS } from "@/constants/color";
import { FONT_SIZES } from "@/constants/fontSizes";
import { SPACING } from "@/constants/spacing";
import { View, Text, Image } from "react-native";

export default function AppBar() {
  return (
    <View
      style={{
        paddingHorizontal: SPACING.md,
        paddingTop: Constants.statusBarHeight,
        paddingBottom: SPACING.sm,
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        gap: SPACING.sm,
        alignItems: "center",
      }}
    >
      <Image
        source={require("@/assets/images/icon.jpeg")}
        style={{ height: 50, width: 50 }}
      />
      <Text style={{ color: COLORS.white, fontSize: FONT_SIZES.lg }}>
        Livefront
      </Text>
    </View>
  );
}
