function TexasView(props){
    const totalCards=props.totalCards.cards;
    if (props.model.state.initialized == false)
    {
        props.model.generateTable(totalCards);
        props.model.setInitialized(true);
        // console.log(props.model.state.initialized);
    }
   props.model.loop();
    
    
    
    
    //console.log(props.model.state.activePlayerIndex)
    var phase = props.model.state.phase;
    var players = props.model.state.players;
    var activePlayer = props.model.state.activePlayer;
    //console.log(players)
    const index= [0, 1, 2, 3, 4];  
    
    const dealerChipImageURL = "/assets/chip.svg";
    const chipCountImageURL = "./assets/chips.svg";
    const playerBetImageURL = "./assets/bet.svg";

    

    return(
        <div id="texas" >
            <div id="texas" class="w3-container">
                <div class="w3-panel w3-pale-green w3-round-xlarge w3-card-4">
                    
                    <h4 >Current State: &nbsp;&nbsp;&nbsp;&nbsp;{phase} -- {activePlayer.name} moving...
                        </h4>
                        
                        
                </div>
                
                <div class="w3-container">
                    <button class="w3-button w3-green w3-round-xlarge " 
                        style = {{position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% - 350px)', width: 100}} 
                        onClick={e => props.model.limp()}>Call </button> 
 
                    <button id = 'raise' class="w3-button w3-green w3-round-xlarge " 
                        style = {{position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% - 225px)', width: 100}}
                        onClick={e => props.model.raise()}>Raise</button>
                    <input id = 'userBet' class= {`${(phase == 'Show Down' ? 'hide-check-result':'w3-input w3-border w3-round ' )}`}
                        style = {{position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% - 100px)', width: 200}} 
                        type="text" onChange = { e => props.model.setUserBet(e.target.value)}> </input>
                    <button class="w3-button w3-green w3-round-xlarge" 
                    style = {{position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% + 125px)', width: 100}}
                    onClick={e => props.model.fold()}>Fold</button>
                    <button class= {`${(phase == 'Show Down' ? 'w3-button w3-green w3-round-xlarge ':'hide-check-result' )}`}
                    style = {{ position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% - 100px)', width: 200}}
                    onClick={e => {
                        window.location.hash = "#texasresult"}}>Check Result</button>


                </div>
                
            
                <div className='community-card-container'>
                {
                    
                    props.model.state.shownCommunityCards
                    .map(
                        function(e){
                            var url=e.image;
                            return (<img className = 'w3-animate-left' src={url}/>)
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
                                        <p class="w3-center w3-animate-bottom w3-card w3-pale-green w3-round-xlarge" 
                                                    style= {{'display': ((props.model.state.activePlayerIndex == arrayIndex &&
                                                        activePlayer.folded != true
                                                        && arrayIndex != 0)? 'block': 'none'), width: 75}}>
                                                        Move on
                                        </p>
                                        
                                        <div style= {{'display': ((arrayIndex == 0 )? 'block': 'none')}}>

                                            <img className = {`${(players[arrayIndex].folded ? 'folded' : 'w3-animate-bottom ')}`} src={players[arrayIndex].cards[0].image}
                                                style = {{'width': 50}}
                                                />
                                            <img className = {`${(players[arrayIndex].folded ? 'folded' : 'w3-animate-bottom ')}`} src={players[arrayIndex].cards[1].image}
                                                style = {{'width': 50}}
                                                />  
                                        </div>

                                        <div style= {{'display': ((arrayIndex != 0 )? 'block': 'none')}}>

                                            <img className = {`${(players[arrayIndex].folded ? 'folded' : 'w3-animate-bottom ')}`} src={'./assets/back_texas.png'}
                                                style = {{'width': 50}}
                                                />
                                            <img className = {`${(players[arrayIndex].folded ? 'folded' : 'w3-animate-bottom ')}`} src={'./assets/back_texas.png'}
                                                style = {{'width': 50}}
                                                />  
                                        </div>
                
                                        <div className="player-entity--container">
                                            
                                            <div className="player-avatar--container w3-animate-opacity">
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
