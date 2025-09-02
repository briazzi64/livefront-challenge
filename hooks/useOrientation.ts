import { useWindowDimensions } from "react-native";

export function useOrientation() {
  const { width, height } = useWindowDimensions();
  const isPortrait = width < height;

  return {
    isPortrait,
    isLandscape: !isPortrait,
  };
}
