import { Conditional } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import User from 'src/app/entity/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  title ="Fill the beolw fields";
  user:User = new User(); 
  users: User[] = [];
 
  save(){
    const objservalble = this.userService.createUser(this.user);
    objservalble.subscribe(
      (response: any) => {
        console.log(response);
      },
      function(error){
        console.log(error);
        alert("Something Went Wrong....");
      }
    )
  }

  deleteUser(user,index){
    const objservalble = this.userService.deleteUser(user);
    objservalble.subscribe((response :any )=> {
      console.log(response)
      this.users.splice(index,1)
    }

    )


  }

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    const promise = this.userService.getUser();
    promise.subscribe(
    (response)=> {console.log();
    this.users = response as User[];
  })

  }

}
