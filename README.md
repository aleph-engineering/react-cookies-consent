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

* `cookiesId` Value with which the cookie will be save in the browser: (Type: `String`, Default value: 'cookies-consent')
* `message` Message that will be show to the user: (Type `String`, Default value: 'Cookies help us deliver our services. By using our services, you agree to our use of cookies.')
* `buttonMessage` Text of the submit action button: (Type: `String`, Default value: 'OK')
* `expiresIn` Time needed for the cookie to expire: (Type: `Number`, Default value: 365)

## Styling
 
 By default the rendered component will be fixed at the bottom and will look like this:
 
 But the styles can be modified by overriding this `css` classes:
 1. `.cookies-consent`: Entire Component container.
 2. `.cookies-consent-text`: Container of the message showed to the user.
 3. `.cookies-consent-button` Container of the Button for accepting the use of cookies.  

## License

MIT © [ing the application use of cookies](https://github.com/ing the application use of cookies)
