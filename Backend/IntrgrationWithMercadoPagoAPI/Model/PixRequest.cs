namespace IntrgrationWithMercadoPagoAPI.Model
{
    public class PixRequest
    {
        public string Email { get; set; }
        public string Nome { get; set; }
        public string CPF{ get; set; }
        public string Sobrenome { get; set; }
        public string Produto { get; set; }
        public string Notification_url { get; set; }
        public decimal Valor { get; set; }
    }
}
