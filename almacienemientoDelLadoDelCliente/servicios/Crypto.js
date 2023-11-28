export class Crypto{
    constructor(){

    }
    static encryptData(data){
        try {
            const encryptedData = btoa(JSON.stringify(data));
            return encryptedData;
        } catch (error) {
            console.log('error al cifrar datos:' + error);
            return null;
        }
    }
    static decryptData(data){
        try {
            return JSON.parse(atob(data));
        } catch (error) {
            console.log('error al decifrar datos:' + error);
            return null;
        }
    }
}