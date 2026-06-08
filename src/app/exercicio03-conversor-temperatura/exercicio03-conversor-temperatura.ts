import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio03-conversor-temperatura',
  imports: [FormsModule],
  templateUrl: './exercicio03-conversor-temperatura.html',
  styleUrl: './exercicio03-conversor-temperatura.scss',
})
export class Exercicio03ConversorTemperatura {
  temperatura = signal<number | null>(null);
  medida = signal<string>("");

  converterTemperatura(): void {

    if(this.medida() === "FAH"){
      const Fahrenheit:number = ((this.temperatura()! * 1.8) + 32)
      alert("Fahrenheit: " + Fahrenheit)
    }else{
      const Celsius:number = (((this.temperatura()! - 32) * 5) / 9);
      alert("Celsius: " + Celsius)
    }
  }
}
