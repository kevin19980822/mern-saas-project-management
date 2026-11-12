const API=import.meta.env.VITE_API_URL??"http://localhost:4000/api";
export type User={id:string;name:string;email:string};
export type Workspace={_id:string;name:string};
export type Project={_id:string;name:string;description:string;status:string};
export type Task={_id:string;title:string;description:string;status:"todo"|"in_progress"|"review"|"done";priority:string;dueDate?:string};
export async function request<T>(path:string,token?:string,options:RequestInit={}):Promise<T>{
 const headers:Record<string,string>={"Content-Type":"application/json",...(options.headers as Record<string,string>|undefined)};
 if(token)headers.Authorization=`Bearer ${token}`;
 const response=await fetch(API+path,{...options,headers});
 if(!response.ok){const body=await response.json().catch(()=>({}));throw new Error(body.message??"Request failed");}
 if(response.status===204)return undefined as T;return response.json() as Promise<T>;
}
