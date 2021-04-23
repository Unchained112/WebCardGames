class BlackjackModel{
    constructor(number=2){
        this.card=[]
        this.host=[]
        this.sum=0
        this.hostsum=0
    }

    setNumber(){
        this.number+=1;
    }

    clear(){

    }

    addcard(){
        var card;
        switch (x[0]) {
            case "A":
                card="1";
                break;
            case "0":
                card="10";
                break;
            case "J":
                card="10";
                break;
            case "Q":
                card="10";
                break;
            case "K":
                card="10";
                break;
            default:
                card=x[0];
            }
        if(this.sum>21){
            
        }
    }

    stand(){
        
    }
}