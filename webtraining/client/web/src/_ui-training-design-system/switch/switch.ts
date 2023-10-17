import {foundationSwitch} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationSwitch);

export const {{appName}}Switch = () => foundationSwitch();

export {Switch} from '@genesislcap/foundation-ui';

export const defaultSwitchConfig = defaultConfig;
export const {{appName}}SwitchTemplate = template;
export const {{appName}}SwitchStyles = styles;
export const {{appName}}SwitchShadowOptions = shadowOptions;
