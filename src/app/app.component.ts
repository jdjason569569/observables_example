import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { of , from, fromEvent, interval } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  varOf!:any[];
  varOf2!:any[];
  number$!: any
  fruit$! : any
  of:boolean = false;
  from:boolean = false;
  fromEvent:boolean = false;
  click$!: any
  interval$!: any
  interval: boolean = false;
  

ngOnInit(): void {
  //this.ofMethod();
  //this.fromMethod();
  //this.fromEventMethod();
  //this.intervalMethod();
}

ofMethod(){
  this.of= true;
  this.number$ = of([1,2,3,4,5]);
  this.fruit$ = of([["1", "2"],["3", "4"]]);
   this.fruit$.subscribe((response: any)=>{
     console.log('fruits -> ',response);;
     this.varOf = response;
   });

   this.number$.subscribe((response: any)=>{
    console.log('number -> ',response);;
    this.varOf2 = response;
  });
}

  fromMethod(){
    this.from = true;
    this.number$ = from([1,2,3,4,5]);
    this.fruit$ = from([["1", "2"],["3", "4"]]);
    this.fruit$.subscribe((response: any)=>{
     console.log('fruits -> ',response);;
     this.varOf = response;
   });
   this.number$.subscribe((response: any)=>{
    console.log('number -> ',response);;
    this.varOf2 = response;
  });
  }

  fromEventMethod(){
     this.fromEvent = true;
     this.click$ = fromEvent<MouseEvent>(document, "click");
     this.click$.subscribe((click:any)=> console.log(click));
  }

  intervalMethod(){
      this.interval = true;
      this.interval$ = interval(1000);
      this.interval$.subscribe((response:any) =>{
         this.varOf = response;
      });
  }


}
