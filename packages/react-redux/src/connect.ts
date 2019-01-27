import { UnHOCPlugin } from '@unhoc/core';

export const unHOCConnect = (
  mockStateToProps?: { [key: string]: any },
  mockDispatchToProps?: { [key: string]: any }
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
          ...mockStateToProps,
          ...mockDispatchToProps,
        },
      },
    });

    return next({ ...node, ...unwrappedNode });
  }

  return node;
};
