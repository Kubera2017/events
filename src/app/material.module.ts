import { NgModule } from '@angular/core';
import {
MatSidenavModule,
MatButtonModule,
MatToolbarModule,
MatDatepickerModule,
MatInputModule,
MatCardModule,
MatListModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatInputModule,
    MatCardModule,
    MatMomentDateModule,
    MatListModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatInputModule,
    MatCardModule,
    MatMomentDateModule,
    MatListModule
  ],

})
export class MaterialModule { }
