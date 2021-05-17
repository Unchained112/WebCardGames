function TexasStartView(props){
    return(
        <div className="texasStart">
            <div className="w3-container w3-center">
                <div className="w3-container w3-margin-top">
                    <img src={"./assets/chips.svg"} style="width:90px"></img>
                    <div class="w3-pale-green w3-panel">
                        <h1>Texas Hold 'em Poker Game
                        </h1>
                    </div>
                    
                </div>

                <div class=" w3-content w3-text-white w3-animate-opacity" style="max-width:700px">
                    <div>
                    <h3>
                        
                        Rules for each round:
                    </h3>
                    <h4>
                        Blind Bet:
                    </h4>
                    <h5>
                        Player on the left side of the dealer should make the BIG BLIND BET.
                        If you are suppose to do so, type in your bet value and click "Raise" button.
                        Bot player would make a blind bet automatically.
                    </h5>
                    <h4>
                        Pre-flop:
                    </h4>
                    <h5>
                        Each player would get two private cards and start a new round.
                        You can click "Call" button to call or check (not raise your bet) or raise the bet by a certain value.
                        You can also click "Fold" button to fold and give up.
                        If you fold, you cannot raise your bet any more and you would lose this round.
                        But you can avoid greater losses.
                        This round would end only when every active players reach a same bet value.
                    </h5>
                    <h4>
                        Flop, Turn, River
                    </h4>
                    <h5>
                        There would be 3 to 5 community cards. 
                        Each player seeks the best five card poker hand from any 
                        combination of the five community cards and their two hole cards.
                    </h5>
                    


                    </div>
                    
                    <button className="w3-button w3-green w3-round-xlarge" onClick={e => {
                        window.location.hash = "#texasgame"
                    }}>Start!
                    </button>

                </div>
            </div>
        </div>


    )





}