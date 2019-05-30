import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Aniversariante} from './aniversarios/aniversariante';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AniversariosService {

  private readonly api = 'http://localhost:666/aniversariantes';

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Aniversariante[]>(this.api).pipe(
      tap(console.log)
    );
  }
}
