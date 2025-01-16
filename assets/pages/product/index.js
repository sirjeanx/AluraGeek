import { lista } from '../../js/fakeAPI/index.js'
import { containerCards, updateList } from '../../js/index.js'
import { footer, nav } from '../../js/navHeader/index.js'

const productInfo = (products)=>{
  const productinfo = document.querySelector('[data-product]')
  
  const html = `
  <div class="product__img" id="teste" style="background-image: url('${products.img}');background-size: contain ;"></div>
  <div class="product__info">
    <h1>${products.name}</h1>
    <p>R$ ${products.price}</p>
    <p>${products.description}</p>
  </div>
  `
  productinfo.innerHTML = html;
}


window.onload = function () {

  
  const url = new URL(window.location)
  const listIndex = url.searchParams.get('listIndex')
  const id = url.searchParams.get('id')
  
  updateList();
  
  const paths = {
    controle: "../../img/controle.png",
    alura: "../../img/alura.png",
    geek: "../../img/geek.png",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    imgSeta: "../../img/seta.png",
    imgSlider: "../../img/setaSlider.png",
    allProducts: "../allproducts/index.html",
    productList: lista[listIndex],
    productAmount: '',
    listIndex: listIndex,
    url: "",
    login: "../login/index.html",
    inputShow: true,
  } 

  const productURL = ''
  containerCards(paths);
  const title = document.querySelector('[data-title]')
  title.innerHTML = "Produtos similares"
  

  nav(paths);
  productInfo(lista[listIndex].products[id-1].info)
  footer(paths);

}