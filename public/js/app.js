const App= (props)=>
<div>
    <div class="w3-casino-green">
    <i onclick="w3_open()" class="fa fa-bars w3-xlarge w3-button "/>
    <a class="w3-right w3-text-white w3-button" style="margin-top: 1" onclick={r=>{GoSign(props.model);}}>{props.model.showSignText()}</a>
    </div>
    <nav class="w3-text-blue-grey w3-light-gray w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" style="display:none" id="mySidebar">
    <button class="w3-bar-item w3-button " onclick="w3_close()">Close <i class="fa fa-remove"></i></button>
    <img src="./assets/pokergame.png" style="width:190px"></img>
    <a onClick={r=>{window.location.hash = "#home";}} class="w3-bar-item w3-button">Home</a>
    <a onClick={r=>{window.location.hash = "#24Game";}} class="w3-bar-item w3-button">24Game</a>
    <a onClick={r=>{window.location.hash = "#freecell";}} class="w3-bar-item w3-button">FreeCell</a>
    <a onClick={r=>{window.location.hash = "#blackjack";}} class="w3-bar-item w3-button">Blackjack</a>
    <a onClick={r=>{window.location.hash = "#texas";}} class="w3-bar-item w3-button">Texas</a>
    <a onClick={r=>{window.location.hash = "#breakout";}} class="w3-bar-item w3-button">Breakout</a>

    {/* <a onClick={r=>{window.location.hash = "#spider";}} class="w3-bar-item w3-button">Spider</a> */}
    </nav>
    <div>
        <Show hash="#home"><HomePresenter/></Show>
        <Show hash="#24Game"><Game24startPresenter/></Show>
        <Show hash="#24gameContent">
            <Game24cardPresenter model={props.model.game24Model}/>
        </Show>
        <Show hash="#freecell"><FreeCellPresenter model={props.model.freeCellModel}/></Show>
        <Show hash="#blackjack"><BlackjackPresenter model={props.model.blackjackModel}/></Show>
        <Show hash="#texas"><TexasPresenter model={props.model.TexasModel}/></Show>
        <Show hash="#texasresult"><TexasResultPresenter model={props.model.TexasModel}/></Show>
        
        <Show hash="#breakout"><BreakoutPresenter model={props.model.BreakoutModel}/></Show>
        <Show hash="#signIn"><SignInPresenter model={props.model}/></Show>
        <Show hash="#signUp"><SignUpPresenter model={props.model}/></Show>
    </div>
</div>

function GoSign(model){
    if(model.userID === 0){
        //console.log("Sign In");
        if(window.location.hash === "#signIn"){
            return;
        }
        else{
            window.location.hash = "#signIn";
        }
    }
    else{
        UserAuthen.SignOut();
        model.userID = 0;
        model.userEmail = 0;
        //model.showSignText();
    }
}

function defaultRoute(){
    if(["#home", "#breakout", "#freecell", "#spider","#24Game","#24gameContent","#blackjack", "#texas", "#texasresult", "#signIn", "#signUp"].find(e=>e===window.location.hash)===undefined) window.location.hash="#home";
}
defaultRoute();