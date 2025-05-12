function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  const n = getFirstElement<number>([1, 2, 3]);           // 1
  const s = getFirstElement<string>(["a", "b", "c"]);     // "a"
  const b = getFirstElement<boolean>([true, false, true]); // true