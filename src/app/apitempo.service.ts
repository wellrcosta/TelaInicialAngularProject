import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tempo} from './blocos/tempo/tempo';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApitempoService {

  private readonly her = 'http://10.10.10.138:666/Weather';

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Tempo[]>(this.her).pipe(
      tap(console.log)
    );
  }
}