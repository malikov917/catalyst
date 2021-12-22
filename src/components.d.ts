/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CatButton {
        /**
          * Use this property to add an `aria-controls` attribute to the button. Use the attribute to point to the unique ID of the content that the button manages.
         */
        "a11yControls"?: string;
        /**
          * Indicates the ID of a component that describes the button.
         */
        "a11yDescribedBy"?: string;
        /**
          * Adds accessible label for the button that is only shown for screen readers. Typically, this label text replaces the visible text on the button for users who use assistive technology.
         */
        "a11yLabel"?: string;
        /**
          * Indicates the ID of a component owned by the button.
         */
        "a11yOwns"?: string;
        /**
          * Adds a class for the button. Please note that with this particular component this ID is added inside the web component. If you need a class on the HTML element, use the regular `class` attribute instead.
         */
        "buttonClass"?: string;
        /**
          * Adds a unique identifier for the button. Please note that with this particular component this ID is added inside the web component. If you need an ID on the HTML element, use the regular `id` attribute instead.
         */
        "buttonId"?: string;
        /**
          * A custom class to be added to the button's textual content.
         */
        "contentClass"?: string;
        /**
          * Specifies that the button should be disabled. A disabled button is unusable and un-clickable. Corresponds with the native HTML disabled attribute.
         */
        "disabled": boolean;
        /**
          * Ellipse overflowing button content.
         */
        "ellipsed": boolean;
        /**
          * A custom class to be added to the button's prefix and suffix icons.
         */
        "iconClass"?: string;
        /**
          * Specifies that the button should be inactive. Just like a disabled button, an inactive button is unusable and un-clickable. However, it retains the current focus state.
         */
        "inactive": boolean;
        /**
          * Displays the button in a loading state with a spinner. Just like a disabled button, an inactive button is unusable and un-clickable. However, it retains the current focus state.
         */
        "loading": boolean;
        /**
          * The name of the button, which gets paired with the button's value when submitted as part of a form. Corresponds with the native HTML name attribute.
         */
        "name"?: string;
        /**
          * The name of an icon to be displayed before the button content.
         */
        "prefixIcon"?: string;
        /**
          * Use round button edges.
         */
        "round": boolean;
        /**
          * Sets focus on the button. Use this method instead of `button.focus()`.
          * @param options An optional object providing options to control aspects of the focusing process.
         */
        "setFocus": (options?: FocusOptions | undefined) => Promise<void>;
        /**
          * The size of the button.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * Allows the button to submit a form.
         */
        "submit": boolean;
        /**
          * The name of an icon to be displayed after the button content.
         */
        "suffixIcon"?: string;
        /**
          * The theme color palette of the button.
         */
        "theme": 'primary' | 'secondary';
        /**
          * A destination to link to, rendered in the href attribute of a link.
         */
        "url"?: string;
        /**
          * Specifies where to open the linked document.
         */
        "urlTarget"?: '_blank' | '_self';
        /**
          * The value of the button, which gets paired with the button's name when submitted as part of a form. Corresponds with the native HTML value attribute.
         */
        "value"?: string;
    }
    interface CatIcon {
        /**
          * Adds accessible label for the spinner that is only shown for screen readers. The `aria-hidden` attribute will be set if no label is present.
         */
        "a11yLabel"?: string;
        /**
          * The name of the icon.
         */
        "name": string;
        /**
          * The size of the icon.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl' | 'inline';
    }
    interface CatSpinner {
        /**
          * Adds accessible label for the spinner that is only shown for screen readers. The `aria-hidden` attribute will be set if no label is present.
         */
        "a11yLabel"?: string;
        /**
          * The size of the button.
         */
        "size": 'xs' | 's' | 'm' | 'l' | 'xl' | 'inline';
    }
}
declare global {
    interface HTMLCatButtonElement extends Components.CatButton, HTMLStencilElement {
    }
    var HTMLCatButtonElement: {
        prototype: HTMLCatButtonElement;
        new (): HTMLCatButtonElement;
    };
    interface HTMLCatIconElement extends Components.CatIcon, HTMLStencilElement {
    }
    var HTMLCatIconElement: {
        prototype: HTMLCatIconElement;
        new (): HTMLCatIconElement;
    };
    interface HTMLCatSpinnerElement extends Components.CatSpinner, HTMLStencilElement {
    }
    var HTMLCatSpinnerElement: {
        prototype: HTMLCatSpinnerElement;
        new (): HTMLCatSpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "cat-button": HTMLCatButtonElement;
        "cat-icon": HTMLCatIconElement;
        "cat-spinner": HTMLCatSpinnerElement;
    }
}
declare namespace LocalJSX {
    interface CatButton {
        /**
          * Use this property to add an `aria-controls` attribute to the button. Use the attribute to point to the unique ID of the content that the button manages.
         */
        "a11yControls"?: string;
        /**
          * Indicates the ID of a component that describes the button.
         */
        "a11yDescribedBy"?: string;
        /**
          * Adds accessible label for the button that is only shown for screen readers. Typically, this label text replaces the visible text on the button for users who use assistive technology.
         */
        "a11yLabel"?: string;
        /**
          * Indicates the ID of a component owned by the button.
         */
        "a11yOwns"?: string;
        /**
          * Adds a class for the button. Please note that with this particular component this ID is added inside the web component. If you need a class on the HTML element, use the regular `class` attribute instead.
         */
        "buttonClass"?: string;
        /**
          * Adds a unique identifier for the button. Please note that with this particular component this ID is added inside the web component. If you need an ID on the HTML element, use the regular `id` attribute instead.
         */
        "buttonId"?: string;
        /**
          * A custom class to be added to the button's textual content.
         */
        "contentClass"?: string;
        /**
          * Specifies that the button should be disabled. A disabled button is unusable and un-clickable. Corresponds with the native HTML disabled attribute.
         */
        "disabled"?: boolean;
        /**
          * Ellipse overflowing button content.
         */
        "ellipsed"?: boolean;
        /**
          * A custom class to be added to the button's prefix and suffix icons.
         */
        "iconClass"?: string;
        /**
          * Specifies that the button should be inactive. Just like a disabled button, an inactive button is unusable and un-clickable. However, it retains the current focus state.
         */
        "inactive"?: boolean;
        /**
          * Displays the button in a loading state with a spinner. Just like a disabled button, an inactive button is unusable and un-clickable. However, it retains the current focus state.
         */
        "loading"?: boolean;
        /**
          * The name of the button, which gets paired with the button's value when submitted as part of a form. Corresponds with the native HTML name attribute.
         */
        "name"?: string;
        /**
          * Emitted when the button loses focus.
         */
        "onCatBlur"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when the button received focus.
         */
        "onCatFocus"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * The name of an icon to be displayed before the button content.
         */
        "prefixIcon"?: string;
        /**
          * Use round button edges.
         */
        "round"?: boolean;
        /**
          * The size of the button.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl';
        /**
          * Allows the button to submit a form.
         */
        "submit"?: boolean;
        /**
          * The name of an icon to be displayed after the button content.
         */
        "suffixIcon"?: string;
        /**
          * The theme color palette of the button.
         */
        "theme"?: 'primary' | 'secondary';
        /**
          * A destination to link to, rendered in the href attribute of a link.
         */
        "url"?: string;
        /**
          * Specifies where to open the linked document.
         */
        "urlTarget"?: '_blank' | '_self';
        /**
          * The value of the button, which gets paired with the button's name when submitted as part of a form. Corresponds with the native HTML value attribute.
         */
        "value"?: string;
    }
    interface CatIcon {
        /**
          * Adds accessible label for the spinner that is only shown for screen readers. The `aria-hidden` attribute will be set if no label is present.
         */
        "a11yLabel"?: string;
        /**
          * The name of the icon.
         */
        "name"?: string;
        /**
          * The size of the icon.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'inline';
    }
    interface CatSpinner {
        /**
          * Adds accessible label for the spinner that is only shown for screen readers. The `aria-hidden` attribute will be set if no label is present.
         */
        "a11yLabel"?: string;
        /**
          * The size of the button.
         */
        "size"?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'inline';
    }
    interface IntrinsicElements {
        "cat-button": CatButton;
        "cat-icon": CatIcon;
        "cat-spinner": CatSpinner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cat-button": LocalJSX.CatButton & JSXBase.HTMLAttributes<HTMLCatButtonElement>;
            "cat-icon": LocalJSX.CatIcon & JSXBase.HTMLAttributes<HTMLCatIconElement>;
            "cat-spinner": LocalJSX.CatSpinner & JSXBase.HTMLAttributes<HTMLCatSpinnerElement>;
        }
    }
}
