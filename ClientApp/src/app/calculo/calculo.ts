export interface ICalculo {
    maxInstallment: Number;
    interestType: Number;
    interestValue: Number;
    commission: Number;
    valueDebt: Number;
    dueDateDebt: Date;
    collaboratorsPhoneDebt: String;
    currentDate: Date;
    installmentValue: Number;
    installmentDates: Array<Date>;
    delayDays: Number;
    totalValue: Number;
    totalComission: Number;
    interestTotal: Number;
}
