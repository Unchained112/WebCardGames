function BlackjackView(props){
    const player=props.model.player;
    const host=props.model.host;
    //console.log(player);
    //console.log(host);

    var checkwin = function(){
        if(props.model.playersum>21){
            return <div className="blackjacky"> You Lose! Press "Play Again" to start new round</div>
        }
        if(props.model.playersum===21 && props.model.hitnum===0){
            return <div className="blackjacky"> Blackjack!!!!</div>
        }
        if(props.model.playersum===21 && props.model.hitnum===2){
            return <div className="blackjacky"> You win!!!!</div>
        }
        else{
            return <p></p>
        }
    }
    var checkwin_host = function(){
        if(props.model.hostsum===props.model.playersum && props.model.hitnum===1){
            return <div className="blackjacky"> This is a "push" and no one wins </div>
        }
        if(props.model.hostsum>21){
            return <div className="blackjacky"> You Win!!!! </div>
        }
        if(props.model.hostsum<props.model.playersum && props.model.playersum<=21 && props.model.hitnum===1){
            return <div className="blackjacky"> You Win!!!! </div>
        }
        if(props.model.hostsum>props.model.playersum && props.model.hostsum<=21 && props.model.hitnum===1){
            return <div className="blackjacky"> You Lose! Press "Play Again" to start new round</div>
        }
        else{
            return <p></p>
        }
    }

    return(
        <div id="blackjack" >
                     
            <div id="blackjack" class="w3-container">  
                <p></p>
                <p></p>
                <h1 class="w3-center w3-text-white" style="font-family: Georgia"><img src="./assets/blackjack.png" style="width:400 "></img> </h1>

            <div className="w3-container w3-center w3-animate-right">
            {
                host.map(
                    function(e){
                        var url=e.image;
                        return (<img src={url}
                            style="width:10%"
                        />)
                    }
                )
            }
            </div>

            <p> </p>
            <p> </p>
            <p> </p>

            <div className="w3-container w3-center">
            <div>
                <div className="div-inline" onClick={props.start}>
                    <div className="blackjack">
                        <a>Start</a>
                    </div>
                </div>
                <div className="div-inline" onClick={props.hit}>
                    <div className="blackjack">
                        <a>Hit</a>
                    </div>
                </div>
                <div className="div-inline" onClick={props.stand}>
                    <div className="blackjack">
                        <a>Stand</a>
                    </div>
                </div>
                <div className="div-inline" onClick={props.clear}>
                    <div className="blackjack">
                        <a>Play Again</a>
                    </div>
                </div>
            </div>
            </div>

            {/* <div class="w3-container">
                <button class="w3-button w3-green w3-round-xlarge" onClick={props.start}>Start </button> 
                <button class="w3-button w3-green w3-round-xlarge" onClick={props.hit}>Hit </button> 
                <button class="w3-button w3-green w3-round-xlarge" onClick={props.stand}>Stand</button>
                <button class="w3-button w3-green w3-round-xlarge" onClick={props.clear}>Play Again</button>
            </div> */}
            
            <p> </p>

            <div class="w3-container w3-center">
            {checkwin()}{checkwin_host()}
            </div>

            <p> </p>
            <div className="w3-container w3-center w3-animate-right">
            {
                player.map(
                    function(e){
                        var url=e.image;
                        return (<img src={url}
                            style="width:10%"
                            />)
                    }
                )
            }
            </div>
            <p></p>
            <p></p> 
            <div class=" w3-content w3-text-white" style="max-width:1000px">    
                <p>Blackjack is a well-known poker game in casino. The player’s goal is to make the sum of the points of the cards in his hand not exceed 21 points and be as large as possible.
                    The player will get two cards when the game starts and the banker will only get one card.
                </p>
                <p>Card face value:</p>
                <p>(1). 2, 3, 4, 5, 6, 7, 8, 9: Calculate the score according to the actual size of the card.</p>
                <p>(2). 10. Jack, Queen, King: All scores are calculated based on 10 points.</p>
                <p>(3). Ace: There are 2 scoring methods of Ace, 11 point and 1 point.
                    If Ace is calculated as 11 points, the total value of the cards in the hand is greater than 21 points; Ace is calculated as 1 point.</p>

                <p>Hit: The player chooses whether to take a card based on the face value of his card. If you choose to hit, the system would randomly send a bright card.</p>
                <p>Stand: The player think their own card face value is big enough and do not need one more card.</p> 
                <p>If the sum value of banker's cards is greater than/equal to 17 points, he can not hit.</p> 
                <p>If the player bursts, the player loses immediately, if the banker bursts and the player becomes the winner. After both the player and the banker are suspended, the player cards are compared with the banker cards.</p> 
            </div>        
            </div>
            
        </div>

    )
}