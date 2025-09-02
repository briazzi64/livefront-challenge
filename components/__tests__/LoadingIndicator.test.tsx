import testSetup from "@/utils/testUtils";
import { screen } from "expo-router/testing-library";
import LoadingIndicator from "../LoadingIndicator";

describe("LoadingIndicator", () => {
  it("should render loading indicator", () => {
    testSetup(<LoadingIndicator />);

    expect(screen.getByLabelText("Loading...")).not.toBeNull();
  });
});
