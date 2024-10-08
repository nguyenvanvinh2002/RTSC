import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencodeComponent } from './opencode.component';

describe('OpencodeComponent', () => {
  let component: OpencodeComponent;
  let fixture: ComponentFixture<OpencodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpencodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpencodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
