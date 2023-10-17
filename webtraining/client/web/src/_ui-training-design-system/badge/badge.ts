import {foundationBadge} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationBadge);

export const {{appName}}Badge = () => foundationBadge();

export {Badge} from '@genesislcap/foundation-ui';

export const defaultBadgeConfig = defaultConfig;
export const {{appName}}BadgeTemplate = template;
export const {{appName}}BadgeStyles = styles;
export const {{appName}}BadgeShadowOptions = shadowOptions;
