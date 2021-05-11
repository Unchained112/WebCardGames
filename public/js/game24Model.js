class game24Model{
    constructor(simpleformula="Enter Your Solution:)",result=" ") {
        this.observer = []
        this.simpleformula = simpleformula
        this.formulastack = []
        this.usedCard = []
        this.result = result

        this.complexformula = ""
        this.cardFlag = false
        this.lefttime = ""
        this.settime = 120000
        this.thisround = 1
        this.score = 0
        this.carddefault = this.initprevious()
        this.previouscard = this.initprevious()
        this.temppreviouscard = this.initprevious()
        this.previoussolution=""
    }

    settempprevious(){
        this.temppreviouscard=this.previouscard
    }

    initprevious(){
        var old=new Object()
        old.cards=[{code:"1", image: "./assets/back_2.png"}, {code:"1",image: "./assets/back_2.png"}, {code:"1",image: "./assets/back_2.png"}, {code:"1",image: "./assets/back_2.png"}]
        return old
    }

    previousarr(){
        if(this.thisround===1){
            return [1,1,1,1]
        }

        let examnum=[]
        for (let i=0;i<4;i++){
            switch(this.previouscard.cards[i].code[0]){
                case "A":
                    examnum[i]="1";
                    break;
                case "0":
                    examnum[i]="10";
                    break;
                case "J":
                    examnum[i]="11";
                    break;
                case "Q":
                    examnum[i]="12";
                    break;
                case "K":
                    examnum[i]="13";
                    break;
                default:
                    examnum[i]=this.previouscard.cards[i].code[0];
            }

        }
        console.log(examnum)
        return examnum
    }

    solvableresult(e){
        console.log(e)
        if(e.cnt==0){
            return "No solution for previous round"
        }else{
            return e.result[0]
        }
    }

    addCardtoFormula(x){
        //console.log("used Card",this.usedCard)
        if(this.cardFlag===true){
            if(this.usedCard[this.usedCard.length-1]!==x){
                this.delete()
            }
        }
        if(this.simpleformula==="Enter Your Solution:)"){this.simpleformula=""}
        let card
        switch (x[0]) {
            case "A":
                card="1";
                break;
            case "0":
                card="10";
                break;
            case "J":
                card="11";
                break;
            case "Q":
                card="12";
                break;
            case "K":
                card="13";
                break;
            default:
                card=x[0];
        }
        if(this.usedCard.indexOf(x)===-1){
            this.formulastack=[...this.formulastack,card]
            this.simpleformula=this.formulastack.join("")
            this.cardFlag=true
            this.usedCard=[...this.usedCard,x]
        }else{
            console.log("Illegal Action: Card Already Used")
        }
    }

    addOperatortoFormula(x){
        this.formulastack=[...this.formulastack,x]
        this.simpleformula=this.formulastack.join("")
        this.cardFlag=false
    }

    ac(){
        this.usedCard=[]
        this.simpleformula="Enter Your Solution:)"
        this.result=" "
        this.formulastack=[]
        this.cardFlag=false
    }

    delete(){
        if(this.formulastack.length!==0){
            let temp1
            temp1=this.formulastack.pop()
            switch (temp1){
                case "+":
                case "-":
                case "*":
                case "/":
                case "(":
                case ")":
                    break;
                default:
                    this.usedCard.pop();
            }
            this.simpleformula=this.formulastack.join("")
            if(this.simpleformula===""){
                this.simpleformula="Enter Your Solution:)"
            }else{
                switch (this.formulastack[this.formulastack.length-1]){
                    case "+":
                    case "-":
                    case "*":
                    case "/":
                    case "(":
                    case ")":
                        this.cardFlag=false;
                        break;
                    default:
                        this.cardFlag=true;
                }
            }
        }
    }

    computeresult(){

        try{
            this.result=eval(this.simpleformula)
            if(this.usedCard.length!==4){
                throw -1
            }
            console.log(this.result)
            this.thisround=this.thisround+1
            this.ac()
            return true
        }catch (err){
            if(err===-1){
                alert("Please use all the cards")
                this.ac()
            }else{
                alert("Syntax Error");
                this.ac()
            }
            return false
        }

    }

    nosolution(){
        console.log("No Solution")
        this.thisround=this.thisround+1
        this.ac()
    }

    showtime(){
        var endtime= new Date()
        var nowtime=new Date()
        var now_s=nowtime.getTime()
        endtime.setTime(now_s+1000*60*2)
        var lefttime=endtime.getTime()-nowtime.getTime()
        var leftm = Math.floor(lefttime/(1000*60)%60)
        var lefts = Math.floor(lefttime/1000%60)
        console.log(leftm + ":" + lefts)
        this.lefttime= leftm + ":" + lefts
        console.log(this.lefttime)
        return this.lefttime
    }

    calculatescore(){

    }

}