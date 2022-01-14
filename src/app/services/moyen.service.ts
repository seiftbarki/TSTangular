import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoyenService {
apiUrl=""
  constructor(private http : HttpClient) { }

  addMoyen(data){
    return this.http.post(this.apiUrl,data)
  }
}
