import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAboutPageComponent } from './web-about-page.component';

describe('WebAboutPageComponent', () => {
  let component: WebAboutPageComponent;
  let fixture: ComponentFixture<WebAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAboutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
