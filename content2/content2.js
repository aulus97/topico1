export class Content2Component extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const shadow = this.attachShadow({ mode: "open" });		 
		this.#agregaEstilo(shadow);	
		this.#render(shadow);
	}

	#render(shadow) {
		shadow.innerHTML += `
		<section>
			<h2>Microfrontend Content -- Pagina Secundaria</h2>
			<p>Este es el contenido de la página secundaria. </p>
		</section>
		`;
	}

	#agregaEstilo(shadow) {
		let link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "./content/content.css");
		shadow.appendChild(link);
	}
}