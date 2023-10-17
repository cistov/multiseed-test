import {foundationProgress} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationProgress);

export const {{appName}}Progress = () => foundationProgress();

export {Progress} from '@genesislcap/foundation-ui';

export const defaultProgressConfig = defaultConfig;
export const {{appName}}ProgressTemplate = template;
export const {{appName}}ProgressStyles = styles;
export const {{appName}}ProgressShadowOptions = shadowOptions;
