function TexasResultView(props){
    // props.model.cardCheck(props.model.state.communityCards);
    // console.log(props.model.cardCheck(props.model.state.communityCards))
    props.model.showDownCheck();
    const index= [0, 1, 2, 3, 4];
    var players = props.model.state.players;
    return(
        <div className='showdown-container--wrapper'>
        <h5 className="showdown-container--title">
          Round Complete!
        </h5>
        <button class="w3-button w3-green w3-round-xlarge " 
        onClick = {e => {window.location.hash = "#texas"; props.model.setInitialized(false)}}>
            Player Again
        </button>
        <h5 className="showdown-container--community-card-label">
          Community Cards
        </h5>
        <div className='showdown-container--community-cards'>
        {     
            
            props.model.state.communityCards
            .map(
                function(e){
                    var url=e.image;
                    return (<img src={url} style = {{'width': 50}}/>)
                }
            )
        }
        </div>
        <div>
            {
                index.map(
                    function(arrayIndex){
                    return(
                        <div className="player-entity--container">
                            <div className="player-avatar--container">
                                <img 
                                    className="player-avatar--image" 
                                    src={players[arrayIndex].avatarURL}  
                                    alt="Player Avatar"
                                />
                                <h5 className="player-info--name">
                                    {`${players[arrayIndex].name}`}
                                </h5>
                            </div>
                            <div class="showdownPlayer--privateCards">
                                <h5 class="showdownPlayer--cards--heading">
                                    Private Cards
                                </h5>
                                <div class="showdownPlayer--cards">
                                    <img src={players[arrayIndex].cards[0].image}
                                        style = {{'width': 50}}/>
                                    <img src={players[arrayIndex].cards[1].image}
                                        style = {{'width': 50}}/>
                                </div>    
                            </div>

                            <div className='showdown-player--besthand--container'>
                                <h5 class="showdown-player--besthand--heading">
                                    Best Hand
                                </h5>
                                <div className='showdown-player--besthand--cards'>
                                    <img src={players[arrayIndex].bestHand.bestCards[0].image}
                                        style = {{'width': 50}}/>
                                    <img src={players[arrayIndex].bestHand.bestCards[1].image}
                                        style = {{'width': 50}}/> 
                                    <img src={players[arrayIndex].bestHand.bestCards[2].image}
                                        style = {{'width': 50}}/>  
                                    <img src={players[arrayIndex].bestHand.bestCards[3].image}
                                        style = {{'width': 50}}/>  
                                    <img src={players[arrayIndex].bestHand.bestCards[4].image}
                                        style = {{'width': 50}}/>
                                
                                </div>
                                
                            </div>
                            <div>
                                <h5>{players[arrayIndex].bestType}
                                </h5>
                                </div>
                            <div class={`showdownPlayer--earnings ${(players[arrayIndex].win) ? ('positive') :  ('negative')}`}>
			                    {`${(players[arrayIndex].win) ? ('+') : ('-')}${(players[arrayIndex].win)? (props.model.state.pot / props.model.state.winner.length) : (players[arrayIndex].bet)}`}
		                    </div> 

                             
                        </div>
                    
                    
                    
                    
                    )
                    }
                )
            }
        </div>

      </div>


    )





}

