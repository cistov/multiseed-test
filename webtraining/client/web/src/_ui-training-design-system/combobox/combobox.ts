import {foundationCombobox} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationCombobox);

export const {{appName}}Combobox = () => foundationCombobox();

export {Combobox} from '@genesislcap/foundation-ui';

export const defaultComboboxConfig = defaultConfig;
export const {{appName}}ComboboxTemplate = template;
export const {{appName}}ComboboxStyles = styles;
export const {{appName}}ComboboxShadowOptions = shadowOptions;
