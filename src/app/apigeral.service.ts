import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Aniversariante} from './aniversarios/aniversariante';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApigeralService {

  private readonly api = 'http://10.10.10.138:666/Colaboradores';

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Aniversariante[]>(this.api).pipe(
      tap(console.log)
    );
  }
}
