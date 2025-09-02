import Constants from "expo-constants";

import { COLORS } from "@/constants/color";
import { FONT_SIZES } from "@/constants/fontSizes";
import { SPACING } from "@/constants/spacing";
import { View, Text, Image, Pressable } from "react-native";
import { router, usePathname } from "expo-router";

export default function AppBar() {
  const pathname = usePathname();
  const canGoBack = pathname !== "/";

  return (
    <View
      style={{
        paddingHorizontal: SPACING.md,
        paddingTop: Constants.statusBarHeight,
        paddingBottom: SPACING.sm,
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        gap: SPACING.md,
        alignItems: "center",
      }}
    >
      <View style={{ height: 20, width: 10 }}>
        {canGoBack && (
          <Pressable onPress={() => router.back()}>
            <Image
              source={require("@/assets/images/back-arrow.png")}
              style={{ height: 20, width: 10 }}
            />
          </Pressable>
        )}
      </View>
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
