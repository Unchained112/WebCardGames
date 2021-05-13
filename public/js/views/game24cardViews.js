function Game4CardResultView(props){
    //console.log(props.game4nextcardsResult)
    //console.log(props.game4nextcardsResult)
    const result=props.game4nextcardsResult().cards;
    return(
        <footer className="game24footer">
            <div className="w3-container w3-center w3-padding-32 w3-animate-right">
            {
                result.map(
                    function(e){
                        var url=e.image;
                        return (<img src={url}
                                     onClick={r => {props.cardChosen(e.code)}}
                                     style="width:200px"
                                     className="game24currentcard"
                        />)
                    }
                )
            }
        </div>
        </footer>

    )
}

