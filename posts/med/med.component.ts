import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { AngularFireStorage , AngularFireStorageReference} from 'angularfire2/storage'
import { FormsModule } from '@angular/forms';
import { AuthhService } from '../../shared/authh.service'
import { PostService } from '../post.service'
import { finalize } from 'rxjs/operators';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.css']
})
export class MedComponent implements OnInit {
  namee: string
  image: string=null;
 
  speciality:string
  ancienete:number
  adresse:string

  saving = 'Add a doctor'

  uploadPercent: Observable<number>
  downloadURL: Observable<string>

  constructor(
    private auth: AuthhService,
    private postService: PostService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {}

  createPost() {
    const postData = {
      image: this.image || null,
      namee: this.namee,
      
      speciality: this.speciality,
 
      adresse:this.adresse,
      ancienete: this.ancienete
    }
    this.postService.create(postData)
    this.image = ''
    this.namee = ''
 this.speciality=''
 this.adresse=''
  
    this.ancienete=1

    this.saving = 'doctor added!'
    setTimeout(() => (this.saving = 'Add a doctor'), 300)
  }

  uploadImage(event) {
    const file = event.target.files[0]
    const path = `medecins/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files')
    } else {
      const task = this.storage.upload(path, file);
  const ref = this.storage.ref(path);
  this.uploadPercent = task.percentageChanges();
  console.log('Image uploaded!');
  task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = ref.getDownloadURL()
      this.downloadURL.subscribe(url => (this.image = url));
    })
  )
  .subscribe();
    }
  }
}

