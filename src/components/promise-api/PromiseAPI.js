import React from "react";

function PromiseAPI() {
  //Promise.all(Success)
  const p1 = new Promise((resolve, reject) => {
    // let success = true;
    // if (success) {
    //   resolve("Success");
    // } else {
    //   reject("rejected");
    // }

    setTimeout(() => resolve("P1 Operation  is successful"), 3000);
  });

  const p2 = new Promise((resolve, reject) => {
    // let success = true;
    // if (success) {
    //   resolve("Success");
    // } else {
    //   reject("Reject");
    // }

    setTimeout(() => resolve("P2 Operation is successful"), 1000);
  });

  const p3 = new Promise((resolve, reject) => {
    // let success = true;
    // if (success) {
    //   resolve("Success");
    // } else {
    //   reject("Reject");
    // }

    setTimeout(() => resolve("P3 Operation is successful"), 2000);
  });

  Promise.all([p1, p2, p3]).then((result) =>
    console.log("Promise.all", result)
  );

  //Promise.all reject
  let pr1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pr1 Operation is successful"), 3000);
  });

  let pr2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Pr2 Operation is reject"), 1000);
  });

  let pr3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("pr3 Operation is Successfull"));
  });

  Promise.all([pr1, pr2, pr3])
    .then((result) => console.log("Promise.all reject", result))
    .catch((error) => console.error(error));

  //Promise.allSettled
  const pas1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Pas1 is success"), 3000);
  });

  const pas2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Pas2 is success"), 1000);
  }).catch((error) => console.error(error));

  const pas3 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Pas3 is success"), 2000);
  });

  Promise.allSettled([pas1, pas2, pas3]).then((result) =>
    console.log("Promise.allSttled resolve", result)
  );

  const par1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Pas1 is success"), 3000);
  });

  const par2 = new Promise(function (resolve, reject) {
    setTimeout(() => reject("Pas2 is reject"), 1000);
  });

  const par3 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Pas3 is success"), 2000);
  });

  Promise.allSettled([par1, par2, par3]).then((result) =>
    console.log("Promise.allSttled resolve", result)
  );

  //Promise.race
  const prace1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Prace1 success"), 3000);
  });

  const prace2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Prace2 success"), 1000);
  });

  const prace3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Prace3 success"), 2000);
  });

  Promise.race([prace1, prace2, prace3]).then((data) =>
    console.log("Promise.race success", data)
  );

  const pracer1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pracer1 success"), 3000);
  });

  const pracer2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Pracer2 reject"), 1000);
  });

  const pracer3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pracer3 success"), 2000);
  });

  Promise.race([pracer1, pracer2, pracer3])
    .then((data) => console.log("Promise.race success", data))
    .catch((error) => console.error(error));

  //Promise.any

  const Panys1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Panys1 success"), 3000);
  });

  const Panys2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Panys2 success"), 3000);
  });

  const Panys3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Panys3 success"), 3000);
  });

  Promise.any([Panys1, Panys2, Panys3]).then((result) =>
    console.log("Panys Promis.any()", result)
  );

  const Panyr1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Panyr1 success"), 3000);
  });

  const Panyr2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Panyr2 success"), 3000);
  });

  const Panyr3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Panyr3 success"), 3000);
  });

  Promise.any([Panyr1, Panyr2, Panyr3])
    .then((result) => console.log("Panys Promis.any()", result))
    .catch((error) => console.error(error));

  // console.log(arr.indexOf(2));
  return <div>PromiseAPI</div>;
}

export default PromiseAPI;
