import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagetwoComponent } from './pagetwo/pagetwo.component';

const routes: Routes = [
  {
    path: '',
    component: PagetwoComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
