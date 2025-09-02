import { convertCamelCaseConvention } from "../responseConvertor";

describe("convertCamelCaseConvention", () => {
  test("Should return correct value", () => {
    expect(
      convertCamelCaseConvention({
        ios: { target_version: "1", min_supported_version: "1" },
        android: { target_version: "1", min_supported_version: "1" },
      })
    ).toEqual({
      android: { minSupportedVersion: "1", targetVersion: "1" },
      ios: { minSupportedVersion: "1", targetVersion: "1" },
    });
    expect(convertCamelCaseConvention([{ foo_bar: "baz" }])).toEqual([
      { fooBar: "baz" },
    ]);
  });
});
