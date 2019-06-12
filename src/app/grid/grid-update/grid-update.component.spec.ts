import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUpdateComponent } from './grid-update.component';

describe('GridUpdateComponent', () => {
  let component: GridUpdateComponent;
  let fixture: ComponentFixture<GridUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
