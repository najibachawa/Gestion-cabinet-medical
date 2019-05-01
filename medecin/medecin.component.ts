import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'src/app/shared/medecin.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

import { MatDialogRef } from '@angular/material'
import { MatFormFieldModule, MatInputModule } from '@angular/material';


@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {

  constructor(private service: MedecinService)
{}
   


  ngOnInit() {
    this.service.getMedecins();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
   
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$key').value)
        this.service.insertMedecin(this.service.form.value);
      else
      this.service.updateMedecin(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
     
      this.onClose();
    }
  }
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }

}

