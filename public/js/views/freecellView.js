function FreeCellView(props){

    return(
        <div class="w3-container" style="background: url('./assets/table_pattern.jpg')">

        <div class="w3-cell-row">
        <div class="w3-quarter">
            <button class="w3-button"> Start </button> <br></br>
            <button class="w3-button"> Restart </button>
        </div>
        <div class="w3-col"></div>
        <div></div>
        <div class="w3-col"></div>
        <div></div>
        </div>

        <div>
            {
                result.map(
                    function(e){
                        var url=e.image;
                        return (<img src={url}
                                     onClick={r=>{props.cardChosen(e.code)}}/>)
                    }
                )
            }
        </div>



        </div>
    )
}