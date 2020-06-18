import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrariumsComponent } from './terrariums.component';

describe('TerrariumsComponent', () => {
  let component: TerrariumsComponent;
  let fixture: ComponentFixture<TerrariumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrariumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrariumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
