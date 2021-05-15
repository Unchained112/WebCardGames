function TexasView(props){
    const totalCards=props.totalCards.cards;
    if (props.model.state.initialized == false)
    {
        props.model.generateTable(totalCards);
        props.model.setInitialized();
        console.log(props.model.state.initialized);
    }
   props.model.loop();
    
    
    
    
    //console.log(props.model.state.activePlayerIndex)
    var players = props.model.state.players;
    //console.log(players)
    const index= [0, 1, 2, 3, 4];  
    
    const dealerChipImageURL = "/assets/chip.svg";
    const chipCountImageURL = "./assets/chips.svg";
    const playerBetImageURL = "./assets/bet.svg";

    

    //console.log(result);
    return(
        <div id="texas" >
            <div id="texas" class="w3-container">
                
            
                <div class="w3-container">
                    <button class="w3-button w3-green w3-round-xlarge " 
                        style = {{position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% - 350px)', width: 100}} 
                        onClick={props.check}>Limp </button> 

                    <button id = 'raise' class="w3-button w3-green w3-round-xlarge" 
                        style = {{position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% - 225px)', width: 100}}
                        onClick={e => props.model.raise()}>Raise</button>
                    <input id = 'userBet' class="w3-input w3-border w3-round" 
                        style = {{position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% - 100px)', width: 200}} 
                        type="text" onChange = { e => props.model.setUserBet(e.target.value)}> </input>
                    <button class="w3-button w3-green w3-round-xlarge" 
                        style = {{position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% + 125px)', width: 100}}
                        onClick={props.allIn}>ALL IN!</button>
                    <button class="w3-button w3-green w3-round-xlarge" 
                    style = {{position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% + 250px)', width: 100}}
                    onClick={props.fold}>Fold</button>
                </div>
                
            
                <div className='community-card-container'>
                {
                    props.model.state.communityCards
                    .map(
                        function(e){
                            var url=e.image;
                            return (<img src={url}/>)
                        }
                    )
                }
                </div>

                <div className='pot-container'>
                    <img style={{height: 45, width: 45}} src={'./assets/pot.svg'} alt="Pot Value"/>
                    <h4> {props.model.state.pot} </h4>
                </div>

                <div>
                    {
                        index.map(
                            function(arrayIndex){
                                
                                return (
                                    <div className={`player-entity--wrapper p${arrayIndex}`}>
                                        {/* <p class="w3-center w3-animate-bottom" 
                                                    style= {{'display': ((props.model.state.activePlayerIndex == arrayIndex)? 'block': 'none')}}>Raise!
                                                </p> */}
                                        <div className='playing-card'>
                                            <img src={players[arrayIndex].cards[0].image}
                                                style = {{'width': 50}}
                                                />
                                            <img src={players[arrayIndex].cards[1].image}
                                                style = {{'width': 50}}
                                                />         
                                        </div>
                
                                        <div className="player-entity--container">
                                            
                                            <div className="player-avatar--container">
                                                <img 
                                                    className={`player-avatar--image${((props.model.state.activePlayerIndex == arrayIndex)  ? ' activePlayer' : '')}`} 
                                                    src={players[arrayIndex].avatarURL} 
                                                    alt="Player Avatar" 
                                                />
                                                
                                                
                                                <h5 className="player-info--name" style={{'fontSize': (players[arrayIndex].name.length < 14) ? 12 : 10}}>
                                                    {`${players[arrayIndex].name}`}
                                                </h5>
                                                
                                                <div className="player-info--stash--container">
                                                    <img className="player-info--stash--image" src={chipCountImageURL} alt="Player Stash"/>
                                                    <div className = 'w3-large'>{`${players[arrayIndex].chips}`}</div>
                                                </div>
                                                
                                                <div className="player-info--bet--container">
                                                    <img className="player-info--bet--image" src={playerBetImageURL} alt="Player Bet" />
                                                    <div className = 'w3-large'>{`Bet:${players[arrayIndex].bet}`}</div>
                                                </div>
                                                
                                                <div className="dealer-chip-icon-container">
                                                    <img className = 'dealer-chip-icon-image'
                                                        src={dealerChipImageURL} 
                                                        style = {{'display': ((props.model.state.dealerIndex == arrayIndex)? 'block': 'none')}}
                                                        alt="Dealer Chip"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        )
                    }
                </div>
                
                
            



            

            </div>        
        </div>

    )
}
