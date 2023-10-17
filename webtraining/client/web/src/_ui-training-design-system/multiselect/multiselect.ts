import {foundationMultiselect} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationMultiselect);

export const {{appName}}Multiselect = () => foundationMultiselect();

export {Multiselect} from '@genesislcap/foundation-ui';

export const defaultMultiselectConfig = defaultConfig;
export const {{appName}}MultiselectTemplate = template;
export const {{appName}}MultiselectStyles = styles;
export const {{appName}}MultiselectShadowOptions = shadowOptions;
