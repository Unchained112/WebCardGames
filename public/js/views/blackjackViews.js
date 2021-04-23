function BlackjackView(props){
    return(
        <div className="Blackjack">
            <div className="w3-container w3-center">

                <p><img src={"./assets/back.png"} style="width:100px"></img>
                    <img src={"./assets/24game7S.png"} style="width:100px"></img>
                </p>

                <div className="w3-container w3-margin-top">
                    <img src={"./assets/24gamelogowhite.png"} style="width:200px"></img>
                </div>

                <div class=" w3-content w3-text-white w3-animate-opacity" style="max-width:500px">
                    <button className="w3-button w3-green" onClick={props.hit}>hit</button>
                    <button className="w3-button w3-green" onClick={props.stand}>stand</button>
                    <button className="w3-button w3-green" onClick={props.clear}>play again</button>
                   
                    <p> <img src={"./assets/24gameAC.png"} style="width:100px"></img>
                        <img src={"./assets/24game6H.png"} style="width:100px"></img>
                    </p>
                
                </div>
            </div>
        </div>

    )
}