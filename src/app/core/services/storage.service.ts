import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  webApiUrl = environment.webApiUrl + 'storage';

  constructor(private http: HttpClient) {}

  public list() {
    return this.http.get(this.webApiUrl);
  }

  public post(data) {
    return this.http.post(this.webApiUrl, data);
  }

  public put(data) {
    return this.http.put(this.webApiUrl + '/' + data.storage_key, data);
  }

  public delete(storage_key) {
    return this.http.delete(this.webApiUrl + '/' + storage_key);
  }
}
