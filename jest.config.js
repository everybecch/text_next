module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      "^.+\\.(t|j)sx?$": ["ts-jest", { tsconfig: "./tsconfig.test.json" }],
    },
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy"
      },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    testEnvironment: 'jsdom',
  };