export const formattedTimestamp = (seconds: number) => {
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  var mDisplay = '';
  if (m > 10) {
    mDisplay = mDisplay + m;
  } else if (m < 10 && m > 0) {
    mDisplay = '0' + m;
  } else {
    mDisplay = '00'
  }

  var sDisplay = ':';
  if (s > 10) {
    sDisplay = sDisplay + s;
  } else if (s < 10 && s > 0) {
    sDisplay = sDisplay + '0' + s;
  } else {
    sDisplay = sDisplay + '00'
  }

  return mDisplay + sDisplay;
}