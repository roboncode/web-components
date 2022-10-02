import { noShadowDOM } from "solid-element"

export const Container = () => {
  noShadowDOM()
  return <slot />
}
