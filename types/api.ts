import { Method } from "axios";

export type ApiRequest = {
  url: string;
  method: Method;
  data?: any;
};
