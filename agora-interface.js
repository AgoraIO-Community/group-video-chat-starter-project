/*
 * JS Interface for Agora.io SDK
 */

// video profile settings - https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.stream.html#setvideoprofile
const cameraVideoProfile = ''; // 640 × 480 @ 30fps
const screenVideoProfile = ''; //   640 × 480 @ 30fps

// create client instances for camera (client) and screen share (screenClient)
const client; 
const screenClient; 

// stream references (keep track of active streams) 
let remoteStreams = {}; // remote streams obj struct [id : stream] 

let localStreams = {
  camera: {
    id: "",
    stream: {}
  },
  screen: {
    id: "",
    stream: {}
  }
};

let mainStreamId; // reference to main stream
let screenShareActive = false; // flag for screen share 

function initClientAndJoinChannel(agoraAppId, channelName) {
  // init Agora SDK
  // join channel upon successfull init
}

// listen for client events

// Local Stream Events
// stream-published - local stream successfully published

//Remote Stream Events
// stream-added - new stream added to channel, subscribe to the remote stream.

// sstream-subscribed - successfully subscribed to remote stream
// add new stream to the UI

// peer-leave - remote stream has left the channel
// remove stream from the UI

// mute-audio - a remote stream has muted its mic

// unmute-audio - a remote stream has un-muted its mic

// mute-video - a remote stream has muted its video

// unmute-video - a remote stream has un-muted its video

// join a channel
function joinChannel(channelName) {
  const token = generateToken();
  const userID; // set to null to auto generate uid on successfull connection
  // Join the channel using Agora Client
  // init the local camera stream
}

// video streams for channel
function createCameraStream(uid) {
  // create the local stream object using video and audio
  // set the video profile
  // init the local stream
  // publish local stream
  // enable UI
}

// SCREEN SHARING
function initScreenShare(agoraAppId, channelName) {
  // init the screen client
  // join channel and init screen stream 
}

function joinChannelAsScreenShare(channelName) {
  var token = generateToken();
  var userID; // set to null to auto generate uid on successfull connection
   // Join the channel using screen Client
   // Create the stream object for screen sharing using screen, screenAudio
   // set the screen's video profile
   // init the screen stream and publish it.
   // disable the screen share button
   // add screen stream event listeners
   // stream-published - screen stream successfully published
   // stopScreenSharing - screen sharing stopped
}

function stopScreenShare() {
  // disable the local video stream (will send a mute signal)
  // stop playing the local stream
  // enable the camera feed
  // play the camera within the full-screen-video div
  // call screen clien leave function to leave the channel
  // unpublish the screen client
  // eanble screeen share button
}

// REMOTE STREAMS UI
function addRemoteStreamMiniView(remoteStream){
  var streamId;
  // append the remote stream template to #remote-streams
  $('#remote-streams').append(
    $('<div/>', {'id': streamId + '_container',  'class': 'remote-stream-container col'}).append(
      $('<div/>', {'id': streamId + '_mute', 'class': 'mute-overlay'}).append(
          $('<i/>', {'class': 'fas fa-microphone-slash'})
      ),
      $('<div/>', {'id': streamId + '_no-video', 'class': 'no-video-overlay text-center'}).append(
        $('<i/>', {'class': 'fas fa-user'})
      ),
      $('<div/>', {'id': 'agora_remote_' + streamId, 'class': 'remote-video'})
    )
  );
  // play the remote video stream in the newly created div
  
  // add the ability for the user to double click the mini view containers to have it become the full screen video
  var containerId = '#' + streamId + '_container';
  $(containerId).dblclick(function() {
    // play selected container as full screen - swap out current full screen stream
    remoteStreams[mainStreamId].stop(); // stop the main video stream playback
    addRemoteStreamMiniView(remoteStreams[mainStreamId]); // send the main video stream to a container
    $(containerId).empty().remove(); // remove the stream's miniView container
    remoteStreams[streamId].stop() // stop the container's video stream playback
    remoteStreams[streamId].play('full-screen-video'); // play the remote stream as the full screen video
    mainStreamId = streamId; // set the container stream id as the new main stream id
  });
}

function leaveChannel() {
  // if screen sharing is active, stop screen share
  // stop the camera stream playback
  // unpublish the camera stream
  // clean up and close the camera stream
  // disable the UI elements
  // remove divs for the remote feeds
  // leave the Agora Channel
}

// use tokens for added security
function generateToken() {
  return null; // TODO: add a token generation
}