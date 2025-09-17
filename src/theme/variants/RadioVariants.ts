/**
 * Radio Variants
 *
 * Re-exports base `SelectionControl` variants for use with the `Radio` component.  
 * Defines default configurations for size and color options, including container
 * dimensions, indicator styling, and theming support for states such as primary,
 * secondary, and error.  
 *
 * Developers can override existing variants or extend them with custom ones
 * via the `ThemeProvider`, ensuring consistent Radio styling across the app.  
 *
 * Author: Geeky Hawks FZE LLC
 */

/** Radio Color Variants */
export {
    SelectionControlColorVariant as RadioColorVariant,
    SelectionControlColorVariants as RadioColorVariants,
    DefaultSelectionControlColors as DefaultRadioColors,
    defaultSelectionControlColorVariants as defaultRadioColorVariants,
} from "../../base/SelectionControl/SelectionControlVariants";

/** Radio Size Variants */
export {
    SelectionControlSizeVariant as RadioSizeVariant,
    SelectionControlSizeVariants as RadioSizeVariants,
    DefaultSelectionControlSizes as DefaultRadioSizes,
    defaultSelectionControlSizeVariants as defaultRadioSizeVariants,
} from "../../base/SelectionControl/SelectionControlVariants";
