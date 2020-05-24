import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ListaPostsComponent,
    PostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
