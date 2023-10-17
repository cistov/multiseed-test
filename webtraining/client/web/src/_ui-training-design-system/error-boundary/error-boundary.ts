import {foundationErrorBoundary} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationErrorBoundary);

export const {{appName}}ErrorBoundary = () => foundationErrorBoundary();

export {ErrorBoundary} from '@genesislcap/foundation-ui';

export const defaultErrorBoundaryConfig = defaultConfig;
export const {{appName}}ErrorBoundaryTemplate = template;
export const {{appName}}ErrorBoundaryStyles = styles;
export const {{appName}}ErrorBoundaryShadowOptions = shadowOptions;
