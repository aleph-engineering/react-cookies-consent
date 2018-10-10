# @cuban-engineer/react-cookies-consent

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)   [![code linting: eslint](https://img.shields.io/badge/lint-eslint-blue.svg)](https://github.com/eslint/eslint)  [![code quality: jest](https://img.shields.io/badge/test-jest-ff69b4.svg)](https://facebook.github.io/jest/) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

> React component for the managing the user awareness regarding cookies usage

## Install

```bash
npm install --save @cuban-engineer/react-cookies-consent
```

or

```bash
yarn add @cuban-engineer/react-cookies-consent
```

## Usage

```jsx
import React, { Component } from 'react'

import CookiesConsent from '@cuban-engineer/react-cookies-consent'

class Example extends Component {
  render () {
    return (
      <CookiesConsent />
    )
  }
}
```

## Available props

* `message` (Default value: 'Cookies help us deliver our services. By using our services, you agree to our use of cookies.')
* `buttonMessage` (Default value: 'OK')

## License

MIT © [ing the application use of cookies](https://github.com/ing the application use of cookies)