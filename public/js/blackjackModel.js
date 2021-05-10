class BlackjackModel{
    constructor(){
        this.cardpool=[];
        this.host=[];
        this.player=[];
        this.playersum=0;
        this.hostsum=0;

    }
    StartGame(cards){
        var x;
        this.cardpool=cards;
        x=this.cardpool.pop();
        this.player.push(x);
        x=this.cardpool.pop();
        this.player.push(x);
        x=this.cardpool.pop();
        this.host.push(x);
        x=this.cardpool.pop();
        this.host.push(x);
    }

    Hit(){
        var x;
        x=this.cardpool.pop();
        this.player.push(x);
        this.CountPlayerSum();
        console.log(this.playersum);
        this.CheckWin();
    }

    Stand(){
        if(this.hostsum<this.playersum){
            var x;
            x=this.cardpool.pop();
            this.host.push(x);
        }
        this.CountHostSum();
        this.CheckWin();
    }

    CountPlayerSum(){
        var player = this.player;
        var i;
        var j;
        var length=player.length;
        
        for(i=0;i<length;i++){ 
            console.log(player[i].value); 
            if(player[i].value ==="ACE"){ //从前往后遍历array，依次找到ace
                for(j=length-1;j>=i;j--){ 

                    if(player[j].value!=="ACE"){ //从后往前找不是ace的array格子，和ace换位置
                        var x = player[j];
                        player[j]=player[i];
                        player[i]=x;
                    }                   
                }              
            }
        }
//将ace放在array最后方便最后判断ace作为1或者作为10
        for(i=0;i<player.length;i++){
            switch (player[i].value){  
                case "1":
                    this.playersum+=1;
                case "2":
                    this.playersum+=2;
                case "3":
                    this.playersum+=3;
                case "4":
                    this.playersum+=4;
                case "5":
                    this.playersum+=5;
                case "6":
                    this.playersum+=6;
                case "7":
                    this.playersum+=7;
                case "8":
                    this.playersum+=8;
                case "9":
                    this.playersum+=9;
                case "10":
                    this.playersum+=10;   
                case "JACK":
                    this.playersum+=10;
                case "QUEEN":
                    this.playersum+=10;
                case "KING":
                    this.playersum+=10;
                case "ACE":
                    if(this.playersum<=11){
                        this.playersum+=10;
                    }else{
                        this.playersum+=1;
                    }
                }
            }
    }

    CountHostSum(){
        var host = this.host;
        var i;
        var j;
        var length=host.length;
        for(i=0;i<length;i++){  
            if(host[i].value==="ACE"){ //从前往后遍历array，依次找到ace
                for(j=length-1;j>=i;j--){ 
                    if(host[j].value!=="ACE"){ //从后往前找不是ace的array格子，和ace换位置
                        var x = host[j];
                        host[j]=host[i];
                        host[i]=x;
                    }                   
                }              
            }
        }
//将ace放在array最后方便最后判断ace作为1或者作为10
        for(i=0;i<host.length;i++){
            switch (host[i].value){  
                case "1":
                    this.hostsum+=1;
                case "2":
                    this.hostsum+=2;
                case "3":
                    this.hostsum+=3;
                case "4":
                    this.hostsum+=4;
                case "5":
                    this.hostsum+=5;
                case "6":
                    this.hostsum+=6;
                case "7":
                    this.hostsum+=7;
                case "8":
                    this.hostsum+=8;
                case "9":
                    this.hostsum+=9;
                case "10":
                    this.hostsum+=10;   
                case "JACK":
                    this.hostsum+=10;
                case "QUEEN":
                    this.hostsum+=10;
                case "KING":
                    this.hostsum+=10;
                case "ACE":
                    if(this.hostsum<=11){
                        this.hostsum+=10;
                    }else{
                        this.hostsum+=1;
                    }
                }
            }
    }

    CheckWin(){
        if(this.playersum>21){
            alert("You Lose!");//hit 超过了21，判负
        }
        if(this.hostsum>21){
            alert("You Win!");//stand host超过了21，判胜
        }
        if(this.playersum<=21 && this.playersum> this.hostsum){
            alert("You Win!");//hit 未超过了21，大于host，判胜
        }else{
            alert("You Lose!");//stand host未超过了21，大于player，判负
        }
    }

    RestartGame(cards){
        this.cardpool=cards;
        this.host=[];
        this.player=[];
        this.playersum=0;
        this.hostsum=0;
    }
}