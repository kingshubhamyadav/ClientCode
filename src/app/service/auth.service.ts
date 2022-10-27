import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { UserRegister } from '../Models/userRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user: UserRegister): Observable<any>{ //remove <any> afterwards
    return this.http.post<any>('https://localhost:7112/api/Auth/register',user);
  }
  public login(user: User): Observable<string>{
    return this.http.post('https://localhost:7112/api/Auth/login',user,
    {responseType: 'text'}
    );
  }
  public weather(): Observable<string>{
    return this.http.get('https://localhost:7112/WeatherForecast',{responseType:'text'});
  }

  //function used to check if user is logged in
  loggedIn(){
    return !!localStorage.getItem('token');
  }
}
