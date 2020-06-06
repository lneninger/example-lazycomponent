import { NgModule } from '@angular/core';
import { MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTreeModule, MatCardModule, MatAutocompleteModule, MatFormField, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [

    FlexLayoutModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule

  ]
})
export class SharedMaterialModule { }
