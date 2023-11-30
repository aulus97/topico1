import { Producto } from "../entidades/producto.js";
import { LocalStorageService } from "../servicios/localStorage.js";

export class ContentComponent extends HTMLElement {
    constructor() {
        super();
        this.productos = [
            new Producto('Coca cola, 'Refresco sabor cola', "19.90","./content/img/cocacola.png"),
            new Producto('Coca cola, 'Refresco sabor cola', "19.90","./content/img/cocacola.png"),
            new Producto('Coca cola, 'Refresco sabor cola', "19.90","./content/img/cocacola.png")
            
		];
        this.productosSeleccionados = [];
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        const cantidadProductos = this.getAttribute("cantidad-productos") || 3;
		this.productosSeleccionados = LocalStorageService.obtenerProductosEnCarrito();

        this.#agregaEstilo(shadow);
        this.#render(shadow, cantidadProductos);
    }

    #render(shadow, cantidadProductos) {
        shadow.innerHTML += `
		<section>
			<div class="card-container">
				${this.productos.slice(0, cantidadProductos).map(producto => this.#renderCard(producto)).join("")}
			</div>
		</section>
		`;
        this.#addEventListeners();
    }

    #renderCard(producto) {
        return `
            <div class="card">
                <img style="width: 100px;" src="${producto.imagen}" alt="${producto.nombre}"></img>
                <div class="card-details">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p>${producto.precio}</p>
                    <button class="add-to-cart-button">Añadir al Carrito</button>
                
                </div>
            </div>
        `;
    }

	#addEventListeners(){
		const addToCardsButton = this.shadowRoot.querySelectorAll('.add-to-card-button');
        addToCardsButton.forEach((buttom, index) => {
            buttom.addEventListener('click', () => this.addToCartHandler(this.productos[index]));
        });
	}

    #addToCartHandler(producto) {
        this.productosSeleccionados.push(producto);
        LocalStorageService.guardarProductosEnCarrito(this.productosSeleccionados);

        const addToCartEvent = new CustomEvent('addToCard',{
            bubbles: true,
            detail: { producto }
        });

        window.dispatchEvent(addToCartEvent);
	}

	#agregaEstilo(shadow) {
		let link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "./content/content.css");
		shadow.appendChild(link);
	}
}