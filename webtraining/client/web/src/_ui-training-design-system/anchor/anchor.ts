import {foundationAnchor} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationAnchor);

export const {{appName}}Anchor = () => foundationAnchor();

export {Anchor} from '@genesislcap/foundation-ui';

export const defaultAnchorConfig = defaultConfig;
export const {{appName}}AnchorTemplate = template;
export const {{appName}}AnchorStyles = styles;
export const {{appName}}AnchorShadowOptions = shadowOptions;
