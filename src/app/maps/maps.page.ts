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
	  attribution: 'Map data &copy; <a href="pk.eyJ1IjoiZ29uejIwMDAiLCJhIjoiY2sxODMyd3B3MWVuNzNsbmkydjUxanVnbyJ9.wU8LUJ3W6u4ZTULvornNBQ">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	  maxZoom: 18,
	  id: 'mapbox.streets',
	  accessToken: 'pk.eyJ1IjoiZ29uejIwMDAiLCJhIjoiY2sxODMyd3B3MWVuNzNsbmkydjUxanVnbyJ9.wU8LUJ3W6u4ZTULvornNBQ'
    }).addTo(this.map);
    

    
    
    this.map.on('click',(e)=>{
    console.log(e.latlng);
    marker(e.latlng)
    .addTo(this.map)
    e.latlng.bindPopup("You clicked the map at " + e.latlng.toString())
    .openPopup();  

    })

    marker([18.473349, -97.389898])
    .addTo(this.map)
    .bindPopup('Ionic <br> Leaflet')
    .openPopup();

    

        
    }
    ionViewWillLeave(){
      this.map.remove();
    }


    
    

   

  }


