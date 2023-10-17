import {fastAvatar} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastAvatar);

export const {{appName}}Avatar = () => fastAvatar();

export {Avatar} from '@microsoft/fast-components';

export const defaultAvatarConfig = defaultConfig;
export const {{appName}}AvatarTemplate = template;
export const {{appName}}AvatarStyles = styles;
export const {{appName}}AvatarShadowOptions = shadowOptions;
