// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopup,
//   ComboboxPopupContainer,
// } from '@angular/aria/combobox';
// import { Listbox, Option } from '@angular/aria/listbox';
import {
  // afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  // computed,
  // signal,
  // viewChild,
  // viewChildren,
} from '@angular/core';
// import { OverlayModule } from '@angular/cdk/overlay';
import { SelectCoreComponent } from '@nx-sandbox/core-ui';

@Component({
  selector: 'lib-select',
  templateUrl: './select.html',
  styleUrl: './select.scss',
  imports: [
    // Combobox,
    // ComboboxInput,
    // ComboboxPopup,
    // ComboboxPopupContainer,
    // Listbox,
    // Option,
    // OverlayModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent extends SelectCoreComponent {
  // /** The combobox listbox popup. */
  // listbox = viewChild<Listbox<string>>(Listbox);
  // /** The options available in the listbox. */
  // listOptions = viewChildren<Option<string>>(Option);
  // /** A reference to the ng aria combobox. */
  // combobox = viewChild<Combobox<string>>(Combobox);
  // /** The icon that is displayed in the combobox. */
  // displayIcon = computed(() => {
  //   const values = this.listbox()?.values() || [];
  //   const label = this.labels.find((label) => label.value === values[0]);
  //   return label ? label.icon : '';
  // });
  // /** The string that is displayed in the combobox. */
  // displayValue = computed(() => {
  //   const values = this.listbox()?.values() || [];
  //   return values.length ? values[0] : 'Select a label';
  // });
  // /** The labels that are available for selection. */
  // labels = [
  //   { value: 'Important', icon: 'label' },
  //   { value: 'Starred', icon: 'star' },
  //   { value: 'Work', icon: 'work' },
  //   { value: 'Personal', icon: 'person' },
  //   { value: 'To Do', icon: 'checklist' },
  //   { value: 'Later', icon: 'schedule' },
  //   { value: 'Read', icon: 'menu_book' },
  //   { value: 'Travel', icon: 'flight' },
  // ];
  // constructor() {
  //   super();
  //   // Scrolls to the active item when the active option changes.
  //   // The slight delay here is to ensure animations are done before scrolling.
  //   afterRenderEffect(() => {
  //     const option = this.listOptions().find((opt) => opt.active());
  //     setTimeout(
  //       () => option?.element.scrollIntoView({ block: 'nearest' }),
  //       50,
  //     );
  //   });
  //   // Resets the listbox scroll position when the combobox is closed.
  //   afterRenderEffect(() => {
  //     if (!this.combobox()?.expanded()) {
  //       setTimeout(() => this.listbox()?.element.scrollTo(0, 0), 150);
  //     }
  //   });
  // }
}
