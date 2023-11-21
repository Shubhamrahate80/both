import { Component } from '@angular/core';

@Component({
  selector: 'app-pwg',
  templateUrl: './pwg.component.html',
  styleUrls: ['./pwg.component.css']
})
export class PwgComponent {
passlength:number=0;
generated:string=''
includenum:boolean=false;
includechar:boolean=false;

getlength(length:string){
  console.log(length);
  this.passlength=+length;
}

includenumber(){
  this.includenum=!this.includenum
}
incluecharecter(){
  this.includechar=!this.includechar
}

genpass(){
  this.generated='';
  let validchar='';

  if(this.includechar){
    validchar+='qwertyuiopasdfghjklzxcvbnm'
  }
  if(this.includenum){
    validchar+='741852630'
  }
  console.log(validchar);
  for(var s=0;s<this.passlength;s++){
     this.generated=this.generated+validchar.charAt(Math.round(Math.random()*validchar.length))
  }
}
}
