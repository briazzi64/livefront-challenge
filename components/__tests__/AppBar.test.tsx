import testSetup from "@/utils/testUtils";
import { fireEvent, screen } from "expo-router/testing-library";
import AppBar from "../AppBar";
import { router } from "expo-router";

describe("AppBar", () => {
  it("should not render the back button", () => {
    testSetup(<AppBar />);

    expect(screen.queryByTestId("back-button")).toBeNull();
  });

  it("should navigate back to the home page when the logo is pressed", () => {
    testSetup(<AppBar />);
    const navigateSpy = jest.spyOn(router, "navigate").mockReturnThis();

    fireEvent.press(screen.getByTestId("logo-button"));
    expect(navigateSpy).toHaveBeenCalledWith("/");
  });
});
