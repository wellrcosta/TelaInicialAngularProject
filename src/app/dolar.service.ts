import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dolar} from './blocos/dolar';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  private readonly api = 'http://10.10.10.138:666/Dolar';

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Dolar[]>(this.api).pipe(
      tap(console.log)
    );
  }
}
