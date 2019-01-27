<h1 align="center">UnHOC Material UI</h1>

<div align="center">

<br>

**Un**wrap + **H**igher **O**rder **C**omponents  
_Effortlessly **Un**wrap React **HOC**s for simple unit testing._

<br>
<br>

**Unwrap `withStyles` from `@material-ui/styles`.**

<br>
</div>

`@unhoc/material-ui` is designed to work within the **U**n**HOC** ecosystem – see [UnHOC](https://github.com/cassels/unhoc) for more information.

## Installation

Npm

```
npm install @unhoc/core @unhoc/material-ui --save-dev
```

Yarn

```
yarn add @unhoc/core @unhoc/material-ui --dev
```

## Peer Dependencies

- `@unhoc/core`
- `jss` via `@material-ui/styles`

## Usage

1. Import `@unhoc/core` and `@unhoc/material-ui`.

```js
import createUnHOC from '@unhoc/core';
import { unHOCWithStyles } from '@unhoc/material-ui';
```

2. Initialize **U**n**HOC** function.

```javascript
const unhoc = createUnHOC({
  plugins: [unHOCWithStyles(mockStyles, options)],
});
```

3. Unwrap your React components for testing.

```javascript
const unwrapped = unhoc(<Component />);
```

### Example

We'll use the following React component as the component we wish to test. It's a very simple component that renders "Hello, [name]" where `name` is a prop passed in.

The component is then wrapped in Material UI's `withStyle` method before exporting.

```javascript
// Component.ts
const styles = createStyles({
  root: {
    background: '#fff',
  },
});

const Component = (props: any) => (
  <div className={props.classes.root}>Hello, {props.name}!</div>
);

export default withStyles(styles)(Component);
```

If we were to shallow render this component in a unit test we would actually be rendering the withStyles function and not the component itself.

Instead of trying to unwrap the component ourself, we can **U**n**HOC** the withStyles function resulting in our unwrapped Component.

```javascript
// Component.spec.js
import * as React from 'react';
import { shallow } from 'enzyme';
import createUnHOC from '@unhoc/core';
import { unHOCWithStyles } from '@unhoc/material-ui';

import Component './component';

// Create UnHOC function
const unhoc = createUnHOC({
  plugins: [unHOCWithStyles(styles)],
});

// Now we can unwrap our component like unhoc(<Component />); e.g.
test('Hello, UnHOC', () => {
  const wrapper = Enzyme.shallow(unhoc(<Component name="UnHOC" />));
  expect(wrapper.props()).toHaveProperty('className', 'root-1-0-1');
  expect(wrapper.text()).toBe('Hello, UnHOC!');
});
```

See [examples](./examples) for full test files.

## API

### `unHOCWithStyles(styles = {}, options?)`

Initializes an **U**n**HOC** plugin to unwrap the `withStyles` HOC from `@material-ui/styles`

| Param   | Type                                   |
| ------- | -------------------------------------- |
| styles  | `{ [key: string]: any }`               |
| options | `jss.StyleSheetFactoryOptions` (below) |

```typescript
// from jss
type StyleSheetFactoryOptions = {
  media?: string;
  meta?: string;
  index?: number;
  link?: boolean;
  element?: HTMLStyleElement;
  generateId?: GenerateId;
  classNamePrefix?: string;
};
```

## Development

This package is developed as part of the [UnHOC](https://github.com/cassels/unhoc) project. See [UnHOC Development](../../README.md#Development) for details.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/cassels/unhoc/tags).

## License

This package is part of the [UnHOC](https://github.com/cassels/unhoc) project and is therefore licensed under the MIT License – see the project [LICENSE](../../LICENSE) file for details.
