import {foundationDivider} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationDivider);

export const {{appName}}Divider = () => foundationDivider();

export {Divider} from '@genesislcap/foundation-ui';

export const defaultDividerConfig = defaultConfig;
export const {{appName}}DividerTemplate = template;
export const {{appName}}DividerStyles = styles;
export const {{appName}}DividerShadowOptions = shadowOptions;
