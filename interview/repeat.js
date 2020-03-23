// 题目：实现一个函数 repeate(str:string, time: number):string,将参数 str 重复 time 次输出
// 如 repeate('a', 5) //  aaaaa

// 最简单的做法，时间复杂度 o(N)，但空间复杂度不是 o(N)，
//因为字符串是不可变对象 ，每赋值一次都是生产新对象，所以空间复杂度是 1 + 2 + 3 + 4 + N，所以空间复杂度 o(N^2)
function repeate(str, time) {
  let result = "";
  for (let i = 0; i < time; i++) {
    result += str;
  }
  return result;
}

/**
 * 时间复杂度空间复杂度都为 o(N)
 * 切实现简单
 * @param str
 * @param time
 */
function repeate2(str, time) {
  return new Array(time).join(str);
  // 或者
  // return new Array(time).fill(str).join('');
}

function repeate3(str, time) {
  // 用二分法 ，每次折一半并且把结果相加
  // 即 重复 8 次等于 a + a = aa, aa + aa = aaaa, aaaa + aaaa = aaaaaaaa，一共只加了 3 次
  // 先求要重复多少次
  if (time <= 0) {
    return "";
  }
  let n = Math.log2(time) >> 0;
  const left = time - Math.pow(2, n);
  let result = "str";
  while (n--) {
    result += result;
  }
  return result + repeate3(str, left);
}

function repeate4(str, time) {
    // return 
    // 把repeater3 的中间计算加一个缓存 -。-，以避免重复计算
    return '';
}
