import {foundationTreeView} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTreeView);

export const {{appName}}TreeView = () => foundationTreeView();

export {TreeView} from '@genesislcap/foundation-ui';

export const defaultTreeViewConfig = defaultConfig;
export const {{appName}}TreeViewTemplate = template;
export const {{appName}}TreeViewStyles = styles;
export const {{appName}}TreeViewShadowOptions = shadowOptions;
