import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Tempo} from './blocos/tempo/tempo';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApitempoService {

  private readonly her = 'http://10.10.10.138:666/Weather/SaoLeopoldo';

  constructor(private http: HttpClient) {
  }

  list() {
    const head = new HttpHeaders().append('accept', 'application/json').append('content-type', 'application/json');
    return this.http.get<Tempo[]>(this.her, {headers: head}).pipe(
      tap(console.log)
    );
  }
}
