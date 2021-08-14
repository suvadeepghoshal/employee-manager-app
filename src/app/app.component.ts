import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(private emplyeeService: EmployeeService) { }
  
  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.emplyeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response; // what ever we get in the response store in the employees[]
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}