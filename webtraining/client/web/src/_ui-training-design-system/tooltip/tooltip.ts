import {foundationTooltip} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTooltip);

export const {{appName}}Tooltip = () => foundationTooltip();

export {Tooltip} from '@genesislcap/foundation-ui';

export const defaultTooltipConfig = defaultConfig;
export const {{appName}}TooltipTemplate = template;
export const {{appName}}TooltipStyles = styles;
export const {{appName}}TooltipShadowOptions = shadowOptions;
