import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './cidade-indaial/cidade-indaial';
import { FilmeInterestelar } from './filme-interestelar/filme-interestelar';
import { FilmeCavaleiroDasTrevas } from './filme-cavaleiro-das-trevas/filme-cavaleiro-das-trevas';
import { FilmeUmSonhoDeLiberdade } from './filme-um-sonho-de-liberdade/filme-um-sonho-de-liberdade';
import { FormCamposBasico } from './form-campos-basico/form-campos-basico';
import { Exercicio01DadosPessoais } from './exercicio01-dados-pessoais/exercicio01-dados-pessoais';
import { Exercicio02CalculoMedia } from './exercicio02-calculo-media/exercicio02-calculo-media';
import { ComponenteExercicios } from './componente-exercicios/componente-exercicios';
import { ClienteCadastrar } from './clientes/cliente-cadastrar/cliente-cadastrar';
import { ClienteListar } from './clientes/cliente-listar/cliente-listar';
import { ClienteEditar } from './clientes/cliente-editar/cliente-editar';

export const routes: Routes = [
    {path: "cidade-blumenau", loadComponent: () => CidadeBlumenau},
    {path: "cidade-indaial", loadComponent: () => CidadeIndaial},
    {path: "filme-interestelar", loadComponent: () => FilmeInterestelar},
    {path: "filme-cavaleiro-das-trevas", loadComponent: () => FilmeCavaleiroDasTrevas},
    {path: "filme-um-sonho-de-liberdade", loadComponent: () => FilmeUmSonhoDeLiberdade},
    {path: "form-campos-basicos", loadComponent: () => FormCamposBasico},
    {path: "clientes-cliente-cadastrar", loadComponent: () => ClienteCadastrar},
    {path: "clientes-cliente-listar", loadComponent: () => ClienteListar},
    {path: "clientes-cliente-editar/:id", loadComponent: () => ClienteEditar},
    {path: "exercicios", loadComponent: () => import('./componente-exercicios/componente-exercicios').then(m => m.ComponenteExercicios)},
];
