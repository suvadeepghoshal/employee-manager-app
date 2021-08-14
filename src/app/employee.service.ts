import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Employee } from "./employee";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    private apiServerUrl = '';

    constructor(private http: HttpClient) {}

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employee`);
    }

    public getOneEmployee(employeeId: number): Observable<Employee> {
      return this.http.get<Employee>(`${this.apiServerUrl}/employee/find/${employeeId}`);
    }

    public registerEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiServerUrl}/employee/register`, employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
    }

    public updateEmployeeEmail(employeeId: number, employeeEmail: string): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiServerUrl}/employee/update/email/${employeeId}`, employeeEmail);
    }
    
    public deleteEmployee(employeeId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }
}