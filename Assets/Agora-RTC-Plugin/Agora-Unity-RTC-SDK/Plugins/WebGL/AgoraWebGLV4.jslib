var LibraryAgoraWebGLV4 = {
    CreateIrisApiEngine:function(_) {
      console.log("JS------------> CreateIrisApiEngine");
    },
    DestroyIrisApiEngine:function(_) {
      console.log("JS------------> DestroyIrisApiEngine");
    },
    CreateIrisEventHandler:function(_) {
      console.log("JS------------> DestroyIrisApiEngine");
    },
    DestroyIrisEventHandler:function(_) {
      console.log("JS------------> DestroyIrisApiEngine");
    },
    CallIrisApi:function(_, funcname, apiParam) {
      let func = UTF8ToString(funcname);
      let params = UTF8ToString(apiParam);
      console.log("JS------------> CAllIrisAPI, func_name:" + func + " params:" + params);
    },
    
    CreateIrisRtcRendering:function(_) {},
    FreeIrisRtcRendering:function(_) {},
    AddVideoFrameCacheKey:function(_,_) {},
    RemoveVideoFrameCacheKey:function(_,_) {},
    GetVideoFrameCache:function(_,_,_) {},
    ILocalSpatialAudioEngine_SetMaxAudioRecvCount:function(_,_) {},
    ILocalSpatialAudioEngine_SetAudioRecvRange:function(_,_) {},
    ILocalSpatialAudioEngine_SetDistanceUnit:function(_,_) {},
    ILocalSpatialAudioEngine_UpdateSelfPosition:function(_,
          positionX, positionY, positionZ, axisForwardX,
          axisForwardY, axisForwardZ, axisRightX, axisRightY,
          axisRightZ, axisUpX, axisUpY, axisUpZ) {},
    ILocalSpatialAudioEngine_UpdateSelfPositionEx:function(enginePtr,
          positionX, positionY, positionZ, axisForwardX,
          axisForwardY, axisForwardZ, axisRightX, axisRightY,
          axisRightZ, axisUpX, axisUpY, axisUpZ,
          channelId, localUid) {},
    ILocalSpatialAudioEngine_UpdatePlayerPositionInfo:function(enginePtr,
          playerId, positionX, positionY, positionZ, forwardX, forwardY, forwardZ) {},
    ILocalSpatialAudioEngine_MuteLocalAudioStream:function(_,_) {},
    ILocalSpatialAudioEngine_MuteAllRemoteAudioStreams:function(_,_) {},
    ILocalSpatialAudioEngine_SetZones:function(_,_,_) {},
    ILocalSpatialAudioEngine_SetPlayerAttenuation:function(_,_,_,_) {},
    ILocalSpatialAudioEngine_MuteRemoteAudioStream:function(_,_,_) {},
    ILocalSpatialAudioEngine_UpdateRemotePosition:function(engine_ptr,
          uid, positionX, positionY, positionZ,
          forwardX, forwardY, forwardZ) {},
    ILocalSpatialAudioEngine_UpdateRemotePositionEx:function(enginePtr,
          uid, positionX, positionY, positionZ,
          forwardX, forwardY, forwardZ, channelId, localUid) {},
    ILocalSpatialAudioEngine_RemoveRemotePosition:function(_,_) {},
    ILocalSpatialAudioEngine_RemoveRemotePositionEx:function(_,_,_,_) {},
    ILocalSpatialAudioEngine_ClearRemotePositions:function(_) {},
    ILocalSpatialAudioEngine_ClearRemotePositionsEx:function(_,_,_) {},
    ILocalSpatialAudioEngine_SetRemoteAudioAttenuation:function(_,_,_,_) {},
    
};

mergeInto(LibraryManager.library, LibraryAgoraWebGLV4);