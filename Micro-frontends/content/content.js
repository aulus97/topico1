import { Producto } from "../entidades/producto.js";
import { LocalStorageService } from "../servicios/localStorage.js";

export class ContentComponent extends HTMLElement {
	constructor() {
		super();
		this.productos = [
			new Producto('Coca cola, 'Refresco sabor cola', )
		];
		this.productosSeleccionados = [];
	}
	connectedCallback() {
		const shadow = this.attachShadow({ mode: "open" });	
		const cantidadProductos = this.getAttribute("cantidad-productos");
		this.productosSeleccionados = LocalStorageService.obtenerProductosEnCarrito();	 
		this.#agregaEstilo(shadow);	
		this.#render(shadow);
	}

	#render(shadow, cantidadProductos) {
		shadow.innerHTML += `
		<section>
			<div class="card-container">
				${this.productos.slice(0,cantidadProductos).map(producto=>this.#renderCard(producto)).join("")}
			</div>
		</section>
		`;
		this.#addEventListeners();
	}

	#addEventListeners(){
		const addToCardsButton = this.shadowRoot.querySelectorAll('.add-to-card-button');
		addToCardsButton.forEach(buttom, index)=>{
			buttom.addEventListener('click',()=> this.addToCartHandler(this.productos[index]));
		}
	}

	#addToCartHandler(producto){


		const addToCartEvent= new CustomEvent(){

		}
	}

	#agregaEstilo(shadow) {
		let link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "./content/content.css");
		shadow.appendChild(link);
	}
}