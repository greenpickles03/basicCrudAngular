import {Component, OnInit} from '@angular/core';
import {Employee} from "../service/employee";
import {EmployeeService} from "../service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.addRecord(this.employee).subscribe((data) => {
      console.log(data)
      this.gotoEmployee();
    },error => console.log(error))
  }

  gotoEmployee(){
    this.router.navigate(['/employee'])
  }

  onSubmit(){
    console.log(this.employee)
    this.saveEmployee()
  }

}
