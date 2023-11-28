
export class contentComponent extends HTMLElement{
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
        <section>
            <h2>Microfrontends Content</h1>
            <p>Contenido de pg</p>
        </section>
        `;
    }

    #agregarEstilo(shadow){
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "./content/content.css");
        shadow.appendChild(link);
    }


}