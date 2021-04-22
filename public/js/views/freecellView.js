function FreeCellView(props){
    var cells = ["", "", "", ""];
    for(var i = 0; i < 4; i++){
        if(props.model.cells[i] === 0){
            cells[i] = {code:"", image:"./assets/back.png", value:"", suit:""};
        }
        else{
            cells[i] = props.model.cells[i];
        }
    }

    var currentCard = props.model.currentCard;

    var Heart = ShowTopCard(props.model.Hearts);
    var Club = ShowTopCard(props.model.Clubs);
    var Diamond = ShowTopCard(props.model.Diamonds);
    var Spade = ShowTopCard(props.model.Spades);
    
    return(
        <div class="w3-container" style="background: url('./assets/table_pattern.jpg')">

        <div class="w3-cell-row">
        <div class="w3-col l1 m1 s1"><p> </p></div>
        {cells.map(function(e){
            return (<div class="w3-col l1 m1 s2"><img src={e.image} style="width:100%" onclick={r=>props.cardChosen(e)}></img></div>)
        })}

        <div class="w3-center w3-col l2 m2 s3">
            <p><button class="w3-button w3-black"> Start </button></p>
            <p><button class="w3-button w3-black"> Restart </button></p>
        </div>

        <div class="w3-col l1 m1 s2 w3-text-white w3-center"><img src={Heart.image} style="width:100%" onclick={r=>props.cardChosen(Heart)}></img>Heart</div>
        <div class="w3-col l1 m1 s2 w3-text-white w3-center"><img src={Club.image} style="width:100%" onclick={r=>props.cardChosen(Club)}></img>Club</div>
        <div class="w3-col l1 m1 s2 w3-text-white w3-center"><img src={Diamond.image} style="width:100%" onclick={r=>props.cardChosen(Diamond)}></img>Diamond</div>
        <div class="w3-col l1 m1 s2 w3-text-white w3-center"><img src={Spade.image} style="width:100%" onclick={r=>props.cardChosen(Spade)}></img>Spade</div>
        
        </div>

        <p> </p>
        <p> </p>

        <div class="w3-center w3-text-white">Card currently selected: {currentCard.suit}, {currentCard.value} </div>
        {/* <div>
            {
                result.map(
                    function(e){
                        var url=e.image;
                        return (<img src={url}
                                     onClick={r=>{props.cardChosen(e.code)}}/>)
                    }
                )
            }
        </div> */}



        </div>
    )
}

function ShowTopCard(cards){
    if(cards.length === 0){
        return {code:"", image:"./assets/back.png", value:"", suit:""};
    }
    else{
        return cards[cards.length - 1];
    }
}