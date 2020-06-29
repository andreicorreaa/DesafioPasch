using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DesafioPasch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculoController : ControllerBase
    {
        [HttpGet]
        public Calculo Calcular(int maxInstallment, int interestType, double interestValue,
            double commission, double valueDebt, String dueDateDebt, String collaboratorsPhoneDebt)
        {
            Calculo result = new Calculo();
            List<DateTime> installmentDates = new List<DateTime>();

            result.maxInstallment = maxInstallment;
            result.interestValue = interestValue;
            result.interestType = interestType;
            result.commission = commission;
            result.valueDebt = valueDebt;
            result.dueDateDebt = DateTime.Parse(dueDateDebt);
            result.currentDate = DateTime.Now;
            result.collaboratorsPhoneDebt = collaboratorsPhoneDebt;

            DateTime installmentDateFirst = result.currentDate.AddDays(1);

            for(int i=0; i < maxInstallment; i++){
                installmentDates.Add(installmentDateFirst.AddMonths(i));
            }

            result.installmentDates = installmentDates;
            // regra do email
            result.delayDays = (result.currentDate - result.dueDateDebt).Days + 1;

            if (interestType == 1)
            {
                // juros simples
                result.totalValue = valueDebt * (1 + (interestValue / 100) * result.delayDays);
            }
            else
            {
                // juros compostos
                result.totalValue = valueDebt * (Math.Pow(1 + (interestValue / 100), result.delayDays));
            }

            result.totalComission = result.totalValue * (commission / 100);
            result.interestTotal = result.totalValue - valueDebt;
            result.installmentValue = result.totalValue / maxInstallment;

            return result;
        }
    }
}