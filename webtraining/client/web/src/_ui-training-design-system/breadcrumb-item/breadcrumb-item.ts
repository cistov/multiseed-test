import {foundationBreadcrumbItem} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationBreadcrumbItem);

export const {{appName}}BreadcrumbItem = () => foundationBreadcrumbItem();

export {BreadcrumbItem} from '@genesislcap/foundation-ui';

export const defaultBreadcrumbItemConfig = defaultConfig;
export const {{appName}}BreadcrumbItemTemplate = template;
export const {{appName}}BreadcrumbItemStyles = styles;
export const {{appName}}BreadcrumbItemShadowOptions = shadowOptions;
