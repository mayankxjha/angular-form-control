import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {TemplateComponent} from "./template/template.component";

const routes: Routes = [
  {path: '', redirectTo:'template', pathMatch: 'full'},
  {path: 'template', component: TemplateComponent},
  {path: 'reactive', component: ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
