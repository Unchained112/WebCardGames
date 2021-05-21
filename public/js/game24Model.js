class game24Model{
    constructor(simpleformula="Enter Your Solution:)") {
        this.observer = []
        this.simpleformula = simpleformula
        this.formulastack = []
        this.usedCard = []
        this.result = 0



        this.complexformula = ""
        this.cardFlag = false
        this.thisround = 1
        this.carddefault = this.initprevious()
        this.previouscard = this.initprevious()
        this.examarr=[]
        this.previoususersolution="No Solution"

        //for report
        this.cnt=[]
        this.correctsum=0
        this.cardhistory=[]
        this.resultrecord=[]
        this.solutionhistory=[]
        this.usersolutionhistory=[]

        this.reportarr=[]
    }

    createreportarr(){
        for(let i=0;i<10;i++){
            this.reportarr=[...this.reportarr,
                [i+1,this.cardhistory[i]
                    ,this.solutionhistory[i],
                    this.resultrecord[i],
                    this.usersolutionhistory[i]
                ]]
        }
    }

    illegaloperator(data){
        for(let i=0;i<data.cnt;i++){
            if(data.result[i].indexOf("^")===-1){
                return i
            }
        }
        return -1
    }


    addcnt(cnt,sol){
        //console.log(cnt)
        this.cnt=[...this.cnt,cnt]
        this.cardhistory=[...this.cardhistory,this.previouscard.cards]
        this.solutionhistory=[...this.solutionhistory,sol]
        this.usersolutionhistory=[...this.usersolutionhistory,this.previoususersolution]
    }

    calculatescore(){
        //console.log("calculating final score")
        this.cnt=this.cnt.slice(1)
        this.cardhistory=this.cardhistory.slice(1)
        this.solutionhistory=this.solutionhistory.slice(1)
        for(let i=0;i<10;i++){
            if(this.cnt[i]===0){
                if(this.resultrecord[i]==="No Solution"){
                    this.correctsum+=1
                }
            }else{
                if(this.resultrecord[i]===24){
                    this.correctsum+=1
                }
            }
        }
    }

    initprevious(){
        var old=new Object()
        old.cards=[{code:"1", image: "./assets/back_2.png"}, {code:"1",image: "./assets/back_2.png"}, {code:"1",image: "./assets/back_2.png"}, {code:"1",image: "./assets/back_2.png"}]
        return old
    }

    previousarr(){
        if(this.thisround===1){
            this.examarr= [1,1,1,1]
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
        //console.log(examnum)
        this.examarr= examnum
    }

    solvableresult(e){
        //console.log(e)
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
            //console.log("Illegal Action: Card Already Used")
            alert("Card Already Used!")
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
            //console.log("User compute "+this.result)
            this.thisround=this.thisround+1
            this.previoususersolution=this.simpleformula+"="+this.result
            this.resultrecord=[...this.resultrecord,this.result]
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
        //console.log("User choose No Solution")
        this.thisround=this.thisround+1
        this.previoususersolution="No Solution"
        this.resultrecord=[...this.resultrecord,this.previoususersolution]
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
        //console.log(leftm + ":" + lefts)
        this.lefttime= leftm + ":" + lefts
        //console.log(this.lefttime)
        return this.lefttime
    }

    restart(){
        this.observer = []
        this.simpleformula = "Enter Your Solution:)"
        this.formulastack = []
        this.usedCard = []
        this.result = 0



        this.complexformula = ""
        this.cardFlag = false
        this.thisround = 1
        this.carddefault = this.initprevious()
        this.previouscard = this.initprevious()
        this.examarr=[]
        this.previoususersolution="No Solution"

        //for report
        this.cnt=[]
        this.correctsum=0
        this.cardhistory=[]
        this.resultrecord=[]
        this.solutionhistory=[]
        this.usersolutionhistory=[]

        this.reportarr=[]
    }

}