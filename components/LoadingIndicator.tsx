import { COLORS } from "@/constants/color";
import { ActivityIndicator } from "react-native";

export default function LoadingIndicator() {
  return (
    <ActivityIndicator
      accessibilityLabel="Loading..."
      size="large"
      color={COLORS.secondary}
    />
  );
}
