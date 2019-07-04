import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Noticias} from './noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private readonly api = 'https://www.ska.com.br/ska/blog/json';

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Noticias[]>(this.api).pipe(
      tap(console.log)
    );
  }
}
