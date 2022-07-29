import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-webapi',
  templateUrl: './webapi.component.html',
  styleUrls: ['./webapi.component.css']
})
export class WebapiComponent implements OnInit {

  constructor(private service:PostService) { }
  posts : any;
  ngOnInit(): void {
    this.service.getUserList()
    .subscribe(response => {
      this.posts = response;
      console.log(
        response
      )
    });
  }

}
