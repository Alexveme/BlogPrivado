import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path: 'posts', component: ListaPostsComponent, canActivate: [LoginGuard]},
  {path: 'post/:postId', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
