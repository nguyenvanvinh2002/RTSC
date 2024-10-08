import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API ="http://codertsc.somee.com/api"
@Injectable({
  providedIn: 'root'
})  
export class AppService {
  private apiKey = 'JFJFDKODSRTLSHSYCJGNKEUSOLDKDMLSODFYRHJDJFGMVHDYROGJGNDKD'; 
  constructor(private http:HttpClient) { }
  private createHeaders() {
    return new HttpHeaders({
      'ApiKey': this.apiKey 
    });
  }
  getcategories(){
    return this.http.get(`${API}/Categories`)
  }
  getproductsbycategories(name:any){
    return this.http.get<any>(`${API}/Products?name=${name}`)
  }
  checkbank(){
    return this.http.get<any>(`${API}/APICheckBank`)
  }
  productsdetails(id:any){
    return this.http.get<any>(`${API}/Products/id?id=${id}`)
  }
  getcode(id:any){
    return this.http.get<any>(`${API}/Code?id=${id}`,{ headers: this.createHeaders() })
  }

}
