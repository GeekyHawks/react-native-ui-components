/**
 * CheckBox Variants
 *
 * Re-exports base `SelectionControl` variants for use with the `CheckBox` component.  
 * Defines default configurations for size and color options, including container
 * dimensions, indicator styling, and theming support for states such as primary,
 * secondary, and error.  
 *
 * Developers can override existing variants or extend them with custom ones
 * via the `ThemeProvider`, ensuring consistent CheckBox styling across the app.  
 *
 * Author: Geeky Hawks FZE LLC
 */

/** CheckBox Color Variants */
export {
  SelectionControlColorVariant as CheckBoxColorVariant,
  SelectionControlColorVariants as CheckBoxColorVariants,
  DefaultSelectionControlColors as DefaultCheckBoxColors,
  defaultSelectionControlColorVariants as defaultCheckBoxColorVariants,
} from "../../base/SelectionControl/SelectionControlVariants";

/** CheckBox Size Variants */
export {
  SelectionControlSizeVariant as CheckBoxSizeVariant,
  SelectionControlSizeVariants as CheckBoxSizeVariants,
  DefaultSelectionControlSizes as DefaultCheckBoxSizes,
  defaultSelectionControlSizeVariants as defaultCheckBoxSizeVariants,
} from "../../base/SelectionControl/SelectionControlVariants";
