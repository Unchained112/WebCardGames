class TexasModel{
    constructor(){
        this.state = {
            initialized : false,
        
            players : [],
            activePlayer : null,    
            activePlayerIndex :null,
            alive: [],
            dealerIndex: null,
            blindIndex: null,
            communityCards : [],
            shownCommunityCards : [],
            shownNum : 0,
            pot : 0,
            minBet : 0,
            phase : null,
            pause : false,
            userBet : 0,
            blindBet : 0,
            counter: null,
            winner: [],

        }
        

    }

    // Player.js part
    async generateTable(totalCards){
        const response = await axios.get(`https://randomuser.me/api/?results=4&nat=us,gb,fr`);
        this.state.players = [{
            id: this.uuid(),
            name: "You",
            avatarURL: "./assets/boy.svg",
            cards: [],
            chips: 20000,
            roundStartChips: 20000,
            bet: 0,
            betted: false,
            folded: false,
            win: false,
            bestHand:{
                bestCards: [],
                bestPoint: 100,
            },
            bestType: null,
        }];
	    response.data.results
		.map(user => {
			return ({
				id: this.uuid(),
				name: `${user.name.first.charAt(0).toUpperCase()}${user.name.first.slice(1)} ${user.name.last.charAt(0).toUpperCase()}${user.name.last.slice(1)}`,
				avatarURL: user.picture.large,
				cards: [],
				chips: 20000, 
                roundStartChips: 20000,
				bet: 0,
				folded: false,
				win: false,
                bestHand:{
                    bestCards: [],
                    bestPoint: 100,
                },
                aggressive: this.getNumberInNormalDistribution(),
                bestType: null,
			})
		})
		.forEach(user => this.state.players.push(user));
        this.state.activePlayer =  null;    
        this.state.activePlayerIndex = null;




        this.state.pot = 0;
        this.state.minBet = 0;
        this.state.phase = null;
        this.state.pause = false;
        this.state.userBet = 0;
        this.state.blindBet = 0;
        this.state.counter= null;
        this.state.winner= [];

        this.state.dealerIndex = Math.floor(Math.random() * 5);

        this.state.blindIndex = (this.state.dealerIndex + 1) % 5;
        
        this.state.alive = [0, 1, 2, 3, 4];
        
        

        this.state.shownCommunityCards = [{image: './assets/back_texas.png'},
                                            {image: './assets/back_texas.png'},
                                            {image: './assets/back_texas.png'},]
        this.state.communityCards = totalCards.slice(0,5);
        this.shownNum = 0;
        for (var i = 0; i < 5; i++){
            this.state.players[i].cards = totalCards.slice(i+5,i+7);
        }

        this.state.phase = 'Blind';
        this.state.pause = false;
        console.log("generateTable done")

    }
    
    uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";
     
        var uuid = s.join("");
        return uuid;
    }
    
    getNumberInNormalDistribution(){
        return Math.abs(0.5+(this.randomNormalDistribution()*0.5));
    }
    
    randomNormalDistribution(){
        var u=0.0, v=0.0, w=0.0, c=0.0;
        do{
            u=Math.random()*2-1.0;
            v=Math.random()*2-1.0;
            w=u*u+v*v;
        }while(w==0.0||w>=1.0)
        c=Math.sqrt((-2*Math.log(w))/w);
        return u*c;
    }
    
 
    blind()
    {
        console.log('Blind start')
        // 
        if ((this.state.players[0].bet != 0) 
            && (this.state.pause == false))
        {
            this.state.phase = 'Pre-flop';
            return  ;
        }
        
        this.state.activePlayerIndex = this.state.blindIndex;
        const index = this.state.activePlayerIndex
        this.state.activePlayer = this.state.players[index];
        if (index == 0)
        {
            this.state.pause = true;
            console.log('Pause');
            return  ;
        }
        else{
            
            this.state.blindBet = Math.floor(this.state.activePlayer.chips * (Math.random() * 0.05 + 0.05 ));
            this.raiseBet(this.state.blindBet);      
            this.nextActivePlayer();
            this.state.phase = 'Pre-flop';
            
            
        }
        
        console.log('Blind finished')
    }



    startBet()
    {
        console.log('Start Bet')
        this.state.counter = this.state.alive.length; //counter reset at every round
        
        this.showDownCheck();
        if (this.state.players[this.state.blindIndex].folded)
        {
            console.log('Big Blind Player has folded')
            var tempIndex = (this.state.blindIndex + 1 ) % 5
            while (this.state.alive.indexOf(tempIndex) == -1){
                tempIndex = (tempIndex + 1)%5
            }
            this.state.activePlayerIndex = tempIndex;
            console.log('The new start should be', tempIndex)
        }
        this.state.activePlayerIndex = this.state.blindIndex;
        var index = this.state.activePlayerIndex;
        this.state.activePlayer = this.state.players[index];
        const nextTempIndex = (index + 1) % this.state.alive.length;
        const nextIndex = this.state.alive[nextTempIndex]
        if (index == 0)
        {
            if (this.state.players[0].betted){
                this.state.players[0].betted = false;
                this.state.phase = 'PFTR';
                this.nextActivePlayer();
                return  ;
            }
            else{
                this.state.pause = true;
                console.log('Pause');
                return  ;
            }
            
        }
        else{
            var aggFactor = this.state.activePlayer.aggressive;
            var pointFactor = this.state.activePlayer.bestHand.bestPoint * 0.001;
            var raiseFactor = (aggFactor + pointFactor) / 2
            var expectedBet = raiseFactor * this.state.activePlayer.roundStartChips;
            
            var random = Math.random() * expectedBet
            var raiseBet = 0;
            if (random > this.state.activePlayer.bet){
                raiseBet = Math.floor(this.state.minBet * (Math.random() + 1 ) * 0.01 );
                
                console.log(this.state.activePlayer.name, 'raise', raiseBet);
            }
            else{
                raiseBet = 0;
                console.log(this.state.activePlayer.name, 'call')
            }
            

            const diff = this.state.minBet + raiseBet - this.state.activePlayer.bet;
    
            this.state.activePlayer.bet = this.state.minBet + raiseBet;
            this.state.activePlayer.chips -= diff;
            this.state.pot += diff;
            this.state.minBet += raiseBet;


            this.nextActivePlayer();
            if (this.state.shownNum == 3)
            {
                this.state.phase = 'Flop';
            }
            else if (this.state.shownNum == 4)
            {
                this.state.phase = 'Turn';
            }
            else if(this.state.shownNum == 5)
            {
                this.state.phase = 'River';
            }
            
            
            
        }
        
        console.log('Start Bet finished')
    }


    PFTR(){ 
        var state = this.state;
        setTimeout(function(state){
            if (state.phase == 'Flop' || state.phase == 'Turn' || state.phase == 'River')
            {
                state.shownCommunityCards = state.communityCards.slice(0,state.shownNum);
            }
            var index = state.activePlayerIndex;
            state.activePlayer = state.players[index];
            
            
            var raiseBet = 0;
            if ( index == 0){
                state.pause = true;
                console.log('Pause');
                return ;
            }
            
            else{
                
                
                var aggFactor = state.activePlayer.aggressive;
                var pointFactor = state.activePlayer.bestHand.bestPoint * 0.001;
                var raiseFactor = (aggFactor + pointFactor) / 2
                var expectedBet = raiseFactor * state.activePlayer.roundStartChips;
                console.log(state.activePlayer.name,'expectedBet is', expectedBet)
                
                //  Fold
                if (state.minBet > expectedBet && Math.random()  > aggFactor )
                {
                    const oldIndex = state.alive.indexOf(index)
                    state.activePlayer.folded = true;
                    console.log(state.activePlayer.name, 'choose to fold')
                    state.alive.splice(state.alive.indexOf(index),1);
                    const nextTempIndex =  (oldIndex == state.alive.length? 0 : oldIndex);
                    const nextIndex = state.alive[nextTempIndex]
                    state.activePlayerIndex = nextIndex;
                    state.activePlayer = state.players[nextIndex];
                    
                    console.log('now is', index, state.alive, 'next is', nextIndex)
                    return;
                }
                var random = Math.random() * expectedBet
                var raiseBet = 0;
                //  Raise
                if (random > state.activePlayer.bet){
                    raiseBet = Math.floor(state.minBet * (Math.random() + 1 ) * 0.1 );
                    
                    
                    console.log(state.activePlayer.name, 'raise', raiseBet);
                }
                //  Call/Check
                else{
                    raiseBet = 0;
                    console.log(state.activePlayer.name, 'call')
                }
                
    
                const diff = state.minBet + raiseBet - state.activePlayer.bet;
        
                state.activePlayer.bet = state.minBet + raiseBet;
                state.activePlayer.chips -= diff;
                state.pot += diff;
                state.minBet += raiseBet;
                state.counter --;
            
                

                const nextTempIndex = (state.alive.indexOf(index) + 1) % state.alive.length;
                console.log(state.alive,nextTempIndex)
                const nextIndex = state.alive[nextTempIndex]
                console.log('next is', nextIndex)
                if ((state.activePlayer.bet == state.players[nextIndex].bet 
                        && (state.activePlayer.bet != 0)) 
                        && (state.pause == false)
                        && (state.counter <= 0)){
                    if (state.phase == 'Pre-flop'){
                        state.shownNum = 3
                    }   
                    else{
                        state.shownNum += 1;
                    } 
                    
                    state.phase = 'Start Bet';
                    if (state.shownNum >= 6 || state.alive.length <= 1){
                        state.phase = 'Show Down'
                    }   
                    
                }
                state.activePlayerIndex = nextIndex;
                state.activePlayer = state.players[nextIndex];
                
            }
            

            
           
            
            
            
        },1500,state);
    }

    showDown()
    {
        for (var i = 0; i< 5; i++)
        {
            var point = this.state.players[i].bestHand.bestPoint;
            var type = this.state.players[i].bestType;
            if ( point = 1000){
                type = 'Royal Flush'
            }
            else if ( point > 900){
                type = 'Straight Flush'
            }
            else if ( point > 800){
                type = 'Four of a kind'
            }
            else if ( point > 700){
                type = 'Full house'
            }
            else if ( point > 600){
                type = 'Flush'
            }
            else if ( point > 500){
                type = 'Straight'
            }
            else if ( point > 400){
                type = 'Three of a kind'
            }
            else if ( point > 300){
                type = 'Two pairs'
            }
            else if ( point > 200){
                type = 'One pair'
            }
            else if ( point > 100){
                type = 'High card'
            }
        }
        var endPlayer = []
        for (var i = 0; i < this.state.alive.length; i++)
        {
            endPlayer.push(this.state.players[this.state.alive[i]]);
        }
        if (this.state.alive.length == 1){
            this.state.winner = endPlayer;
            this.state.players[this.state.alive[0]].win = true;
        }
        else{
            endPlayer.sort(function(a,b) {
                return b.bestHand.bestPoint - a.bestHand.bestPoint;
            });
            this.state.winner.push(endPlayer[0]);
            endPlayer[0].win = true;
            for (var i = 0; i < endPlayer.length - 1; i++)
            {
                if (endPlayer[i].bestHand.bestPoint 
                    == endPlayer[0].bestHand.bestPoint)
                {
                    this.state.winner.push(endPlayer[i]);
                    endPlayer[i].win = true;
                }
            }
            
        }
    }

    

   

    setUserBet(userBet){
        console.log("user bet is", userBet)
        this.state.userBet = parseInt(userBet);
        if ( this.state.userBet < 0){
            alert('Raise bet cannot be negative~')
        }
        if (this.state.minBet + this.state.userBet > this.state.players[0].roundStartChips){
            alert('You do not have enough chips~')
        }
    }

    limp(){
        this.state.players[0].betted = true;
        this.state.pause = false;
        this.raiseBet(0);
        this.state.counter --;
        this.nextActivePlayer();
    }
    
    raise(){
        if (this.state.userBet >= 0 && this.state.minBet + this.state.userBet <= this.state.players[0].roundStartChips)
        {
            this.state.players[0].betted = true;
            this.state.pause = false;
            this.raiseBet(this.state.userBet);
            this.state.counter --;
            this.nextActivePlayer();
            document.getElementById('userBet').value = '';
        }
        
    }
    

    fold()
    {
        if (this.state.players[0].folded == false && this.state.alive.length > 1)
        {
            this.state.players[0].folded = true;
            this.state.pause = false;
            this.state.counter --;
            const oldIndex = this.state.alive.indexOf(0)


            this.state.alive.splice(this.state.alive.indexOf(0),1);
            const nextTempIndex =  (oldIndex == this.state.alive.length? 0 : oldIndex);
            const nextIndex = this.state.alive[nextTempIndex]
            this.state.activePlayerIndex = nextIndex;
            this.state.activePlayer = this.state.players[nextIndex];
            
        }
    }
    raiseBet(bet)
    {
        const diff = this.state.minBet + bet - this.state.activePlayer.bet
        
        this.state.activePlayer.bet = this.state.minBet + bet;
        this.state.activePlayer.chips -= diff;
        this.state.pot += diff;
        this.state.minBet += bet;
    }

    betCheck()
    {
        
        return nextBet == currentBet;
    }

    nextActivePlayer(){
        var index = this.state.alive.indexOf(this.state.activePlayerIndex)
        const nextIndex = (index + 1) % this.state.alive.length;
        const nextActiveIndex = this.state.alive[nextIndex]
        this.state.activePlayerIndex = nextActiveIndex
        this.state.activePlayer = this.state.players[nextActiveIndex];
    }

    isActive(playerIndex){
        return playerIndex == this.state.activePlayerIndex;
    }

    setInitialized(val){
        this.state.initialized = val;
    }

    isRoyalFlush(cards){
        if (this.isFlush(cards) && this.isStraight(cards) && cards[4].value == 14)
        {
            return true;       
        }
        return false;
    }

    isFlush(cards){
        for (var i = 0; i < 4; i++){
            if (cards[i].suit != cards[i +1 ].suit){
                return false;
            }
        }
        return true;
    }
    isStraight(cards){
        for (var i = 0; i < 4; i++){
            if (cards[i].value - cards[i +1 ].value!= -1){
                return false;
            }
        }
        return true;
    }

    isFourofakind(cards){
        for (var i = 0; i < 2; i++){
            if (cards[i].value == cards[i+1].value == cards[i+2].value == cards[i+3].value)
            {
                return true;
            }
        }
        return false;
    }

    isFullHouse(cards){
        if ((cards[0].value == cards[1].value == cards[2].value)&&
        cards[3].value == cards[4].value)
        {
            return true;
        }
        if  ((cards[0].value == cards[1].value) &&
        (cards[2].value == cards[3].value == cards[4].value))
        {
            return true;
        }
        return false;
    }

    isThreeofakind(cards){
        for (var i = 0; i < 3; i++){
            if (cards[i].value == cards[i+1].value == cards[i+2].value)
            {
                return true;
            }
        }
        return false;
    }

    isPairs(cards){
        var pairs = [];
        for (var i = 0; i < 4; i++){
            if (cards[i].value == cards[i + 1].value){
                pairs.push(i+1);
            }
        }
        return pairs;
    }

    sortCards(cards){
        for (var i = 0; i < 5; i++)
        {
            switch(cards[i].value){
                case "ACE":
                    cards[i].value=14;
                    break;
                case "JACK":
                    cards[i].value=11;
                    break;
                case "QUEEN":
                    cards[i].value=12;
                    break;
                case "KING":
                    cards[i].value=13;
                    break;
                default:
                    cards[i].value= parseInt(cards[i].value);
            }
        }
        cards.sort(function(a,b) {
            return a.value - b.value;
        });
    }

    cardCheck(cards)
    {
        this.sortCards(cards);
        if (this.isRoyalFlush(cards)){
            return 1000;
        }
        if (this.isFlush(cards) && this.isStraight(cards)){
            return 900 + cards[4].value;
        }
        if (this.isFourofakind(cards)){
            return 800 + cards[2].value;
        }
        if (this.isFullHouse(cards)){
            return 700 + cards[2].value;
        }
        if (this.isFlush(cards)){
            return 600 + cards[4].value;
        }
        if (this.isStraight(cards)){
            return 500 + cards[4].value;
        }
        if (this.isThreeofakind(cards)){
            return 400 + cards[2].value;
        }
        var pairs = this.isPairs(cards);
        
        if (pairs.length == 2){
            return 300 + cards[pairs[1]].value
        }
        if (pairs.length == 1){
            return 200 + cards[pairs[0]].value
        }
        return 100 + cards[4].value;
    }

    getFlagArrs(m, n = 1) {
        if (n < 1 || m < n)  return []
      
        // 先生成一个长度为 m 字符串，开头为 n 个 1， 例如“11100”
        let str = '1'.repeat(n) + '0'.repeat(m-n)
        let pos
        // 1
        const resultArrs = [Array.from(str, x => Number(x))]
        const keyStr = '10'
      
        while(str.indexOf(keyStr) > -1) {
          pos = str.indexOf(keyStr)
          // 2
          str = str.replace(keyStr, '01')
          // 3
          str = Array.from(str.slice(0, pos))
            .sort((a, b) => b-a)
            .join('') + str.slice(pos)
          // 4
          resultArrs.push(Array.from(str, x => Number(x)))
        }
        return resultArrs
    }
    
    arrayCombine(targetArr = [], count = 1) {
        if (!Array.isArray(targetArr)) return []
      
        const resultArrs = []
        // 所有组合的 01 排列
        const flagArrs = this.getFlagArrs(targetArr.length, count)
        while (flagArrs.length) {
          const flagArr = flagArrs.shift()
          resultArrs.push(targetArr.filter((_, idx) => flagArr[idx]))
        }
        return resultArrs
    }

    showDownCheck(){
        


        for (var i = 0; i< 5; i++){
            var totalCards = this.state.players[i].cards.concat(this.state.communityCards)
            var availableCards = this.arrayCombine(totalCards,5);
            
            var temmpBestHand = {bestCards:[],bestPoint:0}
            for (var j = 0; j < availableCards.length; j++){
                
                var point = this.cardCheck(availableCards[j])
                if (point > temmpBestHand.bestPoint){
                    temmpBestHand.bestPoint = point;
                    temmpBestHand.bestCards = availableCards[j];
                } 
            }
            this.state.players[i].bestHand.bestCards = temmpBestHand.bestCards;
            this.state.players[i].bestHand.bestPoint = temmpBestHand.bestPoint;
        } 
        
    }

    loop(){
        
        if (this.state.pause)
        {
            this.waitForInput();
        }
        else{
            if (this.state.phase == 'Blind')
            {
                console.log('Now is Blind bet')
                this.blind();
            }
            else if (this.state.phase == 'Start Bet')
            {
                console.log('Now is start bet')
                this.startBet();
            }
            else if (this.state.phase == 'Show Down')
            {
                console.log('Round complete')
                this.showDown();
            }
            else {
                console.log('Now is bet loop', this.state.shownNum - 2)
                this.PFTR();
            }
        }
        
    }
    
    sleep(ms){
        return new Promise((resolve)=>setTimeout(resolve,ms));
    }

    async waitForInput(){
        var temple=await this.sleep(1);
        console.log('Waiting...')
        return temple
      }
}
