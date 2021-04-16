function CalculatorPresentor(props){
    return (
            <div>
                <CalculatorScreenView formula={props.model.simpleformula}/>
                <BasicActionView clear={e=>props.model.ac()}
                                 del={e=>props.model.delete()}
                                 addOperator={e=>props.model.addOperatortoFormula(e)}
                                 OK={e=>{props.model.generatecomplexformula();}}
                />
            </div>
        )
}