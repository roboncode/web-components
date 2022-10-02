import { noShadowDOM } from "solid-element"

export const Hello = (props: { name: string }) => {
  noShadowDOM()

  return <div>Hello, {props.name || 'world'} from Solid.js!</div>
}
