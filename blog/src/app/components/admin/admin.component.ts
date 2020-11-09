import { Component, OnInit } from '@angular/core';
import {MatDialog }from '@angular/material/dialog';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onNewPost(){
    this.openDialog();

  }
  openDialog(): void{
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog result ${result}`);
    });
  }

}
