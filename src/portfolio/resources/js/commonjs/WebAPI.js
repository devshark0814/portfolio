import $axios from "axios";

class WebAPI {
    postAxios(apiUrl, param) {
        return $axios.post(apiUrl, param, {});
    }
}

export let $WebAPI = new WebAPI();
