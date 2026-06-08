import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-exercicio01-dados-pessoais',
  imports: [FormsModule],
  templateUrl: './exercicio01-dados-pessoais.html',
  styleUrl: './exercicio01-dados-pessoais.scss',
})
export class Exercicio01DadosPessoais {


  nome = signal<string>("")
  sobrenome = signal<string>("")
  idade = signal<number | null>(null)

  apresentarDados(): void{

    if (this.nome() === "") {
      alert("Digite o nome");
      return;
    }
  
    if (this.sobrenome() === "") {
      alert("Digite o sobrenome");
      return;
    }
  
    if (this.idade() === null || this.idade()! < 1) {
      alert("Digite a idade");
      return;
    }

    alert(`
      Nome: ${this.nome()}
      Sobrenome: ${this.sobrenome()}
      Idade: ${this.idade()}`)
  }
}
