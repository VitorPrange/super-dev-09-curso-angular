import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-campos-basico',
  imports: [FormsModule],
  templateUrl: './form-campos-basico.html',
  styleUrl: './form-campos-basico.scss',
})
export class FormCamposBasico {

  nome = signal<string>("")
  sobrenome = signal<string>("")
  resultadoNomeCompleto: string = "";

  numero01 = signal<number | null>(null)
  numero02 = signal<number | null>(null)
  operacao = signal<string>("")

  apresentarNomeCompleto (): void{
    const nomeCompleto: string = `${this.nome()} ${this.sobrenome()}`
    this.resultadoNomeCompleto = nomeCompleto;
  }

  realizarCalculo(): void {
    if(this.numero01() === null){
      alert("Preencha o numero 1");
      return;
    }

    if(this.numero02() === null){
      alert("Preencha o numero 2");
      return;
    }

    if(this.operacao() === "somar"){
      const resultado: number = this.numero01()! + this.numero02()!;
      alert(`Soma: ${resultado}`);
    }else if(this.operacao() === "subtrair"){
      const resultado: number = this.numero01()! - this.numero02()!;
      alert(`Subtração: ${resultado}`);
    }else if(this.operacao() === "multiplicar"){
      const resultado: number = this.numero01()! * this.numero02()!;
      alert(`Multiplicação: ${resultado}`);
    }else if(this.operacao() === "dividir"){
      const resultado: number = this.numero01()! / this.numero02()!;
      alert(`Divisão: ${resultado}`);
    }else{
      alert("Escolha a operação")
    }
  }
}
