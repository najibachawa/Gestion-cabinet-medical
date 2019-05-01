import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private firebase: AngularFireDatabase, private datePipe: DatePipe) { }

  List: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
  
    speciality: new FormControl('', [Validators.required, Validators.minLength(8)]),
    adresse: new FormControl(''),
    
    ancienete:new FormControl(1),
    image: new FormControl('',Validators.required),
    
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      
      fullname: '',
      speciality:'',
      adresse:'',
      ancienete: '1',
      image: '',
      
      
      
   
     
    });
  }
  getMedecins() {
    this.List = this.firebase.list('medecins');
    return this.List.snapshotChanges();
  }

  insertMedecin(employee) {
    this.List.push({
     
      name: employee.fullname,
    speciality:employee.speciality,
      adresse: employee.adresse,
      ancienete:employee.ancienete,
      image: employee.image,
    
    
    
     
    });
  }

  updateMedecin(employee) {
    this.List.update(employee.$key,
      { name: employee.fullname,
        speciality:employee.speciality,
          adresse: employee.adresse,
          ancienete:employee.ancienete,
          image: employee.image,
      });
  }

  deleteMedecin($key: string) {
    this.List.remove($key);
  }
  populateForm(employee) {
    this.form.setValue(_.omit(employee));
  }
}