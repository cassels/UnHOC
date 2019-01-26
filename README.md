<h1 align="center">UnHOC</h1>

<div align="center">

[![](https://img.shields.io/travis/cassels/unhoc/master.svg)](https://travis-ci.org/cassels/UnHOC)
[![Contributors](https://img.shields.io/github/contributors/cassels/unhoc.svg?style=flat-square)](README.md#Contributors)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/github/license/cassels/unhoc.svg?style=flat-square)](LICENSE)

<br>

**Un**wrap + **H**igher **O**rder **C**omponents  
_Effortlessly **Un**wrap React **HOC**s for simple unit testing._

<br>

</div>

## Installation

<sub>_The following will not work as no packages have been published_</sub>

Npm

```
npm install --save-dev @unhoc/core [UnHOC Packages]
```

Yarn

```
yarn add --save-dev @unhoc/core [UnHOC Packages]
```

## Motivation

A [Higher-Order Component](https://reactjs.org/docs/higher-order-components.html) (HOC) is an incredibly popular design pattern within the React ecosystem useful for reusing common component logic. Many popular third-party libraries implement this pattern such as [Redux](https://github.com/reduxjs/redux), [React Router](https://github.com/ReactTraining/react-router), and [Material-UI](https://github.com/mui-org/material-ui).

A HOC is simply a function that takes one component and returns a new component with enhanced functionality.

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

<sub>**TODO**: Add documentation & examples</sub>

## Development

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

We use [Yarn](https://yarnpkg.com/lang/en/) package manager for development so please ensure you have yarn installed globally.

```
npm install yarn --global
```

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
  - [x] Implement
  - [x] Tests
  - [ ] Readme/Docs
  - [ ] Published
- [x] react-redux `connect`
  - [x] Implement
  - [x] Tests
  - [ ] Readme/Docs
  - [ ] Published
- [x] @material-ui/styles `withStyles`
  - [x] Implement
  - [x] Tests
  - [ ] Readme/Docs
  - [ ] Published
- [ ] react-router `withRouter`
  - [ ] Implement
  - [ ] Tests
  - [ ] Readme/Docs
  - [ ] Published

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

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/cassels/unhoc/tags).

## Contributors

- **Graeme Cassels** - _Initial work_ - [cassels](https://github.com/cassels)

## Contributing

We are actively encouraging contributions from the community – see [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details of our PR process and code of conduct.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
