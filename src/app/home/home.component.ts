import { Component, OnInit, ViewChild } from '@angular/core';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Chauffeur } from 'app/modules/chauffeur';
import { Utilisateur } from 'app/modules/utilisateur';
import { ChauffeurService } from 'app/services/chauffeur.service';
import { UtilisateurService } from 'app/services/utilisateur.service';
import { Reservation } from 'app/modules/reservation';
import { Trajet } from 'app/modules/trajet';
import { TrajetService } from 'app/services/trajet.service';
import { ReservationService } from 'app/services/reservation.service';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  chauffeurs!:any[];
  chauffeur: Chauffeur=new Chauffeur();
  utilisateurs!:any[];
  utilisateur: Utilisateur=new Utilisateur();
  reservations!:any[];
  reservation: Reservation=new Reservation();
  trajets!:any[];
  trajet: Trajet=new Trajet();

  title;
  latitude=null;
  longitude=null;
  latitude2=null;
  longitude2=null;
  distanceM;
  distanceKM;
  prix;
  zoom=10;
  zoomin;


  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
  options = {
    types : [],
    componentRestrictions: {country: 'FR'}
  }

    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];

    public origin: any;
    public destination: any;

  constructor(private chauffeurService:ChauffeurService, private utilisateurService:UtilisateurService, private trajetService:TrajetService, private reservationService:ReservationService) { }


  ngOnInit() {

      this.setCurrentLocation();
      this.resetCurrentLocation();
      this.findAllChauffeurs();
      this.findAllReservations();
      this.findAllTrajets();

      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: ['62%', '32%', '6%'],
        series: [62, 32, 6]
      };
      this.emailChartLegendItems = [
        { title: 'Open', imageClass: 'fa fa-circle text-info' },
        { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
        { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
      ];

      this.hoursChartType = ChartType.Line;
      this.hoursChartData = {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        series: [
          [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
          [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
          [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
        ]
      };
      this.hoursChartOptions = {
        low: 0,
        high: 800,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 3
        }),
        showLine: false,
        showPoint: false,
      };
      this.hoursChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.hoursChartLegendItems = [
        { title: 'Open', imageClass: 'fa fa-circle text-info' },
        { title: 'Click', imageClass: 'fa fa-circle text-danger' },
        { title: 'Click Second Time', imageClass: 'fa fa-circle text-warning' }
      ];

      this.activityChartType = ChartType.Bar;
      this.activityChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
        ]
      };
      this.activityChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.activityChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.activityChartLegendItems = [
        { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
        { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
      ];

    }
  
  public handleAddressChange(address: Address) {
      // Do some stuff
      console.log(address);
      console.log('Latitude : ' + address.geometry.location.lat());
      console.log('Longitude : ' + address.geometry.location.lng());

      this.latitude = address.geometry.location.lat();
      this.longitude = address.geometry.location.lng();
  }
  public handleAddressChange2(address2: Address) {
    // Do some stuff
    console.log(address2);
    console.log('Latitude : ' + address2.geometry.location.lat());
    console.log('Longitude : ' + address2.geometry.location.lng());

    this.latitude2 = address2.geometry.location.lat();
    this.longitude2 = address2.geometry.location.lng();
  }
  public setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoomin = 15;
      })
    }
  }

  public resetCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoomin = 15;
      })
    }
  }

  getDistance(from, align) {
    const type = ['','info','success','warning','danger'];
    var color = Math.floor((Math.random() * 4) + 1);

    this.origin = { lat: this.latitude, lng: this.longitude };
    this.destination = { lat: this.latitude2, lng: this.longitude2 };
    this.distanceM = google.maps.geometry.spherical.computeDistanceBetween(this.origin, this.destination);
    this.distanceKM = (google.maps.geometry.spherical.computeDistanceBetween(this.origin, this.destination))*0.001;
    this.prix = 5 * this.distanceKM;
    console.log('Distance=' +this.distanceM)
    $.notify({
      icon: "pe-7s-compass",
      message: "Distance="+this.distanceKM.toFixed(2)+" Km.             Prix estimé du trajet:"+this.prix.toFixed(2)+" €."
  },{
      type: type[color],
      timer: 3000,
      placement: {
          from: from,
          align: align
      }
  });
  }
  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    var color = Math.floor((Math.random() * 4) + 1);
    $.notify({
        icon: "pe-7s-car",
        message: "Votre réservation <b>Taxi Driver</b> a bien été prise en compte!"
    },{
        type: type[color],
        timer: 1000,
        placement: {
            from: from,
            align: align
        }
    });
}
findAllChauffeurs(){
  this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data});
}
findAllTrajets(){
  this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data});
}
findAllReservations(){
  this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data});
}
saveReservation(){
  this.reservationService.save(this.reservation).subscribe(()=> {
    this.findAllReservations();
    this.reservation =new Reservation();
  })
}
saveTrajet(){
  this.trajetService.save(this.trajet).subscribe(()=> {
    this.findAllTrajets();
    this.trajet =new Trajet();
  })
}
}
