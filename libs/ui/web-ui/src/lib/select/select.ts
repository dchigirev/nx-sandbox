import { OverlayModule } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { SelectCoreComponent } from '@nx-sandbox/core-ui';

@Component({
  selector: 'lib-select',
  templateUrl: './select.html',
  styleUrl: './select.scss',
  imports: [OverlayModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent extends SelectCoreComponent {
  isOpen = signal(false);
  triggerEl = viewChild<ElementRef>('triggerEl');

  get selectedLabel(): string {
    const opt = this.options().find((o) => o.value === this.value());
    return opt?.label ?? this.placeholder();
  }

  get triggerWidth(): number {
    return this.triggerEl()?.nativeElement?.offsetWidth ?? 0;
  }

  toggle(): void {
    this.isOpen.update((v) => !v);
  }

  select(value: string): void {
    this.value.set(value);
    this.isOpen.set(false);
  }
}
