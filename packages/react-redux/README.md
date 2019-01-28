<h1 align="center">UnHOC React Redux</h1>

<div align="center">

<br>

**Un**wrap + **H**igher **O**rder **C**omponents  
_Effortlessly **Un**wrap React **HOC**s for simple unit testing._

<br>
<br>

**Unwrap `connect` from `react-redux`.**

<br>
</div>

`@unhoc/react-redux` is designed to work within the **U**n**HOC** ecosystem – see [UnHOC](https://github.com/cassels/unhoc) for more information.

## Installation

Npm

```
npm install @unhoc/core @unhoc/react-redux --save-dev
```

Yarn

```
yarn add @unhoc/core @unhoc/react-redux --dev
```

## Peer Dependencies

- `@unhoc/core`

## Usage

1. Import `@unhoc/core` and `@unhoc/react-redux`.

```js
import createUnHOC from '@unhoc/core';
import { unHOCConnect } from '@unhoc/react-redux';
```

2. Initialize **U**n**HOC** function.

```javascript
const unhoc = createUnHOC({
  plugins: [unHOCConnect(mockState, mockDispatch)],
});
```

3. Unwrap your React components for testing.

```javascript
const unwrapped = unhoc(<Component />);
```

### Example

We'll use the following React component as the component we wish to test. It's a very simple component that renders "Hello, [name]" where `name` is part of the Redux state.

The component is then wrapped with `connect` from `react-redux` before exporting.

```javascript
// Component.ts
const mapStateToProps = state => ({ name: state.name });

const Component = connect(mapStateToProps)((props: any) => (
  <div>Hello, {props.name}!</div>
));

export default connect(mapStateToProps)(Component);
```

If we were to shallow render this component in a unit test we would actually be rendering the connect function and not the component itself.

Instead of trying to unwrap the component ourself, we can **U**n**HOC** the connect function resulting in our unwrapped Component.

```javascript
// Component.spec.js
import * as React from 'react';
import { shallow } from 'enzyme';
import createUnHOC from '@unhoc/core';
import { unHOCConnect } from '@unhoc/react-redux';

import Component './component';

// Create UnHOC function
const unhoc = createUnHOC({
  plugins: [unHOCConnect({ name: 'UnHOC' })],
});

// Now we can unwrap our component like unhoc(<Component />); e.g.
test('Hello, UnHOC', () => {
  const wrapper = Enzyme.shallow(unhoc(<Component />));
  expect(wrapper.text()).toBe('Hello, UnHOC!');
});
```

See [examples](./examples) for full test files.

## API

### `unHOCConnect(mockState?, mockDispatch?)`

Initializes an **U**n**HOC** plugin to unwrap the `connect` HOC from `react-redux`.

| Param        | Type                     |
| ------------ | ------------------------ |
| mockState    | `{ [key: string]: any }` |
| mockDispatch | `{ [key: string]: any }` |

## Development

This package is developed as part of the [UnHOC](https://github.com/cassels/unhoc) project. See [UnHOC Development](../../README.md#Development) for details.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/cassels/unhoc/tags).

## License

This package is part of the [UnHOC](https://github.com/cassels/unhoc) project and is therefore licensed under the MIT License – see the project [LICENSE](../../LICENSE) file for details.
