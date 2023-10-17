import {foundationTextArea} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTextArea);

export const {{appName}}TextArea = () => foundationTextArea();

export {TextArea} from '@genesislcap/foundation-ui';

export const defaultTextAreaConfig = defaultConfig;
export const {{appName}}TextAreaTemplate = template;
export const {{appName}}TextAreaStyles = styles;
export const {{appName}}TextAreaShadowOptions = shadowOptions;
