import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserVisitService {
  userCoundEndPoint='';

  constructor(private http: HttpClient) { }

  getUserCount(){
    return this.http.get<any>(`${environment.apiUrl}${this.userCoundEndPoint}`);
  }
}
