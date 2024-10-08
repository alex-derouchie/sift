import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboComponent } from './jumbo.component';

describe('JumboComponent', () => {
  let component: JumboComponent;
  let fixture: ComponentFixture<JumboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
