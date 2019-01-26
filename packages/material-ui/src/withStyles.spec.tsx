import createUnHOC from '@unhoc/core';
import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/styles';

const options = {
  generateId: rule => rule.key,
};

const styles = {
  styles: {
    background: '#fff',
  },
};

interface Props {
  comp: string;
}
const Component: React.FunctionComponent<
  Props & WithStyles<typeof styles>
> = () => <div />;
const WithStylesComponent = withStyles(styles)(Component);

import { UnWithStyles } from './index';

describe('material-ui', () => {
  describe('withStyles', () => {
    test('use without error', () => {
      expect(() => {
        createUnHOC({
          plugins: [UnWithStyles(styles, options)],
        })(<WithStylesComponent comp="comp" />);
      }).not.toThrow();
    });

    test('unwrap with props', () => {
      const unhoc = createUnHOC({
        plugins: [UnWithStyles(styles, options)],
      });
      expect(unhoc(<WithStylesComponent comp="comp" />)).toEqual(
        <Component comp="comp" classes={{ styles: 'styles' }} />
      );
    });

    test('unwrap with props', () => {
      const unhoc = createUnHOC({
        plugins: [UnWithStyles(styles, options)],
      });
      expect(unhoc(<WithStylesComponent comp="comp" />)).toEqual(
        <Component comp="comp" classes={{ styles: 'styles' }} />
      );
    });
  });
});
