import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasBancariasComponent } from './contas-bancarias.component';

describe('ContasBancariasComponent', () => {
  let component: ContasBancariasComponent;
  let fixture: ComponentFixture<ContasBancariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasBancariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasBancariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
