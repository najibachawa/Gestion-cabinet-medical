import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { PostService } from '../post.service'
import { Post } from '../post'
import { AuthhService } from '../../core/authh.service'
import { FormControl } from '@angular/forms'

 @Component({
  selector: 'app-list-med',
  templateUrl: './list-med.component.html',
  styleUrls: ['./list-med.component.css']
})
export class ListMedComponent implements OnInit {
  medecins: Observable<Post[]>
  
  constructor(private postService: PostService, public auth: AuthhService) {
 

  }

  ngOnInit() {
    this.medecins = this.postService.getPosts()
  }

  delete(id: string) {
    this.postService.delete(id)
  }
 
  toppingList: string[] = ['medenine', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}


