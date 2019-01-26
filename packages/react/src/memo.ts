import { UnHOCPlugin } from '@unhoc/core';

export const UnMemo = (): UnHOCPlugin => (node, next) => {
  if (
    typeof node.type === 'object' &&
    (node.type as any).$$typeof === Symbol.for('react.memo')
  ) {
    const unwrappedNode = Object.create(node, {
      type: {
        configurable: true,
        enumerable: true,
        value: (node.type as any).type,
      },
    });
    return next({ ...node, type: unwrappedNode.type });
  }

  return node;
};
