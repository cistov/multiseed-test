import {foundationSegmentedItem} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationSegmentedItem);

export const {{appName}}SegmentedItem = () => foundationSegmentedItem();

export {SegmentedItem} from '@genesislcap/foundation-ui';

export const defaultSegmentedItemConfig = defaultConfig;
export const {{appName}}SegmentedItemTemplate = template;
export const {{appName}}SegmentedItemStyles = styles;
export const {{appName}}SegmentedItemShadowOptions = shadowOptions;
