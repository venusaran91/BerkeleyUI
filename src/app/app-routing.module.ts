import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserVisitComponent } from './views/user-visit/user-visit.component';
import { UserVisitCountResolver } from './core/resolver/user-visit-count.resolver';


const routes: Routes = [
  {
    path:'',
    component:UserVisitComponent,
    resolve:{userCountDetails:UserVisitCountResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
