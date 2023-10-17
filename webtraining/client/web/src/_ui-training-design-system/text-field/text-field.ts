import {
  defaultTextFieldConfig,
  foundationTextFieldShadowOptions,
  TextField as FoundationTextField,
} from '@genesislcap/foundation-ui';
import {{{appName}}TextFieldTemplate as template} from './text-field.template';
import {{{appName}}TextFieldStyles as styles} from './text-field.styles';

export class TextField extends FoundationTextField {}

export const {{appName}}TextField = TextField.compose({
  baseName: 'text-field',
  template,
  styles,
  shadowOptions: foundationTextFieldShadowOptions,
  ...defaultTextFieldConfig,
});
