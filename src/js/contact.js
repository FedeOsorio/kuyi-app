import '../../src/style.css'
import javascriptLogo from '../../src/javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <h1 class="kuyiTitle">Kuyi App</h1>
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="logo nav-item">
          <span>Inicio</span>
          <img src="/public/img/guinea-pig.svg" alt="">
        </li>
        <li class="logo nav-item">
          <span>Cobis</span>
          <img src="/public/img/guinea-pig4.svg" alt="">
        </li>
        <li class="logo nav-item">
          <span>Información</span>
          <img src="/public/img/guinea-pig3.svg" alt="">
        </li>
        <li class="logo nav-item">
          <span>Contacto</span>
          <img src="/public/img/guinea-pig2.svg" alt="">
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <section>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eos eum nobis reiciendis aliquam sapiente eaque,
      magnam nam, facere fugit mollitia soluta nihil, doloremque illum quam animi nemo modi amet!
      Dolores ipsa eius nobis pariatur, soluta nemo ipsam iure explicabo quae rem labore corrupti ratione quam illum
      commodi ducimus harum enim ipsum repellendus itaque est maxime magni architecto? Id, repudiandae.
    </section>

    <section>
      <img style="width: 300px;" src="/img/Kuyi.png" alt="Kuyi">
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

setupCounter(document.querySelector('#counter'))

