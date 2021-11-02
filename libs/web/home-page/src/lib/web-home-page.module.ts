import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebHomePageComponent } from './web-home-page.component';
import { WebHomePageRoutingModule } from './web-home-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WebHomePageRoutingModule
  ],
  declarations: [
    WebHomePageComponent
  ],
  exports: [
    WebHomePageComponent
  ]
})
export class WebHomePageModule {}
