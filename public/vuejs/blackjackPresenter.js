const BlackjackPresenter = {
    props:["model"],
    data(){ return {promise:null, data:null, error:null};},
	created(){ 
        this.promise = Promise.all([CardSource.reShuffle(DECK_ID_BLACKJACK),CardSource.drawCards(DECK_ID_BLACKJACK,24)]);
    },          
    
	watch:{
        'promise': {   // note: not this.promise! 
            immediate:true,  
            handler(){
		        this.data = this.error = null;
                if(this.promise){
			        const p = this.promise;
                    this.promise.then(dt=>{if(this.promise===p)
                        {//console.log(dt);
                            this.data = dt[1].cards;
                            //console.log(this.data)
                        } })
                        .catch(er=>{
                            if(this.promise===p){
                                console.log(er);
                                this.promise = Promise.all([CardSource.reShuffle(DECK_ID_BLACKJACK),CardSource.drawCards(DECK_ID_BLACKJACK,24)]);
                            }
                        });
                }
                console.log(this.promise);
            }
        }
    },
    render(){
        return <div>
            {promiseNoData(this.promise, this.data, this.error) ||
            // <BlackjackView  stand={()=>this.model.stand()}
      
            <BlackjackView  model={this.model}
                            start={()=>this.model.StartGame(this.data)}
                            hit={()=>{this.model.Hit()}}
                            stand={()=>{this.model.Stand()}}
                            clear={()=>{                               
                                this.promise = Promise.all([CardSource.reShuffle(DECK_ID_BLACKJACK),CardSource.drawCards(DECK_ID_BLACKJACK,24)]);
                                this.model.RestartGame(this.data);
                            }}
            />}
        </div>
        
    }
}