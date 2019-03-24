import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStorageComponent } from './delete-storage.component';

describe('DeleteStorageComponent', () => {
  let component: DeleteStorageComponent;
  let fixture: ComponentFixture<DeleteStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
