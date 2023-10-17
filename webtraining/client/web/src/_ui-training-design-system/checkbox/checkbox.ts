import {foundationCheckbox} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationCheckbox);

export const {{appName}}Checkbox = () => foundationCheckbox();

export {Checkbox} from '@genesislcap/foundation-ui';

export const defaultCheckboxConfig = defaultConfig;
export const {{appName}}CheckboxTemplate = template;
export const {{appName}}CheckboxStyles = styles;
export const {{appName}}CheckboxShadowOptions = shadowOptions;
