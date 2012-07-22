// listen to events
PUBNUB.subscribe({
    channel : "mysuperchannel",
    callback : function(msg) {
        soundcloud.getPlayer('myPlayer').api_play();
    }
});
