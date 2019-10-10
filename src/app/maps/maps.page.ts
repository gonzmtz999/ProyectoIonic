import { Component} from '@angular/core';
import {Map, tileLayer,marker,circle,icon} from 'leaflet';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage {

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

    var polygon = polygon([
      [18.4595645, -97.3945886],
      [18.468456, -97.39809],
      [18.462106, -97.393541]
    ]).addTo(this.map);


   circle([18.473328,-97.3949967], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300
      
    }).addTo(this.map);

    circle([18.476910, -97.3897727], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300
    }).addTo(this.map);

    circle([18.469003, -97.389708], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300
      
    }).addTo(this.map);


    circle([18.462582, -97.392647], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300
    }).addTo(this.map);

    circle([18.464913, -97.399074], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300
    }).addTo(this.map);

    circle([18.466785, -97.386092], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300
    }).addTo(this.map);




    const greenIcon = icon({
      iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
      shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    marker([18.470287, -97.392486], {icon: greenIcon}).addTo(this.map);

    const orangeIcon = icon({
      iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png',
      shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    marker([18.470317, -97.391295], {icon: orangeIcon}).addTo(this.map);


    const  redIcon = icon({
      iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
      shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    marker([18.470347, -97.390402], {icon: redIcon}).addTo(this.map);

        
    }
    ionViewWillLeave(){
      this.map.remove();
    }


    
    

   

  }


