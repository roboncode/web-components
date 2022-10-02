import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lit-shadow')
export class Shadow extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px #cccccc20;
      border-radius: 8px;
      padding: 10px;
    }
  `;

  override render() {
    return html`<div>This component is in a #shadow-root</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-shadow': Shadow;
  }
}
