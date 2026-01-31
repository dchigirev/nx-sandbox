import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneEntities } from './one-entities';

describe('OneEntities', () => {
  let component: OneEntities;
  let fixture: ComponentFixture<OneEntities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneEntities],
    }).compileComponents();

    fixture = TestBed.createComponent(OneEntities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
