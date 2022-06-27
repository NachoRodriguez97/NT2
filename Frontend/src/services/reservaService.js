import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getAllReservas() {
        return apiClient.get('/api/reservas');
    },
    deleteReserva(nombre){
        return apiClient.post('/api/reservas/' + nombre);
    }
}