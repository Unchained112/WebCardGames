const Game24examSource= {
    apiCall(params) {
        return fetch(BASE_URL_GAME_24_EXAM + params, {"method": "GET"})
            .then(response => {
                return response.json();
            })
            .then(data => {
                // console.log(data);
                return data;
            });
    },
    getSolution(a,b,c,d) {
        return Game24examSource.apiCall("?a="+a+"&b="+b+"&c="+c+"&d="+d);
    }
}