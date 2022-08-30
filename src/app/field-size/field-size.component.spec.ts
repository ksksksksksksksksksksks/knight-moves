import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSizeComponent } from './field-size.component';

describe('FieldSizeComponent', () => {
  let component: FieldSizeComponent;
  let fixture: ComponentFixture<FieldSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
