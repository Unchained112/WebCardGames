function BasicActionView(props){
    return(
        <div className="w3-container w3-center">
            <p>
                <button class="w3-btn w3-large w3-circle w3-black w3-hover-red" onClick={props.clear}>AC</button>
                <button class="w3-btn w3-large w3-circle w3-black w3-hover-red" onClick={props.del}>DEC</button>
                <button className="w3-btn w3-circle w3-black w3-hover-red" onClick={props.OK}>OK</button>
                <button className="w3-btn w3-circle w3-black w3-hover-red" onClick={props.noSolution}>No Solution
                </button>
            </p>
            <p>
                <button class="w3-btn w3-circle w3-black w3-hover-red" onClick={e=>props.addOperator("+")}>+</button>
                <button class="w3-btn w3-circle w3-black w3-hover-red" onClick={e=>props.addOperator("-")}>-</button>
                <button class="w3-btn w3-circle w3-black w3-hover-red" onClick={e=>props.addOperator("*")}>*</button>
                <button class="w3-btn w3-circle w3-black w3-hover-red" onClick={e=>props.addOperator("/")}>/</button>

                <button className="w3-btn w3-circle w3-black w3-hover-red"
                        onClick={e => props.addOperator("(")}>{"("}</button>
                <button className="w3-btn w3-circle w3-black w3-hover-red"
                        onClick={e => props.addOperator(")")}>{")"}</button>
            </p>
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
        <h2 class=" w3-content w3-text-white">Round:{props.thisRound}/10 </h2>
    </div>)
}
