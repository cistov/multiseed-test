import {foundationRadio} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationRadio);

export const {{appName}}Radio = () => foundationRadio();

export {Radio} from '@genesislcap/foundation-ui';

export const defaultRadioConfig = defaultConfig;
export const {{appName}}RadioTemplate = template;
export const {{appName}}RadioStyles = styles;
export const {{appName}}RadioShadowOptions = shadowOptions;
