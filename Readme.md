#Create react-native application with typescript

react-native init <project_name> --template typescript

#Adding TypeScript

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

#Migrating to TypeScript

App.tsx and modify the import at the top of the file:

-import React, { Component } from 'react';
+import React from 'react'
+import { Component } from 'react';


#Adding TypeScript Testing Infrastructure

 npm i --save-dev ts-jest

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

#Installing Dependency Type Declarations

npm i --save-dev @types/jest @types/react @types/react-native @types/react-test-renderer



