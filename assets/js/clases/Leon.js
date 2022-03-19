import Animales from "./animales.js"

// Clase hija
class Leon extends Animales{
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    rugir() {
        console.log(this.sonido)
    }
}

export default Leon