import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../shared/services/login.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: Object;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm):void{
    this.loginService.login(this.user)
    .subscribe(res => {
      form.reset();
    },
    (error) => {
      this.error = error;
    }
  )
  }

}
