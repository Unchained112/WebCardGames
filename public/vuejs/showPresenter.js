const Show = {    // subscribe to browser-wide event (location.hash as "mini-model")
    props:["hash"],
    data(){ return {hashState:window.location.hash}; },
    created(){  
        this.listener=()=> this.hashState= window.location.hash; 
        window.addEventListener("hashchange", this.listener);
        window.addEventListener("hashchange", defaultRoute);
    },
    unmounted(){ window.removeEventListener("hashchange", this.listener); },
    render(){
	    return <div class={this.hashState === this.hash? '' : 'hidden'}>{this.$slots.default()}</div>;  // for now
    },
};