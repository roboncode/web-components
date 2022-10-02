import '@boulevard/vampire';
import { LitElement, render } from 'lit';

export const WithSlots = (BaseClass: typeof LitElement) =>
  class extends BaseClass {
    public static render = render;

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

// @customElement('template-like')
// class TemplateLike extends HTMLElement {
//   for?: string;
// }

// export const Shadowless = (Base: typeof LitElement) =>
//   class extends Base {
//     protected templateMap = new Map<string, TemplateLike>();

//     protected override createRenderRoot() {
//       return this;
//     }

//     protected getSlotForTemplate(template: TemplateLike): string {
//       return template.for || template.getAttribute('for') || '';
//     }

//     // Save a reference to the templates before lit-element removes them.
//     protected saveTemplates() {
//       Array.from(this.childNodes).forEach((child) => {
//         if (!(child instanceof TemplateLike)) {
//           return;
//         }

//         const slot = this.getSlotForTemplate(child);

//         if (!this.templateMap.has(slot)) {
//           this.templateMap.set(slot, child);
//         }
//       });
//     }

//     protected override update(changedProperties: PropertyValues) {
//       if (!this.hasUpdated) {
//         this.saveTemplates();
//       }

//       super.update(changedProperties);
//     }

//     protected yield<T>(slot: string, defaultConent?: T): ChildNode[] | T | undefined {
//       const slotContent = this.templateMap.get(slot);

//       return slotContent ? Array.from(slotContent.childNodes) : defaultConent;
//     }
//   };
