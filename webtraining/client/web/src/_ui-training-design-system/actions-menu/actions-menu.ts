import {foundationActionsMenu} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationActionsMenu);

export const {{appName}}ActionsMenu = () => foundationActionsMenu();

export {ActionsMenu} from '@genesislcap/foundation-ui';

export const defaultActionsMenuConfig = defaultConfig;
export const {{appName}}ActionsMenuTemplate = template;
export const {{appName}}ActionsMenuStyles = styles;
export const {{appName}}ActionsMenuShadowOptions = shadowOptions;
