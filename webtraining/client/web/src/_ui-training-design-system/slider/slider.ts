import {foundationSlider} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationSlider);

export const {{appName}}Slider = () => foundationSlider();

export {Slider} from '@genesislcap/foundation-ui';

export const defaultSliderConfig = defaultConfig;
export const {{appName}}SliderTemplate = template;
export const {{appName}}SliderStyles = styles;
export const {{appName}}SliderShadowOptions = shadowOptions;
