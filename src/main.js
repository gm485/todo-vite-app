import './style.css'
import heroImg from './assets/hero.png'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<section id="center" class="center">
  <div>
    <h1>Todo App</h1> 

  </div>
</section> 
`

setupCounter(document.querySelector('#counter'))
