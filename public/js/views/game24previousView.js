function Game24PreviousView(props){
    const previous=props.previousCards.cards
    return(
            <div className="game24deck ">
                <div className="game24previouscard game24hovercard">
                    <div className="game24front game24face">
                        <div>
                            <h1 className="w3-center w3-padding-32 game24lastround" style="text-shadow:1px 1px 0 #444">
                                Last Round Result
                            </h1>
                        </div>
                    </div>
                    <div className="game24back game24face">
                        <div className="game24previouscards w3-center">
                            {
                                previous.map(
                                    function(e){
                                        var url=e.image;
                                        return (<img src={url} style="width:50px"/>)
                                    }
                                )
                            }
                        </div>
                        <div className="w3-center">
                            <b> Sample solution: </b>
                            <h4> {props.previousSolution()} </h4>
                            <b> Your Solution: </b>
                            <h4> {props.previousUserSolution}</h4>
                        </div>
                    </div>
                </div>
            </div>
    )
}
function flip() {
    $('.card').toggleClass('flipped');
}

