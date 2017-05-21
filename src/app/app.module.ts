import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemplateModule } from './components/common/template/template.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routing } from "./app.routing";
import { ServicosComponent } from './components/servicos/servicos.component';
import { ContasBancariasComponent } from './components/contas-bancarias/contas-bancarias.component';
import { ReceitasComponent } from './components/receitas/receitas.component';
import { DespesasComponent } from './components/despesas/despesas.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { ContasPagarComponent } from './components/contas-pagar/contas-pagar.component';
import { ContasReceberComponent } from './components/contas-receber/contas-receber.component';
import { LivroCaixaComponent } from './components/livro-caixa/livro-caixa.component';
import { LivroComponent } from './components/livro/livro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServicosComponent,
    ContasBancariasComponent,
    ReceitasComponent,
    DespesasComponent,
    RelatoriosComponent,
    ContasPagarComponent,
    ContasReceberComponent,
    LivroCaixaComponent,
    LivroComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TemplateModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
