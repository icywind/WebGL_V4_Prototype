class ClientManagerV4
{
    constructor() {
        this.client = undefined; // first client
        this.context = undefined;
    }

    // Sample context in JSON format
    /* {
        "appId": "ffe97fd319264c1ea2be69a370bd712e",
        "context": 0,
        "channelProfile": 1,
        "license": "",
        "audioScenario": 0,
        "areaCode": 4294967295,
        "logConfig": {
          "filePath": "",
          "fileSizeInKB": 0,
          "level": 1
        },
        "useExternalEglContext": false,
        "autoRegisterAgoraExtensions": true
      }
      */
    initialize(params)
    {
        this.context = params.context;
        var channelMode = (params.channelProfile == 1? "live":"rtc");
        this.client =  AgoraRTC.createClient({ mode: channelMode, codec: "vp8" });
        console.log("client initialized.");
        return 0;
    }

    // Sample input for JoinChannel
    /*
        {"token":"","channelId":"Unity_Channel","info":"","uid":0}
    */
    /* 
        Web SDK join(appid: string, channel: string, token: string | null, uid?: UID | null)
    */
    async joinChannel(params)
    {
        if (params.token == undefined || params.token == '')
        {
            params.token = null;
        }
        await this.client.join(this.context.appId,
                params.channelId,
                params.token,
                params.uid
            );
        return 0;
    }

    /*
    C# side is an enum, 0 for "rtc", 1 for "live"
    {"profile":0}
    */
    setChannelProfile(params) {
        this.context.channelProfile = (params.profile == 1? "live":"rtc"); 
        return 0;
    }
    /*
    {"role":1}
    */
    setClientRole(params) {
        this.clientRole = params.role;
        return 0;
    }

    enableAudio() {
        this.audio_eabled = true; 
        return 0;
    }

    disableAudio() {
        this.audio_eabled = false; 
        return 0;
    }

    registerEventHandler(params) {
        // TODO
    }
}