// import Moment from 'moment';


export function deepCopy(data) {
  const replacer = (key, value) => {
    return typeof value === 'undefined' ? null : value;
  }
  if (!data) return data;
  return JSON.parse(JSON.stringify(data, replacer));
}

// export function formatTime(time) {
//   const duration: any = Moment.duration(time, 'seconds');
//   return `${duration._data.hours}H ${duration._data.minutes}M ${duration._data.seconds}S`;
// }


export function createUUID(){
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

export function getQueryParams(decodeUrl = true) {
  let match,
  pl     = /\+/g,  // Regex for replacing addition symbol with a space
  search = /([^&=]+)=?([^&]*)/g,
  decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
  query  = window.location.href.split('?')[1];

  const urlParams: object = {};

  while (match = search.exec(query)) {
    // @ts-ignore
    urlParams[decode(match[1])] = decodeUrl ?decode(match[2]) : match[2];
  }

  return urlParams;
}

export const onlyTheseKeys = (object, keys: string[]) => {
  return Object.keys(object).reduce((removedKeysObject, key) => {
    if (keys.indexOf(key) === -1) {
      delete removedKeysObject[key];
    }

    return removedKeysObject;
  }, { ...object });
};

export const removeTheseKeys = (object, keys: string[]) => {
  return Object.keys(object).reduce((removedKeysObject, key) => {
    if (keys.indexOf(key) > -1) {
      delete removedKeysObject[key];
    }

    return removedKeysObject;
  }, { ...object });
};

export const removeNulls = (object) => {
  return Object.keys(object).reduce((noNullsObject, key) => {
    if (noNullsObject[key] === null) {
      delete noNullsObject[key];
    }

    return noNullsObject;
  }, { ...object });
};

export function extendObject(destination, source) {
  Object.keys(source).forEach(key => {
    destination[key] = deepCopy(source[key]);
  });
}

export function checkObjectArrayPropHasValues(items: any[], arrayPropName: string) {
  let result: boolean = false;
  if(!!items) {
    items.forEach(x => {
      if(!!x[arrayPropName] && x[arrayPropName].length > 0) {
        result = true
        return result;
      }
    });
  }
  return result;
}
