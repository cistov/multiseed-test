import {foundationDatePicker} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationDatePicker);

export const {{appName}}DatePicker = () => foundationDatePicker();

export {DatePicker} from '@genesislcap/foundation-ui';

export const defaultDatePickerConfig = defaultConfig;
export const {{appName}}DatePickerTemplate = template;
export const {{appName}}DatePickerStyles = styles;
export const {{appName}}DatePickerShadowOptions = shadowOptions;
