import { LitElement, html, css, render } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const WithSlots = (BaseClass: typeof LitElement) =>
  class extends BaseClass {
    static render = render;

    override createRenderRoot() {
      return document.createElement('v-root');
    }

    override connectedCallback() {
      if (!this.renderRoot.parentElement) {
        this.appendChild(this.renderRoot);
      }

      super.connectedCallback();
    }
  };

@customElement('lit-container')
export class Container extends WithSlots(LitElement) {
  static override styles = css`
    .ui-container {
      background-color: yellow;
      padding: 10px;
      border: 1px solid limegreen;
      border-radius: 10px;
      color: #333;
    }

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
  `;

  // no shadow dom
  protected override createRenderRoot(): Element | ShadowRoot {
    // return this;
    return document.createElement('v-root');
  }

  override connectedCallback() {
    if (!this.renderRoot.parentElement) {
      this.appendChild(this.renderRoot);
    }

    super.connectedCallback();
  }

  @property({ type: String })
  class = '';

  override render() {
    return html`
      <div class="ui-container ui-flex ui-flex-col ui-overflow-hidden ${this.class}">
        <div class="ui-flex ui-flex-col ui-flex-grow ui-overflow-auto ui-h-01">
          <div>This is this is above the slot</div>
          <v-slot></v-slot>
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
