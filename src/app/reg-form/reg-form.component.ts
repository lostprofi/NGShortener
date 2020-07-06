import { RegService } from './../services/reg-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
  providers: [RegService]
})
export class RegFormComponent implements OnInit {

  constructor(private regService: RegService) { }

  errors: any;

  onSubmit(formData: NgForm){
    const regData = {
      username: formData.value.username,
      email: formData.value.email,
      password: formData.value.password,
      passwordConfirm: formData.value.passwordConfirm,
    };

    this.regService.regUser(regData).subscribe(next => console.log(next), error => console.log(error));

    formData.resetForm();
  }

  ngOnInit(): void {
  }

}
