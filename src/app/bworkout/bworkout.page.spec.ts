import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BworkoutPage } from './bworkout.page';

describe('BworkoutPage', () => {
  let component: BworkoutPage;
  let fixture: ComponentFixture<BworkoutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BworkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
