import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../employee';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input()
  public employee!: Employee;

  ngOnInit(): void {

  }

  editEmployeeDialog(employee: Employee) {
    const editDialog = this.dialog.open(EditEmployeeContent, { data: employee });
    editDialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteEmployeeDialog(employeeId: number) {
    const deleteDialog = this.dialog.open(DeleteEmployeeContent, { data: employeeId });
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
  constructor(@Inject(MAT_DIALOG_DATA) public employee: Employee) { }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.content.delete.html',
})
export class DeleteEmployeeContent {
  constructor(@Inject(MAT_DIALOG_DATA) public employeeId: number) { }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.content.add.html',
})
export class RegisterEmployeeContent { }
