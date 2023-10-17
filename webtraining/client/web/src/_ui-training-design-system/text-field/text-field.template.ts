import {foundationTextFieldTemplate} from '@genesislcap/foundation-ui';
import type {ViewTemplate} from '@microsoft/fast-element';
import type {
  ElementDefinitionContext,
  FoundationElementDefinition,
} from '@microsoft/fast-foundation';
import type {TextField} from './text-field';

export const {{appName}}TextFieldTemplate = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition,
): ViewTemplate<TextField> => foundationTextFieldTemplate(context, definition);
