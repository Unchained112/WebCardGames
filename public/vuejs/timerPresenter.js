function TimerPresenter(props){
    return(
        <div>
            <TimerView reduceTime={e=>props.model.showtime()} lefttime={props.model.lefttime}/>
        </div>
    )
}