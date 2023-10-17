import {fastCalendar} from '@microsoft/fast-components';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(fastCalendar);

export const {{appName}}Calendar = () => fastCalendar();

export {Calendar} from '@microsoft/fast-components';

export const defaultCalendarConfig = defaultConfig;
export const {{appName}}CalendarTemplate = template;
export const {{appName}}CalendarStyles = styles;
export const {{appName}}CalendarShadowOptions = shadowOptions;
