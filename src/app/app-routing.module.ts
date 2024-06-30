import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';


const routes: Routes = [
  {
    path: "", component: HomepageComponent
  },
  {
    path: "albums", component:AlbumsComponent
  },
  {
    path: "albums/albumDetail/:id", component:AlbumDetailComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
