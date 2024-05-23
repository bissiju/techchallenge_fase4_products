import type { Config } from "jest";
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';
const config: Config = {
  verbose: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/", "/docs/"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/docs/"],
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
  reporters: [
    "default",
    ["jest-html-reporters", {
      publicPath: "./html-report",
      filename: "report.html",
      expand: true
    }]
  ]
};

export default config;

