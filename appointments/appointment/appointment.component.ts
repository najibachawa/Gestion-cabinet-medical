
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material'
import { AppointmentService } from '../../shared/appointment.service'
import { NotificationsService } from '../../shared/notifications.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './Appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private service: AppointmentService,
    
    private notificationsService: NotificationsService,
    public dialogRef: MatDialogRef<AppointmentComponent>) { }



  ngOnInit() {
    this.service.getAppointments();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
   
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$key').value)
        this.service.insertAppointment(this.service.form.value);
      else
      this.service.updateAppointment(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationsService.success(':: Submitted successfully');
      this.onClose();
    }
  }
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}