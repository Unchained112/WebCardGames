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
            </p>
        </div>
    )
}

function CalculatorScreenView(props){
    return(<div>{props.formula}</div>)
}

