import { Component, signal } from '@angular/core';
import { ClienteModel } from '../../models/cliente.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cliente-listar',
  imports: [RouterLink],
  templateUrl: './cliente-listar.html',
  styleUrl: './cliente-listar.scss',
})
export class ClienteListar {
  clientes = signal<ClienteModel[]>([]);

  // ngOnInit é uma função que é chamada quando o componente é inicializado
  ngOnInit() {
    // chamar a função que carrega os produtos do LocalStorage
    this.carregarClientes();
  }

  carregarClientes(): void {
    // Carregando do localStorage os produtos
    const clientesString = localStorage.getItem("clientes");
    if (clientesString === null) {
      return;
    }

    const clientesLista = JSON.parse(clientesString) as ClienteModel[];

    const clientesOrdenados = clientesLista.sort((x, y) => x.nome.localeCompare(y.nome))
    // set permite alterar o valor por completo de um signal
    this.clientes.set(clientesOrdenados);
  }

  apagar(id: string): void {
    /*for (let i = 0; i < produtos.length; i++){
        let produto = produtos[i];
    } */
    // this.produtos().forEach((produto, i) => {
    //   if(produto.id === id){
    //     this.produtos().splice(i, 1);

    //     const produtosString = JSON.stringify(this.produtos());

    //     localStorage.setItem("produtos", produtosString);
    //     return;
    //   }
    // })

    // filter permite filtrar de uma lista gerando uma nova lista com os dados filtrados
    // update permite atualizar o signal
    this.clientes.update(clientes => clientes.filter(x => x.id !== id))
    const clientesString = JSON.stringify(this.clientes());
    localStorage.setItem("clientes", clientesString);
  }
}
