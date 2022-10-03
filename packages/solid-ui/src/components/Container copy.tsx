import './Container.css';

import { children, createComponent, createComputed, createSignal } from "solid-js"

import { noShadowDOM } from "solid-element"

export const Container = (props: any) => {
  // noShadowDOM()

  const [outerCls] = createSignal('solid-w-full solid-h-full solid-flex solid-flex-col solid-overflow-hidden ')
  const [innerCls] = createSignal('solid-flex solid-flex-col solid-flex-grow solid-h-1 solid-overflow-auto ')
  // console.log(props.children)
  // return <div data-name="taylor">You are here {props.children}</div>

  const [children] = createSignal(props.children)
  // createComputed(() => {
  //   console.log(outerCls())
  // }, [outerCls])


  return (
    <div class="solid-w-full solid-h-full solid-flex solid-flex-col solid-overflow-hidden">
      <div class="solid-flex solid-flex-col solid-flex-grow solid-h-1 solid-overflow-auto">
        <div>start</div>
        {children}
        <div>end</div>

      </div>
    </div>
  )
}

