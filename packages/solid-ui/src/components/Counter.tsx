import { createSignal } from "solid-js"
import { noShadowDOM } from "solid-element"

export const Counter = (props: { name: string }) => {
  noShadowDOM()

  const [count, setCount] = createSignal(0)

  return (
    <>
      <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
    </>
  )
}
