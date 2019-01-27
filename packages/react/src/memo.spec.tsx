import createUnHOC from '@unhoc/core';
import * as React from 'react';

const Component: React.FunctionComponent<{ a?: string }> = () => <div />;
const MemoComponent = React.memo(Component);

import { unHOCMemo } from './index';

describe('React', () => {
  describe('memo', () => {
    test('use without error', () => {
      expect(() => {
        createUnHOC({
          plugins: [unHOCMemo()],
        })(<MemoComponent />);
      }).not.toThrow();
    });

    test('unwrap naked', () => {
      const unhoc = createUnHOC({
        plugins: [unHOCMemo()],
      });
      expect(unhoc(<MemoComponent />)).toEqual(<Component />);
    });

    test('unwrap with props', () => {
      const unhoc = createUnHOC({
        plugins: [unHOCMemo()],
      });
      expect(unhoc(<MemoComponent a={'b'} />)).toEqual(<Component a={'b'} />);
      expect(unhoc(<MemoComponent a={'b'} />)).not.toEqual(
        <Component a={'a'} />
      );
    });
  });
});
