const App= (props)=>
<div>
    <div>
        <nav class="w3-text-green w3-light-gray w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" style="display:none" id="mySidebar">
        <h1 class="w3-xxxlarge ">Poker Games</h1>
        <button class="w3-bar-item w3-button" onclick="w3_close()">Close <i class="fa fa-remove"></i></button>
        <a href="#arkanoid" class="w3-bar-item w3-button">Arkanoid</a>
        <a href="#freecell" class="w3-bar-item w3-button">Freecell</a>
        <a href="#spider" class="w3-bar-item w3-button">Spider</a>
        </nav>
        <HomePresenter/>
    </div>
    {/* <Show hash="#search"><SearchPresenter model={props.model} /></Show> 
    <Show hash="#details"><DetailsPresenter model={props.model} /></Show>
    <Show hash="#summary" class="mainContent debug"><SummaryPresenter model={props.model} /></Show> */}
</div>

function defaultRoute(){
    if(["#home", "#arkanoid", "#freecell", "#spider"].find(e=>e===window.location.hash)===undefined) window.location.hash="#home";
}
defaultRoute();