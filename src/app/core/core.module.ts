import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DefaultHeroComponent } from './default-hero/default-hero.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DefaultHeroComponent,
    ButtonComponent,
    NavbarComponent,
    LogoComponent,
    NavLinkComponent,
    ContentContainerComponent,
    NotFoundPageComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule
  ],
  exports: [LayoutComponent, TitleComponent, ButtonComponent]
})
export class CoreModule { }
