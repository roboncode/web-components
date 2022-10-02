import '@boulevard/vampire';
import { LitElement, render } from 'lit';

// export const WithSlots = (BaseClass: typeof LitElement) =>
export abstract class SlotElement extends LitElement {
  // static render = render;

  override createRenderRoot() {
    return this;
    // return document.createElement('v-root');
  }

  override connectedCallback() {
    if (!this?.renderRoot?.parentElement) {
      console.log(this, this.appendChild, this.renderRoot);
      this.appendChild(this.renderRoot);
    }

    super.connectedCallback();
  }
}
