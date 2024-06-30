import { Component, OnInit } from '@angular/core';
import { PhotoServicesService } from '../../services/photo-services.service';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  titles = new Array <any>();

  constructor (private photoService:PhotoServicesService){

  }

  ngOnInit(): void {
    this.photoService.getAlbums().subscribe(data =>{
      this.titles = data;
      
    })
  }


}
