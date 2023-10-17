import {foundationSegmentedControl} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationSegmentedControl);

export const {{appName}}SegmentedControl = () => foundationSegmentedControl();

export {SegmentedControl} from '@genesislcap/foundation-ui';

export const defaultSegmentedControlConfig = defaultConfig;
export const {{appName}}SegmentedControlTemplate = template;
export const {{appName}}SegmentedControlStyles = styles;
export const {{appName}}SegmentedControlShadowOptions = shadowOptions;
