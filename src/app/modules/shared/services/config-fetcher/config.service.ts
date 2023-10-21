import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ConfigService {
  constructor(private httpClient: HttpClient) {}

  fetch<T>(configEndpoint: string): Observable<T> {
    return this.httpClient.get<T>(
      `${environment.CONFIG_BASE_URL}/${configEndpoint}`,
    );
  }
}
