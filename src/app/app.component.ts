import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  ngOnInit {
    this.str = 'this is a string';
   this.test();
   this.numberArrayInput([]);
   this.numberArrayInput([5]);
  }
  title = 'app';

  str: string =  'this is a string';

  // ngOnInit {
  //   
  // }

  test(){
    let name: string = 'Test User';
    let age:number = 30;
    let text: string = `My name is ${name} and i am ${age} years old`;
  }

  arrayInput(x:number[]){
    console.log(x);
  }
  anyArrayInput(x:Array<any>){
    console.log(x);
  }
}
