import { Component} from '@angular/core';
import {Map, tileLayer,marker,circle,icon} from 'leaflet';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage {
  valor='';

  map:Map;

  constructor() {
    
  }
  ionViewDidEnter(){
    this.leafLetMap();
  }

  leafLetMap(){
    this.map = new Map('mapId').setView([18.4625, -97.3928],15);

    tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ29uejIwMDAiLCJhIjoiY2sxODMyd3B3MWVuNzNsbmkydjUxanVnbyJ9.wU8LUJ3W6u4ZTULvornNBQ', {
	 
	  maxZoom: 18,
	  id: 'mapbox.streets',
	  accessToken: 'pk.eyJ1IjoiZ29uejIwMDAiLCJhIjoiY2sxODMyd3B3MWVuNzNsbmkydjUxanVnbyJ9.wU8LUJ3W6u4ZTULvornNBQ'
    }).addTo(this.map);
    

    marker([18.473349, -97.389898])
    .addTo(this.map)
    .bindPopup('Usted se <br> encuentra aca')
    .openPopup();


    this.map.on('click',(e)=>{
      console.log(e.latlng);
      marker(e.latlng)
     .addTo(this.map).bindPopup("El flete puede llegar a la ubicacion<br> " + e.latlng.toString())
      .openPopup(); 
      })
    

        
    }
    
    ionViewWillLeave(){
      this.map.remove();
    }

  }


