function FreeCellView(props){
    var cells = ["", "", "", ""];
    for(var i = 0; i < 4; i++){
        if(props.model.cells[i] === 0){
            cells[i] = {code:"", image:"./assets/back_3.png", value:"", suit:""};
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
    <div id="freecell" class="w3-container">
        <p> </p>
        <h1 class="w3-center w3-text-white" style="font-family: Georgia"><img src="./assets/freecell2.png" style="width:100"></img>  FreeCell</h1>
        
        <div class="w3-row-padding">
        <div class="w3-col l1 m1 s1"><p> </p></div>
        {cells.map(function(e){
            return (<div class="w3-col l1 m1 s2"><img class="w3-opacity-min" src={e.image} style="width:100%" onclick={r=>props.cardChosen(e)}></img></div>)
        })}

        <div class="w3-center w3-col l2 m2 s3">
            <p><button class="w3-button w3-grey" onClick={r=>{props.startFreeCell()}}> Start </button></p>
            <p><button class="w3-button w3-grey"> Restart </button></p>
        </div>

        <div class="w3-col l1 m1 s2 w3-text-white w3-center"><img class="w3-opacity-min" src={Heart.image} style="width:100%" onclick={r=>props.cardChosen(Heart)}></img>Heart</div>
        <div class="w3-col l1 m1 s2 w3-text-white w3-center"><img class="w3-opacity-min" src={Club.image} style="width:100%" onclick={r=>props.cardChosen(Club)}></img>Club</div>
        <div class="w3-col l1 m1 s2 w3-text-white w3-center"><img class="w3-opacity-min" src={Diamond.image} style="width:100%" onclick={r=>props.cardChosen(Diamond)}></img>Diamond</div>
        <div class="w3-col l1 m1 s2 w3-text-white w3-center"><img class="w3-opacity-min" src={Spade.image} style="width:100%" onclick={r=>props.cardChosen(Spade)}></img>Spade</div>
        
        </div>

        <p> </p>
        <p> </p>

        <div class="w3-center w3-text-white">Card currently selected: {currentCard.suit}, {currentCard.value} </div>

        <p> </p>
        <p> </p>
        
        <div class="w3-row-padding w3-center">

        <div class="w3-col l1 m1 s0"><p> </p> </div>
        <div class="w3-col l1 m1 s0"><p> </p> </div>

        <div class="w3-col l1 m1 s2">
            {props.model.pile_1.map(
                function(e, index, array){
                    var url=e.image;
                    if(index < array.length-1){    
                        return (<img src={url}
                                    style="object-fit:cover;
                                    object-position:top;
                                    width:100%;
                                    height:30px;"
                                    />)
                    }
                    else{
                        return (<img src={url}
                                    onClick={r=>{props.cardChosen(e)}}
                                    style="width:100%;
                                    object-fit:cover;
                                    object-position:top;"
                                    />)
                    }
                    
                }
            )}
        </div>
        <div class="w3-col l1 m1 s2">
            {props.model.pile_2.map(
                function(e, index, array){
                    var url=e.image;
                    if(index < array.length-1){    
                        return (<img src={url}
                                    style="object-fit:cover;
                                    object-position:top;
                                    width:100%;
                                    height:30px;"
                                    />)
                    }
                    else{
                        return (<img src={url}
                                    onClick={r=>{props.cardChosen(e)}}
                                    style="width:100%;
                                    object-fit:cover;
                                    object-position:top;"
                                    />)
                    }
                    
                }
            )}
        </div>
        <div class="w3-col l1 m1 s2">
            {props.model.pile_3.map(
                function(e, index, array){
                    var url=e.image;
                    if(index < array.length-1){    
                        return (<img src={url}
                                    style="object-fit:cover;
                                    object-position:top;
                                    width:100%;
                                    height:30px;"
                                    />)
                    }
                    else{
                        return (<img src={url}
                                    onClick={r=>{props.cardChosen(e)}}
                                    style="width:100%;
                                    object-fit:cover;
                                    object-position:top;"
                                    />)
                    }
                    
                }
            )}
        </div>
        <div class="w3-col l1 m1 s2">
            {props.model.pile_4.map(
                function(e, index, array){
                    var url=e.image;
                    if(index < array.length-1){    
                        return (<img src={url}
                                    style="object-fit:cover;
                                    object-position:top;
                                    width:100%;
                                    height:30px;"
                                    />)
                    }
                    else{
                        return (<img src={url}
                                    onClick={r=>{props.cardChosen(e)}}
                                    style="width:100%;
                                    object-fit:cover;
                                    object-position:top;"
                                    />)
                    }
                    
                }
            )}
        </div>
        <div class="w3-col l1 m1 s2">
            {props.model.pile_5.map(
                function(e, index, array){
                    var url=e.image;
                    if(index < array.length-1){    
                        return (<img src={url}
                                    style="object-fit:cover;
                                    object-position:top;
                                    width:100%;
                                    height:30px;"
                                    />)
                    }
                    else{
                        return (<img src={url}
                                    onClick={r=>{props.cardChosen(e)}}
                                    style="width:100%;
                                    object-fit:cover;
                                    object-position:top;"
                                    />)
                    }
                    
                }
            )}
        </div>
        <div class="w3-col l1 m1 s2">
            {props.model.pile_6.map(
                function(e, index, array){
                    var url=e.image;
                    if(index < array.length-1){    
                        return (<img src={url}
                                    style="object-fit:cover;
                                    object-position:top;
                                    width:100%;
                                    height:30px;"
                                    />)
                    }
                    else{
                        return (<img src={url}
                                    onClick={r=>{props.cardChosen(e)}}
                                    style="width:100%;
                                    object-fit:cover;
                                    object-position:top;"
                                    />)
                    }
                    
                }
            )}
        </div>
        <div class="w3-col l1 m1 s2">
            {props.model.pile_7.map(
                function(e, index, array){
                    var url=e.image;
                    if(index < array.length-1){    
                        return (<img src={url}
                                    style="object-fit:cover;
                                    object-position:top;
                                    width:100%;
                                    height:30px;"
                                    />)
                    }
                    else{
                        return (<img src={url}
                                    onClick={r=>{props.cardChosen(e)}}
                                    style="width:100%;
                                    object-fit:cover;
                                    object-position:top;"
                                    />)
                    }
                    
                }
            )}
        </div>
        <div class="w3-col l1 m1 s2">
            {props.model.pile_8.map(
                function(e, index, array){
                    var url=e.image;
                    if(index < array.length-1){    
                        return (<img src={url}
                                    style="object-fit:cover;
                                    object-position:top;
                                    width:100%;
                                    height:30px;"
                                    />)
                    }
                    else{
                        return (<img src={url}
                                    onClick={r=>{props.cardChosen(e)}}
                                    style="width:100%;
                                    object-fit:cover;
                                    object-position:top;"
                                    />)
                    }
                    
                }
            )}
        </div>

        </div>

    </div>
    )
}

function ShowTopCard(cards){
    if(cards.length === 0){
        return {code:"", image:"./assets/back_3.png", value:"", suit:""};
    }
    else{
        return cards[cards.length - 1];
    }
}
