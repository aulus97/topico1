import { LocalStorageService } from "./servicios/LocalStorageService.js";
import { SessionStorageService } from "./servicios/SessionStorageService.js";
import { CookiesService } from "./servicios/CookiesService.js";

const usuarioLocal = {nombre: 'jhon Doe', edad: 25};
LocalStorageService.setItem('usuario',usuarioLocal);
const result = LocalStorageService.getItem(usuarioLocal);
console.log('usuario obtebnido desde local storage' + result);

SessionStorageService.setItem('usuario',usuarioLocal);
const resultSession = SessionStorageService.getItem('usuario');
console.log('usuario obtebnido desde session storage' + resultSession);

CookiesService.setCookie('usuario',usuarioLocal,7);
const resultCookie = CookiesService.getCookie('usuario');
console.log('usuario obtebnido desde cookies' + resultCookie);
