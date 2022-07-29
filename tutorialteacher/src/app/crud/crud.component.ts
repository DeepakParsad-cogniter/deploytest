import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
// import { AnyAaaaRecord } from 'dns';
// import { response } from 'express';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-crud',
	// templateUrl: './crud.component1.html',
	templateUrl: './crud.component.html',
	styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
	constructor(private service:PostService) { }
	contact: any="";
	name : any ="";
	email : any="";
	userCount :any;
	success_msg :any;
	status : any;
	posts :any;
	user_id : any="";
	btntext : any = "Submit";
	/* Form Validation */
	form = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.minLength(3)]),
		email: new FormControl('', [Validators.required, Validators.email]),
		contact: new FormControl('', Validators.required),
		user_id: new FormControl()
	});
	get f(){
		return this.form.controls;
	}
	/* Form Validation */
	/** For pagination */
	users:any;
	p: number = 1;
	total: number = 0;
	page: any;
	profile_pic : any;
	ngOnInit(): void {
		this.getUsers();
	}
	pagination(event: number):void
	{
		this.p = event;
		this.getUsers();
	}
	getUsers(){
		this.service.pagination(this.p)
		.subscribe(response => {
			this.posts  = this.service.pagedData; /** This will get from post.service.ts pageData varibale  */
			// this.total = this.service.pagedData.total;
			this.userCount = Object.keys(this.posts).length;
		});
	}
	edituser(editid:any):void{
		this.btntext = "Update";
		this.service.edituser(editid).subscribe(response=>{
			this.name = response[0].name;
			this.email = response[0].email;
			this.contact = response[0].contact;
			this.user_id = response[0].id;
		});
	}
	onSubmit():void{
		var employee : any = this.form.value;
		console.log(employee.profile_pic);
		this.service.addUser(employee);
		window. location. reload();
	}
	deleteuser(userid:any):void{
		console.log(userid);
		this.service.deleteuser(userid);
		window. location. reload();
	}
	ngOnDestroy() {}
}