import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Depoimento} from './depoimento';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {

  private readonly api = 'http://10.10.10.138:666/Depoimentos';

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Depoimento[]>(this.api).pipe(
      tap(console.log)
    );
  }
}
