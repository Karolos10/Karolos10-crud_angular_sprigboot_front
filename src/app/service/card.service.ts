import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { cardModel } from '../model/card-model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  URL_API: string = environment.API_CARD;

  constructor(private httpClient: HttpClient) {

  }

  getCards(): Observable<cardModel []> {
    return this.httpClient.get<cardModel[]>(this.URL_API + '/list').pipe(map(res => res));
  }

  saveCard(request: any): Observable<any> {
    return this.httpClient.post<any>(this.URL_API + '/save', request).pipe(map(res => res));
  }

  updateCard(request: any): Observable<any> {
    return this.httpClient.post<any>(this.URL_API + '/update', request).pipe(map(res => res));
  }

  deleteCard(id: number): Observable<any> {
    return this.httpClient.get<any>(this.URL_API + '/delete/' + id).pipe(map(res => res));
  }
}
