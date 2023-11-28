export class headerComponent extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const shadow = this.attachShadow({mode: "open"});
        this.#render(shadow);
        this.#agregarEstilo(shadow);
    }

    #render(shadow){
        shadow.innerHTML += `
        <header>
            <h1>Microfrontends Header</h1>
        </header>
        `;
    }

    #agregarEstilo(shadow){
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "./header/header.css");
        shadow.appendChild(link);
    }
}