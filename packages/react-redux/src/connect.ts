import { UnHOCPlugin } from '@unhoc/core';

export const unHOCConnect = (
  mockState?: { [key: string]: any },
  mockDispatch?: { [key: string]: any }
): UnHOCPlugin => (node, next) => {
  if (typeof node.type === 'function' && (node.type as any).WrappedComponent) {
    const unwrappedNode = Object.create(node, {
      type: {
        configurable: true,
        enumerable: true,
        value: (node.type as any).WrappedComponent,
      },
      props: {
        configurable: true,
        enumerable: true,
        value: {
          ...node.props,
          ...mockState,
          ...mockDispatch,
        },
      },
    });

    return next({ ...node, ...unwrappedNode });
  }

  return node;
};
