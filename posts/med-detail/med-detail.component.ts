import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { PostService } from '../post.service'
import { Post } from '../post'
import { AuthhService } from '../../core/authh.service'

@Component({
  selector: 'app-med-detail',
  templateUrl: './med-detail.component.html',
  styleUrls: ['./med-detail.component.css']
})
export class MedDetailComponent implements OnInit {
  post: Post
  editing: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    public auth: AuthhService
  ) {}

  ngOnInit() {
    this.getPost()
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.getPostData(id).subscribe(post => (this.post = post))
  }

  updatePost() {
    const formData = {
      title: this.post.namee,
      content: this.post.image
    }
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.update(id, formData)
    this.editing = false
  }

  
}

