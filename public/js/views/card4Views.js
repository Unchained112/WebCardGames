function Game4CardResultView(props){
    //console.log(props.game4nextcardsResult)
    console.log(props.game4nextcardsResult)
    const result=props.game4nextcardsResult.cards;
    return(
        <div className="w3-container w3-center w3-animate-right">
            {
                result.map(
                    function(e){
                        var url=e.image;
                        return (<img src={url}
                                     onClick={r=>{props.cardChosen(e.code)}}/>)
                    }
                )
            }
        </div>
    )
}
