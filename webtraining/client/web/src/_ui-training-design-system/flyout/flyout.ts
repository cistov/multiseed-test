import {foundationFlyout} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationFlyout);

export const {{appName}}Flyout = () => foundationFlyout();

export {Flyout} from '@genesislcap/foundation-ui';

export const defaultFlyoutConfig = defaultConfig;
export const {{appName}}FlyoutTemplate = template;
export const {{appName}}FlyoutStyles = styles;
export const {{appName}}FlyoutShadowOptions = shadowOptions;
