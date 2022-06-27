import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getDeportes() {
        return apiClient.get('/api/listaDeportes');
    },
    addDeporte(deporte) {
        return apiClient.post('/api/deporte',deporte)
    },
    
    deleteDeporte(nombre) {
        return apiClient.delete('/api/deporte/' + nombre)
    },
    putDeporte(nombre) {
        return apiClient.put('/api/deporte/', nombre);
    }
}