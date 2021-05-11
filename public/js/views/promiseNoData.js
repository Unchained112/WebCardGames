function promiseNoData(promise, data, error){
	if(promise === null){
        return (<span> no data </span>)
    }
	if (promise != null && data === null && error === null){
        return (
            <div class="w3-container w3-center">
                <img src="assets/loading2.gif" style="width:100px"/>
            </div>
            )
    }
	if (promise != null && data === null && error != null){
        return (<span style="color:red" > {error} </span>)
    }
    if (promise != null && data != null && error === null){
        //console.log(0);
        return false;
    } 
}