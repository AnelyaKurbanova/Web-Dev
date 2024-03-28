import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photo } from '../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos!: Photo[];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe( params => {
      this.albumId = Number(params.get('albumId'));
      
      this.albumService.getPhotosById(this.albumId).subscribe( photos => {
        this.photos = photos;
      })
    })
  }
}
