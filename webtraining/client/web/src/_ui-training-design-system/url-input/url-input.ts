import {foundationUrlInput} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationUrlInput);

export const {{appName}}UrlInput = () => foundationUrlInput();

export {UrlInput} from '@genesislcap/foundation-ui';

export const defaultUrlInputConfig = defaultConfig;
export const {{appName}}UrlInputTemplate = template;
export const {{appName}}UrlInputStyles = styles;
export const {{appName}}UrlInputShadowOptions = shadowOptions;
