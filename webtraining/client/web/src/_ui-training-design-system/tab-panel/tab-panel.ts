import {foundationTabPanel} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationTabPanel);

export const {{appName}}TabPanel = () => foundationTabPanel();

export {TabPanel} from '@genesislcap/foundation-ui';

export const defaultTabPanelConfig = defaultConfig;
export const {{appName}}TabPanelTemplate = template;
export const {{appName}}TabPanelStyles = styles;
export const {{appName}}TabPanelShadowOptions = shadowOptions;
