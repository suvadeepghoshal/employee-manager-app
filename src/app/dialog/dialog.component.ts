import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { Employee } from '../employee';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog, public appComponent: AppComponent) { }

  @Input()
  public employee!: Employee;

  ngOnInit(): void {

  }

  editEmployeeDialog(employee: Employee) {
    const editDialog = this.dialog.open(EditEmployeeContent, {data: employee});
    editDialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteEmployeeDialog() {
    const deleteDialog = this.dialog.open(DeleteEmployeeContent);
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
export class DeleteEmployeeContent { }

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.content.add.html',
})
export class RegisterEmployeeContent { }
