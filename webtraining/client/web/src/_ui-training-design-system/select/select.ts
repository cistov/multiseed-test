import {foundationSelect} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationSelect);

export const {{appName}}Select = () => foundationSelect();

export {Select} from '@genesislcap/foundation-ui';

export const defaultSelectConfig = defaultConfig;
export const {{appName}}SelectTemplate = template;
export const {{appName}}SelectStyles = styles;
export const {{appName}}SelectShadowOptions = shadowOptions;
