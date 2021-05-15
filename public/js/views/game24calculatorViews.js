function BasicActionView(props){

    if(props.gameover){
        let result=props.report
        console.log("Report")
        console.log(result)
        return (
            <div className="w3-container w3-center">
                <div className="div-inline" onClick={()=>{props.recordppsampleSolutionCnt();props.calculatescore();props.createreport();document.getElementById('game24score').style.display='block'}}>
                    <div className="game24calculatorButton">
                        <a>See My Score</a>
                    </div>
                </div>
                <div className="div-inline" onClick={()=>props.reStart()}>
                    <div className="game24calculatorButton">
                        <a>Restart!</a>
                    </div>
                </div>
                <div id="game24score" className="w3-modal">
                    <div className="w3-modal-content w3-card-4 w3-animate-top">
                        <header className="w3-container w3-text-white w3-casino-green">
                            <h4>Your Game Result</h4>
                        </header>
                        <h2 className="w3-center">
                            You have given correct answer(s) in {props.score} round(s).
                        </h2>
                        <button className="w3-button w3-green" onClick={()=>{props.reStart();document.getElementById('game24score').style.display='none'}}>
                            Restart!
                        </button>
                        <div>
                            {result.map(
                                    function(e){
                                        return (
                                            <div>
                                                <div>Round {e[0]}</div>
                                                {
                                                    e[1].map(
                                                        function (k) {
                                                            let game24url=k.image;
                                                            return(
                                                                    <img src={game24url} style="width:100px"/>
                                                                )
                                                        }
                                                    )
                                                }
                                                <div>
                                                    <b>Sample Solution:</b>
                                                    <h4>{e[2]}</h4>
                                                    <b>Your Solution:</b>
                                                    <h4>{e[4]}</h4>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
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
                <div className="div-inline" onClick={()=>{
                    try{
                        props.OK();props.recordppsampleSolutionCnt();props.findsampleSolution();
                    }
                    catch (err){
                        console.log("OK Error")
                    }}}>
                    <div className="game24calculatorButton" >
                        <a>OK</a>
                    </div>
                </div>
                <div className="div-inline" onClick={()=>{props.noSolution();props.recordppsampleSolutionCnt();props.findsampleSolution();}}>
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
