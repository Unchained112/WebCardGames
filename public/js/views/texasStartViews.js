function TexasStartView(props){
    return(
        <div className="texasStart">
            <div className="w3-container w3-center">
                <div className="w3-container w3-margin-top">
                    <img src={"./assets/chips.svg"} style="width:100px"></img>
                    <h1>Texas hold 'em Poker Game
                        </h1>
                </div>

                <div class=" w3-content w3-text-white w3-animate-opacity" style="max-width:500px">
                    <div class="w3-card">
                    <p>Texas hold 'em (also known as Texas holdem, hold 'em, and holdem) 
                        is one of the most popular variants of the card game of poker.
                         Two cards, known as hole cards, are dealt face down to each player, 
                         and then five community cards are dealt face up in three stages. 
                         The stages consist of a series of three cards ("the flop"), 
                         later an additional single card ("the turn"), 
                         and a final card ("the river"). 
                         Each player seeks the best five card poker hand from any combination
                          of the seven cards; the five community cards and their two hole cards. 
                          Players have betting options to check, call, raise, or fold. 
                          Rounds of betting take place before the flop is dealt and after each subsequent deal. 
                          player who has the best hand and has not folded by the end of all betting 
                          rounds wins all of the money bet for the hand, known as the pot. </p>
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