import {foundationCard} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationCard);

export const {{appName}}Card = () => foundationCard();

export {Card} from '@genesislcap/foundation-ui';

export const defaultCardConfig = defaultConfig;
export const {{appName}}CardTemplate = template;
export const {{appName}}CardStyles = styles;
export const {{appName}}CardShadowOptions = shadowOptions;
