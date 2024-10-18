import { FormInstance } from 'antd';

export interface BaseData<FormData = any, ServerData = any> {
  getData(formdata: FormData, otherData?: any): ServerData;
  // getAsyncData(formdata: FormData): Promise<ServerData>;
  setData(ServerData: ServerData, otherData?: any): FormData;
  // setAsyncData(ServerData: ServerData): Promise<FormData>; //
  checkData(ServerData: ServerData, otherData?: any): ErrorItem[] | undefined;
}

export interface BaseDataWidthForm<FormData = any, ServerData = any> {
  getData(form: FormInstance<FormData>, data?: any): ServerData;
  // getAsyncData(form: FormInstance<FormData>): Promise<ServerData>;
  setData(form: FormInstance<any>, ServerData: ServerData, data?: any): void;
  checkData(
    form: FormInstance<any>,
    ServerData: ServerData,
    data?: any,
  ): ErrorItem[] | undefined;
  // setAsyncData(
  //   form: FormInstance<any>,
  //   ServerData: ServerData,
  // ): Promise<boolean>; //
}
