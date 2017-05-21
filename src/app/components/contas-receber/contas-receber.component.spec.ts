import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasReceberComponent } from './contas-receber.component';

describe('ContasReceberComponent', () => {
  let component: ContasReceberComponent;
  let fixture: ComponentFixture<ContasReceberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasReceberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
