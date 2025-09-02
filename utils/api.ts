import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { convertCamelCaseConvention } from "./responseConvertor";
import { ApiRequest } from "@/types/api";

export async function api<T>({
  url,
  method,
  data,
}: ApiRequest): Promise<AxiosResponse<T, any>> {
  const baseRequest: AxiosRequestConfig = {
    baseURL: "https://jsonplaceholder.typicode.com",
    method,
    data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios(url, baseRequest);

  return {
    ...response,
    data: convertCamelCaseConvention(response.data) as T,
  };
}
