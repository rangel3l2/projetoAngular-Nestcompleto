import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [],
  imports: [CommonModule, MatTableModule, MatSliderModule],
  exports: [MatSliderModule],
})
export class MaterialModule {}
