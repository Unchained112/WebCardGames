const CardSource={
    apiCall(params){
        return fetch(BASE_URL+params, {"method": "GET"})
        .then(response=>{
            return response.json();
        })
        .then(data =>{
            // console.log(data);
            return data;
        });
    },
    getDeck(){
        return CardSource.apiCall("/new/");
    },
    getShuffledDecks(deck_count){
        return CardSource.apiCall("/new/shuffle/?deck_count=" + deck_count);
    },
    reShuffle(deck_id){
        return CardSource.apiCall(deck_id +"/shuffle/");
    },
    drawCards(deck_id, num){
        return CardSource.apiCall(deck_id + "/draw/?count=" + num);
    },
    addCardsToPile(deck_id, pile_name, cards){
        return CardSource.apiCall(deck_id + "/pile/" + pile_name + "/add/?cards=" + cards);   
    },
    listPileCards(deck_id, pile_name){
        return CardSource.apiCall(deck_id + "/pile/" + pile_name + "/list/");
    },
    shufflePile(deck_id, pile_name){  
        return CardSource.apiCall(deck_id + "/pile/" + pile_name + "/shuffle/");
    },
    drawPileCards(deck_id, pile_name, cards, count){
        if(cards == "No card"){
            return CardSource.apiCall(deck_id + "/pile/" + pile_name + "/draw/?count=" + count);
        }
        if(count == -1){
            return CardSource.apiCall(deck_id + "/pile/" + pile_name + "/draw/?cards=" + cards);
        }
    } 
};