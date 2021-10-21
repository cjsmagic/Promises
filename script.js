function myPromise(status) {
  return new Promise((resolve, reject) => {
    if (status) {
      resolve('Passed');
    } else {
      reject('Failed');
      // throw new Error('Failed');
      //reject or error that are dynamic in nature, manually thrown error goes to reject or catch block in case of async/await
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
    const value = await myPromise(status).then(
      (d) => d,
      (e) => {
        console.log('e', e); // this shows if reject is handled too, it will go to catch block
        return 'hello'; // reject can be forwarded to catch with modification
      }
    );
    console.log('async', value);
  } catch (e) {
    console.log('async', e);
    // console.log('async', e);// e.message should give the error message
  }
}

asyncFunc(true);
asyncFunc(false); // testing catch case
