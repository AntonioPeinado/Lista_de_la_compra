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
         getId(id) {
           return this._http.get(id);
         }
         delete(id) {
           return this._http.delete(id);
         }
       }

export const httpService = new HTTPService(
  axios.create({
    baseURL: "http://localhost:3005/items/",
  }),
   
);
