import '../../src/style.css'
import javascriptLogo from '../../src/javascript.svg'
import viteLogo from '/vite.svg'

export function renderCobis(contenedor) {
  contenedor.innerHTML = `
  <div class="container">
    <section>
      Esta es la página que tiene info de las cobis
    </section>

    <section>
      <img style="width: 300px;" src="../../public/img/Kuyi.png" alt="Kuyi">
    </section>
  </div>
  <div>
  <footer>
      <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
  </div>
  </footer>

`
}