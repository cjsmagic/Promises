function myPromise(status) {
  return new Promise((resolve, reject) => {
    if (status) {
      resolve('Passed');
    } else {
      reject('Failed');
      // throw new Error('Failed');
    }
  });
}

function noop() {}

// check resolved
myPromise(true).then((status) => {
  console.log(status);
}, noop);

// check rejected
myPromise(false).then(noop, (status) => {
  console.log(status);
});

// with async await
async function asyncFunc(status) {
  try {
    const value = await myPromise(status);
    console.log('async', value);
  } catch (e) {
    console.log('async', e);
  }
}

asyncFunc(true);
asyncFunc(false); // testing catch case
