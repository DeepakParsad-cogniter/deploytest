import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { query } from 'express';
import { timeStamp } from 'console';
@Injectable({
	providedIn: 'root'
})
export class PostService {
	constructor(private http: HttpClient) {}
	apibaseurl = "http://localhost:8081/";
	// const headers = new HttpClient().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');	// const headers = new HttpClient
	pagedData : any;
	status : any;
	edituser(id:any)
	{
		return this.http.get<any>(`${this.apibaseurl}edituser/${id}`);
	}
	getUserList(){
		return this.http.get(this.apibaseurl)
	}
	addUser(user:any)
	{
		let queryParams = new HttpParams();
		queryParams = queryParams.append("name",user.name).append("email",user.email).append("contact",user.contact).append('id',user.user_id);
		this.http.post<any>(this.apibaseurl + `adduser`,queryParams).subscribe(data => {
			this.pagedData = data.id;
		})
	}
	deleteuser(id:any){
		console.log(id)
		return this.http.delete<any>(`${this.apibaseurl}deleteuser/${id}`)
		.subscribe({
			next: data => {
				this.status = 'Delete successful';
			},
			error: error => {
				console.error('There was an error!', error);
			}
		});
	}
	getAllUser(): Observable<any> {
		return this.http.get<any>(this.apibaseurl);
	}
	pagination(page: number):Observable<any> {
		return this.http.get<any>(`${this.apibaseurl}pagination/${page}`)
		.pipe(
			map((response: any) => {console.log("response");
				this.pagedData = response;
			})
		);
	}
}