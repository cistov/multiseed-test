import {foundationBreadcrumb} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationBreadcrumb);

export const {{appName}}Breadcrumb = () => foundationBreadcrumb();

export {Breadcrumb} from '@genesislcap/foundation-ui';

export const defaultBreadcrumbConfig = defaultConfig;
export const {{appName}}BreadcrumbTemplate = template;
export const {{appName}}BreadcrumbStyles = styles;
export const {{appName}}BreadcrumbShadowOptions = shadowOptions;
