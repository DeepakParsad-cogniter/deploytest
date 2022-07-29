import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  // template:'User Name: <input type="text" ngModel = "userName"><br/> {{userName}}'
  // selector: 'app-greet',
  //  View Template  
  templateUrl: './greet.component.html',                        
  // // Single Line template with   Binding Button Click Event
  //   template: '<button (click)="onShow()" >Show</button>',             
  //   // Single Line template with   Binding Button Click on-event                     
  //   template: '<button on-click="onShow()" >Show</button>',                         
  //   // Multi line template with Bubbling Event 
  //   template: `<div (click)="onDivClick()"><button (click)="onShow()" >Show</button></div>`,    
  //   // template : '<button (click)="passingEventData(20)" >Show</button>',
  
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  birthday = new Date(1988, 3, 15); 
  currentCustomer = 'Maria';
  recommended = "test";
  name : string ="Prince";
  namek : string = "Princek";
  userName: string = "jbond";
  power = 5;
  factor = 1;
  greet() :void{
    alert("hello" + this.name);    
  }

  onShow() : void {
    alert("hell");    
  }

  onDivClick() : void {
    alert("onDivClick");    
  }

  passingEventData(event:any) : void {
    alert(event);   
    // alert(event.target.innerHTML); 
  }

  /* Interpolation */
  public text: string = "Hello";
  public caption: string = "Click Me! -------------";
  num: number = 20;
  randomNums: number[] = [3, 6, 7, 8, 1, 122, 44, 67, 790];

  private count:number = 0; 


  getCurrentTime(): any {
    return Date.now();
  }


}
