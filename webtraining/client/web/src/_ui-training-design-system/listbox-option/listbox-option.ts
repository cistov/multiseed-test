import {foundationListboxOption} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationListboxOption);

export const {{appName}}ListboxOption = () => foundationListboxOption();

export {ListboxOption} from '@genesislcap/foundation-ui';

export const defaultListboxOptionConfig = defaultConfig;
export const {{appName}}ListboxOptionTemplate = template;
export const {{appName}}ListboxOptionStyles = styles;
export const {{appName}}ListboxOptionShadowOptions = shadowOptions;
