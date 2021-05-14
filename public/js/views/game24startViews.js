function StartView(props){
    return(
        <div className="game24start">
            <div className="w3-container w3-center">
                <div className="w3-container w3-margin-top">
                    <img src={"./assets/24gamelogowhite.png"} style="width:200px"></img>
                </div>

                <div class=" w3-content w3-text-white w3-animate-opacity" style="max-width:500px">
                    <p>The 24 game is a simple math game played with poker cards. It has been played in Shanghai since the 1960s. The player draws four cards from a shuffled deck of cards and finds a way to manipulate the four
                        values with elementary arithmetic operations (,+,-,*,/,) to come up with 24. </p>
                    <button className="w3-button w3-green" onClick={e => {
                        window.location.hash = "#24gameContent"
                    }}>Start!
                    </button>

                    <p>A simple example:</p>
                    <p><img src={"./assets/24gameJD.png"} style="width:100px"></img>
                        <img src={"./assets/24game7S.png"} style="width:100px"></img>
                        <img src={"./assets/24gameAC.png"} style="width:100px"></img>
                        <img src={"./assets/24game6H.png"} style="width:100px"></img>
                    </p>
                    <p>
                        {"The quadruple is {11,7,1,6}. There are several different solutions:"}
                    </p>
                    <p> (11 - 7) * (1 * 6)</p>
                    <p> (11 - 7) / (1 / 6)</p>
                    <p> (11 + 7) + (1 * 6)</p>
                    <p>...</p>
                </div>
            </div>
        </div>

    )
}