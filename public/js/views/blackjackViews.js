function BlackjackView(props){
    const player=props.model.player;
    const host=props.model.host;
    //console.log(player);
    //console.log(host);

    var checkwin = function(){
        if(props.model.playersum>21){
            return <div class="w3-center w3-text-white"> You Lose! Press "Play Again"</div>
        }
        if(props.model.playersum===21){
            return <div class="w3-center w3-text-white"> You Win!!!!</div>
        }
        else{
            return <p></p>
        }
    }
    var checkwin_host = function(){
        if(props.model.hostsum>21){
            return <div class="w3-center w3-text-white"> You Win!!!!</div>
        }
        if(props.model.hostsum>props.model.playersum && props.model.hostsum<=21){
            return <div class="w3-center w3-text-white"> You Lose! Press "Play Again"</div>
        }
        else{
            return <p></p>
        }
    }

    return(
        <div id="blackjack" >
            <div id="blackjack" class="w3-container">
                <h1 class="w3-center w3-text-white" style="font-family: Georgia"><img src="./assets/freecell2.png" style="width:100"></img>  Blackjack</h1>
           
            <div className="w3-container w3-center w3-animate-right">
            {
                host.map(
                    function(e){
                        var url=e.image;
                        return (<img src={url}/>)
                    }
                )
            }
            </div>
            
            <p> </p>
            <p> </p>
            {checkwin()}{checkwin_host()}
            <p> </p>
            <p> </p>

            <div class="w3-container">
                <button class="w3-button w3-green w3-round-xlarge" onClick={props.start}>Start </button> 
                <button class="w3-button w3-green w3-round-xlarge" onClick={props.hit}>Hit </button> 
                <button class="w3-button w3-green w3-round-xlarge" onClick={props.stand}>Stand</button>
                <button class="w3-button w3-green w3-round-xlarge" onClick={props.clear}>Play Again</button>
            </div>

            <div className="w3-container w3-center w3-animate-right">
            {
                player.map(
                    function(e){
                        var url=e.image;
                        return (<img src={url}/>)
                    }
                )
            }
            {/* <img src={props.newresult.cards.image} /> */}
            </div>

            </div>        
        </div>

    )
}