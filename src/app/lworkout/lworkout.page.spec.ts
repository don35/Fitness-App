import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LworkoutPage } from './lworkout.page';

describe('LworkoutPage', () => {
  let component: LworkoutPage;
  let fixture: ComponentFixture<LworkoutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LworkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
