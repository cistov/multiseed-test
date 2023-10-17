import {foundationFlipper} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationFlipper);

export const {{appName}}Flipper = () => foundationFlipper();

export {Flipper} from '@genesislcap/foundation-ui';

export const defaultFlipperConfig = defaultConfig;
export const {{appName}}FlipperTemplate = template;
export const {{appName}}FlipperStyles = styles;
export const {{appName}}FlipperShadowOptions = shadowOptions;
