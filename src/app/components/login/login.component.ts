import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModalRef, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../shared/services/login.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {};
  error: Object;
  closeResult: string;

  constructor(
    private loginService: LoginService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm):void{
    this.loginService.login(this.user)
    .subscribe(res => {
      this.user = res;
      form.reset();
    },
    (error) => {
      this.error = error;
    }
  )
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
