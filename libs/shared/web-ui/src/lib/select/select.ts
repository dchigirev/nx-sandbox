import {
  Component,
  ElementRef,
  forwardRef,
  inject,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'lib-select',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  templateUrl: './select.html',
})
export class SelectComponent implements ControlValueAccessor {
  // DI
  private readonly overlay = inject(Overlay);
  private readonly vcr = inject(ViewContainerRef);

  // inputs
  @Input() items: KeyValue<string, string>[] = [];
  @Input() placeholder = 'Select';

  // view
  @ViewChild('trigger', { read: ElementRef })
  private triggerRef!: ElementRef<HTMLElement>;

  @ViewChild('dropdown', { read: TemplateRef })
  private dropdownTpl!: TemplateRef<unknown>;

  // state
  private overlayRef?: OverlayRef;
  private value: string | null = null;

  // CVA
  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  get selectedLabel(): string | null {
    return this.items.find((i) => i.key === this.value)?.value ?? null;
  }

  toggle() {
    if (this.overlayRef) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.triggerRef)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
        },
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    this.overlayRef.backdropClick().subscribe(() => this.close());

    this.overlayRef.attach(new TemplatePortal(this.dropdownTpl, this.vcr));
  }

  close() {
    this.overlayRef?.dispose();
    this.overlayRef = undefined;
    this.onTouched();
  }

  select(item: KeyValue<string, string>) {
    this.value = item.key;
    this.onChange(this.value);
    this.close();
  }

  // ControlValueAccessor

  writeValue(value: string | null) {
    this.value = value;
  }

  registerOnChange(fn: (value: string | null) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
}
