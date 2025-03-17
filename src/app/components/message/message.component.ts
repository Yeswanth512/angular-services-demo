import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
message:string='';
constructor(private dataService:DataService){
this.message=dataService.getmessage();  
}

ChangeMessage(){
this.dataService.setmessage('New Message from MessageComponent');
this.message=this.dataService.getmessage();  
}
}