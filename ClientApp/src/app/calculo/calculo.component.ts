import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { ICalculo } from './calculo';
import { CalculoService } from './calculo.service';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  constructor(private calculoService: CalculoService) { }

  calculo: ICalculo;

  //exemplo
  valueDebt = 3000;                         // Valor da divida
  dueDateDebt = '03/01/2019';               // Data de vencimento da divida
  collaboratorsPhoneDebt = '(11)99999-9999' // Telefone do colaborador

  ngOnInit() {
    this.calculoService.getCalculo(environment.maxInstallment, environment.interestType,
      environment.interestValue, environment.commission, this.valueDebt, this.dueDateDebt, this.collaboratorsPhoneDebt)
      .subscribe(calculoWebAPI => this.calculo = calculoWebAPI),
      error => console.log(error);
  }

}
