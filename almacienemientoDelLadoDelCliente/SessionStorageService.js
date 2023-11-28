export class SessionStorageService(){
    constructor(){

    }
    static setIntem(key,value){
        const encryptedData = Crypto.encryptData(value);
        sessionStorage.setItem(key,encryptedData);
    }

    static getItem(key){
        const encryptedData = sessionStorage.getItem(key);
        return Crypto.decryptData(encryptedData);
    }
}