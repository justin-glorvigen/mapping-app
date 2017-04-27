import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEntryComponent } from './grid-entry.component';

describe('GridEntryComponent', () => {
  let component: GridEntryComponent;
  let fixture: ComponentFixture<GridEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
