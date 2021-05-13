function BlackjackView(props){
    const player=props.model.player;
    const host=props.model.host;
    //console.log(player);
    //console.log(host);

    var checkwin = function(){
        if(props.model.playersum>21){
            return <div className="blackjacky"> You Lose! Press "Play Again" to start new round</div>
        }
        if(props.model.playersum===21){
            return <div className="blackjacky"> You Win!!!!</div>
        }
        else{
            return <p></p>
        }
    }
    var checkwin_host = function(){
        if(props.model.hostsum>21){
            return <div className="blackjacky"> You Win!!!! </div>
        }
        if(props.model.hostsum>props.model.playersum && props.model.hostsum<=21){
            return <div className="blackjacky"> You Lose! Press "Play Again" to start new round</div>
        }
        else{
            return <p></p>
        }
    }

    return(
        <div id="blackjack" >
            <div id="blackjack" class="w3-container">
                <h1 class="w3-center w3-text-white" style="font-family: Georgia"><img src="./assets/blackjack.png" style="width:400 "></img> </h1>
           
            <div className="w3-container w3-center w3-animate-right">
            {
                host.map(
                    function(e){
                        var url=e.image;
                        return (<img src={url}
                            style="width:200px"
                        />)
                    }
                )
            }
            </div>

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
                            style="width:200px"
                            />)
                    }
                )
            }
            {/* <img src={props.newresult.cards.image} /> */}
            </div>

            </div>        
        </div>

    )
}