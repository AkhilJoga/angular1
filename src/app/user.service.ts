import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:5000/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser(){
    return this.http.get(BASE_URL);
  }
  createUser(user:{firstname:string,lastname:string,age:number,Gender:string}){
    return this.http.post(BASE_URL,user);
  }

 deleteUser(user:any){
  return this.http.delete(BASE_URL,user.id);
 }
  constructor(public http :HttpClient) { }
}
