"use strict";

module.exports = {
  extends: "eslint:recommended",
  env: {
    node: true,
    es6: true,
  },
  rules: {
    "comma-dangle": 0,
    "no-console": 0,
    strict: [2, "global"],
    "dot-location": [2, "property"],
    "no-multiple-empty-lines": [2, { max: 2 }],
    camelcase: [1, { properties: "always" }],
    curly: 2,
    "wrap-iife": [2, "inside"],
    eqeqeq: 2,
    "no-use-before-define": [2, "nofunc"],
    "no-unused-vars": 2,
    "no-unexpected-multiline": 2,
    "no-multi-str": 2,
    "no-irregular-whitespace": 2,

    //Stylistic Issues
    indent: [2, 2, { SwitchCase: 1 }],
    "func-call-spacing": 2,
    "operator-linebreak": [2, "after"],
    semi: [2, "always"],
    "array-bracket-spacing": [2, "never"], // enforce spacing inside array brackets
    "block-spacing": 0,                    // disallow or enforce spaces inside of single line blocks
    "brace-style": 2,                      // enforce one true brace style
    //"camelcase": 1,                        // require camel case names
    "comma-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],                                     // enforce spacing before and after comma
    "comma-style": 2,                      // enforce one true comma style
    "computed-property-spacing": 2,        // require or disallow padding inside computed properties
    "consistent-this": 2,                  // enforce consistent naming when capturing the current execution context
    "eol-last": 2,                         // enforce newline at the end of file, with no multiple empty lines
    "func-names": 0,                       // require function expressions to have a name
    "func-style": 0,                       // enforce use of function declarations or expressions
    "id-denylist": 0,                     // blacklist certain identifiers to prevent them being used
    "id-length": 0,                        // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    "id-match": 0,                         // require identifiers to match the provided regular expression
    //"indent": ["error", 2],                // specify tab or space width for your code
    "jsx-quotes": 0,                       // specify whether double or single quotes should be used in JSX attributes
    "key-spacing": 2,                      // enforce spacing between keys and values in object literal properties
    "keyword-spacing": [2, {
      "before": true,
      "after": true,
      "overrides": {
        "if": {"after": false},
        "for": {"after": false},
        "while": {"after": false},
        "catch": {"after": false}
      }
    }],                                    // enforce spacing before and after keywords
    "linebreak-style": 2,                  // disallow mixed 'LF' and 'CRLF' as linebreaks
    "lines-around-comment": 0,             // enforce empty lines around comments
    "max-depth": 1,                        // specify the maximum depth that blocks can be nested
    "max-len": [1, 200],                   // specify the maximum length of a line in your program
    "max-lines": 0,                        // enforce a maximum file length
    "max-nested-callbacks": 2,             // specify the maximum depth callbacks can be nested
    "max-params": 0,                       // limits the number of parameters that can be used in the function declaration.
    "max-statements": 0,                   // specify the maximum number of statement allowed in a function
    "max-statements-per-line": 0,          // enforce a maximum number of statements allowed per line
    "new-cap": 0,                          // require a capital letter for constructors
    "new-parens": 2,                       // disallow the omission of parentheses when invoking a constructor with no arguments
    "newline-per-chained-call": [
      "error",
      {"ignoreChainWithDepth": 2}
    ],                                     // enforce newline after each call when chaining the calls
    "no-array-constructor": 2,             // disallow use of the Array constructor
    "no-bitwise": 0,                       // disallow use of bitwise operators
    "no-continue": 0,                      // disallow use of the continue statement
    "no-inline-comments": 0,               // disallow comments inline after code
    "no-lonely-if": 2,                     // disallow if as the only statement in an else block
    "no-mixed-operators": 0,               // disallow mixes of different operators
    "no-mixed-spaces-and-tabs": 2,         // disallow mixed spaces and tabs for indentation
    //"no-multiple-empty-lines": 2,          // disallow multiple empty lines
    "no-negated-condition": 0,             // disallow negated conditions
    "no-nested-ternary": 0,                // disallow nested ternary expressions
    "no-new-object": 2,                    // disallow the use of the Object constructor
    "no-plusplus": 0,                      // disallow use of unary operators, ++ and --
    "no-restricted-syntax": 0,             // disallow use of certain syntax in code
	//"func-call-spacing": "error",
    "no-ternary": 0,                       // disallow the use of ternary operators
    "no-trailing-spaces": 2,               // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": 0,             // disallow dangling underscores in identifiers
    "no-unneeded-ternary": 2,              // disallow the use of ternary operators when a simpler alternative exists
    "no-whitespace-before-property": 2,    // disallow whitespace before properties
    "object-curly-newline": 0,             // enforce consistent line breaks inside braces
    "object-curly-spacing": 0,             // require or disallow padding inside curly braces
    "object-property-newline": 0,          // enforce placing object properties on separate lines
    "one-var": [2, "never"],               // require or disallow one variable declaration per function
    "one-var-declaration-per-line": 2,     // require or disallow an newline around variable declarations
    "operator-assignment": 0,              // require assignment operator shorthand where possible or prohibit it entirely
    //"operator-linebreak": [1, "before"],   // enforce operators to be placed before or after line breaks
    "padded-blocks": [2, "never"],         // enforce padding within blocks
    "quote-props": [2, "as-needed"],       // require quotes around object literal property names
    "quotes": [2, "single"],               // specify whether backticks, double or single quotes should be used
    "semi-spacing": 2,                     // enforce spacing before and after semicolons
    "sort-imports": 0,                     // sort import declarations within module
    //"semi": 2,                             // require or disallow use of semicolons instead of ASI
    "sort-vars": 0,                        // sort variables within the same declaration block
    "space-before-blocks": [2, "always"],              // require or disallow a space before blocks
    "space-before-function-paren": [
      2,
      "never"
    ],                                     // require or disallow a space before function opening parenthesis
    "space-in-parens": 2,                  // require or disallow spaces inside parentheses
    "space-infix-ops": 2,                  // require spaces around operators
    "space-unary-ops": 2,                  // require or disallow spaces before/after unary operators
    "spaced-comment": 0,                   // require or disallow a space immediately following the // or /* in a comment
    "unicode-bom": 0,                      // require or disallow the Unicode BOM
    "wrap-regex": 0,                       // require regex literals to be wrapped in parentheses
  },
};
