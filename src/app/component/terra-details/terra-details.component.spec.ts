import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TerraDetailsComponent} from './terra-details.component';

describe('TerraDetailsComponent', () => {
  let component: TerraDetailsComponent;
  let fixture: ComponentFixture<TerraDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TerraDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
