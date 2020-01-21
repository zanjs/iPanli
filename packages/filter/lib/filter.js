'use strict';
const appTerminal = require('@panli/app-terminal');
/**
 * Api header data 过滤转换层
 * @header cookieValue
 * @header ClientIp
 * @header token
 * @header Terminal
 * @header DeviceId
 * @param {*} data
 */
function deviceHeader(data) {
  if (!data) {
    return {};
  }
  if (!data.Terminal || data.Terminal == appTerminal.PC) {
    return {
      cookieValue: data.token || '',
      ClientIp: data.ClientIp || '',
      Terminal: data.Terminal || appTerminal.PC,
      token: data.token || '',
      DeviceId: data.DeviceId || ''
    };
  }
  return {
    token: data.token || '',
    ClientIp: data.ClientIp || '',
    Terminal: data.Terminal || appTerminal.PC,
    DeviceId: data.DeviceId || '',
    cookieValue: data.token || ''
  };
}

module.exports = {
  deviceHeader
};
