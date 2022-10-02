import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-counter')
export class Counter extends LitElement {
  // no shadow dom
  protected override createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  override render() {
    return html` <button @click=${this._onClick} part="button">Count: ${this.count}</button> `;
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-counter': Counter;
  }
}
