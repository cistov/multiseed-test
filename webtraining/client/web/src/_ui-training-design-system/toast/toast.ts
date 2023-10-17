import {foundationToast} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationToast);

export const {{appName}}Toast = () => foundationToast();

export {Toast} from '@genesislcap/foundation-ui';

export const defaultToastConfig = defaultConfig;
export const {{appName}}ToastTemplate = template;
export const {{appName}}ToastStyles = styles;
export const {{appName}}ToastShadowOptions = shadowOptions;
