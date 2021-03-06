"use es6";

export const VERSION = "0.0.1";

const messageTypeList = [
  "CALL_ANSWERED",
  "CALL_COMPLETED",
  "CALL_DATA",
  "CALL_ENDED",
  "DIAL_NUMBER",
  "SET_CALL_STATE",
  "END_CALL",
  "ERROR",
  "INCOMING_CALL",
  "INITIALIZED",
  "LOGGED_IN",
  "LOGGED_OUT",
  "OUTGOING_CALL_STARTED",
  "READY",
  "SET_WIDGET_URL",
  "RESIZE_WIDGET",
  "SYNC",
  "SYNC_ACK",
  "UNLOADING",
  "VISIBILITY_CHANGED",
  "SYNC_ACK_FAILED"
];

const errorTypeList = ["UNKNOWN_MESSAGE_TYPE", "GENERIC"];

function mirrorKeys(keyList) {
  const keyObject = {};
  keyList.forEach(keyName => {
    keyObject[keyName] = keyName;
  });
  return keyObject;
}

export const messageType = mirrorKeys(messageTypeList);
export const errorType = mirrorKeys(errorTypeList);
