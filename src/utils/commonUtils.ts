export type CommonDataErrorItem = {
  key?: string;
  messageLabel?: string;
  message?: string;
};
export interface CommonData<ClientData = any, ServerData = any> {
  getData(clientData: ClientData, otherData?: any): Promise<ServerData | void>;
  setData(ServerData: ServerData, otherData?: any): Promise<ClientData | void>;
  checkData(
    ServerData: ServerData,
    otherData?: any,
  ): Promise<CommonDataErrorItem[] | void>;
}
