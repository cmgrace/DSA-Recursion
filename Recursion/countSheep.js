function countSheep(num) {
  if (num === 0) {
    console.log("All sheep jumped over the fence");
    return 0;
  } else {
    console.log(num, ": Another sheep jumps over the fence");
    countSheep(num - 1);
  }
}

countSheep(3);
