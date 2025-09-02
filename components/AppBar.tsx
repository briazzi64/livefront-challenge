import Constants from "expo-constants";

import { COLORS } from "@/constants/color";
import { FONT_SIZES } from "@/constants/fontSizes";
import { SPACING } from "@/constants/spacing";
import { View, Text, Image, Pressable } from "react-native";
import { router, usePathname } from "expo-router";
import { useOrientation } from "@/hooks/useOrientation";

export default function AppBar() {
  const { isPortrait } = useOrientation();
  const pathname = usePathname();
  const canGoBack = pathname !== "/";

  return (
    <View
      style={{
        paddingHorizontal: SPACING.md,
        paddingTop: isPortrait ? Constants.statusBarHeight : SPACING.md,
        paddingBottom: SPACING.sm,
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        gap: SPACING.md,
        alignItems: "center",
      }}
    >
      <View style={{ height: 20, width: 10 }}>
        {canGoBack && (
          <Pressable
            testID="back-button"
            onPress={() => router.back()}
            hitSlop={15}
          >
            <Image
              source={require("@/assets/images/back-arrow.png")}
              style={{ height: 20, width: 10 }}
            />
          </Pressable>
        )}
      </View>
      <Pressable
        testID="logo-button"
        onPress={() => router.navigate("/")}
        hitSlop={15}
        style={{ flexDirection: "row", gap: SPACING.md, alignItems: "center" }}
      >
        <Image
          source={require("@/assets/images/icon.jpeg")}
          style={{ height: 50, width: 50, borderRadius: 15 }}
        />
        <Text style={{ color: COLORS.white, fontSize: FONT_SIZES.lg }}>
          Livefront
        </Text>
      </Pressable>
    </View>
  );
}
