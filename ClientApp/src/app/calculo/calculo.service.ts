import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICalculo } from './calculo';

@Injectable({
  providedIn: 'root'
})
export class CalculoService {

  private apiUrl = this.baseUrl + "api/calculo";
  
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getCalculo(maxInstallment : Number, interestType : Number, interestValue : Number,
    commission : Number, valueDebt : Number, dueDateDebt : String, 
    collaboratorsPhoneDebt : String) : Observable<ICalculo>{
      let params = new HttpParams()
      .set("maxInstallment",maxInstallment.toString())
      .set("interestType", interestType.toString())
      .set("interestValue", interestValue.toString())
      .set("commission", commission.toString())
      .set("valueDebt", valueDebt.toString())
      .set("dueDateDebt", dueDateDebt.toString())
      .set("collaboratorsPhoneDebt", collaboratorsPhoneDebt.toString());
    return this.http.get<ICalculo>(this.apiUrl, {params: params});
  }
}
