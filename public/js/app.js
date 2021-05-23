const App= (props)=>
<div>
    <div class="w3-casino-green">
    <i onclick="w3_open()" class="fa fa-bars w3-large w3-button " style="font-size:5vw">  Menu</i>
    <i class="w3-right fa w3-large w3-button " style="font-size:5vw" onclick={r=>{GoSign(props.model);}}>{props.model.showSignText()}</i>
    </div>
    <nav class="w3-text-blue-grey w3-light-gray w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" style="display:none" id="mySidebar">
    <button class="w3-bar-item w3-button " onclick="w3_close()">Close <i class="fa fa-remove"></i></button>
    <img src="./assets/pokergame.png" style="width:190px"></img>
    <a onClick={r=>{window.location.hash = "#home"; w3_close()}} class="w3-bar-item w3-button">Home</a>
    <a onClick={r=>{window.location.hash = "#24Game";w3_close()}} class="w3-bar-item w3-button">24Game</a>
    <a onClick={r=>{window.location.hash = "#freecell";w3_close()}} class="w3-bar-item w3-button">FreeCell</a>
    <a onClick={r=>{window.location.hash = "#blackjack";w3_close()}} class="w3-bar-item w3-button">Blackjack</a>
    <a onClick={r=>{window.location.hash = "#texas";w3_close()}} class="w3-bar-item w3-button">Texas</a>
    <a onClick={r=>{window.location.hash = "#breakout";w3_close()}} class="w3-bar-item w3-button">Breakout</a>

    </nav>
    <div>
        <Show hash="#home"><HomePresenter/></Show>
        <Show hash="#24Game"><Game24startPresenter/></Show>
        <Show hash="#24gameContent">
            <Game24cardPresenter model={props.model.game24Model}/>
        </Show>
        <Show hash="#freecell"><FreeCellPresenter model={props.model.freeCellModel}/></Show>
        <Show hash="#blackjack"><BlackjackPresenter model={props.model.blackjackModel}/></Show>
        <Show hash="#texas"><TexasStartPresenter/></Show>
        <Show hash="#texasgame"><TexasPresenter model={props.model.TexasModel}/></Show>
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
window.addEventListener('mouseup',function(event){
    var box=document.getElementById('mySidebar');
    if(event.target!=box){
        box.style.display="none"
    }
})

function defaultRoute(){
    if(["#home", "#breakout", "#freecell", "#spider","#24Game","#24gameContent","#blackjack", "#texas","#texasgame", "#texasresult", "#signIn", "#signUp"].find(e=>e===window.location.hash)===undefined) window.location.hash="#home";
}
defaultRoute();