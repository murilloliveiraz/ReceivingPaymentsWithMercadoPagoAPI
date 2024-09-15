import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartaoCreditoFormComponent } from './cartao-credito-form/cartao-credito-form.component';
import { PixComponent } from './pix/pix.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from 'src/util/Safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartaoCreditoFormComponent,
    PixComponent,
    SafePipe
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
