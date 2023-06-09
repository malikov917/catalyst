import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, h } from '@stencil/core';
import log from 'loglevel';
import { ErrorMap } from '../cat-form-hint/cat-form-hint';
import DateRangePicker, { getDatepickerOptions } from './vanillajs-rangepicker.config';
import Datepicker from '../cat-datepicker/vanillajs-datepicker.config';

/**
 * Inputs are used to allow users to provide text input when the expected input
 * is short. As well as plain text, Input supports various types of text,
 * including passwords and numbers.
 *
 * @slot hint - Optional hint element to be displayed with the input.
 * @slot label - The slotted label. If both the label property and the label slot are present, only the label slot will be displayed.
 * @part label - The label content.
 */
@Component({
  tag: 'cat-rangepicker',
  styleUrl: 'cat-rangepicker.scss',
  shadow: true
})
export class CatRangepicker {
  private inputFrom!: HTMLInputElement;
  private inputTo!: HTMLInputElement;
  private catInputFrom!: HTMLCatInputElement;
  private catInputTo!: HTMLCatInputElement;
  private datepicker!: any;

  @Element() hostElement!: HTMLElement;

  @State() hasSlottedLabel = false;

  @State() hasSlottedHint = false;

  /**
   * Whether the label need a marker to shown if the input is required or optional.
   */
  @Prop() requiredMarker: 'none' | 'required' | 'optional' | 'none!' | 'optional!' | 'required!' = 'optional';

  /**
   * Whether the label is on top or left.
   */
  @Prop() horizontal = false;

  /**
   * Hint for form autofill feature.
   */
  @Prop() autoComplete?: string;

  /**
   * Whether the input should show a clear button.
   */
  @Prop() clearable = false;

  /**
   * Whether the input is disabled.
   */
  @Prop() disabled = false;

  /**
   * Optional hint text(s) to be displayed with the input.
   */
  @Prop() hint?: string | string[];

  /**
   * The name of an icon to be displayed in the input.
   */
  @Prop() icon?: string;

  /**
   * Display the icon on the left.
   */
  @Prop() iconLeft = false;

  /**
   * A unique identifier for the input.
   */
  @Prop() identifier?: string;

  /**
   * The label for the input.
   */
  @Prop() label = '';

  /**
   * Visually hide the label, but still show it to assistive technologies like screen readers.
   */
  @Prop() labelHidden = false;

  /**
   * A maximum value for date, time and numeric values.
   */
  @Prop() max?: number | string;

  /**
   * A minimum value for date, time and numeric values.
   */
  @Prop() min?: number | string;

  /**
   * The name of the form control. Submitted with the form as part of a name/value pair.
   */
  @Prop() name?: string;

  /**
   * The placeholder text to display within the input.
   */
  @Prop() placeholder?: string;

  /**
   * A textual prefix to be displayed in the input.
   */
  @Prop() textPrefix?: string;

  /**
   * A textual suffix to be displayed in the input.
   */
  @Prop() textSuffix?: string;

  /**
   * The value is not editable.
   */
  @Prop() readonly = false;

  /**
   * A value is required or must be check for the form to be submittable.
   */
  @Prop() required = false;

  /**
   * The date format after picker selection.
   */
  @Prop() format = 'mm/dd/yyyy';

  /**
   * Whether the picker should show the week numbers.
   */
  @Prop() weekNumbers = true;

  /**
   * Dates that should be disabled inside the picker
   */
  @Prop() datesDisabled!: Array<Date> | Array<string>;

  /**
   * The value of the control.
   */
  @Prop({ mutable: true }) value?: { start: string; end: string };

  /**
   * The validation errors for this input. Will render a hint under the input
   * with the translated error message(s) `error.${key}`. If an object is
   * passed, the keys will be used as error keys and the values translation
   * parameters.
   * If the value is `true`, the input will be marked as invalid without any
   * hints under the input.
   */
  @Prop() errors?: boolean | string[] | ErrorMap;

  /**
   * Fine-grained control over when the errors are shown. Can be `false` to
   * never show errors, `true` to show errors on blur, or a number to show
   * errors on change with the given delay in milliseconds.
   */
  @Prop() errorUpdate: boolean | number = 0;

  /**
   * Attributes that will be added to the native HTML input element.
   */
  @Prop() nativeAttributes?: { [key: string]: string };

  /**
   * Emitted when the value is changed.
   */
  @Event() catChange!: EventEmitter<InputEvent>;

  /**
   * Emitted when the input received focus.
   */
  @Event() catFocus!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() catBlur!: EventEmitter<FocusEvent>;

  /**
   * Programmatically move focus to the input. Use this method instead of
   * `input.focus()`.
   *
   * @param options An optional object providing options to control aspects of
   * the focusing process.
   */
  // @Method()
  // async doFocus(options?: FocusOptions): Promise<void> {
  //   // this.input.focus(options);
  // }

  /**
   * Programmatically remove focus from the input. Use this method instead of
   * `input.blur()`.
   */
  // @Method()
  // async doBlur(): Promise<void> {
  //   // this.input.blur();
  // }

  /**
   * Programmatically simulate a click on the input.
   */
  // @Method()
  // async doClick(): Promise<void> {
  //   // this.input.click();
  // }

  /**
   * Clear the input.
   */
  @Method()
  async clear(): Promise<void> {
    this.value = { start: '', end: '' };
  }

  componentWillRender(): void {
    this.hasSlottedLabel = !!this.hostElement.querySelector('[slot="label"]');
    this.hasSlottedHint = !!this.hostElement.querySelector('[slot="hint"]');
  }

  render() {
    return (
      <Host>
        <div class="cat-rangepicker">
          <cat-input
            class="cat-rangepicker-start"
            ref={el => (this.catInputFrom = el as HTMLCatInputElement)}
            requiredMarker={this.requiredMarker}
            horizontal={this.horizontal}
            autoComplete={this.autoComplete}
            clearable={this.clearable}
            disabled={this.disabled}
            hint={this.hint}
            icon={this.icon}
            iconRight={!this.iconLeft}
            identifier={this.identifier}
            label={this.label}
            labelHidden={this.labelHidden}
            name={this.name}
            placeholder={this.placeholder}
            textPrefix={this.textPrefix}
            textSuffix={this.textSuffix}
            readonly={this.readonly}
            required={this.required}
            value={this.value?.start}
            errors={this.errors}
            errorUpdate={this.errorUpdate}
            nativeAttributes={this.nativeAttributes}
            onCatChange={event => this.onCatChange(event)}
            onCatFocus={event => this.onCatFocus(event.detail)}
            onCatBlur={event => this.onCatBlur(event.detail)}
          >
            {this.hasSlottedLabel && (
              <span slot="label">
                <slot name="label"></slot>
              </span>
            )}
            {this.hasSlottedHint && (
              <span slot="hint">
                <slot name="hint"></slot>
              </span>
            )}
          </cat-input>
          <cat-input
            class="cat-rangepicker-end"
            ref={el => (this.catInputTo = el as HTMLCatInputElement)}
            requiredMarker={this.requiredMarker}
            horizontal={this.horizontal}
            autoComplete={this.autoComplete}
            clearable={this.clearable}
            disabled={this.disabled}
            hint={this.hint}
            icon={this.icon}
            iconRight={!this.iconLeft}
            identifier={this.identifier}
            label={this.label}
            labelHidden={this.labelHidden}
            name={this.name}
            placeholder={this.placeholder}
            textPrefix={this.textPrefix}
            textSuffix={this.textSuffix}
            readonly={this.readonly}
            required={this.required}
            value={this.value?.end}
            errors={this.errors}
            errorUpdate={this.errorUpdate}
            nativeAttributes={this.nativeAttributes}
            onCatChange={event => this.onCatChange(event)}
            onCatFocus={event => this.onCatFocus(event.detail)}
            onCatBlur={event => this.onCatBlur(event.detail)}
          >
            {this.hasSlottedLabel && (
              <span slot="label">
                <slot name="label"></slot>
              </span>
            )}
            {this.hasSlottedHint && (
              <span slot="hint">
                <slot name="hint"></slot>
              </span>
            )}
          </cat-input>
        </div>
      </Host>
    );
  }

  componentDidLoad() {
    if (this.hostElement) {
      const inputFromWrapper = this.catInputFrom.shadowRoot?.querySelector('.input-wrapper') as HTMLElement;
      const inputFromElement = inputFromWrapper.querySelector('input');
      const inputToWrapper = this.catInputTo.shadowRoot?.querySelector('.input-wrapper') as HTMLElement;
      const inputToElement = inputToWrapper.querySelector('input');
      const wrapper = this.hostElement.shadowRoot?.querySelector('.cat-rangepicker');

      if (inputFromElement && inputToElement) {
        this.inputFrom = inputFromElement;
        this.inputTo = inputToElement;
      } else {
        log.error('[CatInput] Missing input element', this);
        return;
      }

      this.datepicker = new DateRangePicker(this.hostElement.shadowRoot, {
        ...getDatepickerOptions(),
        container: wrapper,
        inputs: [inputFromElement, inputToElement],
        maxDate: this.max,
        minDate: this.min,
        datesDisabled: this.datesDisabled,
        prevArrow: '←',
        nextArrow: '→',
        weekNumbers: this.weekNumbers ? 1 : 0,
        format: {
          toValue: (dateStr: string | Date | number): Date => {
            return Datepicker.parseDate(dateStr, this.dateFormat);
          },
          toDisplay: (date: Date): string => {
            return Datepicker.formatDate(date, this.dateFormat);
          }
        }
      });

      if (this.value) {
        this.datepicker.setDates(this.value?.start, this.value?.end);
      }

      this.inputFrom.addEventListener('changeDate', this.handleDateChange.bind(this) as EventListener);
      this.inputTo.addEventListener('changeDate', this.handleDateChange.bind(this) as EventListener);
    }
  }

  disconnectedCallback() {
    this.inputFrom.removeEventListener('changeDate', this.handleDateChange.bind(this) as EventListener);
    this.inputTo.removeEventListener('changeDate', this.handleDateChange.bind(this) as EventListener);
  }

  private handleDateChange(event: CustomEvent) {
    const [start, end] = this.datepicker.getDates();
    this.value = {
      start: Datepicker.formatDate(start, this.dateFormat),
      end: Datepicker.formatDate(end, this.dateFormat)
    };
    this.catChange.emit();
  }

  private onCatChange(event: unknown) {
    const [start, end] = this.datepicker.getDates();
    this.value = {
      start: Datepicker.formatDate(start, this.dateFormat),
      end: Datepicker.formatDate(end, this.dateFormat)
    };
    this.catChange.emit(event as InputEvent);
  }

  private onCatFocus(event: FocusEvent) {
    this.catFocus.emit(event);
  }

  private onCatBlur(event: FocusEvent) {
    this.catBlur.emit(event);
  }

  // ----- Date handling

  private get dateFormat(): string {
    const date = new Date(Date.UTC(3333, 10, 22));
    const dateStr = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }).format(date);
    return dateStr.replace('22', 'dd').replace('11', 'mm').replace('3333', 'yyyy');
  }
}
