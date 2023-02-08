import {Component, OnInit} from '@angular/core';
import {Employee} from "../service/employee";
import {EmployeeService} from "../service/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees!: Employee[];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getAllRecord();
  }

  private getAllRecord(){
    this.employeeService.getAllRecord().subscribe(res => {
      this.employees = res;
    });
  }

}
