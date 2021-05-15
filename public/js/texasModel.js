


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
            deck : null,
            communityCards : [],
            pot : 0,
            highBet : null,
            betInputValue : null,
            sidePots : [],
            minBet : 20,
            phase : null,
            pause : false,
            userBet : 0,
            blindBet : 0,
            

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
    
    
 
    blindLoop()
    {
        this.state.blindIndex = (this.state.dealerIndex + 1) % 5;
        this.state.blindBet = Math.floor(this.state.players[this.state.blindIndex].chips * (Math.random() +1 ) * 0.1);
        this.state.activePlayerIndex = (this.state.blindIndex + 1) % 5;
        this.state.activePlayer = this.state.players[this.state.activePlayerIndex];
        
        this.state.phase = 'Preflop';
    }

    preflop(){ 
        this.state.phase = 'Preflop'
        var state = this.state;
        setTimeout(function(state){
            const index = state.activePlayerIndex
            if ( index == 0){
                state.pause = true;
                console.log('Pause');
                return ;
            }
            console.log('Now, the active is' , index);
            if (state.activePlayerIndex != state.blindIndex){
                
                state.players[index].bet += state.minBet;
                state.players[index].chips -= state.minBet;
                state.pot += state.minBet;
                console.log(state.activePlayerIndex, 'make bets' , state.players[state.activePlayerIndex].bet);
            }
            else{
                var bigBlindBet = Math.floor(state.players[state.blindIndex].chips * (Math.random() +1 ) * 0.1);
                state.players[index].bet += bigBlindBet;
                state.players[index].chips -= bigBlindBet;
                state.pot += bigBlindBet;
            }
            state.activePlayerIndex = (state.activePlayerIndex + 1) % 5;
            state.activePlayer = state.players[state.activePlayerIndex];
            
        },2000,state);
    }

    setUserBet(userBet){
        console.log("user bet is", userBet)
        this.state.userBet = parseInt(userBet);
        
    }

    limp(){
        this.state.pause = false;
        const raisedBet = this.state.minBet - this.state.players[0].bet
        
        this.state.players[0].bet += raisedBet;
        this.state.players[0].chips -= raisedBet;
        this.state.pot += raisedBet;
        
    }
    
    raise(){
        this.state.pause = false;
        this.raiseBet(this.state.userBet);
        this.nextActivePlayer();
        document.getElementById('userBet').value = '';
    }
    
    raiseBet(bet)
    {
        const index = this.state.activePlayerIndex
        this.state.players[index].bet += bet;
        this.state.players[index].chips -= bet;
        this.state.pot += bet;
        this.state.minBet += bet;
    }


    nextActivePlayer(){
        this.state.activePlayerIndex = (this.state.activePlayerIndex + 1) % 5;
        this.state.activePlayer = this.state.players[this.state.activePlayerIndex];
    }


    

    isActive(playerIndex){
        return playerIndex == this.state.activePlayerIndex;
    }

    setInitialized(){
        this.state.initialized = true;
    }

    loop(){
        console.log('now is',this.state.phase)
        if (this.state.pause)
        {
            this.waitForInput();
        }
        else{
            switch (this.state.phase){
                case 'Blind': this.blindLoop();
                case 'Preflop' : this.preflop();
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
