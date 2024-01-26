var LibraryAgoraWebGLV4 = {
    $AgoraTool: {
      agoraToString: function (ptrToSomeCString) {
            if (typeof UTF8ToString == "undefined")
                return Pointer_stringify(ptrToSomeCString);
            else
                return UTF8ToString(ptrToSomeCString);
      },
      agoraToStringBuffer: function(mystring) {
            var bufferSize = lengthBytesUTF8(mystring) + 1;
            var buffer = _malloc(bufferSize);
            stringToUTF8(mystring, buffer, bufferSize);
            return buffer;
      }
    },
    CreateIrisApiEngine:function(_) {
      console.log("JS------------> CreateIrisApiEngine");
      createRtcEngine();
    },
    DestroyIrisApiEngine:function(_) {
      console.log("JS------------> DestroyIrisApiEngine");
    },
    CreateIrisEventHandler:function(_) {
      console.log("JS------------> CreateIrisEventHandler");
    },
    DestroyIrisEventHandler:function(_) {
      console.log("JS------------> DestroyIrisEventHandler");
    },
    CallIrisApi:function(_, funcname, apiParam) {
      let func = UTF8ToString(funcname);
      let params = UTF8ToString(apiParam);
      console.log("JS------------> CAllIrisAPI, func_name:" + func + " params:" + params);
      /// @Here: call the wrapper functions and obtain a return value
      let rc = agoraAPICall(func, params);
      let retval = {result:rc};  // for instance, a success (default) return value is 0
      return AgoraTool.agoraToStringBuffer( JSON.stringify(retval) );
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
autoAddDeps(LibraryAgoraWebGLV4, '$AgoraTool');
mergeInto(LibraryManager.library, LibraryAgoraWebGLV4);