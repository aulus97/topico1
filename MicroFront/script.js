import { headerComponent } from "./header/header.js";
import { contentComponent } from "./content/content.js";
import { footerComponent } from "./footer/footer.js";

window.customElements.define('header-info', headerComponent);
window.customElements.define('content-info', contentComponent);
window.customElements.define('footer-info', footerComponent);
