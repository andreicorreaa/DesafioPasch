# Desafio Paschoalotto
___

Desafio proposto pela empresa Paschoalotto Serviços Financeiros para vaga de Programador Full Stack.

## Tecnologias utilizadas
- .NET Core  *v3.1.301*
- Node.js *12.18.1*
- npm *6.14.5*
- Angular CLI *10*

## Executar
Após instalar todas as tecnologias necessáris, na pasta raíz do projeto, executar por linha de comando:
```sh
dotnet run
```
Acessar a URL fornecida pelo dotnet. No sistema, acessar a aba ``Cálculo`` no canto superior direito, ou entao pela URL */calculo*.

## Variáveis de configuração
Acessar o arquivo `ClientApp\src\enviroments\enviroments.ts` e procurar as seguintes linhas:
```
maxInstallment: 3,  // quantidade máxima de parcelas
interestType: 1,    // tipo de juros ( 1 - simples, 2- composto )
interestValue: 0.2, // valor do juros em porcentagem
commission: 10      // Porcentagem de comissão da Paschoalotto
```

## Modificar exemplo
Acessar o arquivo `ClientApp\src\app\calculo\calculo.component.ts` e procurar as seguintes linhas:
```
valueDebt = 3000;                           // Valor da divida
dueDateDebt = '03/01/2019';                 // Data de vencimento da divida
collaboratorsPhoneDebt = '(11)99999-9999'   // Telefone do colaborador
```

## Considerações Finais
- Projeto foi desenvolvido utilizando o conceito de SPA.
- Foi seguido todas as regras encontradas na proposta, tais como calculo de diferença de dias entre datas, campos exibidos ao usuário, configuração dinâmica, juros simples e compostos.
