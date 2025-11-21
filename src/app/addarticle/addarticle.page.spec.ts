import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddarticlePage } from './addarticle.page';

describe('AddarticlePage', () => {
  let component: AddarticlePage;
  let fixture: ComponentFixture<AddarticlePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddarticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
