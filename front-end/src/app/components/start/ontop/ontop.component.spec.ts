import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OntopComponent } from './ontop.component';

describe('OntopComponent', () => {
  let component: OntopComponent;
  let fixture: ComponentFixture<OntopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OntopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
