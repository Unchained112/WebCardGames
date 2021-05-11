function BasicActionView(props){
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
    return(
        <div className="w3-container w3-center" >
            <h1  class="w3-text-orange" style="text-shadow:1px 1px 0 #444">
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
