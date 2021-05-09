
function TexasView(props){
    const index= [0, 1, 2, 3, 4];  
    const arrayIndex = 0;                  
    const avatarURL = '/assets/boy.svg';
    const name = 'Player 1';
    const chips = 100;
    const bet = 100;
    const isActive = true;
    const dealerChipImageURL = "/assets/chip.svg";
    const chipCountImageURL = "./assets/chips.svg";
    const playerBetImageURL = "./assets/bet.svg";

    const result=props.nextcardsResult.cards;

    console.log(props.nextcardsResult);
    return(
        <div id="texas" >
            <div id="texas" class="w3-container">
                
            
                <div class="w3-container">
                    <button class="w3-button w3-green w3-round-xlarge " style = {{position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% - 172.5px)'}} onClick={props.hit}>Call </button> 

                    <button class="w3-button w3-green w3-round-xlarge" style = {{position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% - 72.5px)'}}onClick={props.stand}>Fold</button>
                    <input class="w3-input w3-border w3-round" style = {{position: 'absolute', top: 'calc(45% - 95px)', left: 'calc(50% + 22.5px)', width: 200}} type="text"> </input>
                </div>
                
            
                <div className='community-card-container'>
                {
                    result.map(
                        function(e){
                            var url=e.image;
                            return (<img src={url}/>)
                        }
                    )
                }
                </div>

                <div className='pot-container'>
                    <img style={{height: 45, width: 45}} src={'./assets/pot.svg'} alt="Pot Value"/>
                    <h4> 100 </h4>
                </div>

                <div>
                    {
                        index.map(
                            function(arrayIndex){
                                
                                return (<div className={`player-entity--wrapper p${arrayIndex}`}>
      
                
                                            <div className="player-entity--container">
                                                <div className="player-avatar--container">
                                                <img 
                                                    className={`player-avatar--image${(isActive ? ' activePlayer' : '')}`} 
                                                    src={avatarURL} 
                                                    alt="Player Avatar" 
                                                />
                                                <h5 className="player-info--name" style={{'fontSize': (name.length < 14) ? 12 : 10}}>
                                                    {`${name}`}
                                                </h5>
                                                <div className="player-info--stash--container">
                                                    <img className="player-info--stash--image" src={chipCountImageURL} alt="Player Stash"/>
                                                    <div className = 'w3-large'>{`${chips}`}</div>
                                                </div>
                                                <div className="player-info--bet--container">
                                                    <img className="player-info--bet--image" src={playerBetImageURL} alt="Player Bet" />
                                                    <div className = 'w3-large'>{`Bet:${chips}`}</div>
                                                </div>
                                                
                                                </div>
                                            </div>
                                            </div>)
                            }
                        )
                    }
                </div>
                
                {/* <div className={`player-entity--wrapper p${arrayIndex}`}>
      
                
                                            <div className="player-entity--container">
                                                <div className="player-avatar--container">
                                                <img 
                                                    className={`player-avatar--image${(isActive ? ' activePlayer' : '')}`} 
                                                    src={avatarURL} 
                                                    alt="Player Avatar" 
                                                />
                                                <h5 className="player-info--name" style={{'fontSize': (name.length < 14) ? 12 : 10}}>
                                                    {`${name}`}
                                                </h5>
                                                <div className="player-info--stash--container">
                                                    <img className="player-info--stash--image" src={chipCountImageURL} alt="Player Stash"/>
                                                    <h5>{`${chips}`}</h5>
                                                </div>
                                                <div className="player-info--bet--container">
                                                    <img className="player-info--bet--image" src={playerBetImageURL} alt="Player Bet" />
                                                    <h5>{`Bet: ${bet}`}</h5>
                                                </div>
                                                
                                                </div>
                                            </div>
                                            </div> */}
            



            

            </div>        
        </div>

    )
}
