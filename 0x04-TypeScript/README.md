# 0x03. ES6 data manipulation
## The Domains/Concepts covered in this project: `JavaScript` `TypeScript`

The project introduced me to Typescript

**Configuration files**

## 1. package.json

```
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
```

## 2. .eslintrc.js

```
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
```

## 3. tsconfig.json

```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
        "skipLibCheck": true
  }
}
```

## 4. webpack.config.js

```
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

## Tasks :page_with_curl:

**0. Creating an interface for a student**

Copy the following configuration files (provided above) into the `task_0` directory: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`

Write your code in the `main.ts` file:

  * Write an interface named Student that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`
  * Create two students, and create an array named `studentsList` containing the two variables
  * Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
  * Each row should contain the first name of the student and the location
Requirements:

  * When running, Webpack should return `No type errors found`.
  * Every variable should use TypeScript when possible.

  * [task_0/js/main.ts](./task_0/js/main.ts)
  * [task_0/package.json](./task_0/package.json)
  * [task_0/.eslintrc.js](./task_0/.eslintrc.js)
  * [task_0/tsconfig.json](./task_0/tsconfig.json)
  * [task_0/webpack.config.js](./task_0/webpack.config.js)

**1. Let's build a Teacher interface**

Create a directory `task_1` and copy these configuration files into this folder: `package.json`, `tsconfig.json`, `webpack.config.js`

  * `firstName(string)` and `lastName(string)`. These two attributes should only be modifiable when a Teacher is first initialized
  * `fullTimeEmployee(boolean)` this attribute should always be defined
  * `yearsOfExperience(number)` this attribute is optional
  * `location(string)` this attribute should always be defined
  * Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute

Example:

```
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
```

  * [task_1/js/main.ts](./task_1/js/main.ts)
  * [task_1/webpack.config.js](./task_1/webpack.config.js)
  * [task_1/tsconfig.json](./task_1/tsconfig.json)
  * [task_1/package.json](./task_1/package.json)
