import createUnHOC from '@unhoc/core';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { createStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

// setupTests.js
Enzyme.configure({ adapter: new Adapter() });

// Component.ts
const styles = createStyles({
  root: {
    background: '#fff',
  },
});
const Component = withStyles(styles)((props: any) => (
  <div className={props.classes.root}>Hello, {props.name}!</div>
));

// Component.spec.ts
import { unHOCWithStyles } from '@unhoc/material-ui';

describe('React Example', () => {
  describe('memo', () => {
    // Create generateId so classNames are predictable.
    const generateId = rule => rule.key;

    // Create UnHOC function
    const unhoc = createUnHOC({
      plugins: [unHOCWithStyles(styles, { generateId })],
    });

    // Now we can unwrap our component like unhoc(<Component />); e.g.
    test('Hello, UnHOC', () => {
      const wrapper = Enzyme.shallow(unhoc(<Component name="UnHOC" />));
      expect(wrapper.props()).toHaveProperty('className', 'root');
      expect(wrapper.text()).toBe('Hello, UnHOC!');
    });
  });
});
