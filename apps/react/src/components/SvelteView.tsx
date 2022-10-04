import '@roboncode/svelte-ui'
import './SvelteView.module.css'

import { useMemo, useState } from 'react'

import Card from './Card'
import css from '@roboncode/svelte-ui/dist/style.css'

function SvelteView() {
  const [name, setName] = useState('everyone')
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  const ratings = [
    { title: 'Getting Started', stars: 2.5 },
    { title: 'Documentation', stars: 3.5 },
    { title: 'Development', stars: 5 },
    { title: 'Capabilities', stars: 4.5 },
    { title: 'Ease of Use', stars: 5 },
    { title: 'Styling', stars: 4.5 },
    { title: 'Framework Integration', stars: 5 },
    { title: 'File Size', stars: 5 },
  ]

  const toggleName = () => {
    setName(name === 'everyone' ? 'world' : 'everyone')
  }

  const toggleShow = () => {
    setShow(!show)
  }

  const handleCountChange = () => {
    console.log('change event from count:')
  }

  const sizes = [10, 20, 30, 40]
  const getRandomSize = () => {
    const randomIndex = Math.floor(Math.random() * sizes.length)
    return 'w-' + sizes[randomIndex]
  }

  const spacers = useMemo(() => [...new Array(10)].map(v => <div key={v} className="h-4 w-full rounded-full bg-dark-100"></div>) , [])
  const paraSpacers = useMemo(() => [...new Array(100)].map(v => (
    <div key={v} className={'h-4 rounded-full bg-dark-100 ' + getRandomSize()}></div>
  )), [])
  return (
    <div className="space-y-6 grid gap-3">
      <div className="p-4 text-2xl font-bold">Svelte Web Components</div>

      <div className="px-4 space-y-3">
        <div className="font-bold text-xl">Summary</div>
        <p>
          Svelte was actually pretty simple to use. There is little difference between creating a Svelte component vs.
          Svelte web component. The only difference I found was around dispatching events.
        </p>

        <p>The file size is amazingly small. Generally the size is half of other frameworks.</p>

        <p className="border-l-3 border-light-blue-400 pl-4">
          There werent any additional libraries needed for Svelte to work. However if you want to have the flexibility
          of disabling the shadow dom, then you will need to use a solution like
          <a href="https://github.com/crisward/svelte-tag">
            {' '}
            <code>svelte-tag</code>{' '}
          </a>
          . I personally dont think it is needed.
        </p>
      </div>
      <svelte-scorecard styles="--star-color: #f6e05e" score="4.75" value={JSON.stringify(ratings)} css={css} />

      <Card
        title="Stateless component"
        details={
          <div>
            <li className="list-disc">Data binding</li>
            <li className="list-disc">Default and named slots</li>
            <li className="list-disc">Internal component styling</li>
          </div>
        }
      >
        <svelte-card name={name}>
          <div className="font-normal">This is content that resides in the default slot.</div>
          <div slot="footer" className="flex justify-end">
            <button onClick={() => toggleName()}>Toggle name</button>
          </div>
        </svelte-card>
      </Card>

      <Card
        title="Stateless component"
        details={
          <div>
            <li className="list-disc">Manages its own state</li>
            <li className="list-disc">Exposing events from web component</li>
            <li className="list-disc">
              Styling using{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">
                <code>::part()</code>
              </a>{' '}
              and CSS
            </li>
            <li className="list-disc">
              Styling using{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">
                <code>::part()</code>
              </a>{' '}
              and TailwindCSS
            </li>
          </div>
        }
      >
        <div className="flex gap-4 items-center">
          <svelte-counter name="css-example" onChange={handleCountChange} />
          <svelte-counter name="tailwind-example" onChange={handleCountChange} />
          <div className="font-bold">Last known value from event: {count}</div>
        </div>
      </Card>

      <Card
        title="Assembly Containers"
        details={
          <div>
            <li className="list-disc">Complex layouts</li>
            <li className="list-disc">Extending the style from outside container using special classes</li>
          </div>
        }
      >
        <div className="w-full h-100">
          <svelte-container>
            <div className="px-2 py-4 bg-dark-900 flex items-center drop-shadow-lg">
              <button className="i-tabler-menu-2" onClick={() => toggleShow()}></button>
              <div className="font-bold">My application</div>
            </div>
            <div className="flex w-full h-full">
              {show && (
                <svelte-container className="h-full bg-dark-800 drop-shadow">
                  <div className="flex gap-2 items-center font-bold p-4 bg-dark-400 sticky top-0">
                    <span className="i-tabler-user-circle"></span>
                    <span>Jane Doe</span>
                  </div>
                  <div className="grid gap-4 p-4 w-50 text-sm">
                    <div>Home</div>
                    <div>Reports</div>
                    <div>Profile</div>
                    <div>Settings</div>
                    <div className="h-4 w-full rounded-full bg-dark-100"></div>
                    {/* {spacers} */}
                  </div>
                </svelte-container>
              )}
              <svelte-container className="flex-grow bg-dark-700">
                <div className="inline-flex flex-wrap gap-4 p-4" data-sizes="w-10 w-20 w-30 w-40">
                  {/* {paraSpacers} */}
                </div>
              </svelte-container>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-dark-900 text-light-blue-400 text-xs">
              <div>About</div>
              <span>|</span>
              <div>Blog</div>
              <span>|</span>
              <div>Careers</div>
            </div>
          </svelte-container>
        </div>
      </Card>

      <Card
        title="Multiple embedded components"
        details={
          <div>
            <li className="list-disc">Binding to complex data</li>
            <li className="list-disc">Embedding web components within web components</li>
            <li className="list-disc">
              Dynamically styling component using CSS <code>var</code>
            </li>
            <li className="list-disc">
              Applying styles by passing a CSS from a CSS file generated using TailwindCSS (UnoCSS)
            </li>
          </div>
        }
      >
        <svelte-scorecard score="4.75" value={JSON.stringify([{ title: 'Example' }])} css={css} />
      </Card>
    </div>
  )
}

export default SvelteView
