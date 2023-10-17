import {fastSliderLabel} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastSliderLabel);

export const {{appName}}SliderLabel = () => fastSliderLabel();

export {SliderLabel} from '@microsoft/fast-components';

export const defaultSliderLabelConfig = defaultConfig;
export const {{appName}}SliderLabelTemplate = template;
export const {{appName}}SliderLabelStyles = styles;
export const {{appName}}SliderLabelShadowOptions = shadowOptions;
