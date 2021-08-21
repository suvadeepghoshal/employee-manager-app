import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  constructor(@Inject(MAT_DIALOG_DATA) public employee: Employee, public dialogRef: MatDialogRef<DeleteEmployeeContent>) { }
  closeModal(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.content.add.html',
})
export class RegisterEmployeeContent { }
