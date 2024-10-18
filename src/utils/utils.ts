import { customAlphabet } from 'nanoid';
import CryptoJS from 'crypto-js';

export const nanoidCharacter = customAlphabet('abcdefghijklmnopqrstuvwxyz');

export const findInsertIndex = (target: number, arr: number[][]) => {
  let left = 0;
  let right = arr.length - 1;
  if (target < arr[left][0]) {
    return -1;
  }
  if (target > arr[right][1]) {
    return right;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    const [start, end] = arr[mid];
    if (target > start && target < end) {
      return mid;
    } else if (start > target) {
      right = mid - 1;
    } else if (end < target) {
      // 如果下一个开始大于当前，则处于中间
      if (arr[mid + 1]?.[0] > target) {
        return mid;
      } else {
        left = mid + 1;
      }
    }
  }

  return left;
};
export async function sleep(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

export function checkMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

const secretKey = 'processConfig';
// AES 加密
export function encrypt(content: string) {
  return CryptoJS.AES.encrypt(content, secretKey).toString();
}
export function decrypt(content: string) {
  // AES 解密
  return CryptoJS.AES.decrypt(content, secretKey).toString(CryptoJS.enc.Utf8);
}
