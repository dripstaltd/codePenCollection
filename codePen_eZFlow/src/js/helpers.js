import TIMEOUT_SEC from './config.js';
////////////////////////////////
//>TIMEOUT FUNCTION
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// AJAX call
export const AJAX = async function (url) {
  try {
    const fetchPro = await fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

// To title case
export function toTitleCase(a) {
  return a.replace(/\w\S*/g, function (a) {
    return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
  });
}

// Get Url
export function getUrlConst() {
  for (const a = [], b = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'), c = 0; c < b.length; c++) {
    const g = b[c].split('=');
    a.push(g[0]);
    a[g[0]] = decodeURIComponent(g[1]);
  }
  return a;
}
