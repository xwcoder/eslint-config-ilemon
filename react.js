const { OFF, WARN, ERROR } = require('./constants')

module.exports = {
  extends: [
    'airbnb',
    './index.js'
  ],
  rules: {
    'react/prop-types': [OFF],
    'jsx-a11y/click-events-have-key-events': [OFF],
  }
}
