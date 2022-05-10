import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getUsuarios() {
        return apiClient.get('/api/lista');
    },
    setUsuario(usuario) {
        return apiClient.post('/api/usuario',usuario)
    },
    deleteUsuario(mail) {
        return apiClient.delete('/api/usuario/' + mail)
    },
    putUsuario(usuario) {
        return apiClient.put('/api/usuario',usuario);
    }
}
