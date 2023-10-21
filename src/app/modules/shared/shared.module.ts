import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutChangeService } from './services/layout-change.service';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule],
  exports: [LayoutModule],
  providers: [LayoutChangeService],
})
export class SharedModule {}
