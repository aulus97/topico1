export class FooterComponent extends HTMLElement {
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
		<footer>
    		<p>&copy; 2023 Microfrontend Footer</p>
		</footer>
		`;
	}

	#agregaEstilo(shadow) {
		let link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "./footer/footer.css");
		shadow.appendChild(link);
	}
	
}