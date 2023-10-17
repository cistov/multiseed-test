import {foundationDialog} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationDialog);

export const {{appName}}Dialog = () => foundationDialog();

export {Dialog} from '@genesislcap/foundation-ui';

export const defaultDialogConfig = defaultConfig;
export const {{appName}}DialogTemplate = template;
export const {{appName}}DialogStyles = styles;
export const {{appName}}DialogShadowOptions = shadowOptions;
