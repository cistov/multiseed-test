import {fastPicker} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastPicker);

export const {{appName}}Picker = () => fastPicker();

export {Picker} from '@microsoft/fast-components';

export const defaultPickerConfig = defaultConfig;
export const {{appName}}PickerTemplate = template;
export const {{appName}}PickerStyles = styles;
export const {{appName}}PickerShadowOptions = shadowOptions;
