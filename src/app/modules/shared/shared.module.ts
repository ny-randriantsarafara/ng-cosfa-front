import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutChangeService } from './services/layout-change/layout-change.service';
import { LayoutModule } from '@angular/cdk/layout';
import { ConfigService } from './services/config-fetcher/config.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule, HttpClientModule],
  exports: [LayoutModule, HttpClientModule],
  providers: [LayoutChangeService, ConfigService],
})
export class SharedModule {}
