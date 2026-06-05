import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './cidade-indaial/cidade-indaial';
import { FilmeInterestelar } from './filme-interestelar/filme-interestelar';
import { FilmeCavaleiroDasTrevas } from './filme-cavaleiro-das-trevas/filme-cavaleiro-das-trevas';
import { FilmeUmSonhoDeLiberdade } from './filme-um-sonho-de-liberdade/filme-um-sonho-de-liberdade';

export const routes: Routes = [
    {path: "cidade-blumenau", loadComponent: () => CidadeBlumenau},
    {path: "cidade-indaial", loadComponent: () => CidadeIndaial},
    {path: "filme-interestelar", loadComponent: () => FilmeInterestelar},
    {path: "filme-cavaleiro-das-trevas", loadComponent: () => FilmeCavaleiroDasTrevas},
    {path: "filme-um-sonho-de-liberdade", loadComponent: () => FilmeUmSonhoDeLiberdade},
];
