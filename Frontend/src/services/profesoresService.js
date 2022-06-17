import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3001/api/profesores',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getAllProfesores() {
        return apiClient.get('/');
    },
    getProfesor(profesor) {
        return apiClient.get('/' + profesor);
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