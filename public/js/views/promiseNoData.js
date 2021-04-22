function promiseNoData(promise, data, error){
	if(promise === null){
        return (<span> no data </span>)
    }
	if (promise != null && data === null && error === null){
        return (<img src="assets/loading2.gif" style="width:100px"/>)
    }
	if (promise != null && data === null && error != null){
        return (<span style="color:red" > {error} </span>)
    }
    if (promise != null && data != null && error === null){
        console.log(0);
        return false;
    } 
}