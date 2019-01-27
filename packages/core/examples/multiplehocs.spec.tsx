import createUnHOC from '@unhoc/core';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { createStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

const STATE = { name: 'UnHOC' };

// setupTests.js
Enzyme.configure({ adapter: new Adapter() });

// Component.ts
const styles = createStyles({
  root: {
    background: '#fff',
  },
});

const mapStateToProps = () => STATE;

const Component = connect(mapStateToProps)(
  withStyles(styles)((props: any) => (
    <div className={props.classes.root}>Hello, {props.name}!</div>
  ))
);

// Component.spec.ts
import { unHOCWithStyles } from '@unhoc/material-ui';
import { unHOCConnect } from '@unhoc/react-redux';

describe('React Example', () => {
  describe('memo', () => {
    // Create generateId so classNames are predictable.
    const generateId = rule => rule.key;

    // Create UnHOC function
    const unhoc = createUnHOC({
      plugins: [unHOCWithStyles(styles, { generateId }), unHOCConnect(STATE)],
    });

    // Now we can unwrap our component like unhoc(<Component />); e.g.
    test('Hello, UnHOC', () => {
      const wrapper = Enzyme.shallow(unhoc(<Component />));
      expect(wrapper.props()).toHaveProperty('className', 'root');
      expect(wrapper.text()).toBe('Hello, UnHOC!');
    });
  });
});
