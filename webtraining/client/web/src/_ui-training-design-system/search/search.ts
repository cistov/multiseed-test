import {fastSearch} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastSearch);

export const {{appName}}Search = () => fastSearch();

export {Search} from '@microsoft/fast-components';

export const defaultSearchConfig = defaultConfig;
export const {{appName}}SearchTemplate = template;
export const {{appName}}SearchStyles = styles;
export const {{appName}}SearchShadowOptions = shadowOptions;
