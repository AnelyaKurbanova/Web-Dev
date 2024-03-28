import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../interfaces';
import { log } from 'node:console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit
{

  albums!: Album[];
  newAlbum: Album;
  lastId = 100;

  constructor(
    private albumService: AlbumsService
  ){
    this.newAlbum = {
      id: this.lastId,
      title: '',
    }
  }
  ngOnInit(): void {
      this.albumService.getAlbums().subscribe(album =>{
        this.albums = album;
        // console.log(album);
      })

  }

  addAlbum(){
    this.albumService.createAlbum(this.newAlbum).subscribe(post=>{
      this.albums.push(this.newAlbum);
      this.newAlbum = {} as Album;
    })
  }

  deleteAlbum(id:number){
    
    this.albumService.deleteAlbum(id).subscribe(() =>{
      this.albums = this.albums.filter(p => p.id !== id);
      this.lastId -= 1;
    });
  }


}
