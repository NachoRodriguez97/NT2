import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getClases() {
        return apiClient.get('/api/listaClases');
    },
    addClase(clase) {
        return apiClient.post('/api/horario', clase)
    },
    
    deleteClase(nombre) {
        return apiClient.delete('/api/horario/' + nombre)
    },
    // putDeporte(nombre) {
    //     return apiClient.put('/api/deporte/', nombre);
    // }
}