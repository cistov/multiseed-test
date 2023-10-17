import {foundationTab} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTab);

export const {{appName}}Tab = () => foundationTab();

export {Tab} from '@genesislcap/foundation-ui';

export const defaultTabConfig = defaultConfig;
export const {{appName}}TabTemplate = template;
export const {{appName}}TabStyles = styles;
export const {{appName}}TabShadowOptions = shadowOptions;
