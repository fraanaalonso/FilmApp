import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '035fd5eb36dd954937f1cc862dad6532',
        language: 'es-ES',
    }
});


export default movieDB;