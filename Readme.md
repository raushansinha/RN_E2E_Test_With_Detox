# Create react-native application with typescript

react-native init <project_name> --template typescript

# Adding TypeScript

npm i --save-dev typescript
npm i --save-dev react-native-typescript-transformer
npm i tsc --init --pretty --jsx react
cretae rn-cli.config.js
npm i --save-dev  @types/react @types/react-native

#The tsconfig.json file contains all the settings for the TypeScript compiler. The defaults created by the command above are mostly fine, but open the file and uncomment the following line:

{
  /* Search the config file for the following line and uncomment it. */
  // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
}

#The rn-cli.config.js contains the settings for the React Native TypeScript Transformer. Open it and add the following:

module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
};

# Migrating to TypeScript

App.tsx and modify the import at the top of the file:

-import React, { Component } from 'react';
+import React from 'react'
+import { Component } from 'react';


# Adding TypeScript Testing Infrastructure

 npm i --save-dev ts-jest

#Install dependencies
npm install --save-dev jest babel-jest jest-react-native babel-preset-react-native react-test-renderer
npm install --save prop-types
#Then, we'll open up our package.json and replace the jest field with the following:

{
  "jest": {
    "preset": "react-native",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "transform": {
      "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
      "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "testPathIgnorePatterns": [
      "\\.snap$",
      "<rootDir>/node_modules/"
    ],
    "cacheDirectory": ".jest/cache"
  }
}

# Installing Dependency Type Declarations

npm i --save-dev @types/jest @types/react @types/react-native @types/react-test-renderer

# Adding a Component
#Create a components directory 

# Adding a Component Test

#We already have Jest installed as a test runner. We're going to write snapshot tests for our components, let's add the required add-on for snapshot tests:
npm i --save-dev react-addons-test-utils

#The first time the test is run, it will create a snapshot of the rendered component and store it in the components/__tests__/__snapshots__/Hello.tsx.snap file. When you modify your component, you'll need to update the snapshots and review the update for inadvertent changes. You can read more about testing React Native components
https://jestjs.io/docs/en/tutorial-react-native.html
