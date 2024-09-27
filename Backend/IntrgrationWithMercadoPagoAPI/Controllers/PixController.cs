using IntrgrationWithMercadoPagoAPI.Model;
using MercadoPago.Client;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;
using Microsoft.AspNetCore.Mvc;

namespace IntrgrationWithMercadoPagoAPI.Controllers
{
    [Route("api/pix")]
    [ApiController]
    public class PixController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Post(PixRequest paymentPayer)
        {
            var requestOptions = new RequestOptions();
            string idempotencyKey = Guid.NewGuid().ToString();
            requestOptions.CustomHeaders.Add("x-idempotency-key", idempotencyKey);
            var request = new PaymentCreateRequest
            {
                TransactionAmount = paymentPayer.Valor,
                Description = paymentPayer.Produto,
                PaymentMethodId = "pix",
                Payer = new PaymentPayerRequest
                {
                    Email = paymentPayer.Email,
                    FirstName = paymentPayer.Nome,
                    LastName = paymentPayer.Sobrenome,
                    Identification = new IdentificationRequest
                    {
                        Type = "CPF",
                        Number = paymentPayer.CPF,
                    },
                },
                NotificationUrl = paymentPayer.Notification_url
            };

            var client = new PaymentClient();
            Payment payment = await client.CreateAsync(request, requestOptions);
            return Ok(payment);
        }

        [HttpPost]
        [Route("pix-response")]
        public async Task<IActionResult> Post(object request)
        {
           return Ok(request);
        }
    }
}
