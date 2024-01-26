let client_managerv4 = new ClientManagerV4();

function agoraAPICall(func_name, apiParam) {
    const params = JSON.parse(apiParam);
    // mapping from defines from AgoraApiType.cs 
    switch(func_name) {
        case  "RtcEngine_initialize":
            return RtcEngine_initialize(params); 
        case "RtcEngine_registerEventHandler":
            return RtcEngine_registerEventHandler(params); 
        case "RtcEngine_enableAudio":
            return RtcEngine_enableAudio(params); 
        case "RtcEngine_setChannelProfile":
            return RtcEngine_setChannelProfile(params); 
        case "RtcEngine_setClientRole":
            return RtcEngine_setClientRole(params); 
        case "RtcEngine_joinChannel":
            return RtcEngine_joinChannel(params); 
        default:
            console.log(func_name + " is not supported yet."); 
    }
    return 0;
}

function createRtcEngine() {
    // note this does not map to the client
}

function RtcEngine_initialize(params) {
   return client_managerv4.initialize(params);
}

function RtcEngine_joinChannel(params) {
   client_managerv4.joinChannel(params);
   return 0;
}

function RtcEngine_registerEventHandler(params) {
    // TODO: this would be complicated to map
    return client_managerv4.registerEventHandler(params);
}

function RtcEngine_enableAudio(params) {
    return client_managerv4.enableAudio();
}

function RtcEngine_disableAudio(params) {
    return client_managerv4.disableAudio();
}

function RtcEngine_setChannelProfile(params) {
    return client_managerv4.setChannelProfile(params);
}

function RtcEngine_setClientRole(params) {
    return client_managerv4.setClientRole(params);
}