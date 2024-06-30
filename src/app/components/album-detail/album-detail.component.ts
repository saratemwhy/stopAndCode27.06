import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoServicesService } from '../../services/photo-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{

  details = new Array <any>();

  constructor (private photoDetail:PhotoServicesService, private route:ActivatedRoute){}

  ngOnInit(): void {

    const id= this.route.snapshot.paramMap.get("id");

    this.photoDetail.getDetails(id).subscribe(res => {
        this.details=res;
    })
    
  }

}
