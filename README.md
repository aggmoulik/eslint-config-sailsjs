# eslint-config-sailsjs

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the SailsJS MVC Framework


## Installation

```
$ npm install --save-dev eslint eslint-config-sailsjs
```

## Usage

Once the `eslint-config-sailsjs` package is installed, you can use it by specifying `sailsjs` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "sailsjs",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License
MIT