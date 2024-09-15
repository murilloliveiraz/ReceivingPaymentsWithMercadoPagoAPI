import { Component } from '@angular/core';
import { MercadoPagoService } from './../../services/MercadoPagoService.service';
import { CreditCardService } from 'src/services/CreditCard.service';
import { CreditCardRequest } from 'src/models/creditCardRequest';


@Component({
  selector: 'app-cartao-credito-form',
  templateUrl: './cartao-credito-form.component.html',
  styleUrls: ['./cartao-credito-form.component.css']
})

export class CartaoCreditoFormComponent {
constructor(private mercadopagoService: MercadoPagoService, private creditCardService: CreditCardService) {}

async ngOnInit() {
  await this.mercadopagoService.initialize();
  const mpInstance = this.mercadopagoService.getMercadoPagoInstance();

  const cardForm = mpInstance.cardForm({
    amount: "1.5",
    iframe: true,
    form: {
      id: "form-checkout",
      cardNumber: {
        id: "form-checkout__cardNumber",
        placeholder: "Card Number",
      },
      expirationDate: {
        id: "form-checkout__expirationDate",
        placeholder: "MM/YY",
      },
      securityCode: {
        id: "form-checkout__securityCode",
        placeholder: "Security Code",
      },
      cardholderName: {
        id: "form-checkout__cardholderName",
        placeholder: "Cardholder",
      },
      issuer: {
        id: "form-checkout__issuer",
        placeholder: "Issuing bank",
      },
      installments: {
        id: "form-checkout__installments",
        placeholder: "Installments",
      },
      identificationType: {
        id: "form-checkout__identificationType",
        placeholder: "Document type",
      },
      identificationNumber: {
        id: "form-checkout__identificationNumber",
        placeholder: "Document number",
      },
      cardholderEmail: {
        id: "form-checkout__cardholderEmail",
        placeholder: "Email",
      },
    },
    callbacks: {
      onFormMounted: error => {
        if (error) return console.warn("Form Mounted handling error: ", error);
        console.log("Form mounted");
      },
      onSubmit: event => {
        event.preventDefault();
        const {
          paymentMethodId: payment_method_id,
          issuerId: issuer_id,
          cardholderEmail: email,
          amount,
          token,
          installments,
          identificationNumber,
          identificationType,
        } = cardForm.getCardFormData();

        const creditCardRequest: CreditCardRequest = {
          token,
          email,
          description: "Capa para notebook",
          paymentMethodId: payment_method_id,
          installments: Number(installments),
          number: identificationNumber,
          type: identificationType,
          transactionAmount: Number(amount),
        };


        this.creditCardService.cobrarCartao(creditCardRequest).subscribe(
          (response: any) => {
            console.log('Resposta do servidor:', response);
          },
          (error) => {
            console.error('Erro ao cobrar cartao de credito:', error);
          }
        );
      },
      onFetching: (resource) => {
        console.log("Fetching resource: ", resource);

        // Animate progress bar
        const progressBar: HTMLProgressElement | null = document.querySelector(".progress-bar");
        if (progressBar) {
          progressBar.removeAttribute("value");
        }

        return () => {
          if (progressBar) {
            progressBar.setAttribute("value", "0");
          }
        };
      }
    },
  });
}
}
