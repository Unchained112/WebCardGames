


class TexasModel{
    constructor(){
        this.state = {
            initialized : false,
        
            loading : true,
            winnerFound : null,
            players : [{
                    id: this.uuid(),
                    name: "Player 1",
                    avatarURL: "./assets/boy.svg",
                    cards: [],
                    showDownHand: {
                        hand: [],
                        descendingSortHand: [], 
                    },
                    chips: 20000,
                    roundStartChips: 20000,
                    roundEndChips: 20000,
                    currentRoundChipsInvested: 0,
                    bet: 0,
                    betReconciled: false,
                    folded: false,
                    allIn: false,
                    canRaise: true,
                    stackInvestment: 0,
                    robot: false
                }],
            activePlayer : null,    
            activePlayerIndex :null,
            dealerIndex: null,
            blindIndex: null,
            
            communityCards : [],
            shownCommunityCards : [],
            shownNum : 3,
            pot : 0,
            highBet : null,
            betInputValue : null,
            sidePots : [],
            minBet : 0,
            phase : null,
            pause : false,
            userBet : 0,
            blindBet : 0,
            counter: 4,

            round : 1,
        }
        

    }

    // Player.js part
    async generateTable(totalCards){
        const response = await axios.get(`https://randomuser.me/api/?results=4&nat=us,gb,fr`);
        
	    response.data.results
		.map(user => {
			const randomizedChips = Math.floor(Math.random() * (20000 - 18000)) + 18000;
			return ({
				id: this.uuid(),
				name: `${user.name.first.charAt(0).toUpperCase()}${user.name.first.slice(1)} ${user.name.last.charAt(0).toUpperCase()}${user.name.last.slice(1)}`,
				avatarURL: user.picture.large,
				cards: [],
				chips: randomizedChips,  
				roundStartChips: randomizedChips,
				roundEndChips: randomizedChips,
				currentRoundChipsInvested: 0,
				showDownHand: {
					hand: [],
					descendingSortHand: [],
				},
				bet: 0,
				betReconciled: false,
				folded: false,
				allIn: false,
				robot: true,
				canRaise: true,
				stackInvestment: 0,
			})
		})
		.forEach(user => this.state.players.push(user));

        if (this.state.round == 1){
            this.state.dealerIndex = Math.floor(Math.random() * 5);
        }
        else {
            
            this.state.dealerIndex = (this.state.dealerIndex + 1) % 5;
        }
        this.state.blindIndex = (this.state.dealerIndex + 1) % 5;
        
        
        
        

        this.state.shownCommunityCards = [{image: './assets/back_texas.png'},
                                            {image: './assets/back_texas.png'},
                                            {image: './assets/back_texas.png'},]
        this.state.communityCards = totalCards.slice(0,5);
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
    
    
 
    blind()
    {
        console.log('Blind start')
        // 
        if ((this.state.players[this.state.blindIndex].bet != 0) 
            && (this.state.pause == false))
        {
            this.state.phase = 'Preflop';
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
            
            this.state.blindBet = Math.floor(this.state.activePlayer.chips * (Math.random() + 1 ) * 0.1);
            this.raiseBet(this.state.blindBet);            
            this.nextActivePlayer();
            this.state.phase = 'Preflop';
            
            
        }
        
        console.log('Blind finished')
    }

    startBet()
    {
        console.log('Start Bet')
        this.state.counter = 4;
        if ((this.state.players[this.state.blindIndex].bet != 0) 
            && (this.state.pause == false))
        {
            this.state.phase = 'Bet Loop';
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
            
            if (Math.random() < 0.3){
                raiseBet = Math.floor(state.minBet * (Math.random() + 1 ) * 0.01 );
                console.log(state.activePlayer.name, 'raise', raiseBet);
            }
            else{
                raiseBet = 0;
                console.log(state.activePlayer.name, 'call')
            }

            const diff = state.minBet + raiseBet - state.activePlayer.bet;
    
            state.activePlayer.bet = state.minBet + raiseBet;
            state.activePlayer.chips -= diff;
            state.pot += diff;
            state.minBet += raiseBet;
            
            this.state.phase = 'Bet Loop';
            
            
        }
        
        console.log('Start Bet finished')
    }


    PFTR(){ 
        var state = this.state;
        setTimeout(function(state){
            if (state.phase != 'preFlop')
            {
                state.shownCommunityCards = state.communityCards.slice(0,state.shownNum);
            }
            const index = state.activePlayerIndex;
            const nextIndex = (state.activePlayerIndex + 1) % 5;
            var raiseBet = 0;
            if ( index == 0){
                state.pause = true;
                console.log('Pause');
                return ;
            }
            else{
                console.log('Now, the active is' , index);
                if (Math.random() < 0.3){
                    raiseBet = Math.floor(state.minBet * (Math.random() + 1 ) * 0.01 );
                    console.log(state.activePlayer.name, 'raise', raiseBet);
                }
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
                if ((state.activePlayer.bet == state.players[nextIndex].bet 
                        && (state.activePlayer.bet != 0)) 
                        && (state.pause == false)
                        && (state.counter <= 0)){
                    console.log('enter flop', state.activePlayer.bet, state.players[nextIndex].bet);
                    state.phase = 'Start Bet';                
                    state.shownNum += 1;
                }
                state.activePlayerIndex = nextIndex;
                state.activePlayer = state.players[nextIndex];
            }
            

            
           
            
            
            
        },2000,state);
    }


    

   

    setUserBet(userBet){
        console.log("user bet is", userBet)
        this.state.userBet = parseInt(userBet);
        
    }

    limp(){
        this.state.pause = false;
        this.raiseBet(0);
        this.state.counter --;
        this.nextActivePlayer();
    }
    
    raise(){
        this.state.pause = false;
        this.raiseBet(this.state.userBet);
        this.state.counter --;
        this.nextActivePlayer();
        document.getElementById('userBet').value = '';
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
        const nextIndex = (this.state.activePlayerIndex + 1) % 5;
        this.state.activePlayerIndex = nextIndex
        this.state.activePlayer = this.state.players[nextIndex];
    }

    isActive(playerIndex){
        return playerIndex == this.state.activePlayerIndex;
    }

    setInitialized(){
        this.state.initialized = true;
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
        if ((cards[4].value > cards[4].value) &&
            (cards[0].value == cards[1].value == cards[2].value == cards[3].value))
        {
            return true;
        }
        if ((cards[0].value < cards[1].value) &&
        (cards[1].value == cards[2].value == cards[3].value == cards[4].value))
        {
            return true;
        }
        return false;
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
        console.log(cards);
    }

    cardCheck(cards)
    {
        this.sortCards(cards);
        if (this.isRoyalFlush(cards))
        {
            return 1000;
        }
        if (this.isFlush(cards) && this.isStraight(cards))
        {
            return 900 + cards[4].value;
        }
        if (this.isFourofakind(cards)){
            return 800 + cards[2].value;
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
            else {
                console.log('Now is bet loop', this.state.shownNum -2)
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
