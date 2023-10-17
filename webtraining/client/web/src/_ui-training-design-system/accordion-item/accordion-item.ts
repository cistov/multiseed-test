import {fastAccordionItem} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastAccordionItem);

export const {{appName}}AccordionItem = () => fastAccordionItem();

export {AccordionItem} from '@microsoft/fast-components';

export const defaultAccordionItemConfig = defaultConfig;
export const {{appName}}AccordionItemTemplate = template;
export const {{appName}}AccordionItemStyles = styles;
export const {{appName}}AccordionItemShadowOptions = shadowOptions;
