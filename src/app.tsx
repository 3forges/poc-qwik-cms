import { component$, useSignal } from '@builder.io/qwik'

import qwikLogo from './assets/qwik.svg'
import viteLogo from '/vite.svg'
import './app.css'
/**
 * npm install react@npm:@preact/compat react-dom@npm:@preact/compat
 * node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city
 * npm install @builder.io/qwik-city@npm:.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city 
 */
import { Link, useNavigate } from '@builder.io/qwik-city'; // <Link href="/joke">About (prefered)</Link>


export const App = component$(() => {
  // const nav = useNavigate();
  const count = useSignal(0)

  return (
    <>
      <div class="card">
        <Link href="/joke">Finally a good Dad joke (prefered)</Link>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://qwik.builder.io" target="_blank">
          <img src={qwikLogo} class="logo qwik" alt="Qwik logo" />
        </a>
      </div>
      <h1>Vite + Qwik</h1>
      <div class="card">
        <button onClick$={() => count.value++}>count is {count.value}</button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Qwik logos to learn more
      </p>
      <div class="card">
        <button onClick$={() => window.location.href ='/joke/'}>Get a Good Dad Joke</button>
      </div>

    </>
  )
})
