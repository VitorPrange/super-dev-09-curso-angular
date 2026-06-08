import { Component } from '@angular/core';
import { Exercicio01DadosPessoais } from '../exercicio01-dados-pessoais/exercicio01-dados-pessoais';
import { Exercicio02CalculoMedia} from '../exercicio02-calculo-media/exercicio02-calculo-media';
import { Exercicio03ConversorTemperatura } from '../exercicio03-conversor-temperatura/exercicio03-conversor-temperatura';
import { Exercicio04CadastroProduto } from '../exercicio04-cadastro-produto/exercicio04-cadastro-produto';
import { Exercicio05Imc } from '../exercicio05-imc/exercicio05-imc';
import { Exercicio06PedidoPizzaria } from '../exercicio06-pedido-pizzaria/exercicio06-pedido-pizzaria';
import { Exercicio07PlanoAcademia } from '../exercicio07-plano-academia/exercicio07-plano-academia';
import { Exercicio08SimuladorFrete} from '../exercicio08-simulador-frete/exercicio08-simulador-frete';
import { Exercicio09CadastroUsuario } from '../exercicio09-cadastro-usuario/exercicio09-cadastro-usuario';
import { Exercicio10OrcamentoViagem } from '../exercicio10-orcamento-viagem/exercicio10-orcamento-viagem';

@Component({
  selector: 'app-componente-exercicios',
  imports: [Exercicio01DadosPessoais, Exercicio02CalculoMedia, Exercicio03ConversorTemperatura, Exercicio04CadastroProduto, Exercicio05Imc,Exercicio06PedidoPizzaria, Exercicio07PlanoAcademia, Exercicio08SimuladorFrete,Exercicio09CadastroUsuario, Exercicio10OrcamentoViagem],
  templateUrl: './componente-exercicios.html',
  styleUrl: './componente-exercicios.scss',
})
export class ComponenteExercicios {}
