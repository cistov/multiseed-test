import {foundationIcon} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationIcon);

export const {{appName}}Icon = () => foundationIcon();

export {Icon} from '@genesislcap/foundation-ui';

export const defaultIconConfig = defaultConfig;
export const {{appName}}IconTemplate = template;
export const {{appName}}IconStyles = styles;
export const {{appName}}IconShadowOptions = shadowOptions;
