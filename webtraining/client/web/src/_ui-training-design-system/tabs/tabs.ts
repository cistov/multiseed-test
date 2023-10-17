import {foundationTabs} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTabs);

export const {{appName}}Tabs = () => foundationTabs();

export {Tabs} from '@genesislcap/foundation-ui';

export const defaultTabsConfig = defaultConfig;
export const {{appName}}TabsTemplate = template;
export const {{appName}}TabsStyles = styles;
export const {{appName}}TabsShadowOptions = shadowOptions;
