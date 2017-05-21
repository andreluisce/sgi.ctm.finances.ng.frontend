import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroCaixaComponent } from './livro-caixa.component';

describe('LivroCaixaComponent', () => {
  let component: LivroCaixaComponent;
  let fixture: ComponentFixture<LivroCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
