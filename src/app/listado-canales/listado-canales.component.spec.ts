import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCanalesComponent } from './listado-canales.component';

describe('ListadoCanalesComponent', () => {
  let component: ListadoCanalesComponent;
  let fixture: ComponentFixture<ListadoCanalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCanalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoCanalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
