const BreakoutPresenter = {
    props:["model"],
    data(){ return {promise:null, data:null, error:null};},
	created(){ 
        this.promise = Promise.all([CardSource.drawCards(DECK_ID_BREAKOUT_1, 52), CardSource.reShuffle(DECK_ID_BREAKOUT_1)]);
    },          // lifecycle 1, execute at creation
	watch:{
        'promise': {   // note: not this.promise! 
            immediate:true,  
            handler(){ 
		        this.data = this.error = null;
                if(this.promise){
			        const p = this.promise;
                    this.promise
                    .then(dt=>{if(this.promise===p){this.data = dt[0];} })
                    .catch(er=>{
                        if(this.promise===p){
                            console.error(er);
                            this.promise = Promise.all([CardSource.drawCards(DECK_ID_BREAKOUT_1, 52), CardSource.reShuffle(DECK_ID_BREAKOUT_1)]);
                        }
                    });
                }
            }
        }
    },
    render(){
        return <div>
            {promiseNoData(this.promise, this.data, this.error) || <div class="w3-highway-green"><BreakoutView breakoutModel={this.model} breakout_data={this.data}/></div>}
        </div>
        
    }
}