import {fastListbox} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastListbox);

export const {{appName}}Listbox = () => fastListbox();

export {Listbox} from '@microsoft/fast-components';

export const defaultListboxConfig = defaultConfig;
export const {{appName}}ListboxTemplate = template;
export const {{appName}}ListboxStyles = styles;
export const {{appName}}ListboxShadowOptions = shadowOptions;
