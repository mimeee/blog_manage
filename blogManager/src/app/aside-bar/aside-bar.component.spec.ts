import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBarComponent } from './aside-bar.component';

describe('AsideBarComponent', () => {
  let component: AsideBarComponent;
  let fixture: ComponentFixture<AsideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
