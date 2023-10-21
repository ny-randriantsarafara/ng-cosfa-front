import { Component, OnInit } from '@angular/core';
import { SidenavItem } from '../../types/sidenav-item.interface';
import { combineLatest, Observable, of } from 'rxjs';
import { ConfigService } from '../../../shared/services/config-fetcher/config.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  sidenavItems$: Observable<[SidenavItem[], SidenavItem[]]>;

  constructor(private configService: ConfigService) {
    this.sidenavItems$ = of([[], []]);
  }

  async ngOnInit(): Promise<void> {
    this.buildSidenav();
  }

  private buildSidenav(): void {
    this.sidenavItems$ = combineLatest([
      this.configService.fetch<SidenavItem[]>('top-sidenav.json'),
      this.configService.fetch<SidenavItem[]>('bottom-sidenav.json'),
    ]);
  }
}
