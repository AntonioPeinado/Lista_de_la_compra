import axios from "axios";

export class HTTPService {
         constructor(http) {
           this._http = http;
         }
         getAll() {
           return this._http.get("");
         }
         post(model) {
           return this._http.post("", model);
         }
         getId(model,id) {
           return this._http.get("",model, id);
         }
         remove(model,id) {
           return this._http.remove("", model, id);
         }
       }

export const httpService = new HTTPService(
  axios.create({
    baseURL: "http://localhost:3005/items/",
  }),
   
);
