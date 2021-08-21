import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog, private employeeSerive: EmployeeService) { }

  @Input()
  public employee!: Employee;

  ngOnInit(): void {
    this.employeeSerive.getEmployees();
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  editEmployeeDialog(employee: Employee) {
    const editDialog = this.dialog.open(EditEmployeeContent, { data: employee });
    editDialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteEmployeeDialog(employee: Employee) {
    const deleteDialog = this.dialog.open(DeleteEmployeeContent, { data: employee });
    deleteDialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  registerEmployeeDialog() {
    const registerDialog = this.dialog.open(RegisterEmployeeContent);
    registerDialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.content.edit.html',
})
export class EditEmployeeContent {
  constructor(@Inject(MAT_DIALOG_DATA) public employee: Employee, public dialogRef: MatDialogRef<EditEmployeeContent>) { }
  closeModal(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.content.delete.html',
})
export class DeleteEmployeeContent {
  constructor(@Inject(MAT_DIALOG_DATA) public employee: Employee, public dialogRef: MatDialogRef<DeleteEmployeeContent>, private employeeService: EmployeeService) { }
  closeModal(): void {
    this.dialogRef.close();
  }
  deleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.employeeService.getEmployees();
      }, (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.content.add.html',
})
export class RegisterEmployeeContent { }
