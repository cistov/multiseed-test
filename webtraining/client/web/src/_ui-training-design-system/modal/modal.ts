import {foundationModal} from '@genesislcap/foundation-ui';
import {getExports} from '../utils';

const {defaultConfig, shadowOptions, styles, template} = getExports(foundationModal);

export const {{appName}}Modal = () => foundationModal();

export {Modal} from '@genesislcap/foundation-ui';

export const defaultModalConfig = defaultConfig;
export const {{appName}}ModalTemplate = template;
export const {{appName}}ModalStyles = styles;
export const {{appName}}ModalShadowOptions = shadowOptions;
