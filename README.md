<h1 align="center">UnHOC</h1>

<div align="center">

**Un**wrap + **H**igher **O**rder **C**omponents  
_Effortlessly **Un**wrap React **HOC**s for simple unit testing._

---

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![](https://img.shields.io/github/contributors/cassels/unhoc.svg?style=flat-square)

</div>

## Installation

Npm

```
npm install --save-dev @unhoc/core [UnHOC Packages]
```

Yarn

```
yarn add --save-dev @unhoc/core [UnHOC Packages]
```

## Motivation

A [Higher-Order Component](https://reactjs.org/docs/higher-order-components.html) (HOCs) is an incredibly popular design pattern within the React ecosystem useful for reusing common component logic. Many popular third-party libraries implement this pattern such as [Redux](https://github.com/reduxjs/redux), [React Router](https://github.com/ReactTraining/react-router), and [Material-UI](https://github.com/mui-org/material-ui).

A HOCs is simply a function that takes one component and returns a new component with enhanced functionality.

```js
export default hoc(WrappedComponent);
```

When developing components, HOCs are wonderfully simple and extremely powerful, but testing those components can cause many developers headaches as they attempt to circumvent the HOC. Common techniques to do so are:

1. Manually unwrap third-party HOCs.
2. Manually mock third-party HOCs.
3. Manually export the wrapped, and unwrapped version of the component.

All of these solutions are far from perfect and that's where **U**n**HOC** comes in!

## Getting Started

**U**n**HOC** is an extensible utility library for automatically unwrapping each HOC and allowing you to test with the original component.

Take this connected Redux example:

```js
// Component.js

const Component = ({ title }) => {
  return <div>{title}</div>;
};

const mapStateToProps = state => {
  return {
    title: state.title,
  };
};

export default connect(mapStateToProps)(Component);
```

<!-- TODO -->

```js
// Component.spec.js

import unhoc from '@unhoc/common';
import { shallow } from 'enzyme';
import Component from './Component.js';

test('Test Component', () => {
  const wrapper = shallow(unhoc(<Component />));
  ...
});
```

## Development

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Clone this repository

```
git clone git@github.com:cassels/UnHOC.git
```

### Dev Environment

Install Dependencies via Yarn

```
yarn
```

### Unit Tests

Run tests with Yarn

```
yarn test
```

### Prettier & Linter

To format and lint code with Prettier and TSLint

```
yarn lint
```

## Roadmap

### Core

- [x] Implement Core
- [ ] Unit Testing
- [ ] Improve Efficiency

### Plugins

- [x] react `memo`
- [x] react-redux `connect`
- [x] @material-ui/styles `withStyles`
- [ ] react-router `withRouter`

### Integrations

- [ ] enzyme

### TODOs

- [ ] Documentation
  - [x] Motivation
  - [x] Installation
  - [ ] Getting Started
  - [ ] Developing a Plugin
- [ ] Development
  - [x] Add LICENSE
  - [x] CONTRIBUTING
  - [x] CODE_OF_CONDUCT
  - [x] Add Lerna
  - [x] Add Git Hooks
  - [ ] Add CI/CD

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Contributors

- **Graeme Cassels** - _Initial work_ - [cassels](https://github.com/cassels)

## Contributing

We are actively encouraging contributions from the community – see the [CONTRIBUTING.md](CONTRIBUTING.md) file for details on the process for submitting pull requests, and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
