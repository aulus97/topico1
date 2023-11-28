import { LocalStorageService } from "../servicios/localStorage.js";

export class HeaderComponent extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const shadow = this.attachShadow({ mode: "open" }); // Crea un Shadow DOM abierto y lo asocia con el elemento personalizado.
		this.#agregaEstilo(shadow); // Llama al método privado #agregaEstilo para agregar los estilos al Shadow DOM.
		this.#render(shadow); // Llama al método privado #render para renderizar el contenido en el Shadow DOM.
		window.addEventListener('addToCart', (event)=> this.#addToCartHandler(event.detail.producto));
	}

	// Método privado para renderizar el contenido en el Shadow DOM.
	#render(shadow) {
		shadow.innerHTML += `
		<header>
		  <h1>Microfrontend Header</h1>
		  <nav>
				<div class="cart-container">
					<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/secundario">Secudaria</a></li>

					<li><a href="/secundario"><img class="card" src="./header/img/cart-shopping.png" alt="Cart-Icon" style="width 30px"></img></a></li>
					<span class="cart-counter">0</span>

					</ul>
			
				</div>				
			</nav>
		</header>
	  `;
	}

	#addToCartHandler(producto){
		const cartCounter = this.shadowRoot.querySelector('.cart-counter');
		const productosEnCarrito = LocalStorageService.obtenerProductosEnCarrito();
	}
	// Método privado para agregar los estilos al Shadow DOM.
	#agregaEstilo(shadow) {
		let link = document.createElement("link"); // Crea un elemento link para cargar los estilos CSS.
		link.setAttribute("rel", "stylesheet"); // Establece el atributo "rel" en "stylesheet".
		link.setAttribute("href", "./header/header.css"); // Establece la ruta del archivo CSS.
		shadow.appendChild(link); // Agrega el elemento link al Shadow DOM para cargar los estilos.
	}
}