import { Component } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { InputComponent, SelectComponent } from '@nx-sandbox/mobile-ui';
import { FooFormCoreComponent } from '../foo-form-core';

@Component({
  selector: 'lib-foo-form-mobile',
  imports: [FormField, InputComponent, SelectComponent],
  templateUrl: './foo-form-mobile.html',
})
export class FooFormMobileComponent extends FooFormCoreComponent {}
