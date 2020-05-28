import { Component , OnInit} from '@angular/core';
import{UserService} from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userInformation';
  constructor(private userService: UserService){}
  users: User[];
  ngOnInit(){
   this.getInfo();
  }

getInfo(){
  this.userService.getUserInfo().subscribe(res=>this.users=res)
}

}
