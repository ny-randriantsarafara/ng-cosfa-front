import { Component, OnInit } from '@angular/core';
import { LayoutChangeService } from '../shared/services/layout-change/layout-change.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private layoutChangeService: LayoutChangeService) {}

  ngOnInit(): void {
    this.layoutChangeService
      .getScreenSize()
      .subscribe((value) => console.log(value));
  }
}
