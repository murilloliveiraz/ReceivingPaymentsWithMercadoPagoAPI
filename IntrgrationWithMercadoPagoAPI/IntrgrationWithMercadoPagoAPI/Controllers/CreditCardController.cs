using IntrgrationWithMercadoPagoAPI.Model;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Client;
using MercadoPago.Resource.Payment;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IntrgrationWithMercadoPagoAPI.Controllers
{
    [Route("api/credit-card")]
    [ApiController]
    public class CreditCardController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Post(CreditCardRequest request)
        {
            var requestOptions = new RequestOptions();
            //GARANTE QUE CADA PAGAMENTO É UNICO
            string idempotencyKey = Guid.NewGuid().ToString();
            requestOptions.CustomHeaders.Add("x-idempotency-key", idempotencyKey);

            var paymentRequest = new PaymentCreateRequest
            {
                TransactionAmount = request.TransactionAmount,
                Token = request.Token,
                Description = request.Description,
                Installments = request.Installments,
                PaymentMethodId = request.PaymentMethodId,
                Payer = new PaymentPayerRequest
                {
                    Email = request.Email,
                    Identification = new IdentificationRequest
                    {
                        Type = request.Type,
                        Number = request.Number,
                    },
                },
            };

            var client = new PaymentClient();
            Payment payment = await client.CreateAsync(paymentRequest, requestOptions);

            Console.WriteLine(payment.Status);
            return Ok(payment);
        }
    }
}
