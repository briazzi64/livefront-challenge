import testSetup from "@/utils/testUtils";
import Button from "../Button";
import { screen, fireEvent } from "expo-router/testing-library";
import { COLORS } from "@/constants/color";

const onPressMock = jest.fn();

describe("Button", () => {
  it("should render with the primary button styles", () => {
    testSetup(
      <Button text="Submit" type="primary" onPress={onPressMock}></Button>
    );

    const button = screen.getByTestId("button");
    expect(button.props.style.backgroundColor).toEqual(COLORS.primary);

    const buttonText = screen.getByText("Submit");
    expect(buttonText).not.toBeNull();
    expect(buttonText.props.style.color).toEqual(COLORS.white);
  });

  it("should render with the secondary button styles", () => {
    testSetup(
      <Button text="Submit" type="secondary" onPress={onPressMock}></Button>
    );

    const button = screen.getByTestId("button");
    expect(button.props.style.backgroundColor).toEqual(COLORS.secondary);
  });

  it("should render with the tertiary button styles", () => {
    testSetup(
      <Button text="Submit" type="tertiary" onPress={onPressMock}></Button>
    );

    const button = screen.getByTestId("button");
    expect(button.props.style.backgroundColor).toEqual(COLORS.tertiary);
  });

  it("should render with the negative button styles", () => {
    testSetup(
      <Button text="Submit" type="negative" onPress={onPressMock}></Button>
    );

    const button = screen.getByTestId("button");
    expect(button.props.style.backgroundColor).toEqual(COLORS.negative);
  });

  it("should render with the positive button styles", () => {
    testSetup(
      <Button text="Submit" type="positive" onPress={onPressMock}></Button>
    );

    const button = screen.getByTestId("button");
    expect(button.props.style.backgroundColor).toEqual(COLORS.positive);
  });

  it("should fire the `onPress` prop when the button is pressed", () => {
    testSetup(
      <Button text="Submit" type="primary" onPress={onPressMock}></Button>
    );

    const button = screen.getByTestId("button");
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});
