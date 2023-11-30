export class LocalStorageService{
    static guardarProductosEnCarrito(productos){
        const productosString = JSON.stringify(productos);
        localStorage.setItem("roductosEnCarrito", productosString)
    };

    static obtenerProductosEnCarrito() {
        const productosString = localStorage.getItem('productosEnCarrito');
        return productosString ? JSON.parse(productosString) : [];
    }
}