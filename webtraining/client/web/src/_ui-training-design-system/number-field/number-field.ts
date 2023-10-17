import {foundationNumberField} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationNumberField);

export const {{appName}}NumberField = () => foundationNumberField();

export {NumberField} from '@genesislcap/foundation-ui';

export const defaultNumberFieldConfig = defaultConfig;
export const {{appName}}NumberFieldTemplate = template;
export const {{appName}}NumberFieldStyles = styles;
export const {{appName}}NumberFieldShadowOptions = shadowOptions;
