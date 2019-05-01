import { Component, OnInit,ViewChild } from '@angular/core';
import { AppointmentService } from '../../shared/appointment.service';
import { NotificationsService } from '../../shared/notifications.service';
import { DialogService } from '../../shared/Dialog.service';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from "@angular/material";
    
import { AppointmentComponent } from './../appointment/appointment.component';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor(private service: AppointmentService,private dialog: MatDialog,
    private notificationsService: NotificationsService,private conf:DialogService
  ) { } 

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['num', 'fullname', 'age', 'gender', 'city','mobile','hiredate','isNew','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  
  ngOnInit() {
    this.service.getAppointments().subscribe(
      list => {
        let array = list.map(item => {
         
          return {
            $key: item.key,
        
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };
      });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AppointmentComponent,dialogConfig);
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AppointmentComponent,dialogConfig);
  }

  onDelete($key){
    //if(confirm('Are you sure to delete this record ?')){
    //this.service.deleteAppointment($key);
    //this.notificationsService.warn('! Deleted successfully');
    this.conf.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.service.deleteAppointment($key);
        this.notificationsService.warn('! Deleted successfully');
      }
    });
  }
    }
  
  
  
