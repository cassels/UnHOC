import createUnHOC from '@unhoc/core';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { connect } from 'react-redux';

const STATE = { name: 'UnHOC' };

// setupTests.js
Enzyme.configure({ adapter: new Adapter() });

// Component.ts
const mapStateToProps = () => STATE;

const Component = connect(mapStateToProps)((props: any) => (
  <div>Hello, {props.name}!</div>
));

// Component.spec.ts
import { unHOCConnect } from '@unhoc/react-redux';

describe('React Example', () => {
  describe('memo', () => {
    // Create UnHOC function
    const unhoc = createUnHOC({
      plugins: [unHOCConnect(STATE)],
    });

    // Now we can unwrap our component like unhoc(<Component />); e.g.
    test('Hello, UnHOC', () => {
      const wrapper = Enzyme.shallow(unhoc(<Component />));
      expect(wrapper.text()).toBe('Hello, UnHOC!');
    });
  });
});
