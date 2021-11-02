import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebAboutPageComponent } from './web-about-page.component';

const routes: Routes = [
  {
    path: '',
    component: WebAboutPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebAboutPageRoutingModule { }
