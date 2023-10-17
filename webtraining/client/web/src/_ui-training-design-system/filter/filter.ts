import {foundationFilter} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationFilter);

export const {{appName}}Filter = () => foundationFilter();

export {Filter} from '@genesislcap/foundation-ui';

export const defaultFilterConfig = defaultConfig;
export const {{appName}}FilterTemplate = template;
export const {{appName}}FilterStyles = styles;
export const {{appName}}FilterShadowOptions = shadowOptions;
