import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album!: Album;
  updatedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const albumId = Number(params.get('albumId'));
      
      this.albumService.getAlbumById(albumId).subscribe( album => {
        this.album = album;
      })
    })
  }

  updateTitle(){
    
    this.album.title = this.updatedTitle;
    this.updatedTitle = '';
    this.albumService.updateTitle(this.album).subscribe(album =>{
      console.log('title is updated!');
    })
  }

  getPhotosById(id:number){
    this.albumService.getPhotosById(id).subscribe(photo =>{
      console.log(photo);
      
    })
  }
} 
