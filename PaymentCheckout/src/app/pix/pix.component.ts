import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { PixModel } from 'src/models/PixModel';
import { PixService } from 'src/services/Pix.service';

@Component({
  selector: 'app-pix',
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.css'],
})

export class PixComponent implements OnInit {
  constructor(private pixService: PixService) { }

  ticketURL : SafeResourceUrl;

  MockBody = {
    email : "murillo1047@gmail.com",
    nome : "Murillo",
    sobrenome : "Oliveira",
    produto : "Hamburguer de Siri",
    valor : 1,
  }

  ngOnInit() {
    this.ticketURL = "";
  }

  cobrarComPix() {
    const pixRequest: PixModel = {
      email : "murillo1047@gmail.com",
      nome : "Murillo",
      sobrenome : "Oliveira",
      produto : "Hamburguer de Siri",
      valor : 1,
      cpf: "560021758-73",
      notification_url: "https://9f20-2804-71d4-8042-da20-91d-4802-2115-664f.ngrok-free.app/api/pix/pix-response"
    };

    this.pixService.cobrarPix(pixRequest).subscribe(
      (response: any) => {
        this.ticketURL = response.pointOfInteraction.transactionData.ticketUrl;
      },
      (error) => {
        console.error('Erro ao cobrar Pix:', error);
      }
    );
  }

}
