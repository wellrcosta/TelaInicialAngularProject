import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Interligada} from './interligada';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkainterligadaService {

  private readonly api = 'http://10.10.10.138:666/Interligada';

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Interligada[]>(this.api).pipe(
      tap(console.log)
    );
  }
}
