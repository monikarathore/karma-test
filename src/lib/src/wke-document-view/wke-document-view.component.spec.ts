import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WkeDocumentViewComponent } from './wke-document-view.component';

describe('HeaderComponent', () => {
  let component: WkeDocumentViewComponent;
  let fixture: ComponentFixture<WkeDocumentViewComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WkeDocumentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WkeDocumentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
