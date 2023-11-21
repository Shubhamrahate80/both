import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypingComponent } from './ab/typing/typing.component';
import { PwgComponent } from './ab/pwg/pwg.component';
import { BothComponent } from './ab/both/both.component';

const routes: Routes = [
  {path:'Typing',component:TypingComponent},
  {path:'pwg',component:PwgComponent},
  {path:'Both',component:BothComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
