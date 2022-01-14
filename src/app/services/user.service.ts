import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="http://localhost:8484/TST_webservice/tst_rest/ejb"

  constructor(private http : HttpClient) { }

  inscription(data){
    return this.http.post(this.apiUrl,data)
  }
  login(data){
    return this.http.post(this.apiUrl,data)
  }

  getAllUser(){
    return this.http.get(this.apiUrl)
  }
}
