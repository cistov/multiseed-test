import {fastHorizontalScroll} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastHorizontalScroll);

export const {{appName}}HorizontalScroll = () => fastHorizontalScroll();

export {HorizontalScroll} from '@microsoft/fast-components';

export const defaultHorizontalScrollConfig = defaultConfig;
export const {{appName}}HorizontalScrollTemplate = template;
export const {{appName}}HorizontalScrollStyles = styles;
export const {{appName}}HorizontalScrollShadowOptions = shadowOptions;
