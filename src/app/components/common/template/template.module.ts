import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuModule } from './menu/menu.module';
@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  exports : [HeaderComponent, SidebarComponent, FooterComponent],
  declarations: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class TemplateModule { }
