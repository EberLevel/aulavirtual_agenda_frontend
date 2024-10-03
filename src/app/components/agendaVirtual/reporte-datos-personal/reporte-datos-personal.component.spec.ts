import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReporteDatosPersonalComponent } from './reporte-datos-personal.component';


describe('ReporteDatosPersonalComponent', () => {
  let component: ReporteDatosPersonalComponent;
  let fixture: ComponentFixture<ReporteDatosPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteDatosPersonalComponent]
    });
    fixture = TestBed.createComponent(ReporteDatosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
