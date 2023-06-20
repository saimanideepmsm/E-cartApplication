import {MatDialog} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent 
{
  // quantity:any;
  // list:number[]=[];
  // constructor(private dialog:MatDialog){}
  // save()
  // {
  //   this.list.push(this.quantity);
  //   console.log(this.list.length);
  // }

  quantity: any=1;
  product:Product;
  constructor(
    private dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.product=data;
  }
  save() 
  {
    this.dialogRef.close({ quantity: this.quantity });
    console.log(this.quantity);
  }
}
