import {
  Button as FoundationButton,
  defaultButtonConfig,
  foundationButtonShadowOptions,
} from '@genesislcap/foundation-ui';
import {{{appName}}ButtonTemplate as template} from './button.template';
import {{{appName}}ButtonStyles as styles} from './button.styles';

export class Button extends FoundationButton {}

export const {{appName}}Button = Button.compose({
  baseName: 'button',
  template,
  styles,
  shadowOptions: foundationButtonShadowOptions,
  ...defaultButtonConfig,
});
