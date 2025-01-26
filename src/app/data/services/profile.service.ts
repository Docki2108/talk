import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  //inject - запросить
  http = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course/';
  constructor() {}

  getTestAccount(): Observable<Object> {
    return this.http.get('${baseUrl}account/test_accounts');
  }
}
