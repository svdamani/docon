import { Injectable } from '@angular/core';

@Injectable()
export class DummyService {
  private data = {
    clinics: [
      {
        clinicID: '1001',
        name: 'Test Clinic 1',
        website: 'test1.docon.co.in',
        contact: 9876543210
      },
      {
        clinicID: '1002',
        name: 'Test Clinic 2',
        website: 'test2.docon.co.in',
        contact: 9876543211
      },
      {
        clinicID: '1003',
        name: 'Test Clinic 3',
        website: 'test3.docon.co.in',
        contact: 9876543212
      }
    ],
    doctors: [
      {
        doctorID: 'doc10101',
        firstName: 'Test',
        lastName: 'Paediatrician',
        mobileNumber: 8765432100,
        email: 'paeds@docon.co.in',
        registration: '12345',
        speciality: 'Paediatrics',
        education: 'MBBS'
      },
      {
        doctorID: 'doc10102',
        firstName: 'Test',
        lastName: 'Diabetologist',
        mobileNumber: 8765432101,
        email: 'diabetes@docon.co.in',
        registration: '12346',
        speciality: 'Diabetics',
        education: 'MBBS'
      },
      {
        doctorID: 'doc10103',
        firstName: 'Test',
        lastName: 'Gynaecologist',
        mobileNumber: 8765432102,
        email: 'gynaecology@docon.co.in',
        registration: '12347',
        speciality: 'Gynaecology',
        education: 'MBBS'
      }
    ],
    doctorClinics: {
      doc10101: ['1001', '1002'],
      doc10102: ['1002'],
      doc10103: ['1003', '1001']
    }
  };

  getClinics() {
    return this.data.clinics;
  }
}