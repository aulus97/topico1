class profileCard extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const template = document.createElement('template');
        template.innerHTML= '
        <link rel="stylesheet" type="text/css" href="styles.css">
        <div class="profile-card">
            <h1>${this.getAttribute('username')}</h1>
            <img src="${this.getAttibute('profile-image')}" alt="${this.getAttribute('username')}'s profile image">
            <h5>${this.getAttibute('description')}</h5>
            <button>${this.getAttibute('following')==='true' ? 'Dejar de seguir' : 'Seguir'}</button>
            </div>
        ';
        shadow.appendChild(template.content.cloneNode(true));

        const button = shadow.querySelector('button');
        button.addEventListener('click',()=>{
            if(button.textContent === 'Seguir'){
                button.textContent === 'Dejar Seguir';
            }
            else{
                button.textContent === 'Seguir';
            }
        })
    }
}
customElements.define('profile-card',profileCard);