import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@nx-sandbox/web/home-page').then(
        (module) => module.WebHomePageModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/static/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

// import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

// import { StoreModule } from '@ngrx/store';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot(
//       [
//         {
//           path: '',
//           pathMatch: 'full',
//           loadChildren: () =>
//             import('@nx-example/products/home-page').then(
//               (module) => module.ProductsHomePageModule
//             ),
//         },
//         {
//           path: 'product',
//           loadChildren: () =>
//             import('@nx-example/products/product-detail-page').then(
//               (module) => module.ProductsProductDetailPageModule
//             ),
//         },
//       ],
//       { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' }
//     ),
//     StoreModule.forRoot({}),
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
// })
// export class AppModule {}
