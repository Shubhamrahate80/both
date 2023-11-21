import { Component } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent {
myText:string="hey shubham.";
EnteresText:string='';


oninput(value:string){
this.EnteresText=value;
console.log(this.EnteresText)
}

compare(a1:string,a2:string){
if (! a2) return 'pending'  
return a2===a1 ? 'correct':'incorrect' 
}
}
