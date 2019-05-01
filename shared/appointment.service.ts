
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private firebase: AngularFireDatabase, private datePipe: DatePipe) { }

  appointmentsList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl('', Validators.required),
  
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    age:new FormControl(''),
    isNew: new FormControl(false),
    num:new FormControl(1),
    hiredate: new FormControl('',Validators.required),
    
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      num: 0,
      fullname: '',
      age:'',
      gender: '1',
      city: '',
      mobile: '',
      
      
   
      hiredate: '',
      isNew: false,
    });
  }
  getAppointments() {
    this.appointmentsList = this.firebase.list('appointments');
    return this.appointmentsList.snapshotChanges();
  }

  insertAppointment(employee) {
    this.appointmentsList.push({
      num: employee.num,
      fullname: employee.fullname,
      age: employee.age == "" ? "" : this.datePipe.transform(employee.age, 'yyyy-MM-dd'),
      gender: employee.gender,
      city: employee.city,
    
      mobile: employee.mobile,
    
     
    
      
      hiredate: employee.hiredate == "" ? "" : this.datePipe.transform(employee.hiredate, 'yyyy-MM-dd'),
      isNew: employee.isNew,
    });
  }

  updateAppointment(employee) {
    this.appointmentsList.update(employee.$key,
      {
        num: employee.num,
        fullname: employee.fullname,
        gender: employee.gender,
        age: employee.age == "" ? "" : this.datePipe.transform(employee.age, 'yyyy-MM-dd'),
        city: employee.city,
        mobile: employee.mobile,

      
        
        hiredate: employee.hiredate == "" ? "" : this.datePipe.transform(employee.hiredate, 'yyyy-MM-dd'), 
        isNew: employee.isNew,
      });
  }

  deleteAppointment($key: string) {
    this.appointmentsList.remove($key);
  }
  populateForm(employee) {
    this.form.setValue(_.omit(employee));
  }
}