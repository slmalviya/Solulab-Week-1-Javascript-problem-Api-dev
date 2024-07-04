function throttle(func, wait) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < wait) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

// function throttle(fn, delay) {
//   let isThrottling = false;
//   return function (...args) {
//     if (!isThrottling) {
//       fn(...args);
//       isThrottling = true;
//       setTimeout(() => {
//         isThrottling = false;
//       }, delay);
//     }
//   };
// }




module.exports = throttle;