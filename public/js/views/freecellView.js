function FreeCellView(props){
    //var cells = props.model.cells;
    var isWin = false;
    isWin = props.model.checkWin();
    var currentCard = props.model.currentCard;

    var Heart = ShowTopCard(props.model.Hearts, 1);
    var Club = ShowTopCard(props.model.Clubs, 2);
    var Diamond = ShowTopCard(props.model.Diamonds, 3);
    var Spade = ShowTopCard(props.model.Spades, 4);

    currentCard.showInfo = function(){
        if(!props.model.gameStart){
            return <div class="w3-center w3-text-white"> Press "Start" to play</div>
        }
        if(isWin){
            return <div class="w3-center w3-text-white"> You win !!!</div>
        }
        if(this.code === ""){
            return <div class="w3-center w3-text-white"> You haven't select any card</div>
        }
        else{
            return <div class="w3-center w3-text-white"> You select  <img src={this.image} style="width:100px"></img> <button class="w3-button w3-grey" onClick={r=>{props.cancelSelect()}}> Unselect </button> </div>
        }
    }

    var showUndo = function(){
        if(LastGameState){
            if(LastGameState.length >= 1){
                return <p><button class="w3-button w3-grey" onClick={r=>props.Undo()}> Undo </button></p>
            }
            else{
                return <p></p>
            }
        }
        else{
            return <p></p>
        }
    }

    return(
    <div id="freecell" class="w3-container">
        <p> </p>
        <h1 class="w3-center w3-text-white" style="font-family: Georgia"><img src="./assets/freecell2.png" style="width:100"></img>  FreeCell</h1>
        
        <div class="w3-row-padding">
        <div class="w3-col l1 m1 s1"><p> </p></div>
        {props.model.cells.map(function(e,index){
            if(e.code === ""){
                return (<div class="w3-col l1 m1 s2" onclick={r=>props.cellChosen(e,index)}><img class="w3-opacity-min" src={e.image} style="width:100%"></img></div>)
            }
            else{
                return (<div class="w3-col l1 m1 s2" onclick={r=>props.cellChosen(e,index)}><img src={e.image} style="width:100%"></img></div>)
            }
        })}

        <div class="w3-center w3-col l2 m2 s3">
            <p><button class="w3-button w3-grey" onClick={r=>{props.startFreeCell()}}> Start </button></p>
            <p><button class="w3-button w3-grey" onClick={r=>props.restartFreeCell()}> Restart </button></p>
            {showUndo()}
        </div>

        <div class="w3-col l1 m1 s2 w3-text-white w3-center" onclick={r=>props.foundationChosen(Heart, 4)}><img src={Heart.image} style="width:100%"></img>Heart</div>
        <div class="w3-col l1 m1 s2 w3-text-white w3-center" onclick={r=>props.foundationChosen(Club, 5)}><img src={Club.image} style="width:100%"></img>Club</div>
        <div class="w3-col l1 m1 s2 w3-text-white w3-center" onclick={r=>props.foundationChosen(Diamond, 6)}><img src={Diamond.image} style="width:100%"></img>Diamond</div>
        <div class="w3-col l1 m1 s2 w3-text-white w3-center" onclick={r=>props.foundationChosen(Spade, 7)}><img src={Spade.image} style="width:100%"></img>Spade</div>
        
        </div>

        <p> </p>
        <p> </p>

        {currentCard.showInfo()}

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
                                    onClick={r=>{props.pileChosen(e, 10)}}
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
                                    onClick={r=>{props.pileChosen(e, 11)}}
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
                                    onClick={r=>{props.pileChosen(e, 12)}}
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
                                    onClick={r=>{props.pileChosen(e, 13)}}
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
                                    onClick={r=>{props.pileChosen(e, 14)}}
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
                                    onClick={r=>{props.pileChosen(e, 15)}}
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
                                    onClick={r=>{props.pileChosen(e, 16)}}
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
                                    onClick={r=>{props.pileChosen(e, 17)}}
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

function ShowTopCard(cards, index){
    if(cards.length === 0){
        switch(index){
            case 1:
                return {code:"", image:"./assets/Heart.png", value:"", suit:"HEARTS"};
            case 2:
                return {code:"", image:"./assets/Club1.png", value:"", suit:"CLUBS"};
            case 3:
                return {code:"", image:"./assets/Diamond.png", value:"", suit:"DIAMONDS"};
            case 4:
                return {code:"", image:"./assets/Spade1.png", value:"", suit:"SPADES"};
        }
    }
    else{
        return cards[cards.length - 1];
    }
}