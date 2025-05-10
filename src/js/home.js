import '../../src/style.css'
import javascriptLogo from '../../src/javascript.svg'
import viteLogo from '/vite.svg'

export function renderHome(contenedor){ 
    contenedor.innerHTML = `
  <div class="container">
    <section>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eos eum nobis reiciendis aliquam sapiente eaque,
      magnam nam, facere fugit mollitia soluta nihil, doloremque illum quam animi nemo modi amet!
      Dolores ipsa eius nobis pariatur, soluta nemo ipsam iure explicabo quae rem labore corrupti ratione quam illum
      commodi ducimus harum enim ipsum repellendus itaque est maxime magni architecto? Id, repudiandae.
    </section>

    <section>
      <img style="width: 300px;" src="./public/img/Kuyi.png" alt="Kuyi">
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