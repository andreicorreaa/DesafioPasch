using System;
using System.Collections.Generic;

namespace DesafioPasch
{
    public class Calculo
    {
        public Double maxInstallment { get; set; }

        public Double interestType { get; set; }

        public Double interestValue { get; set; }

        public Double commission { get; set; }

        public Double valueDebt { get; set; }

        public DateTime dueDateDebt { get; set; }

        public String collaboratorsPhoneDebt { get; set; }

        public DateTime currentDate { get; set; }

        public Double installmentValue { get; set; }

        public List<DateTime> installmentDates { get; set; }

        public int delayDays { get; set; }

        public double totalValue { get; set; }

        public double totalComission { get; set; }

        public double interestTotal { get; set; }
    }
}
