# eslint-config-ilemon

An ESLint Shareable Config.

## Install

```bash
npm i eslint-config-ilemon -D
```

## Useage

Install peerDependencies:
```bash
npm i eslint babel-eslint eslint-plugin-import eslint-plugin-jest eslint-plugin-sonarjs  -D
```

If you use it in react project, then install additional  peerDependencies:
```bash
npm i eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-airbnb -D
```

Then, add this to your `.eslintrc.js` file:
```javascript
module.exports = {
  extends: ['ilemon']
}
```
```javascript
// react project
module.exports = {
  extends: ['ilemon/react']
}
```
