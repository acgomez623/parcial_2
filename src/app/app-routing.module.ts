import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: 'body', component: BodyComponent },
  { path: 'form', component: FormComponent },
  { path: 'footer', component: FooterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
