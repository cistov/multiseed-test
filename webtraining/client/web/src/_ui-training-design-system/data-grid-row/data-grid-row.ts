import {foundationDataGridRow} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationDataGridRow);

export const {{appName}}DataGridRow = () => foundationDataGridRow();

export {DataGridRow} from '@genesislcap/foundation-ui';

export const defaultDataGridRowConfig = defaultConfig;
export const {{appName}}DataGridRowTemplate = template;
export const {{appName}}DataGridRowStyles = styles;
export const {{appName}}DataGridRowShadowOptions = shadowOptions;
