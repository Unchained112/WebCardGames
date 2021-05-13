const Game24cardPresenter={
    props:["model"],
    data(){return {promise:null, data:null, error:null, examdata:null,solution:null}},
    created(){
        this.promise =Promise.all([CardSource.reShuffle(DECK_ID_24GAME_1),CardSource.drawCards(DECK_ID_24GAME_1,4)]);
        this.solution = Game24examSource.getSolution([1,1,1,1])
    },
    watch:{
        'promise': {   // note: not this.promise!
            immediate:true,
            handler(){
                this.data = this.error = null;
                if(this.promise){
                    const p = this.promise;
                    this.promise
                        .then(dt=>{if(this.promise===p) {
                            this.data = dt[1];
                        }})
                        .catch(er=>{
                            if(this.promise===p){
                                console.log(er);
                                this.promise =Promise.all([CardSource.reShuffle(DECK_ID_24GAME_1),CardSource.drawCards(DECK_ID_24GAME_1,4)]);
                            }});
                }
            }
        },
        'solution':{
            immediate: true,
            handler() {
                this.examdata = this.error=null;
                if (this.solution){
                    const q=this.solution;
                    this.solution
                        .then(dt=>{if(this.solution===q){
                            this.examdata = dt;
                            //console.log(this.examdata)
                        }})
                        .catch(er=>{
                            if(this.solution===q){console.log(er);}}
                        )
                }
            }
        }
    },
    render(){
        return(
            <div className="game24start">
                <div className="game24leftcolumn">
                    {promiseNoData(this.solution, this.examdata, this.error) ||
                    <Game24PreviousView previousCards={this.model.previouscard}
                                        previousSolution={()=>{
                                            if(this.examdata.cnt===0){
                                                return "Not Solvable"
                                            }else{
                                                return this.examdata.result[0]
                                            }
                                        }}
                                        previousCorrect={e=>this.model.verifyresult(this.examdata.cnt) }
                                        //addCorrect={()=>this.model.addcorrectsum()}
                                        previousUserSolution={this.model.previoususersolution}
                    />}
                </div>
                <div className="game24middlecolumn">
                    <TitleView thisRound={()=>{
                        if(this.model.thisround===11){
                            return 10
                        }else{
                            return this.model.thisround
                        }
                    }}/>
                    <CalculatorScreenView formula={this.model.simpleformula} score={this.model.correctsum} gameover={this.model.thisround===4}/>
                    <BasicActionView clear={e=>this.model.ac()}
                                     del={e=>this.model.delete()}
                                     addOperator={e=>this.model.addOperatortoFormula(e)}
                                     OK={()=>{
                                         if(this.model.computeresult()){// Valid calculator syntax
                                             this.model.previouscard=this.data
                                             const examarr=this.model.previousarr()
                                             this.promise=Promise.all([CardSource.reShuffle(DECK_ID_24GAME_1),CardSource.drawCards(DECK_ID_24GAME_1,4)]);
                                             this.solution=Game24examSource.getSolution(examarr)
                                         }
                                     }}
                                     noSolution={()=>{this.model.nosolution();
                                         this.model.previouscard=this.data
                                         const examarr=this.model.previousarr()
                                         this.promise=Promise.all([CardSource.reShuffle(DECK_ID_24GAME_1),CardSource.drawCards(DECK_ID_24GAME_1,4)]);
                                         this.solution=Game24examSource.getSolution(examarr)
                                     }}
                                     gameover={this.model.thisround===4}
                    />
                </div>
                {promiseNoData(this.promise, this.data, this.error) ||
                <Game4CardResultView  thisRound={this.model.thisround}
                                      game4nextcardsResult={()=>{
                                          if(this.model.thisround===11){
                                              return this.model.carddefault
                                          }else{
                                              return this.data
                                          }
                                      }}
                                      cardChosen={code=>{console.log("The user chose card",code); this.model.addCardtoFormula(code)}}
                />}

            </div>
        )

    }
}