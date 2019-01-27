import createUnHOC from '@unhoc/core';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

// setupTests.js
Enzyme.configure({ adapter: new Adapter() });

// Component.ts
const Component = React.memo((props: any) => <div>Hello, {props.name}!</div>);

// Component.spec.ts
import { unHOCMemo } from '@unhoc/react';

describe('React Example', () => {
  describe('memo', () => {
    // Create UnHOC function
    const unhoc = createUnHOC({
      plugins: [unHOCMemo()],
    });

    // Now we can unwrap our component like unhoc(<Component />); e.g.
    test('Hello, UnHOC', () => {
      const wrapper = Enzyme.shallow(unhoc(<Component name="UnHOC" />));
      expect(wrapper.text()).toBe('Hello, UnHOC!');
    });
  });
});
