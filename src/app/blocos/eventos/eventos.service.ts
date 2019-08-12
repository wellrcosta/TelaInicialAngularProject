import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Eventos} from './eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private readonly api = 'http://10.10.10.138:666/Eventos';

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Eventos[]>(this.api).pipe(
      tap(console.log)
    );
  }

}
