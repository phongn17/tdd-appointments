- Bringing in React and Babel (Javascript XML (JSX) -> needs Babel to transpile. Babel also transpiles our modern ES6 and ES7 constructs for us)
npm install --save react react-dom

- Thankfully, Jest already includes Babel, so we just need to install presets and plugins:
npm install --save-dev @babel/preset-env @babel/preset-react
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime