function BasicActionView(props){
    return(
        <div>
            <p>
                <button class="w3-btn w3-large w3-circle w3-black w3-hover-red" onClick={props.clear}>AC</button>
                <button class="w3-btn w3-large w3-circle w3-black w3-hover-red" onClick={props.del}>DEC</button>
                <button class="w3-btn w3-circle w3-black w3-hover-red" onClick={e=>props.addOperator("(")}>{"("}</button>
                <button class="w3-btn w3-circle w3-black w3-hover-red" onClick={e=>props.addOperator(")")}>{")"}</button>
            </p>
            <p>
                <button class="w3-btn w3-circle w3-black w3-hover-red" onClick={e=>props.addOperator("+")}>+</button>
                <button class="w3-btn w3-circle w3-black w3-hover-red" onClick={e=>props.addOperator("-")}>-</button>
                <button class="w3-btn w3-circle w3-black w3-hover-red" onClick={e=>props.addOperator("*")}>*</button>
                <button class="w3-btn w3-circle w3-black w3-hover-red" onClick={e=>props.addOperator("/")}>/</button>
                <button class="w3-btn w3-circle w3-black w3-hover-red" onClick={props.OK}>OK</button>
                <button class="w3-btn w3-circle w3-black w3-hover-red" onClick={props.noSolution}>No Solution</button>
            </p>
        </div>
    )
}

function CalculatorScreenView(props){
    return(<div>{props.formula}</div>)
}

function TitleView(props){
    return(<div class="w3-container w3-center">
        <h1>24 Game</h1>
        <h2>Round:{props.thisRound}/10 </h2>
    </div>)
}
