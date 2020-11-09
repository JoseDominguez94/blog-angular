import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormGroup} from '@angular/forms'







const myModule = [MatButtonModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatInputModule,MatFormFieldModule,MatSelectModule,FormGroup]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModule,
  ],
  exports: [myModule]
})
export class MaterialModule { }
