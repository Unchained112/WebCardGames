const BlackjackPresenter = {
    props:["model"],
    data(){ return {promise:null, data:null, error:null};},
	created(){ 
        this.promise =Promise.all([CardSource.reShuffle(DECK_ID_24GAME_1),CardSource.drawCards(DECK_ID_24GAME_1,3),CardSource.drawCards(DECK_ID_24GAME_1,2)]);
    },          
    
	watch:{
        'promise': {   // note: not this.promise! 
            immediate:true,  
            handler(){
		        this.data = this.error = null;
                if(this.promise){
			        const p = this.promise;
                    this.promise.then(dt=>{if(this.promise===p)
                        {console.log(dt);
                            this.data = dt;console.log(this.data)} })
                        .catch(er=>{if(this.promise===p){}});
                }
            }
        }
    },
    render(){
        return <div>
            {promiseNoData(this.promise, this.data, this.error) ||
            // <BlackjackView  stand={()=>this.model.stand()}
            //                 hit={()=>this.model.addcard()}
            //                 clear={()=>{this.model.clear();
            //                         this.promise=Promise.all([CardSource.reShuffle(DECK_ID_24GAME_1),CardSource.drawCards(DECK_ID_24GAME_1,2)]);}}
            <BlackjackView nextcardsResult={this.data} cardChosen={code=>{console.log("The user chose card",code); }}/>}
        </div>
        
    }
}