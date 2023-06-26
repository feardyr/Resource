import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegsiterPage } from './regsiter.page';

describe('RegsiterPage', () => {
  let component: RegsiterPage;
  let fixture: ComponentFixture<RegsiterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegsiterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
