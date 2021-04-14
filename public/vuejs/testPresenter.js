// function TestPresenter(props){
//     var promise = null;
//     var data = null;
//     var error = null;
//     promise = CardSource.getShuffledDecks(1);
//     console.log(promise);
//     promise.then(dt=>{ dt}).catch(er=>{error = er});
//     console.log(data);
//     return (promiseNoData(promise, data, error) || <TestView testmodel={data.deck_id} />);
// }

const TestPresenter = {
    props:["model"],
    data(){ return {promise:null, data:null, error:null};},
	created(){ this.promise = CardSource.getShuffledDecks(1);},          // lifecycle 1, execute at creation
	watch:{
        'promise': {   // note: not this.promise! 
            immediate:true,  
            handler(){ 
		        this.data = this.error = null;
                // this.searchQuery = "";
                // this.searchType = "";
                if(this.promise){
			        const p = this.promise;
                    this.promise.then(dt=>{if(this.promise===p){this.data = dt;console.log(this.data)} }).catch(er=>{if(this.promise===p){}});
                }

            }
        }
    } ,
    render(){ 
        return <div>
            {promiseNoData(this.promise, this.data, this.error) || <TestView testtext={this.data.deck_id}/>}
            {/* {promiseNoData(this.promise, this.data, this.error) ||
            <SearchResultsView searchResults={this.data} dishChosen={id=>{
                console.log("The user chose dish ", id);
                this.model.setCurrentDish(id);
            }}/>} */}
        </div>
    }
}