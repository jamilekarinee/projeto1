import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeDisciplinasComponent } from './exibe-disciplinas.component';

describe('ExibeDisciplinasComponent', () => {
  let component: ExibeDisciplinasComponent;
  let fixture: ComponentFixture<ExibeDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibeDisciplinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
