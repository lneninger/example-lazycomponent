import { NgModule } from '@angular/core';
import { MatMenuModule
  , MatSidenavModule
  , MatToolbarModule
  , MatIconModule
  , MatButtonModule
  , MatTreeModule
  , MatCardModule
  , MatAutocompleteModule
  , MatFormFieldModule
  , MatInputModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
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
