import createUnHOC from '@unhoc/core';
import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
  comp: string;
}
const Component: React.FunctionComponent<
  Props &
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>
> = () => <div />;
const mapStateToProps = () => ({ state: 'state' });
const mapDispatchToProps = () => ({ dispatch: 'dispatch' });
const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

import { unHOCConnect } from './index';

describe('react-redux', () => {
  describe('connect', () => {
    test('use without error', () => {
      expect(() => {
        createUnHOC({
          plugins: [unHOCConnect()],
        })(<ConnectedComponent comp="comp" />);
      }).not.toThrow();
    });

    test('unwrap with props', () => {
      const unhoc = createUnHOC({
        plugins: [unHOCConnect({ state: 'state' }, { dispatch: 'dispatch' })],
      });
      expect(unhoc(<ConnectedComponent comp="comp" />)).toEqual(
        <Component comp="comp" state="state" dispatch="dispatch" />
      );
    });
  });
});
