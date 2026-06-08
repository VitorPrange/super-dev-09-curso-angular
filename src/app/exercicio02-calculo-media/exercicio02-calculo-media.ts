import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio02-calculo-media',
  imports: [FormsModule],
  templateUrl: './exercicio02-calculo-media.html',
  styleUrl: './exercicio02-calculo-media.scss',
})
export class Exercicio02CalculoMedia {

  nota1 = signal<number | null>(null)
  nota2 = signal<number | null>(null)
  nota3 = signal<number | null>(null)

  calcularMedia(): void {
    if(this.nota1() === null || this.nota2() === null || this.nota3() === null){
      alert("Preencha todas as notas")
    }
  }
}
