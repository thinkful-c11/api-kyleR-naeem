const appState = {

	results: null,
	
	baseURL: 


}


const baseURL = "https://www.googleapis.com/youtube/v3/search"

let search  = state.youtubeRequestPage += search;
///////////////////////////////////////////////////////////////////////////////
///////////////////////////MOD FUNCTIONS//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
	// function addResult (state, result){
		
	// 	state.results = result;

	// }

	function queryYoutube(searchTerm, query, ){
		let query = {
			s: searchTerm,
			key: AIzaSyBsVbwSx7O3-lG0IyK2nsd2qCr28MUcqrw,
			part: 'snippet'
		}
		
		$.getJSON(baseURL, query, callback);


	}

	function cleanData(searchTerm, call){
		
		
	}

//////////////////////////////RENDER FUNCTION////////////////////
	function render(){
//take current app state and display on page
	}

///////////////////////////EVENT LISTENER///////////////////////////////////

//Grab info from search bar
//run that info to youtube api
