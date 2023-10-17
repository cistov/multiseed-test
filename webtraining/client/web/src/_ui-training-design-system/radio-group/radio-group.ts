import {foundationRadioGroup} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationRadioGroup);

export const {{appName}}RadioGroup = () => foundationRadioGroup();

export {RadioGroup} from '@genesislcap/foundation-ui';

export const defaultRadioGroupConfig = defaultConfig;
export const {{appName}}RadioGroupTemplate = template;
export const {{appName}}RadioGroupStyles = styles;
export const {{appName}}RadioGroupShadowOptions = shadowOptions;
