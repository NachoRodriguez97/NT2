import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state:() => {
        return {
            nombre: 'Mateo',
            apellido: 'Amarillo'
        }
    },

    actions: {
        cerrarSesion() {
          this.nombre = "";
          this.apellido = "";
        }
    }
})

