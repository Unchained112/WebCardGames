const FreeCellPresenter = {
    props:["model"],
    data(){ return {promise:null, data:null, error:null};},
	created(){ 
        this.promise = Promise.all([CardSource.drawCards(DECK_ID_BREAKOUT_2, 52), CardSource.reShuffle(DECK_ID_BREAKOUT_2)]);
    },          // lifecycle 1, execute at creation
	watch:{
        'promise': {   // note: not this.promise! 
            immediate:true,  
            handler(){ 
		        this.data = this.error = null;
                if(this.promise){
			        const p = this.promise;
                    this.promise
                    .then(dt=>{
                        if(this.promise===p){
                            this.data = dt[0];
                            console.log(this.data)
                        } 
                    })
                    .catch(er=>{
                        if(this.promise===p){
                            console.log(er);
                            this.promise = Promise.all([CardSource.drawCards(DECK_ID_BREAKOUT_2, 52), CardSource.reShuffle(DECK_ID_BREAKOUT_2)]);
                        }
                    });
                }
            }
        }
    },
    render(){
        var fromUndo = false; // Check the last operation, if it is not from undo, we need to pop one more time when "Undo" 
        return <div>
            {promiseNoData(this.promise, this.data, this.error) || 
            <FreeCellView model={this.model} 
                startFreeCell={r=>{
                    this.model.startGame(this.data.cards);
                    LastGameState = [];
                    LastGameState.push(JSON.parse(JSON.stringify(this.model)));
                    fromUndo = false;
                }}
                restartFreeCell={r=>{
                    LastGameState = [];
                    this.model.restartGame();
                    LastGameState.push(JSON.parse(JSON.stringify(this.model)));
                    fromUndo = false;
                }}
                cellChosen={(r,i)=>{
                    //console.log(r);
                    if(this.model.cells[i].code === "" && this.model.currentCard.code !== ""){
                        // console.log(i);
                        var int = i;
                        this.model.addCardtoCell(int);
                        this.model.emptyCurrentCard();
                        LastGameState.push(JSON.parse(JSON.stringify(this.model)));
                        fromUndo = false;
                    }
                    else if(this.model.cells[i].code !== "" && this.model.currentCard.code === ""){
                        var card = this.model.removeCardtoCell(i);
                        this.model.setCurrentCard(card);
                        this.model.setPreviousLocation(i);
                        LastGameState.push(JSON.parse(JSON.stringify(this.model)));
                        fromUndo = false;
                    }
                    else{
                        return;
                    }
                }}
                foundationChosen={(r,i)=>{
                    // console.log(r);
                    // console.log(i); 
                    if(this.model.currentCard.code !== ""){
                        if(r.code === "" && r.suit === this.model.currentCard.suit){
                            var c_v = this.model.strToValue(this.model.currentCard.value);
                            if(c_v === 1){
                                this.model.addCardtoFoundation(i);
                                this.model.emptyCurrentCard();
                                LastGameState.push(JSON.parse(JSON.stringify(this.model)));
                                fromUndo = false;
                            }
                            else{
                                alert("Illegal move!");
                                return;
                            }
                        }
                        else if(r.suit === this.model.currentCard.suit){
                            var r_v = this.model.strToValue(r.value);
                            var c_v = this.model.strToValue(this.model.currentCard.value);
                            if(r_v === c_v - 1){
                                this.model.addCardtoFoundation(i);
                                this.model.emptyCurrentCard();
                                LastGameState.push(JSON.parse(JSON.stringify(this.model)));
                                fromUndo = false;
                            }
                            else{
                                alert("Illegal move!");
                                return;
                            }
                        }
                    }
                    else{
                        return;
                    }
                }}
                pileChosen={(r,i)=>{
                    // console.log(r);
                    // console.log(i); 
                    if(this.model.currentCard.code === ""){
                        var card = this.model.removeCardtoPile(i);
                        if(card.code === ""){
                            return;
                        }
                        else{
                            this.model.setCurrentCard(card);
                            this.model.setPreviousLocation(i);
                        }
                        LastGameState.push(JSON.parse(JSON.stringify(this.model)));
                        fromUndo = false;
                    }
                    else{
                        if(this.model.previousLocation === i){
                            this.model.addCardtoPile(i);
                            this.model.emptyCurrentCard();
                            LastGameState.push(JSON.parse(JSON.stringify(this.model)));
                            fromUndo = false;
                        }
                        else{
                            var flag = this.model.pileLegalCheck(i, this.model.currentCard);
                            if(flag){
                                this.model.addCardtoPile(i);
                                this.model.emptyCurrentCard();
                                LastGameState.push(JSON.parse(JSON.stringify(this.model)));
                                fromUndo = false;
                            }
                            else{
                                alert("Illegal move!");
                                return;
                            }
                        }
                    }
                }}
                cancelSelect={r=>{
                    if(this.model.previousLocation >= 0 && this.model.previousLocation < 4){
                        this.model.addCardtoCell(this.model.previousLocation);
                        this.model.setPreviousLocation(-1);
                    }
                    if(this.model.previousLocation >= 4 && this.model.previousLocation < 8){
                        this.model.addCardtoFoundation(this.model.previousLocation);
                        this.model.setPreviousLocation(-1);
                    }
                    if(this.model.previousLocation >= 10 && this.model.previousLocation < 18){
                        this.model.addCardtoPile(this.model.previousLocation);
                        this.model.setPreviousLocation(-1);
                    }
                    this.model.emptyCurrentCard();
                    LastGameState.push(JSON.parse(JSON.stringify(this.model)));
                    fromUndo = false;
                }}
                Undo={r=>{
                    if(LastGameState.length >= 1){
                        if(fromUndo){
                            var temp = LastGameState.pop();
                            console.log(LastGameState);
                            this.model.setModel(temp);
                            fromUndo = true;
                        }
                        else{
                            LastGameState.pop();
                            var temp = LastGameState.pop();
                            console.log(LastGameState);
                            this.model.setModel(temp);
                            fromUndo = true;
                        }
                        
                    }
                }}
            />}
        </div>
        
    }
}