import { validateString } from "./common";

describe("String Validation", () => {
  
  test("should fail for strings longer than max length", () => {
    let str = "ThisStringIsDefinitelyLongerThan10Characters";
    expect(validateString(str, 10)).toBeFalsy();
  });

  test("should fail for strings containing whitespace", () => {
    let str = "Invalid String";
    expect(validateString(str, 20)).toBeFalsy();
  });

  test("should fail for strings missing uppercase letters", () => {
    let str = "alllowercase1!";
    expect(validateString(str, 20)).toBeFalsy();
  });

  test("should fail for strings missing lowercase letters", () => {
    let str = "ALLUPPERCASE1!";
    expect(validateString(str, 20)).toBeFalsy();
  });

  test("should fail for strings missing special characters", () => {
    let str = "NoSpecialChars123";
    expect(validateString(str, 20)).toBeFalsy();
  });

  test("should fail for strings missing digit", () => {
    let str = "NoDigits!";
    expect(validateString(str, 20)).toBeFalsy();
  });

  test("should pass for valid strings", () => {
    let str = "Valid1!";
    expect(validateString(str, 10)).toBeTruthy();
  });

   test("should fail for any whitespace characters: spaces, tabs, or newlines", () => {
    let input1 = "\tTabStart";
    let input2 = "TabEnd\t";
    let input3 = "\nNewlineStart";
    let input4 = "NewlineEnd\n";
    expect(validateString(input1, 30)).toBeFalsy();
    expect(validateString(input2, 30)).toBeFalsy();
    expect(validateString(input3, 30)).toBeFalsy();
    expect(validateString(input4, 30)).toBeFalsy();
  });
});