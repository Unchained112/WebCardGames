const Card4Presenter={
    props:["model"],
    data(){return {promise:null, data:null, error:null}},
    created(){
        this.promise =CardSource.drawCards("qf4rvii61dzo",4);
    },
    watch:{
        'promise': {   // note: not this.promise!
            immediate:true,
            handler(){
                this.data = this.error = null;
                if(this.promise){
                    const p = this.promise;
                    //console.log(this.promise)
                    //console.log(this.promise===p)
                    this.promise
                        .then(dt=>{if(this.promise===p) {
                            //console.log(dt);
                            this.data = dt;
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
                {promiseNoData(this.promise, this.data, this.error) ||
                <Game4CardResultView game4nextcardsResult={this.data} cardChosen={code=>{console.log("The user chose card",code); this.model.addCardtoFormula(code)}}/>}
            </div>
        )

    }
}