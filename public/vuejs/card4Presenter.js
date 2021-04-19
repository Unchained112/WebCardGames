const Card4Presenter={
    props:["model"],
    data(){return {promise:null, data:null, error:null}},
    created(){
        this.promise =Promise.all([CardSource.reShuffle(DECK_ID_24GAME_1),CardSource.drawCards(DECK_ID_24GAME_1,4)]);
        },
    watch:{
        'promise': {   // note: not this.promise!
            immediate:true,
            handler(){
                //console.log(this.promise)
                this.data = this.error = null;
                if(this.promise){
                    const p = this.promise;
                    //console.log(this.promise)
                    //console.log(this.promise===p)
                    this.promise
                        .then(dt=>{if(this.promise===p) {
                            //console.log(dt);
                            this.data = dt[1];
                            //console.log(this.data);
                        }})
                        .catch(er=>{if(this.promise===p){}});
                    //console.log(this.data);
                }
            }
        }
    },
    render(){
        return(
            <div>
                <TitleView thisRound={this.model.thisround}/>
                <CalculatorScreenView formula={this.model.simpleformula}/>
                <BasicActionView clear={e=>this.model.ac()}
                                 del={e=>this.model.delete()}
                                 addOperator={e=>this.model.addOperatortoFormula(e)}
                                 OK={()=>{this.model.computeresult();
                                    this.promise=Promise.all([CardSource.reShuffle(DECK_ID_24GAME_1),CardSource.drawCards(DECK_ID_24GAME_1,4)]);
                                 }}
                                 noSolution={()=>{this.model.nosolution();
                                    this.promise=Promise.all([CardSource.reShuffle(DECK_ID_24GAME_1),CardSource.drawCards(DECK_ID_24GAME_1,4)]);
                                 }}
                />
                {promiseNoData(this.promise, this.data, this.error) ||
                <Game4CardResultView game4nextcardsResult={this.data} cardChosen={code=>{console.log("The user chose card",code); this.model.addCardtoFormula(code)}}/>}
            </div>
        )

    }
}