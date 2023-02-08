import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private base_url = "http://localhost:002/api/employee/";
  constructor(private httpClient: HttpClient) { }

  getAllRecord(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.base_url + "getAllRecord");
  }

  addRecord(employee: Employee): Observable<Object>{
    return this.httpClient.post(this.base_url + "addRecord", employee);
  }

}
