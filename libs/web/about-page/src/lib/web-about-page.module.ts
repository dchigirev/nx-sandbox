import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAboutPageComponent } from './web-about-page.component';
import { WebAboutPageRoutingModule } from './web-about-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WebAboutPageRoutingModule
  ],
  declarations: [
    WebAboutPageComponent
  ],
})
export class WebAboutPageModule {}
