import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editEmployeeDialog() {
    const editDialog = this.dialog.open(EditEmployeeContent);
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
export class EditEmployeeContent { }

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
