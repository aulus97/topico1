import { Servicio } from "../Servicio/servicio.js";

//import postTemplate from "./PostComponent/posts.html";

export class Post extends HTMLElement{
    #servicio = new Servicio();
    constructor(){
        super();
    }
    connectedCallback(){
        const shadow = this.attachShadow({mode: "open"});
        const postId = this.getAttribute("postId");
        this.#render(shadow);
        this.#consultaPost(postId,shadow);
    }
    async #render(shadow){
        await fetch('./PostComponent/posts.html')
        .then(response => response.text())
        .then(html => {
            shadow.innerHTML += html;
        })
        .catch(error=> {console.error('error loading html:' + error)});
    }

    #consultaPost(postId, shadow){
        this.#servicio.obtenerPost(postId)
        .then(post=>{
            let element = shadow.querySelector('#titulo');
            element.innerHTML = post.title;
            element = shadow.querySelector('#contenido');
            element.innerHTML = post.body;
            this.#consultaUsusario(post.userId, shadow); 
        })
    }

    #consultaUsusario(userId, shadow){
        this.#servicio.obtenerUsuario(userId)
        .then(usr=>{
            let element = shadow.querySelector('#user');
            element.innerHTML = usr.name;
        })
    }
}