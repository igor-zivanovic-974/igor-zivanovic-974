import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Breadcrumb } from '@app/core/interfaces/breadcrumb';
import { TranslateService } from '@ngx-translate/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  breadcrumbs: Breadcrumb[] = [];

  constructor(private formBuilder: FormBuilder, private _contactService: ContactService, private translate: TranslateService) {
    this.createForm();
  }

  ngOnInit() {
    this.breadcrumbs = this._contactService.breadcrumbs;
    console.log('form: ', this.form.value);
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      invalidCheck: ['', Validators.required]
    });
  }

  submit() {
    console.log('result: ', this.form.value);
  }
}
