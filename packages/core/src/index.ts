export type UnHOCPlugin = (
  node: React.ReactElement<any>,
  next: UnHOCNext
) => React.ReactElement<any>;

export type UnHOCNext = (
  node: React.ReactElement<any>
) => React.ReactElement<any>;

export interface UnHOCConfig {
  plugins: UnHOCPlugin[];
}

export default function createUnHOC(config: UnHOCConfig): UnHOCNext {
  const next: UnHOCNext = node =>
    config.plugins.reduce((el, plugin) => plugin(el, next), node);

  return next;
}
