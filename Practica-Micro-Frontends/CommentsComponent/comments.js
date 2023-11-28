import { Servicio } from "../Servicio/servicio.js";

export class Comments extends HTMLElement {
    #servicio = new Servicio();
    constructor(){
        super();
    }
    connectedCallback(){
        const shadow = this.attachShadow({mode: "open"});
        const postId = this.getAttribute("postId");
        this.#render(shadow);
        this.#consultaComentario(postId,shadow);
    }
    async #render(shadow){
        await fetch('./CommentsComponent/comments.html')
        .then(response => response.text())
        .then(html => {
            shadow.innerHTML += html;
        })
        .catch(error=> {console.error('error loading html:' + error)});
    }
    #consultaComentario(postId, shadow){
        this.#servicio.obtenerComentario(postId)
        .then(comments=>{
            let element = shadow.querySelector('#cantidad');
            element.innerHTML = comments.lenght;
            let div = shadow.querySelector("#divComments");
            let tmp  = shadow.querySelector("#tmpComments");
            comments.forEach(element => {
                this.#despliegaComentario(tmp,div,element);
            });
        })
    }

    #despliegaComentario(tmp, div, comment){
        let clone = tmp.content.cloneNode(true);
        let element = clone.querySelector("#user");
        element.innerHTML = comment.email;
        element = clone.querySelector("#body");
        element.innerHTML = comment.body;
       div.appendChild(clone);
    }
}
