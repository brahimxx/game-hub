import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '19d2266259a04ae08ee3d0c3d08e59ba'
    }
})