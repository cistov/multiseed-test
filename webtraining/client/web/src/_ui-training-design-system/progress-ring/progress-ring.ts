import {foundationProgressRing} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationProgressRing);

export const {{appName}}ProgressRing = () => foundationProgressRing();

export {ProgressRing} from '@genesislcap/foundation-ui';

export const defaultProgressRingConfig = defaultConfig;
export const {{appName}}ProgressRingTemplate = template;
export const {{appName}}ProgressRingStyles = styles;
export const {{appName}}ProgressRingShadowOptions = shadowOptions;
