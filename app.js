const appState = {

	results: [],
	youtubeRequestPage: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBsVbwSx7O3-lG0IyK2nsd2qCr28MUcqrw&part=snippet&q="


}




///////////////////////////////////////////////////////////////////////////////
///////////////////////////MOD FUNCTIONS//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
	function addResult (state, result){
		
		state.results.push(results);
	}

	function queryYoutube(state, search){
		console.log(search);
		search  = state.youtubeRequestPage += search;
		console.log(search);	
	}



//////////////////////////////RENDER FUNCTION////////////////////
function render(){
//take current app state and display on page
}

///////////////////////////EVENT LISTENER///////////////////////////////////

//Grab info from search bar
//run that info to youtube api
