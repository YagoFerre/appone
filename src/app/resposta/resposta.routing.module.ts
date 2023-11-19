import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CriarComponent } from "./criar/criar.component";
import { ListarComponent } from "./listar/listar.component";
import { EditarComponent } from "./editar/editar.component";

const RESPOSTA_ROUTES: Routes = [
  { path: '', component: CriarComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'listar/editar/:id', component: EditarComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(RESPOSTA_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class RespostaRoutingModule {}
