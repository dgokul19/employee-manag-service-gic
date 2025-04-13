
module.exports = {
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest", // Tells Jest to use babel-jest for transforming JSX and JavaScript
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Use jest-dom for better assertions
    testEnvironment: 'jsdom', // Use jsdom to simulate the browser environment
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore node_modules and dist during tests
    transformIgnorePatterns: ['/node_modules/'], // Ignore node_modules in the transformation
};
