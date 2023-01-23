function solution(a) {
  let dura = a.length;
  let dif = 0;
  let b = [...a];
  for (let i = 1; i < dura; i++) {
    if (b[i] <= b[i - 1]) {
      b[i] = b[i - 1] + 1;
    }
  }
  b.map((j, k) => {
    dif += j - a[k];
  });
  return dif;
}
