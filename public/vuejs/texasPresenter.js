const TexasPresenter = {
    
    props:["model"],
    data(){ return {promise:null, data:null, error:null};},
	created(){ 
        this.promise =Promise.all([CardSource.reShuffle(DECK_ID_24GAME_1),CardSource.drawCards(DECK_ID_24GAME_1,15)]);
    },          
    
	watch:{
        'promise': {   // note: not this.promise! 
            immediate:true,  
            handler(){ 
		        this.data = this.error = null;
                if(this.promise){
			        const p = this.promise;
                    this.promise.then(dt=>{if(this.promise===p)
                        {this.data = dt[1];console.log(this.data)} })
                        .catch(er=>{if(this.promise===p){}});
                }
            }
        }
    },
    render(){
        return <div>
            {promiseNoData(this.promise, this.data, this.error) ||
            <TexasView 
                model = {this.model}
                
                
                call = {e => this.model.call()}
                users =  {this.model.users}
                totalCards={this.data} 
                cardChosen={code=>{console.log("The user chose card",code); }}/>}
            
        </div>
        
    }
}