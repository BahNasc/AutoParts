import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioFormCadastroComponent } from './templates/funcionario-form-cadastro/funcionario-form-cadastro.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosListaComponent } from './templates/funcionarios-lista/funcionarios-lista.component';
import { FuncionarioPageComponent } from './page/funcionario-page/funcionario-page.component';
import { ClientesListaComponent } from './templates/clientes-lista/clientes-lista.component';
import { FornecedorFormCadastroComponent } from './templates/fornecedor-form-cadastro/fornecedor-form-cadastro.component';
import { FornecedoresListaComponent } from './templates/fornecedores-lista/fornecedores-lista.component';

@NgModule({
  declarations: [
    FuncionarioFormCadastroComponent,
    FuncionariosListaComponent,
    FuncionarioPageComponent,
    ClientesListaComponent,
    FornecedorFormCadastroComponent,
    FornecedoresListaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    FuncionariosRoutingModule
  ],
  exports: [
    FuncionarioFormCadastroComponent,
    FuncionariosListaComponent,
    ClientesListaComponent,
    FornecedorFormCadastroComponent,
    FornecedoresListaComponent
  ]
})
export class FuncionariosModule { }
