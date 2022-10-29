var arr = [];

const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='music+country+acoustic -"cover"'&type=video&videoDuration=medium&videoSyndicated=true&order=viewCount&key=AIzaSyB_8l7wRzx1mfcSr-y36PAVZjxL3GImcT4`;

// for statistics on ind. videos
// const url2 = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=TruIq5IxuiU,-VoFbH8jTzE,RPNDXrAvAMg,gmQmYc9-zcg&key=AIzaSyB_8l7wRzx1mfcSr-y36PAVZjxL3GImcT4`

fetch(url)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    //console.log above is to help access proper data in the JSON
    //object
    //set iframe source to proper URL (notice same dynamic strings 
    //used above)
    document.querySelector(".iframeClass").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
    document.querySelector(".iframeClass2").src = `https://www.youtube.com/embed/${data.items[1].id.videoId}`;
    document.querySelector(".iframeClass3").src = `https://www.youtube.com/embed/${data.items[2].id.videoId}`;
    document.querySelector(".iframeClass4").src = `https://www.youtube.com/embed/${data.items[3].id.videoId}`;
    document.querySelector(".iframeClass5").src = `https://www.youtube.com/embed/${data.items[4].id.videoId}`;
});
// fetch(url2)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })