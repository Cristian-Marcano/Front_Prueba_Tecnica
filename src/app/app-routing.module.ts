import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadComponent } from './components/load/load.component';
import { FormComponent } from './components/form/form.component';
import { ErrorLinkComponent } from './components/error-link/error-link.component';

const routes: Routes = [
  {path:'',component:LoadComponent},
  {path:'Form',component:FormComponent},
  {path:'**',component:ErrorLinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
