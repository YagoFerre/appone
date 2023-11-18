import { RouterModule, Routes } from "@angular/router";
import { CriarComponent } from "./criar/criar.component";
import { ListarComponent } from "./listar/listar.component";
import { EditarComponent } from "./editar/editar.component";
import { ModuleWithProviders } from "@angular/core";

const RESPOSTA_ROUTES: Routes = [
  { path: '', component: CriarComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'listar/editar/:id', component: EditarComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(RESPOSTA_ROUTES);
