import { saveAs } from 'file-saver';
import { AxiosResponse } from 'axios';

/**
 * 下载Blob文件
 * @param response 网络返回
 * @returns Promise true 下载成功 error 下载失败
 */
export const downloadBlobFile = async (
  response: AxiosResponse,
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    try {
      const { data, headers } = response;
      if (!headers['content-disposition']) {
        return;
      }
      const disposition: string = response.headers['content-disposition'];
      const fileName = decodeURIComponent(
        disposition.split(/;filename[^;=\n]*=/)[1],
      );

      const blob = new Blob([data], { type: headers['content-type'] });
      // 直接会打开窗口
      saveAs(blob, fileName);
      resolve(true);
    } catch (err) {
      reject(err);
    }
  });
};
