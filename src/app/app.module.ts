import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './listComponent/list.component';
import { ListService } from './list.service';
import { DetailComponent } from './detail/detail.component';
import { ComunicatorService } from './comunicator.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DemoRouterModule } from './router/router.module';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DemoRouterModule
  ],
  providers: [ListService,ComunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
