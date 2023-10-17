import {foundationSkeleton} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationSkeleton);

export const {{appName}}Skeleton = () => foundationSkeleton();

export {Skeleton} from '@genesislcap/foundation-ui';

export const defaultSkeletonConfig = defaultConfig;
export const {{appName}}SkeletonTemplate = template;
export const {{appName}}SkeletonStyles = styles;
export const {{appName}}SkeletonShadowOptions = shadowOptions;
