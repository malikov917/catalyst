# cat-checkbox



<!-- Auto Generated Below -->


## Overview

Checkboxes are used to let a user choose one or more options from a limited
number of options.

## Properties

| Property           | Attribute        | Description                                                                               | Type                                      | Default     |
| ------------------ | ---------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------- | ----------- |
| `checked`          | `checked`        | Checked state of the checkbox                                                             | `boolean`                                 | `false`     |
| `disabled`         | `disabled`       | Disabled state of the checkbox                                                            | `boolean`                                 | `false`     |
| `hint`             | `hint`           | Optional hint text(s) to be displayed with the checkbox.                                  | `string \| string[] \| undefined`         | `undefined` |
| `identifier`       | `identifier`     | A unique identifier for the input.                                                        | `string \| undefined`                     | `undefined` |
| `indeterminate`    | `indeterminate`  | Indeterminate state of the checkbox                                                       | `boolean`                                 | `false`     |
| `label`            | `label`          | Label of the checkbox which is presented in the UI                                        | `string`                                  | `''`        |
| `labelHidden`      | `label-hidden`   | Visually hide the label, but still show it to assistive technologies like screen readers. | `boolean`                                 | `false`     |
| `labelLeft`        | `label-left`     | Whether the label should appear to the left of the checkbox.                              | `boolean`                                 | `false`     |
| `name`             | `name`           | The name of the input.                                                                    | `string \| undefined`                     | `undefined` |
| `nativeAttributes` | --               | Attributes that will be added to the native HTML input element.                           | `undefined \| { [key: string]: string; }` | `undefined` |
| `required`         | `required`       | Required state of the checkbox.                                                           | `boolean`                                 | `false`     |
| `resolvedValue`    | `resolved-value` | The resolved value of the checkbox, based on the checked state and value.                 | `boolean \| null \| string`               | `null`      |
| `value`            | `value`          | The value of the checkbox.                                                                | `string \| undefined`                     | `undefined` |


## Events

| Event       | Description                                                 | Type                                     |
| ----------- | ----------------------------------------------------------- | ---------------------------------------- |
| `catBlur`   | Emitted when the checkbox loses focus.                      | `CustomEvent<FocusEvent>`                |
| `catChange` | Emitted when the checked status of the checkbox is changed. | `CustomEvent<boolean \| null \| string>` |
| `catFocus`  | Emitted when the checkbox received focus.                   | `CustomEvent<FocusEvent>`                |


## Methods

### `doBlur() => Promise<void>`

Programmatically remove focus from the checkbox. Use this method instead of
`input.blur()`.

#### Returns

Type: `Promise<void>`



### `doFocus(options?: FocusOptions) => Promise<void>`

Programmatically move focus to the checkbox. Use this method instead of
`input.focus()`.

#### Returns

Type: `Promise<void>`




## Slots

| Slot      | Description                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| `"hint"`  | Optional hint element to be displayed with the checkbox.                                                             |
| `"label"` | The slotted label. If both the label property and the label slot are present, only the label slot will be displayed. |


## Shadow Parts

| Part         | Description           |
| ------------ | --------------------- |
| `"checkbox"` | The checkbox element. |
| `"label"`    | The label content.    |


## Dependencies

### Used by

 - [cat-select](../cat-select)

### Graph
```mermaid
graph TD;
  cat-select --> cat-checkbox
  style cat-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

Made with love in Hamburg, Germany
