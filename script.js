import { HeaderComponent } from "./header/header.js";
import { ContentComponent } from "./content/content.js";
import { FooterComponent } from "./footer/footer.js";
import { Content2Component } from "./content2/content2.js";

document.addEventListener('DOMContentLoaded',function(){
    page('/',()=> showContent('content-info'));
    page('/secundario',()=> showContent('content2-info'));
    page('/*',()=> showContent('content-info'));

    page();
});

function showContent(contentId){
    const contentContainer = document.getElementById('content');
    if(contentId==='content-info'){
        contentContainer.innerHTML = `<${contentId} cantidadProductos="${3}"><${contentId}>`;
    } else{
        contentContainer.innerHTML = `<${contentId}></${contentId}>`;
    }

}

window.customElements.define('header-info', HeaderComponent);
window.customElements.define('content-info', ContentComponent);
window.customElements.define('content2-info', Content2Component);
window.customElements.define('footer-info', FooterComponent);