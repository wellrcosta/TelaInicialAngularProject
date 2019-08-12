import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Banner} from './banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private readonly api = 'http://10.10.10.138:666/Banner';

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Banner[]>(this.api).pipe(
      tap(console.log)
    );
  }
}
