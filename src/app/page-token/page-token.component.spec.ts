import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTokenComponent } from './page-token.component';

describe('PageTokenComponent', () => {
  let component: PageTokenComponent;
  let fixture: ComponentFixture<PageTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
