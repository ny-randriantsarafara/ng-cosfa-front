import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavItemComponent } from './components/sidenav-item/sidenav-item.component';

@NgModule({
  declarations: [DashboardComponent, SidenavComponent, NavbarComponent, SidenavItemComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
