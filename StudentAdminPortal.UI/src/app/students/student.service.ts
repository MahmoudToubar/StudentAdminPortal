import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/Api-models/student.model';
import { updateStudentRequest } from '../models/Api-models/update-student-request.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = 'https://localhost:44356';

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseApiUrl +'/students');
  }
  getStudent(studentId:string):Observable<Student>{
    return this.httpClient.get<Student>(this.baseApiUrl+'/students/'+studentId)
  }

  updateStudent(studentId: string, StudentRequest:Student) :Observable<Student>
  {
    const updateStudentRequest : updateStudentRequest={
      firstName:StudentRequest.firstName,
      lastName:StudentRequest.lastName,
      dateOfBirth:StudentRequest.dateOfBirth,
      email:StudentRequest.email,
      mobile:StudentRequest.mobile,
      genderId:StudentRequest.genderId,
      physicalAddress:StudentRequest.addrss.physicalAddress,
      postalAddress:StudentRequest.addrss.postalAddress,
    }

     return this.httpClient.put<Student>(this.baseApiUrl + '/students/'+studentId,updateStudentRequest);

  }
  deleteStudent(studentId: string): Observable<Student>{
    return this.httpClient.delete<Student>(this.baseApiUrl + '/student/' + studentId);
  }

}
