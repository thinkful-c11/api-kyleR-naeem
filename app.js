/* global $ */
const appState = {
    results: [],
};

const baseURL = "https://www.googleapis.com/youtube/v3/search";
///////////////////////////////////////////////////////////////////////////////
///////////////////////////MOD FUNCTIONS//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function queryYoutube(searchTerm){
    let query = {
        q: searchTerm,
        key: 'AIzaSyBsVbwSx7O3-lG0IyK2nsd2qCr28MUcqrw',
        part: 'snippet'
    };
    
    $.getJSON(baseURL, query, (response) => {
        const data = cleanData(response);
        addUrlToState(appState, data);
        render();
    });
}

function cleanData(response){
    let data = [];
    response.items.forEach((i) => {
        data.push({
            "thumbnail": i.snippet.thumbnails.default.url,
            "videoUrl": i.id.videoId,
            "title": i.snippet.title,
            "channel": i.snippet.channelTitle,
            "description": i.snippet.description
        });
    });
    
    return data;
}

function addUrlToState(state, data) {
    state.results = data;
}

//////////////////////////////RENDER FUNCTION////////////////////
function render(){
    let html = '';
    appState.results.forEach((item) => {
        html += `
               <div class="image-and-info-container">
               		<h3>${item.title}</h3>
                    <a href="https://www.youtube.com/watch?v=${item.videoUrl}">
                        <img src="${item.thumbnail}">
                    </a>
                    <p>${item.description}</p>
               </div>`;
    });
    $('.results').html(html);
}

///////////////////////////EVENT LISTENER///////////////////////////////////

$("#search-form").submit((event) => {
    event.preventDefault();
    const userQuery = $('#user-query').val();
    $('#user-query').val("");
    queryYoutube(userQuery);
});
