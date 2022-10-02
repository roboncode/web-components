import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-hello')
export class Hello extends LitElement {
  // no shadow dom
  protected override createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'world';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  override render() {
    return html` <div>${this.sayHello(this.name)} from Lit!</div> `;
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-hello': Hello;
  }
}
