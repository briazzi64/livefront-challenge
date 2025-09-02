import { camelCase, isArray, isPlainObject } from "lodash";

type AnyObject = {
  [key: string]: any;
};

export const convertCamelCaseConvention = (
  inputObject: AnyObject
): AnyObject => {
  if (isArray(inputObject)) {
    return inputObject.map((item) => convertCamelCaseConvention(item));
  } else if (isPlainObject(inputObject)) {
    const objectOutput: AnyObject = {};

    for (const key in inputObject) {
      objectOutput[camelCase(key)] = convertCamelCaseConvention(
        inputObject[key]
      );
    }

    return objectOutput;
  }

  return inputObject;
};
