import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio10-orcamento-viagem',
  imports: [FormsModule],
  templateUrl: './exercicio10-orcamento-viagem.html',
  styleUrl: './exercicio10-orcamento-viagem.scss',
})
export class Exercicio10OrcamentoViagem {
  destino = signal<string>("");
  quantidadeDias = signal<number | null>(null);
  hospedagem = signal<string>("")
  resultado = signal<string>("")
  cafe = signal(false);
  passeio = signal(false);

  calcularValor():void {

    let valorBase:number = 0;
    let valorDiaria:number = 0;
    let valorExtras:number = 0;
    let valorTotal:number = 0;
    
    if(this.destino() === ""){
      alert("Selecione o destino");
    }

    if(this.destino() === "rio"){
      valorBase = 100;
    }

    if(this.destino() === "salvador"){
      valorBase = 200;
    }

    if(this.destino() === "florianopolis"){
      valorBase = 300;
    }

    if(this.hospedagem() === "economica"){
      valorDiaria = 100;
    }

    if(this.hospedagem() === "conforto"){
      valorDiaria = 200;
    }

    if(this.hospedagem() === "luxo"){
      valorDiaria = 300;
    }

    if(this.cafe() === true){
      valorExtras = valorExtras + 100;
    }

    if(this.passeio() === true){
      valorExtras = valorExtras + 200;
    }

    if(this.quantidadeDias() === null){
      alert("Digite a quantidade de dias");
      return;
    }

    valorTotal = valorBase + (valorDiaria * this.quantidadeDias()!) + valorExtras;

    alert(`Total: ${valorTotal}`);


  }






}
