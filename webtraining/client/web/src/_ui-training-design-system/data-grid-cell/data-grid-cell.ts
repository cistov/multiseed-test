import {foundationDataGridCell} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationDataGridCell);

export const {{appName}}DataGridCell = () => foundationDataGridCell();

export {DataGridCell} from '@genesislcap/foundation-ui';

export const defaultDataGridCellConfig = defaultConfig;
export const {{appName}}DataGridCellTemplate = template;
export const {{appName}}DataGridCellStyles = styles;
export const {{appName}}DataGridCellShadowOptions = shadowOptions;
