import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasPagarComponent } from './contas-pagar.component';

describe('ContasPagarComponent', () => {
  let component: ContasPagarComponent;
  let fixture: ComponentFixture<ContasPagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasPagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
