function BasicActionView(props){
    if(props.gameover){
        return (
            <div className="w3-container w3-center">
                <div className="div-inline" onClick={e=>location.reload()}>
                    <div className="game24calculatorButton">
                        <a>Restart!</a>
                    </div>
                </div>
            </div>

        )
    }
    return(
        <div className="w3-container w3-center">
            <div>
                <div className="div-inline" onClick={props.clear}>
                    <div className="game24calculatorButton">
                        <a>Clear</a>
                    </div>
                </div>
                <div className="div-inline" onClick={props.del}>
                    <div className="game24calculatorButton">
                        <a>Delete</a>
                    </div>
                </div>
                <div className="div-inline" onClick={props.OK}>
                    <div className="game24calculatorButton">
                        <a>OK</a>
                    </div>
                </div>
                <div className="div-inline" onClick={props.noSolution}>
                    <div className="game24calculatorButton">
                        <a>No Solution</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="div-inline" onClick={e=>props.addOperator("+")}>
                    <div className="game24calculatorButton">
                        <a>+</a>
                    </div>
                </div>
                <div className="div-inline" onClick={e=>props.addOperator("-")}>
                    <div className="game24calculatorButton">
                        <a>-</a>
                    </div>
                </div>
                <div className="div-inline" onClick={e=>props.addOperator("*")}>
                    <div className="game24calculatorButton">
                        <a>*</a>
                    </div>
                </div>
                <div className="div-inline" onClick={e=>props.addOperator("/")}>
                    <div className="game24calculatorButton">
                        <a>/</a>
                    </div>
                </div>
                <div className="div-inline" onClick={e=>props.addOperator("(")}>
                    <div className="game24calculatorButton">
                        <a>{"("}</a>
                    </div>
                </div>
                <div className="div-inline" onClick={e=>props.addOperator(")")}>
                    <div className="game24calculatorButton">
                        <a>{")"}</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

function CalculatorScreenView(props){
    if(props.gameover){ return (
        <div className="w3-center">
            <h1 class="game24gameover w3-animate-top">
                Game Over
            </h1>
            <h2 className={"w3-text-white"}>
                Score: {props.score}/10
            </h2>
        </div>
    )}
    return(
        <div className="w3-container w3-center" >
            <h1  class="game24calculatorScreen">
                {props.formula}
            </h1>

        </div>
    )
}

function TitleView(props){
    return(<div class="w3-container w3-center">
        <div className="w3-container w3-margin-top">
            <img src={"./assets/24gamelogowhite.png"} style="width:200px"></img>
        </div>
        <h2 class=" w3-content w3-text-white">Round:{props.thisRound()}/10 </h2>
    </div>)
}
