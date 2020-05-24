import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  arrPosts: any[] = [];

  constructor(private peticionesService: PeticionesService) { }

  async ngOnInit() {
    this.arrPosts = await this.peticionesService.getAllPosts();
    this.arrPosts = this.arrPosts.splice(0, 12);
  }

}
