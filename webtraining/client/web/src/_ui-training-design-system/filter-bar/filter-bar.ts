import {foundationFilterBar} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationFilterBar);

export const {{appName}}FilterBar = () => foundationFilterBar();

export {FilterBar} from '@genesislcap/foundation-ui';

export const defaultFilterBarConfig = defaultConfig;
export const {{appName}}FilterBarTemplate = template;
export const {{appName}}FilterBarStyles = styles;
export const {{appName}}FilterBarShadowOptions = shadowOptions;
