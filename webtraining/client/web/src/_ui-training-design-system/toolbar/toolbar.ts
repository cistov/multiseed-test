import {foundationToolbar} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationToolbar);

export const {{appName}}Toolbar = () => foundationToolbar();

export {Toolbar} from '@genesislcap/foundation-ui';

export const defaultToolbarConfig = defaultConfig;
export const {{appName}}ToolbarTemplate = template;
export const {{appName}}ToolbarStyles = styles;
export const {{appName}}ToolbarShadowOptions = shadowOptions;
