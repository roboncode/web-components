import { Container } from './components/Container'
import { Counter } from './components/Counter'
import { Hello } from './components/Hello'
import { Shadow } from './components/Shadow'
import {customElement} from 'solid-element'

export const SolidContainer = customElement('solid-container', {children: [], outerClass: '', innerClass: '' }, Container)
export const SolidCounter = customElement('solid-counter', Counter)
export const SolidHello = customElement('solid-hello', { name: '' }, Hello)
export const SolidShadow = customElement('solid-shadow', Shadow)

