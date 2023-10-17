import {fastAccordion} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastAccordion);

export const {{appName}}Accordion = () => fastAccordion();

export {Accordion} from '@microsoft/fast-components';

export const defaultAccordionConfig = defaultConfig;
export const {{appName}}AccordionTemplate = template;
export const {{appName}}AccordionStyles = styles;
export const {{appName}}AccordionShadowOptions = shadowOptions;
