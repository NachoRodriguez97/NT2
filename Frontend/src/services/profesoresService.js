import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getAllProfesores() {
        return apiClient.get('/api/listaProfesores');
    },
    getProfesor(profesor) {
        return apiClient.get('/' + profesor);
    },
    addProfesor(profesor){
        return apiClient.post('/api/profesor', profesor)
    }

    //TODO
/*     addProfesor(profesor) {
        return apiClient.post('/', profesor)
    },
    
    deleteProfesor(profesor) {
        return apiClient.delete('/', profesor)
    },

    putProfesor(profesor) {
        return apiClient.put('/', profesor);
    } */
}