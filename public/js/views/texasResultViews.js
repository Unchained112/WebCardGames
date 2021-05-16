function TexasResultView(props){
    props.model.sortCards(props.model.state.communityCards);
    return(
        <div className='showdown-container--wrapper'>
        <h5 className="showdown-container--title">
          Round Complete!
        </h5>
        <div className="showdown-container--messages">
          take chips
        </div>
        <h5 className="showdown-container--community-card-label">
          Community Cards
        </h5>
        <div className='showdown-container--community-cards'>
        {     
            
            props.model.state.communityCards
            .map(
                function(e){
                    var url=e.image;
                    return (<img src={url}/>)
                }
            )
        }
        </div>
        
      </div>


    )





}

