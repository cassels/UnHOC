import { UnHOCPlugin } from '@unhoc/core';
import * as React from 'react';
import jss, { StyleSheetFactoryOptions } from 'jss';

export const UnWithStyles = (
  styles: { [key: string]: any },
  options?: StyleSheetFactoryOptions
): UnHOCPlugin => (node, next) => {
  if (
    typeof node.type === 'object' &&
    (node.type as any).$$typeof === Symbol.for('react.forward_ref') &&
    (node.type as any).Naked
  ) {
    const sheet = jss.createStyleSheet(styles, {
      ...options,
    });
    const unwrappedNode = React.createElement((node.type as any).Naked, {
      classes: sheet.classes,
      ...node.props,
    });
    jss.removeStyleSheet(sheet);

    return next({ ...node, ...unwrappedNode });
  }

  return node;
};
