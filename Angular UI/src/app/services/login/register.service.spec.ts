import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterService } from './register.service';


describe('RegisterService', () => {
    beforeEach(() => TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ RegisterService ]
    }));
  
    it('should be created', () => {
      const service: RegisterService = TestBed.get(RegisterService);
      expect(service).toBeTruthy();
    });
  });