import { Endpoints} from "../constant/Constant"
// import { HTTPFetchServicesApi } from './httpFetchServices';
export class Common {
 private base_url="https://web-dev.dev.kimo.ai";

 public getCategory=()=>{
const url=`${this.base_url}${Endpoints.CATEGORIES}`
return url;
 }

 public getHighlight=()=>{
const url=`${this.base_url}${Endpoints.HIGHLIGHT}`
// return HTTPFetchServicesApi.httpFetch(url);
 }
}

export const CommonServices=new Common()