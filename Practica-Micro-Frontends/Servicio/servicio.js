export class servicio{
    #urlService = 'https://jsonplaceholder.typicode.com/';
    #urlPosts = this.#urlService+'posts/';
    #urlUsers = this.#urlService+'users/';
    #urlComments = '/comments/';

    async obtenerPost(postId){
        let response = await fetch(this.#urlPosts + postId);
        let json = await response.json();
        return json;
    }
    async obtenerUsusario(userId){
        let response = await fetch(this.#urlUsers + userId);
        let json = await response.json();
        return json;
    }
    async obtenerComentarios(postId){
        let response = await fetch(this.#urlPosts + postId + this.#urlComments);
        let json = await response.json();
        return json;
    }
}