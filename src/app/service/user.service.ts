import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private baseUrl = 'http://localhost:8090';

     constructor(private http: HttpClient) { }

     getUser(code: number): Observable<any> {
       return this.http.get(`//localhost:8090/user/${code}`);
     }

     createUser(user: Object): Observable<Object> {
       return this.http.post(`//localhost:8090/adduser`, user);
     }

     updateUser(code: number, value: any): Observable<Object> {
       return this.http.put(`//localhost:8090/updateuser/${code}`, value);
     }

     deleteUser(code: number): Observable<any> {
       return this.http.delete(`//localhost:8090/user/${code}`, { responseType: 'text' });
     }

     getUsersList(): Observable<any> {
       return this.http.get(`//localhost:8090/users`);
     }
}
