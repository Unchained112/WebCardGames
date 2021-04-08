function promiseNoData(promise, data, error){
	if(promise === null){
        return (<span> no data </span>)
    }
	if (promise != null && data === null && error === null){
        return (<img src="http://www.csc.kth.se/~cristi/loading.gif"/>)
    }
	if (promise != null && data === null && error != null){
        return (<span style="color:red" > {error} </span>)
    }
    if (promise != null && data != null && error === null){
        console.log(0);
        return false;
    } 
}