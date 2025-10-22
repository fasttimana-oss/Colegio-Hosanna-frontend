import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoListComponent } from './grado-list.component';

describe('GradoListComponent', () => {
  let component: GradoListComponent;
  let fixture: ComponentFixture<GradoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
