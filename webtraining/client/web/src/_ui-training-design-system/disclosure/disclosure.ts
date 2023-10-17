import {foundationDisclosure} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationDisclosure);

export const {{appName}}Disclosure = () => foundationDisclosure();

export {Disclosure} from '@genesislcap/foundation-ui';

export const defaultDisclosureConfig = defaultConfig;
export const {{appName}}DisclosureTemplate = template;
export const {{appName}}DisclosureStyles = styles;
export const {{appName}}DisclosureShadowOptions = shadowOptions;
