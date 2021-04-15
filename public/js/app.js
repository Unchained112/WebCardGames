const App= (props)=>
<div>
    <div class="w3-green">
    <i onclick="w3_open()" class="fa fa-bars w3-xlarge w3-button "></i> 
    </div>
    <nav class="w3-text-green w3-light-gray w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" style="display:none" id="mySidebar">
    <h1 class="w3-xxxlarge ">Poker Games</h1>
    <button class="w3-bar-item w3-button" onclick="w3_close()">Close <i class="fa fa-remove"></i></button>
    <a onClick={r=>{window.location.hash = "#home";}} class="w3-bar-item w3-button">Home</a>
    <a onClick={r=>{window.location.hash = "#breakout";}} class="w3-bar-item w3-button">Breakout</a>
    <a onClick={r=>{window.location.hash = "#freecell";}} class="w3-bar-item w3-button">Freecell</a>
    <a onClick={r=>{window.location.hash = "#spider";}} class="w3-bar-item w3-button">Spider</a>
    </nav>
    <div>
        <Show hash="#home"><HomePresenter/></Show>
        <Show hash="#breakout"><BreakoutPresenter/></Show>
    </div>
    {/* <Show hash="#arkanoid"><ArkanoikPresenter model={props.model.arkanoid} /></Show> */}
</div>

function defaultRoute(){
    if(["#home", "#breakout", "#freecell", "#spider"].find(e=>e===window.location.hash)===undefined) window.location.hash="#home";
}
defaultRoute();