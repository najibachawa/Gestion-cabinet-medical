import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ShareModule } from '../share/share.module'

import { MedComponent } from './med/med.component'
import { MedDetailComponent } from './med-detail/med-detail.component'
import { ListMedComponent } from './list-med/list-med.component'
import { PostService } from './post.service';
import { AdminComponent } from './admin/admin.component'
import {DashbordMedComponent } from './Dashbord-med/Dashbord-med.component';

const routes: Routes = [
  { path: 'listmed', component: ListMedComponent },
  { path: 'admin/med', component: MedDetailComponent },
  { path: 'admin/d', component: MedComponent },
 {path:'admin' ,component:AdminComponent},
 {path:'admin/dashbord' ,component: DashbordMedComponent}
]

@NgModule({
  imports: [ShareModule, RouterModule.forChild(routes)],
  declarations: [

    MedDetailComponent,
    ListMedComponent,
    AdminComponent,
    DashbordMedComponent,
  ],
  providers: [PostService]
})
export class PostsModule {}