import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postCargado: any = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private peticionesService: PeticionesService
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(async params => {
      const postId = parseInt(params.postId);
      this.postCargado = await this.peticionesService.getPost(postId);
    });
  }

  volverAtras() {
    this.router.navigate(['/posts']);
  }

}
