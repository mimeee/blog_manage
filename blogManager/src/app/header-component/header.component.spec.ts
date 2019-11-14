import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the Header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const Header = fixture.debugElement.componentInstance;
    expect(Header).toBeTruthy();
  });

  it(`should have as title 'blogManager'`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const Header = fixture.debugElement.componentInstance;
    expect(Header.title).toEqual('blogManager');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to blogManager!');
  });
});
