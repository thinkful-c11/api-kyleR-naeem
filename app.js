/* global $ */
const appState = {
    results: [],
}

const baseURL = "https://www.googleapis.com/youtube/v3/search";
///////////////////////////////////////////////////////////////////////////////
///////////////////////////MOD FUNCTIONS//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
    // function addResult (state, result){
        
    // 	state.results = result;

    // }

function queryYoutube(searchTerm){
    let query = {
        s: searchTerm,
        key: 'AIzaSyBsVbwSx7O3-lG0IyK2nsd2qCr28MUcqrw',
        part: 'snippet'
    };
    
    $.getJSON(baseURL, query, (response) => {
        const data = cleanData(response);
        addState(appState, data);
    });
}

function cleanData(response){
    const data = [];
    response.items.forEach((i) => {
        data.push(i.snippet.thumbnails.default.url);
    });
    
    return data;
}

function addState(state, data) {
    state.results.push(data);
}

//////////////////////////////RENDER FUNCTION////////////////////
function render(){
    //take current app state and display on page
}

///////////////////////////EVENT LISTENER///////////////////////////////////

//Grab info from search bar
//run that info to youtube api

$("#search-form").submit( (event) => {
    event.preventDefault();
    const userQuery = $('#user-query').val();
    queryYoutube(userQuery);
    render()
})

//<input type="text" name="search-box" id="user-query"/>