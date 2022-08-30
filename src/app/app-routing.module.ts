import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Compoments/about/about.component';
import { UserformComponent } from './Components/userform/userform.component';
import { TabComponent } from './tab/tab.component';


const routes: Routes = [
  {path:'userform',component:UserformComponent},
  {path:'about',component:AboutComponent},
  {path:'tab',component:TabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
