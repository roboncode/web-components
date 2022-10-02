import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
@customElement('lit-container')
export class Container extends LitElement {
  // no shadow dom
  protected override createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  @property({ type: String })
  class = '';

  override render() {
    return html`
      <style>
        .ui-h-0 {
          height: 0rem;
        }

        .ui-flex {
          display: flex;
        }

        .ui-flex-col {
          flex-direction: column;
        }

        .ui-flex-grow {
          flex-grow: 1;
        }

        .ui-overflow-hidden {
          overflow: hidden;
        }

        .ui-overflow-auto {
          overflow: auto;
        }
      </style>
      <div class="ui-container ui-flex ui-flex-col ui-overflow-hidden ${this.class}">
        <div class="ui-flex ui-flex-col ui-flex-grow ui-overflow-auto ui-h-01">
          <div>This is this is above the slot</div>
          <div>${this.children}</div>
          <div>This is this is below the slot</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-container': Container;
  }
}
