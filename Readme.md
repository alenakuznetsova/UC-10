## Application description

Validation Project execution for Compose regular expressions to efficiently search, match, and manipulate text patterns. 
User type data in input and see "Error" if text inside input is not valid.
For validaion use function with regular expression (regex), more about function in "Regex implementation description".

## Regex implementation description
Function Name: validateString

Description:

The validateString function is designed to ensure the integrity and quality of user input strings in applications. It employs a regular expression (regex) to conduct various checks on the string input.

The function accepts two parameters:

str - The string provided by the user that needs to be validated.
maxLength - The maximum acceptable length for the string.
The function's validation criteria include the following:

Length: The length of the str must not exceed the maxLength parameter. If the string length is within the acceptable range, the function will return a match. If it is not, a non-match is returned.

Character Requirement: The str must contain at least one uppercase letter, one lowercase letter, one digit, and one special character from the predefined list: !"#$%&'()*+,-./:;<=>?@[]^_`{|}~. If all these criteria are met, the function will return a match. If not, a non-match is returned.

Whitespace: The str must not contain any whitespace characters (spaces, tabs, or newlines). If any whitespace characters are found, the function will return a non-match.

### Information on how to run the developed application locally

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


