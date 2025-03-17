import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private message:string='Hello from DataService';
  constructor() { }
  getmessage():string{
    return this.message;
  }
  setmessage(msg:string):void{
    this.message=msg;
  }
}
