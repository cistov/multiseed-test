import {foundationDataGrid} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationDataGrid);

export const {{appName}}DataGrid = () => foundationDataGrid();

export {DataGrid} from '@genesislcap/foundation-ui';

export const defaultDataGridConfig = defaultConfig;
export const {{appName}}DataGridTemplate = template;
export const {{appName}}DataGridStyles = styles;
export const {{appName}}DataGridShadowOptions = shadowOptions;
