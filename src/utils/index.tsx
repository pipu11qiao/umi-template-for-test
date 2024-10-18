import dayjs from 'dayjs';
interface GetRangeStrRes {
  start?: number | string;
  end?: number | string;
}
/**
 *
 * @param date rangeDate
 * @param format 格式字符
 * @returns 返回当前开始日期的 00:00:00 和结束日期的 23:59:59
 */
export function getParamFromRangDate(
  rangeDate: any,
  options?: {
    useFormat?: boolean;
    format?: string;
    range?: string;
  },
): GetRangeStrRes {
  let res: GetRangeStrRes = {};
  const { useFormat, format, range = 'day' } = options || {};
  const curUseFormat = !!useFormat;
  let curFormat = format || 'YYYY-MM-DD HH:mm:ss';

  if (rangeDate && Array.isArray(rangeDate)) {
    if (rangeDate[0]) {
      let startRes = dayjs(rangeDate[0]).startOf(range as 'day');
      res.start = curUseFormat
        ? startRes.format(curFormat)
        : startRes.valueOf();
    }
    if (rangeDate[1]) {
      let endRes = dayjs(rangeDate[1]).endOf(range as 'day');
      res.end = curUseFormat ? endRes.format(curFormat) : endRes.valueOf();
    }
  }
  return res;
}
