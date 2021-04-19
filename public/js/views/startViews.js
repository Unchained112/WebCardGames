function StartView(props){
    return(
        <div class="w3-container w3-center">
            <h2>24 Game</h2>
            <p></p>
            <button class="w3-button w3-green" onClick={e=>{window.location.hash="#24gameContent"}}>Start!</button>
        </div>
    )
}