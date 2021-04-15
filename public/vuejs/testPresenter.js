const TestPresenter = {
    props:["model"],
    data(){ return {promise:null, data:null, error:null};},
	created(){ 
        this.promise = CardSource.drawCards(DECK_ID_BREAKOUT, 52);
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
    } ,
    render(){ 
        CardSource.reShuffle(DECK_ID_BREAKOUT);
        return <div class="w3-highway-green">
            {promiseNoData(this.promise, this.data, this.error) || <TestView testtext={this.data}/>}
        </div>
        
    }
}