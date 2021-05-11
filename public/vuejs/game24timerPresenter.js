function Game24timerPresenter(props){
    return(
        <div>

            <TimerView lefttime={()=>{
                setInterval(props.model.showtime(),1000);
            }}/>
        </div>
    )
}