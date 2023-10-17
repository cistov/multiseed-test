import {foundationTreeItem} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTreeItem);

export const {{appName}}TreeItem = () => foundationTreeItem();

export {TreeItem} from '@genesislcap/foundation-ui';

export const defaultTreeItemConfig = defaultConfig;
export const {{appName}}TreeItemTemplate = template;
export const {{appName}}TreeItemStyles = styles;
export const {{appName}}TreeItemShadowOptions = shadowOptions;
