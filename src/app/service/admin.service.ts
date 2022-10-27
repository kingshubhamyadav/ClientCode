import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreatePromocode } from '../models/createPromo';
import { CreateService } from '../models/createService';
import { CreateWasher } from '../models/createWasher';
import { GetAllCustomer } from '../models/getAllCustomer';
import { GetAllWasher } from '../models/getAllWasher';
import { GetPromoCode } from '../models/getPromoCode';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseApiUrl:string=environment.apiUrl;

  constructor(private http:HttpClient) { }

  public createPromocode(promo:CreatePromocode): Observable<CreatePromocode>{
    return this.http.post<CreatePromocode>(this.baseApiUrl+'/Admin/CreatePromocode',promo
    );
  }

  public createWasher(user: CreateWasher): Observable<any>{
    return this.http.post<any>(this.baseApiUrl+'/Admin/CreateWasher',user);
  }
  public createService(ser: CreateService): Observable<any>{
    return this.http.post<any>(this.baseApiUrl+'/Admin/CreateServices',ser);
  }

  public getAllWasher():Observable<GetAllWasher[]>{
    return this.http.get<GetAllWasher[]>(this.baseApiUrl+'/Admin/GetWasher');
  }

  public getAllCustomer():Observable<GetAllCustomer[]>{
    return this.http.get<GetAllCustomer[]>(this.baseApiUrl+'/Admin/GetCustomer');
  }

  public getPendingOrder():Observable<Order[]>{
    return this.http.get<Order[]>(this.baseApiUrl+'/Admin/PendingOrder');
  }

  public getAllOrder():Observable<Order[]>{
    return this.http.get<Order[]>(this.baseApiUrl+'/Admin/AllOrder');
  }
  public getAllPromocode():Observable<GetPromoCode[]>{
    return this.http.get<GetPromoCode[]>(this.baseApiUrl+'/Admin/AllPromocode');
  }
}
