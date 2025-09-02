import testSetup from "@/utils/testUtils";
import { screen } from "expo-router/testing-library";
import DefaultLayout from "../DefaultLayout";
import { Text } from "react-native";

describe("DefaultLayout", () => {
  it("should render the header and child content", () => {
    testSetup(
      <DefaultLayout header="Header">
        <Text>This is text</Text>
      </DefaultLayout>
    );

    expect(screen.getByText("Header")).not.toBeNull();
    expect(screen.getByText("This is text")).not.toBeNull();
  });
});
