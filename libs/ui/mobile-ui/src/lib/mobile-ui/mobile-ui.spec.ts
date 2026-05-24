import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileUi } from './mobile-ui';

describe('MobileUi', () => {
  let component: MobileUi;
  let fixture: ComponentFixture<MobileUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileUi],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
