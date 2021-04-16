const BreakoutPresenter = {
    props:["model"],
    data(){ return {promise:null, data:null, error:null};},
	created(){ 
        if(BREAKOUT_DECK_ID_FLAG){
            this.promise = CardSource.drawCards(DECK_ID_BREAKOUT_1, 52);
            BREAKOUT_DECK_ID_FLAG = false;
            CardSource.reShuffle(DECK_ID_BREAKOUT_2);
        }
        else{
            this.promise = CardSource.drawCards(DECK_ID_BREAKOUT_2, 52);
            BREAKOUT_DECK_ID_FLAG = true;
            CardSource.reShuffle(DECK_ID_BREAKOUT_1);
        }
    },          // lifecycle 1, execute at creation
	watch:{
        'promise': {   // note: not this.promise! 
            immediate:true,  
            handler(){ 
		        this.data = this.error = null;
                if(this.promise){
			        const p = this.promise;
                    this.promise.then(dt=>{if(this.promise===p){this.data = dt;console.log(this.data)} }).catch(er=>{if(this.promise===p){}});
                }
            }
        }
    },
    render(){      
        return <div>
            {promiseNoData(this.promise, this.data, this.error) || <BreakoutView breakoutModel={this.model} breakout_data={this.data}/>}
        </div>
        
    }
}