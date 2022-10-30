import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetPromoCode } from '../models/getPromoCode';
import { User } from '../models/user';




import { UserRegister } from '../models/userRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl:string=environment.apiUrl;
  constructor(private http: HttpClient) { }

  public register(user: UserRegister): Observable<any>{ //remove <any> afterwards
    return this.http.post<any>(this.baseApiUrl+'/Auth/register',user);
  }
  public login(user: User): Observable<string>{
    return this.http.post(this.baseApiUrl+'/Auth/login',user,
    {responseType: 'text'}
    );
  }
  //for testing
  public weather(): Observable<string>{
    return this.http.get('https://localhost:7112/WeatherForecast',{responseType:'text'});
  }
//for admin login
  public adminLogin(user: User): Observable<string>{
    return this.http.post(this.baseApiUrl+'/Auth/AdminLogin',user,
    {responseType: 'text'}
    );
  }



}
