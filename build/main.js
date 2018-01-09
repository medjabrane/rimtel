webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiculeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehiculeService = (function () {
    function VehiculeService(_http) {
        this._http = _http;
        this.vehicules = [];
        this.toastyAdd = false;
        this.toastyUpdate = false;
        this.groupLabels = [];
        this.driverLabels = [];
        this.deviceLabels = [];
        this.bigCurrentPage = 1;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
    }
    VehiculeService.prototype.add = function (vehicule, idDevice, idGroups, idDriver, deviceNumber) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(vehicule);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/?idDevice=' + idDevice + '&idGroups=' + idGroups + '&idDriver=' + idDriver + '&deviceNumber=' + deviceNumber, vehicule, options).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.update = function (vehicule, idGroups, idDriver, deviceNumber) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(vehicule);
        return this._http.put(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/?idGroups=' + idGroups + '&idDriver=' + idDriver + '&deviceNumber=' + deviceNumber, vehicule, options).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.addGroup = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/byName/?groupeName=' + name, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.addDriver = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'drivers/byName/?driverName=' + name, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getGroupsVehicule = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/groups/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getOne = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.assignement = function (idVehicule, idDriver) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/assignement/?idVehicule=' + idVehicule + '&idDriver=' + idDriver, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getListVehicules = function (page, size) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/list' + '?page=' + page + '&size=' + size, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.delete = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getGroupsLabel = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/labels', { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getDriversLabel = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'drivers/labels', { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getDevicesLabel = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'devices/labels', { headers: headers }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getVehicule = function (idVehicule) {
        if (this.vehicules.length != 0) {
            console.log(this.vehicules);
            return this.vehicules.find(function (vehicule) { return vehicule.idVehicule === idVehicule; });
        }
        return null;
    };
    return VehiculeService;
}());
VehiculeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], VehiculeService);

//# sourceMappingURL=vehicule.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointInterest; });
/* unused harmony export Driver */
var PointInterest = (function () {
    function PointInterest() {
        this.ray = 100;
        this.decode = [];
        this.coordinate = { lat: 0, lng: 0 };
    }
    return PointInterest;
}());

var Driver = (function () {
    function Driver() {
    }
    return Driver;
}());

//# sourceMappingURL=data-management.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Historical; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_global_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_real_time__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stop_list_stop_list__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_data_management__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_map_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_historical_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data_management_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__historical_form_historical_form__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__paths_list_paths_list__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_global_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_geocoding_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_leaflet__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_real_time_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__groups_page_groups_page__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__objects_real_time__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__poi_poi__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__mileage_mileage__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_launch_navigator__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var Polygon = L.Polygon;
var Marker = L.Marker;
var Icon = L.Icon;












var Historical = (function () {
    function Historical(platform, menu, statusBar, alertCtrl, launchNavigator, geolocation, actionSheetCtrl, viewCtrl, callNumber, storage, pipe, toastController, realTimeService, geocodingService, dataManagementService, _app, historicalService, loadingCtrl, modalCtrl, navCtrl, navParams, mapService) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        this.actionSheetCtrl = actionSheetCtrl;
        this.viewCtrl = viewCtrl;
        this.callNumber = callNumber;
        this.storage = storage;
        this.pipe = pipe;
        this.toastController = toastController;
        this.realTimeService = realTimeService;
        this.geocodingService = geocodingService;
        this.dataManagementService = dataManagementService;
        this._app = _app;
        this.historicalService = historicalService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mapService = mapService;
        this.matricule = "Temps Réel";
        this.stops = [];
        this.pointInterests = null;
        this.searchWord = '';
        this.newRealTimeRecords = null;
        this.oldRealTimeRecords = null;
        this.angles = new Map();
        this.isCurrentPathClicked = false;
        this.pathDrawn = false;
        this.previousPathdrawn = false;
        this.pathDraw = false;
        this.currentPathClickedDeviceIds = null;
        this.modalopen = false;
        this.dismissbutton = false;
        this.poisInMap = false;
        this.itineaire = false;
        this.ajoutpoi = false;
        this.mapchoice = true;
        this.mapclicked = false;
        this.resultopened = false;
        this.openStopResult = false;
        this.openMileageResult = false;
        this.mileages = [];
        this.pathpoirealtime = false;
        this.navCtrl.swipeBackEnabled = false;
        this.totalMileage = new __WEBPACK_IMPORTED_MODULE_2__objects_real_time__["a" /* Mileage */]();
        this.Root = JSON.parse(localStorage.getItem('currentuser')).isRoot;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentlocationlat = resp.coords.latitude;
            _this.currentlocationlng = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    // initialisation du map + get current coordinate user
    Historical.prototype.ngOnInit = function () {
        this.vehicule = this.navParams.get('data');
        this.initMap();
        this.loader = this.loadingCtrl.create({
            content: "Veuillez attendre..."
        });
        this.loader.present();
        this.openGroupsModal();
        this.loader.dismiss();
        // this.geolocation.getCurrentPosition().then((resp) => {
        //   this.currentlocationlat=resp.coords.latitude;
        //   this.currentlocationlng=resp.coords.longitude;
        //   this.coords=resp.coords;
        //  }).catch((error) => {
        //    console.log('Error getting location', error);
        //  });
    };
    // open menu
    Historical.prototype.openmenu = function () {
        this.menu.open();
    };
    //Loading groups and all real time records
    //get all groups methods
    // loadGroups() {
    //   this.allGroups = this.realTimeService.getAllGroups(this.searchWord).subscribe(groupes => {
    //     this.groups = groupes;
    //     // this.getAllRealTimeRecords();
    //     this.groups.forEach(group => {
    //       group.vehicules.forEach(vehicule => {
    //         vehicule.realTimeRecord = new RealTimeRecord();
    //       })
    //     });
    //   });
    // }
    Historical.prototype.openmodalrealtime = function () {
        this.groupmodal.present();
    };
    // All records real time method
    // getAllRealTimeRecords() {
    //   this.allRealTimeRecords = this.realTimeService.getAllRealTimeRecords().subscribe(realTimeRecords => {
    //     if (this.newRealTimeRecords) {
    //       this.oldRealTimeRecords = this.newRealTimeRecords;
    //     }
    //     this.newRealTimeRecords = realTimeRecords;
    //     realTimeRecords.forEach(realTimeRecord => {
    //       realTimeRecord.vehicule = this.getVehicule(realTimeRecord.idRealTimeRecord);
    //       // if (this.oldRealTimeRecords) {
    //       //   this.oldRealTimeRecords.map(oldRealTimeRecord => {
    //       //     if (oldRealTimeRecord.idRealTimeRecord === realTimeRecord.idRealTimeRecord) {
    //       //       if (realTimeRecord.speed > 0 && this.previousPathdrawn == false && realTimeRecord.idRealTimeRecord == this.selectedDevice) {
    //       //         this.displayCurrentPath(realTimeRecord.idRealTimeRecord);
    //       //       }
    //       //       if (oldRealTimeRecord.speed == 0 && realTimeRecord.speed > 0) {
    //       //         this.isCurrentPathClicked = true;
    //       //         if(this.currentPathClickedDeviceIds != null)
    //       //         this.currentPathClickedDeviceIds.push(realTimeRecord.idRealTimeRecord);
    //       //         if(this.previousPathdrawn == false && realTimeRecord.idRealTimeRecord == this.selectedDevice){
    //       //           this.displayCurrentPath(realTimeRecord.idRealTimeRecord);
    //       //         }
    //       //       }
    //       //       if ((oldRealTimeRecord.speed > 0 && realTimeRecord.speed == 0) && realTimeRecord.ignition == false) {
    //       //         this.isCurrentPathClicked = false;
    //       //         this.currentPathClickedDeviceIds = null;
    //       //       }
    //       //     }
    //       //   });
    //       // }
    //     });
    //   });
    // }
    //initialisation du map
    Historical.prototype.initMap = function () {
        if (this.mapService.map)
            this.mapService.map.remove();
        var map = L.map('historicalMap', {
            zoomControl: false,
            center: L.latLng(32.586163, -9.912118),
            zoom: 6,
            minZoom: 3,
            maxZoom: 20,
            maxNativeZoom: 17,
            layers: [this.mapService.baseMaps.googlehybride]
        });
        L.control.layers(this.mapService.baseMaps, null, {
            position: 'bottomright'
        }).addTo(map);
        L.control.zoom({
            position: 'topright'
        }).addTo(map);
        this.mapService.map = map;
    };
    //draw itineraire
    Historical.prototype.drawpath = function () {
        // if(this.itineaire){
        //   this.itineaire=false;
        //   this.initMap();
        // //  this.goToRealTimeRecord(this.selectedDevice);
        //   return;
        // }else{
        if (this.selectedDevice) {
            if (this.currentlocationlat && this.currentlocationlng) {
                var options = {
                    start: [this.currentlocationlat, this.currentlocationlng],
                    app: this.launchNavigator.APP.GOOGLE_MAPS
                };
                this.launchNavigator.navigate([this.latpoi, this.lngpoi], options)
                    .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
            }
            else {
                var alert_1 = this.alertCtrl.create({
                    title: 'Attention',
                    subTitle: 'Veuillez activer GPS ',
                    buttons: ['Ok']
                });
                alert_1.present();
            }
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Itinéraire',
                subTitle: 'Veuillez choisir un véhicule ',
                buttons: ['Ok']
            });
            alert_2.present();
        }
        // var L = require('leaflet')
        // if (this.mapService.map) this.mapService.map.remove();
        // let map = L.map('historicalMap', {
        //   zoomControl: false,
        //   center: L.latLng(32.586163,-9.912118),
        //   zoom: 6,
        //   minZoom: 3,
        //   maxZoom: 20,
        //   maxNativeZoom: 17,
        //   layers: [this.mapService.baseMaps.googlehybride]
        // });
        // L.control.layers(this.mapService.baseMaps,null,{position:'bottomright'}).addTo(map);
        // L.control.zoom({ position: 'topright' }).addTo(map);
        // this.mapService.map = map;
        // this.control=L.Routing.control({
        //   createMarker: function(i, wp,n) {
        //     var url=null;
        //     if(i ==0){
        //       url= imagesDir+'startMarker.png';
        //     }else if(i==n-1){
        //      return null;
        //     }
        //     return L.marker(wp.latLng, {
        //       draggable: true,
        //       icon: L.icon({
        //         iconSize: [20,20],
        //         iconUrl: url,
        //         iconAnchor: [-2, 30],
        //         popupAnchor: [10, -25]
        //       })
        //     });
        //   },
        //   waypoints: [
        //   L.latLng(this.currentlocationlat,this.currentlocationlng),
        //   L.latLng(this.latpoi,this.lngpoi),
        //   ],
        //   language:'fr',
        //   lineOptions: {
        //     styles: [
        //       {color: 'blue', opacity: 1, weight: 3}
        //     ], 
        //   },
        // }).addTo(this.mapService.map);
        //  this.itineaire=true;
        // }  
    };
    // (open modal) liste des groupes et véhicules (temps réel) 
    Historical.prototype.openGroupsModal = function () {
        var _this = this;
        this.itineaire = false;
        this.pathpoirealtime = true;
        this.resultopened = false;
        this.openStopResult = false;
        this.openMileageResult = false;
        this.groupmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_18__groups_page_groups_page__["a" /* GroupsPage */]);
        this.groupmodal.present();
        this.groupmodal.onDidDismiss(function (data) {
            if (data) {
                _this.vehicule = data.vehicule;
                _this.mapService.map.setView(data.vehicule.realTimeRecord.coordinate, 15);
                _this.trackRealTimeRecord(data.vehicule.realTimeRecord);
            }
            // this.vehicule = data.vehicule
            // // console.log(data);
            // this.mapService.map.setView(data.vehicule.realTimeRecord.coordinate, 15);
            // this.trackRealTimeRecord(this.vehicule.realTimeRecord);
            // data.groups.forEach(groups => {
            //   groups.vehicules.forEach(vehicule => {
            //     //  if(this.isValidPoint(vehicule.realTimeRecord.coordinate)) {
            //     //  this.trackRealTimeRecord(vehicule.realTimeRecord);
            //     //  }
            //    
            //       this.mapService.map.setView(vehicule.realTimeRecord.coordinate, 15);
            //       this.recordtime=vehicule.realTimeRecord;
            //       //  console.log(vehicule.realTimeRecord)
            //     
            //     // this.trackRealTimeRecord(vehicule.realTimeRecord.vehicule.realTimeRecord)  
            //   });
            // });
            // if (data.selectedDevice != null && data.selectedDevice != 0) {
            //   //this.clearPolylines();
            //   this.selectedDevice = data.selectedDevice;
            //   // this.goToRealTimeRecord(data.selectedDevice);
            //   // this.getAllRealTimeRecords();
            // }
            //  console.log(this.recordtime)
            // this.trackRealTimeRecord(vehicules.reatTimeRecord);
        });
        this.modalopen = false;
        this.dismissbutton = true;
        this.DeviceId = null;
    };
    //open POI Modal
    Historical.prototype.openPoiModal = function () {
        var _this = this;
        if (this.selectedDevice) {
            var pointInterest_1 = new __WEBPACK_IMPORTED_MODULE_4__objects_data_management__["a" /* PointInterest */]();
            pointInterest_1.address = this.addresspoi;
            pointInterest_1.coordinate.lat = this.latpoi;
            pointInterest_1.coordinate.lng = this.lngpoi;
            var PoiModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_20__poi_poi__["a" /* Poi */], {
                pointInterest: pointInterest_1
            });
            PoiModal.present();
            PoiModal.onDidDismiss(function (form) {
                if (form.pointinterest.name != null) {
                    if (pointInterest_1.type == "MARKER") {
                        var circle = L.circle(pointInterest_1.coordinate, {
                            color: 'red',
                            fillColor: '#f03',
                            fillOpacity: 0.1,
                            radius: pointInterest_1.ray
                        });
                        _this.mapService.addCircle(circle);
                        setTimeout(function () {
                            _this.mapService.removeCirclesFromMap();
                        }, 4000);
                    }
                }
            });
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'POI',
                subTitle: 'Veuillez choisir un véhicule ',
                buttons: ['Ok']
            });
            alert_3.present();
        }
    };
    //remove polylines and markers from map
    Historical.prototype.clearPolylines = function () {
        /* this.removecurrentpath();*/
        this.mapService.removePolylinesFromMap();
        this.mapService.removeMarkersFromMap();
        this.pathDrawn = false;
    };
    //Getting old real time record
    Historical.prototype.getOldRealTimeRecord = function (id) {
        var result = this.oldRealTimeRecords.filter(function (rt) {
            return rt.idRealTimeRecord == id;
        });
        if (result)
            return result[0];
        else
            return null;
    };
    //go to real time and gets historique records
    /* goToRealTimeRecord(idRealTimeRecord: number) {
       
       this.newRealTimeRecords.forEach(realTimeRecord => {
         if (realTimeRecord.idRealTimeRecord == idRealTimeRecord) {
           //this.clearPolylines();
           this.mapService.map.setView(realTimeRecord.coordinate, 15);
           this.trackRealTimeRecord(realTimeRecord);
         }
       });
     }*/
    // Compare two coordinate
    Historical.prototype.compareTwoCoordinate = function (p1, p2) {
        if (p1.lat == p2.lat && p1.lng == p2.lng)
            return true;
        else
            false;
    };
    //
    Historical.prototype.getGeocoding = function (address) {
        var geocoding = null;
        if (address) {
            if (address.road != null) {
                geocoding = address.road;
            }
            if (address.neighbourhood != null) {
                geocoding = geocoding ? geocoding + ' ' + address.neighbourhood : address.neighbourhood;
            }
            if (address.city != null) {
                geocoding = geocoding ? geocoding + ' (' + address.city + ')' : address.city;
            }
            if (geocoding == null) {
                geocoding = 'chargement..';
            }
        }
        return geocoding;
    };
    // get vehicule
    Historical.prototype.getVehicule = function (idDevice) {
        var foundVehicule = new __WEBPACK_IMPORTED_MODULE_19__objects_real_time__["d" /* Vehicule */]();
        for (var i = 0; i < this.groups.length; i++) {
            for (var j = 0; j < this.groups[i].vehicules.length; j++) {
                if (this.groups[i].vehicules[j].idDevice == idDevice) {
                    foundVehicule = this.groups[i].vehicules[j];
                    break;
                }
            }
        }
        return foundVehicule;
    };
    //temps reel 
    Historical.prototype.trackRealTimeRecord = function (realTimeRecord) {
        var _this = this;
        var angle = 0;
        var date = new Date(realTimeRecord.recordTime);
        realTimeRecord.recordTime = new Date(new Date(realTimeRecord.recordTime).setHours(new Date(realTimeRecord.recordTime).getHours() - 1));
        var minutes = date.getMinutes() + "";
        if (minutes.length == 1) {
            minutes = "0" + date.getMinutes();
        }
        var icon;
        var marker;
        var popup;
        console.log();
        /* if (!this.dataManagementService.pointInterests) {
           this.dataManagementService.getAllPointInterests().subscribe(pointInterests => {
             this.dataManagementService.pointInterests = pointInterests;
             realTimeRecord.relativePosition = this.dataManagementService.getRelativePosition(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng);
           })
         }
         else {
           realTimeRecord.relativePosition = this.dataManagementService.getRelativePosition(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng);
         }
         if (realTimeRecord.type === "AA") {
           angle = realTimeRecord.rotationAngle * 8;
         }
         if (this.oldRealTimeRecords && realTimeRecord.type === "GPRMC") {
           let oldRealTimeRecord = this.getOldRealTimeRecord(realTimeRecord.idRealTimeRecord);
           if (oldRealTimeRecord) {
             if (!this.compareTwoCoordinate(oldRealTimeRecord.coordinate, realTimeRecord.coordinate)) {
               angle = Math.atan2(realTimeRecord.coordinate.lng - oldRealTimeRecord.coordinate.lng, realTimeRecord.coordinate.lat - oldRealTimeRecord.coordinate.lat) * 180 / Math.PI;
               this.angles.set(realTimeRecord.idRealTimeRecord, angle);
             } else {
               angle = this.angles.get(realTimeRecord.idRealTimeRecord);
             }
           }
         }*/
        popup = '<b>Chauffeur:</b> ' + this.dataManagementService.getDriverName(realTimeRecord.vehicule.driver) +
            '<br><b>Matricule:</b> ' + realTimeRecord.vehicule.matricule +
            '<br><b>Mark:</b> ' + realTimeRecord.vehicule.mark +
            '<br><b>Lat,Lng:</b><i> [' + this.PipeLngLat(realTimeRecord.coordinate.lat) + ',' + this.PipeLngLat(realTimeRecord.coordinate.lng) + ']</i><br><b>Vitesse :</b>' + realTimeRecord.speed +
            "<br><b>date et l'heure:</b> " + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + minutes +
            "<br><b>Signal GSM:</b> " + realTimeRecord.signal +
            " <i class='fa fa-wifi' aria-hidden='true'></i><br><b>Sat en vue:</b> " + realTimeRecord.satInView + " <i class='fa fa-globe' aria-hidden='true'></i>";
        this.selectedDevice = this.vehicule.device.idDevice;
        this.realtimecoord = realTimeRecord.coordinate;
        this.matricule = realTimeRecord.vehicule.matricule;
        this.latpoi = this.PipeLngLat(realTimeRecord.coordinate.lat);
        this.lngpoi = this.PipeLngLat(realTimeRecord.coordinate.lng);
        this.dataManagementService.inverseGeoconding(this.latpoi, this.lngpoi, 17).subscribe(function (res) {
            _this.addresspoi = res.display_name;
        }, function (err) { });
        marker = new Marker(realTimeRecord.coordinate, {
            rotationAngle: angle
        });
        /*
            let imageUri:string = "http://37.187.171.84/images/c1x0.png";
            if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition== true) {
              icon = new Icon({
                iconUrl: imagesDir + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -10]
              });
              imageUri = imagesDir + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
            }
            if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed > 0 ) {
              icon = new Icon({
                iconUrl: imagesDir + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
              });
              imageUri = imagesDir + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
            }
            if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition== false) {
              icon = new Icon({
                iconUrl: imagesDir + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
              });
              imageUri = imagesDir + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
            }
            if (realTimeRecord.realTimeRecordStatus == 'NON_VALID' || realTimeRecord.realTimeRecordStatus == 'TECHNICAL_ISSUE') {
              icon = new Icon({
                iconUrl: imagesDir + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
              });
              imageUri = imagesDir + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
            }*/
        icon = new Icon({
            iconUrl: realTimeRecord.icon,
            iconAnchor: [-2, 30],
            popupAnchor: [10, -25]
        });
        this.geocodingService.inverseGeoconding(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng, 18).subscribe(function (adress) {
            popup = popup + '<hr><b>' + adress.display_name + '</b><br>';
            if (realTimeRecord.relativePosition) {
                popup = popup + '<hr><center><span class="leaflet-pelias-layer-icon-container"><div class="leaflet-pelias-layer-icon leaflet-pelias-layer-icon-point"></div></span><strong>' + realTimeRecord.relativePosition + '</strong></center>';
            }
            // realTimeRecord.geocoding = this.getGeocoding(adress.address);
            // realTimeRecord.geocodingDetails = adress.display_name;
            //  this.updateSpecificGroups(realTimeRecord);
            var displaycurrentPath = false;
            if (_this.currentPathClickedDeviceIds != null && _this.currentPathClickedDeviceIds.indexOf(realTimeRecord.idRealTimeRecord) != -1) {
                displaycurrentPath = true;
                _this.pathDrawn = true;
            }
            _this.mapService.removeAllRtMarkers();
            _this.mapService.updateRtMarkertest(realTimeRecord.coordinate, popup, icon, realTimeRecord.idRealTimeRecord, displaycurrentPath);
            if (realTimeRecord.idRealTimeRecord == _this.selectedDevice) {
                if (realTimeRecord.vehicule.driver) {
                    _this.driverphone = realTimeRecord.vehicule.driver.telephone;
                    console.log(_this.driverphone);
                }
                if (_this.pathDrawn == false && realTimeRecord.speed > 0) {
                    _this.displayCurrentPath(realTimeRecord.idRealTimeRecord);
                }
            }
        }, function (err) {
            // let displaycurrentPath = false;
            // if ( this.currentPathClickedDeviceIds != null && this.currentPathClickedDeviceIds.indexOf(realTimeRecord.idRealTimeRecord)!=-1) {
            //   displaycurrentPath = true;
            // }
            // // c'est normal => tu test ici si le record = le current !
            // if(realTimeRecord.idRealTimeRecord == this.selectedDevice){
            //   marker.bindPopup(popup);
            //   this.mapService.updateRtMarkertest(realTimeRecord.coordinate,popup,icon,realTimeRecord.idRealTimeRecord, displaycurrentPath );
            // }
        });
    };
    //
    Historical.prototype.PipeLngLat = function (value) {
        return this.pipe.transform(value, '2.2-6');
    };
    //update du groupe
    Historical.prototype.updateSpecificGroups = function (realTimeRecord) {
        if (this.groups)
            this.groups.forEach(function (group) {
                if (group)
                    group.vehicules.forEach(function (vehicule) {
                        if (vehicule.idDevice == realTimeRecord.idRealTimeRecord)
                            vehicule.realTimeRecord = realTimeRecord;
                    });
            });
    };
    //alert lancement Moteur
    Historical.prototype.AlertLancementMoteur = function (deviceId) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Êtes-vous sûr ?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Start',
                    handler: function () {
                        _this.startEngine(deviceId);
                    }
                }
            ]
        });
        alert.present();
    };
    //start moteur
    Historical.prototype.startEngine = function (deviceId) {
        this.realTimeService.startEngine(deviceId).subscribe(function (cmdSended) {
            alert("commande Lancement moteur envoyé !");
        });
    };
    //alert arret moteur
    Historical.prototype.AlertArretMoteur = function (deviceId) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Êtes-vous sûr ?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Arrêt',
                    handler: function () {
                        _this.stopEngine(deviceId);
                    }
                }
            ]
        });
        alert.present();
    };
    //stop moteur
    Historical.prototype.stopEngine = function (deviceId) {
        this.realTimeService.stopEngine(deviceId).subscribe(function (cmdSended) {
            alert("commande Arrêt moteur envoyé !");
        });
    };
    //open result "historique des trajets"
    Historical.prototype.openResultsModal = function () {
        var _this = this;
        this.mapService.removePolylinesFromMap();
        this.mapService.removeMarkersFromMap();
        var pathsListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__paths_list_paths_list__["a" /* PathsList */], {
            paths: this.paths
        });
        if (this.paths == null) {
            var alert_4 = this.alertCtrl.create({
                title: 'Historique',
                subTitle: 'Aucune informations',
                buttons: ['Ok']
            });
            alert_4.present();
        }
        else {
            pathsListModal.present();
            pathsListModal.onDidDismiss(function (pathClicked) {
                if (pathClicked == null) {
                    _this.openFormModal();
                }
                else if (pathClicked == 1) {
                }
                else {
                    _this.drawPath(pathClicked);
                }
                _this.resultopened = true;
                _this.openStopResult = false;
                _this.openMileageResult = false;
            });
        }
    };
    // desiner le trajet
    Historical.prototype.drawPath = function (path) {
        var _this = this;
        this.mapService.removePolylinesFromMap();
        this.mapService.removeMarkersFromMap();
        this.historicalService.getPathDetails(path.deviceId, {
            startDate: path.beginPathTime,
            endDate: path.endPathTime
        }).subscribe(function (points) {
            var stopMarkers = [];
            points.stops.forEach(function (stop) {
                var popup = "<img src='" + __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "stop_smal.png" + "'/> Durée d'arrêt : " + stop.stopDurationStr;
                var stopMarker = L.marker({
                    lat: stop.stopLatitude,
                    lng: stop.stopLongitude
                });
                stopMarker.addTo(_this.mapService.map);
                stopMarker.on('click', function () {
                    _this.mapService.map.setView({
                        lat: stop.stopLatitude,
                        lng: stop.stopLongitude
                    }, 14);
                });
                _this.dataManagementService.inverseGeoconding(stop.stopLatitude, stop.stopLongitude, 18).subscribe(function (adress) {
                    var truncatedDisplayName = adress.display_name;
                    var countCommas = 0;
                    for (var i = 0, len = adress.display_name.length; i < len; i++) {
                        if (adress.display_name[i] == ',') {
                            countCommas = countCommas + 1;
                        }
                        else if (countCommas >= 5) {
                            truncatedDisplayName = adress.display_name.substring(0, i - 1);
                            break;
                        }
                    }
                    popup = popup + '<br><hr><b>' + truncatedDisplayName + '</b>';
                    stopMarker.bindPopup(popup);
                });
                stopMarker.setIcon(new Icon({
                    iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "stop_smal.png",
                    iconAnchor: [-2, 30],
                    popupAnchor: [10, -25]
                }));
                _this.mapService.addMarker(stopMarker);
            });
            var polyline = L.polyline(points.coordinates, {
                color: '#0031D9',
                weight: 3
            });
            points.coordinates.forEach(function (coordinate, i) {
                var marker = L.marker(coordinate);
                if (i != 0 && i != points.coordinates.length - 1) {
                    marker.setIcon(new Icon({
                        iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                        iconAnchor: [2, 2]
                    }));
                    var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */](coordinate.date);
                    var popup = '<b>Heure:</b> ' + pointDatePipe.transform(coordinate.date, 'dd/MM/yyyy HH:mm:ss') + '<b><br>vitesse:</b> ' + coordinate.speed + ' Km/h';
                    marker.bindPopup(popup);
                    marker.on('click', function () {
                        _this.mapService.map.setView(coordinate, 17);
                    });
                    _this.mapService.addMarker(marker);
                }
            });
            var startMarker = L.marker({
                lat: path.beginPathLatitude,
                lng: path.beginPathLongitude
            });
            var startTime = path.beginPathTime;
            var startDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */](startTime);
            startMarker.bindPopup('<b> Lieu de début: </b>' + path.beginPathGeocoding + '<b></i><br>Temps de début du trajet : </b>' + startDatePipe.transform(startTime, 'dd/MM/yyyy HH:mm:ss'));
            startMarker.setIcon(new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "startMarker.png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            }));
            _this.mapService.addMarker(startMarker);
            if (path.endPathLatitude != null && path.endPathLongitude != null && path.endPathTime != null) {
                var endMarker = L.marker({
                    lat: path.endPathLatitude,
                    lng: path.endPathLongitude
                });
                var endTime = path.endPathTime;
                var endDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */](endTime);
                endMarker.bindPopup('<b> Lieu de fin: </b>' + path.endPathGeocoding + '<br><b>Temps de fin du trajet : </b>' + endDatePipe.transform(endTime, 'dd/MM/yyyy HH:mm:ss') +
                    '<br><b> Durée du trajet : </b>' + path.pathDurationStr + "<br><b> Durée d'arrêt : </b>" + path.nextStopDurationStr + "<br><b> Vitesse maximum : </b>" +
                    path.maxSpeed + " Km/h <br><b> Kilometrage parcouru : </b>" + path.distanceDriven.toFixed(2) + ' Km');
                endMarker.setIcon(new Icon({
                    iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "endMarker.png",
                    iconAnchor: [-2, 30],
                    popupAnchor: [10, -25]
                }));
                _this.mapService.addMarker(endMarker);
            }
            _this.mapService.addPolyline(polyline);
            var middle = points.coordinates[Math.round((points.coordinates.length - 1) / 2)];
            _this.mapService.map.setView(middle, 12);
        });
        this.modalopen = true;
    };
    // trajet en courant temps reel
    Historical.prototype.displayCurrentPath = function (deviceId) {
        var _this = this;
        this.realTimeService.getCurrentPath(deviceId).subscribe(function (currentPath) {
            if (currentPath != null) {
                var polyline = L.polyline(currentPath.coordinates, {
                    color: '#0031D9',
                    weight: 3
                });
                currentPath.coordinates.forEach(function (coordinate, i) {
                    var marker = new Marker(coordinate);
                    if (i != 0 && i != currentPath.coordinates.length - 1) {
                        marker.setIcon(new Icon({
                            iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                            iconAnchor: [2, 2]
                        }));
                        _this.mapService.addMarker(marker);
                    }
                });
                var startMarker = L.marker({
                    lat: currentPath.beginPathLatitude,
                    lng: currentPath.beginPathLongitude
                });
                startMarker.setIcon(new Icon({
                    iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "startMarker.png",
                    iconAnchor: [-2, 30],
                    popupAnchor: [10, -25]
                }));
                startMarker.on('click', function () {
                    _this.mapService.map.setView({
                        lat: currentPath.beginPathLatitude,
                        lng: currentPath.beginPathLongitude
                    }, 14);
                });
                _this.mapService.addMarker(startMarker);
                _this.mapService.addPolyline(polyline);
                _this.pathDrawn = true;
            }
            _this.previousPathdrawn = true;
        }, function (err) {
            _this.previousPathdrawn = false;
        });
        this.DeviceId = deviceId;
    };
    //
    Historical.prototype.processGeocoding = function (geocoding) {
        if (geocoding != null) {
            var array = geocoding.split(',', 3);
            var smallerGeocoding_1 = '';
            array.forEach(function (word) {
                smallerGeocoding_1 = smallerGeocoding_1 + ', ' + word;
            });
            smallerGeocoding_1 = smallerGeocoding_1.slice(2, smallerGeocoding_1.length);
            return smallerGeocoding_1;
        }
        else
            return null;
    };
    //l'appel du chauffeur
    Historical.prototype.calldriver = function (number) {
        if (number) {
            this.callNumber.callNumber(number, true)
                .then(function () { return console.log('Launched dialer!'); })
                .catch(function () { return console.log('Error launching dialer'); });
        }
        else {
            var alert_5 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Numéro introuvable',
                buttons: ['Ok']
            });
            alert_5.present();
        }
    };
    //draw all point interests
    Historical.prototype.drawPointInterests = function () {
        var _this = this;
        this.mapService.removeMarkersPoiFromMap();
        this.mapService.removePolygonsPoiFromMap();
        this.mapService.removeCirclesFromMap();
        if (this.poisInMap) {
            this.poisInMap = false;
            return;
        }
        else {
            if (this.dataManagementService.pointInterests == null) {
                this.dataManagementService.getAllPointInterests().subscribe(function (pointInterests) {
                    _this.dataManagementService.pointInterests = pointInterests;
                    _this.pointInterests = pointInterests;
                    pointInterests.forEach(function (pointInterest) {
                        _this.drawPointInterest(pointInterest);
                    });
                });
            }
            else {
                this.dataManagementService.pointInterests.forEach(function (pointInterest) {
                    _this.drawPointInterest(pointInterest);
                });
            }
            this.poisInMap = true;
        }
    };
    //draw une seule point d'interet
    Historical.prototype.drawPointInterest = function (pointInterest) {
        var _this = this;
        var popup = "<b>Nom : </b> " + pointInterest.name + "<b>Adresse</b>" + pointInterest.address + "";
        var marker = null;
        if (pointInterest.type == "POLYGON") {
            var polygon = new Polygon(pointInterest.decode);
            this.mapService.addPolygonPoi(polygon);
        }
        marker = L.marker(pointInterest.coordinate);
        marker.setIcon(new Icon({
            iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["c" /* imagesPOIDir */] + pointInterest.imageUri,
            iconAnchor: [-2, 10],
            popupAnchor: [10, -25]
        }));
        this.mapService.addMarkerPoi(marker);
        marker.on("click", function () {
            _this.mapService.map.setView(pointInterest.coordinate, 17);
        });
        marker.bindPopup('<b> Lieu de fin: </b>' + pointInterest.name + '<br><b>Temps de fin du trajet : </b>');
    };
    // historique des trajet + historique des stops + historique de kilometrage
    Historical.prototype.openFormModal = function () {
        var _this = this;
        if (this.selectedDevice) {
            this.pathpoirealtime = false;
            this.pathDrawn = false;
            this.previousPathdrawn = false;
            this.clearPolylines();
            var formModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__historical_form_historical_form__["a" /* HistoricalForm */]);
            formModal.present();
            formModal.onDidDismiss(function (form) {
                //historique des trajets
                if (form.endDate != "" && form.startDate != "" && form.list == "trajet") {
                    var firstDateTime = new Date(form.startDate);
                    var lastDateTime = new Date(form.endDate);
                    _this.loader = _this.loadingCtrl.create({
                        content: "Veuillez attendre..."
                    });
                    _this.loader.present();
                    if (form.startDate == null && form.endDate == null) {
                        _this.loader.dismiss();
                        var alert_6 = _this.alertCtrl.create({
                            title: 'Error',
                            subTitle: 'Informations erronées',
                            buttons: ['Ok']
                        });
                        alert_6.present();
                    }
                    _this.allPaths = _this.historicalService.getAllPaths(_this.selectedDevice, {
                        startDate: firstDateTime,
                        endDate: new Date(lastDateTime.getTime() + 3600000)
                    }).subscribe(function (paths) {
                        if (paths.length) {
                            _this.paths = paths;
                            var lastLat_1 = paths[0].beginPathLatitude;
                            var lastlng_1 = paths[0].beginPathLongitude;
                            var i_1 = 0;
                            _this.paths.forEach(function (path) {
                                var startHour = path.beginPathTime;
                                var startTime = startHour + __WEBPACK_IMPORTED_MODULE_13__providers_global_config__["f" /* time_difference */];
                                path.displayBeginPathTime = startTime;
                                if (path.endPathTime != null) {
                                    var endHour = path.endPathTime;
                                    var endTime = endHour + __WEBPACK_IMPORTED_MODULE_13__providers_global_config__["f" /* time_difference */];
                                    path.displayEndPathTime = endTime;
                                }
                                path.beginPathGeocodingDetails = _this.dataManagementService.getRelativePosition(path.beginPathLatitude, path.beginPathLongitude);
                                path.beginPathGeocoding = path.beginPathGeocodingDetails;
                                if (path.beginPathGeocodingDetails == null) {
                                    _this.geocodingService.inverseGeoconding(path.beginPathLatitude, path.beginPathLongitude, 17).subscribe(function (adress) {
                                        path.beginPathGeocodingDetails = adress.display_name;
                                        if (adress.address.road != null && adress.address.neighbsourhood != null && adress.address.city != null) {
                                            path.beginPathGeocoding = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                                            path.beginPathGeocodingDetails = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                                        }
                                        else {
                                            var truncatedDisplayName = adress.display_name;
                                            var countCommas = 0;
                                            for (var i = 0, len = adress.display_name.length; i < len; i++) {
                                                if (adress.display_name[i] == ',') {
                                                    countCommas = countCommas + 1;
                                                }
                                                else if (countCommas >= 5) {
                                                    truncatedDisplayName = adress.display_name.substring(0, i - 1);
                                                    path.beginPathGeocoding = truncatedDisplayName;
                                                    path.beginPathGeocodingDetails = path.beginPathGeocoding;
                                                    break;
                                                }
                                            }
                                        }
                                    }, function (err) {
                                        path.beginPathGeocodingDetails = null;
                                        path.beginPathGeocoding = null;
                                    });
                                }
                                path.endPathGeocodingDetails = _this.dataManagementService.getRelativePosition(path.endPathLatitude, path.endPathLongitude);
                                path.endPathGeocoding = path.endPathGeocodingDetails;
                                if (path.endPathGeocodingDetails == null) {
                                    _this.geocodingService.inverseGeoconding(path.endPathLatitude, path.endPathLongitude, 17).subscribe(function (adress) {
                                        path.endPathGeocodingDetails = adress.display_name;
                                        if (adress.address.road != null && adress.address.neighbsourhood != null && adress.address.city != null) {
                                            path.endPathGeocoding = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                                            path.endPathGeocodingDetails = path.endPathGeocoding;
                                        }
                                        else {
                                            var truncatedDisplayName = adress.display_name;
                                            var countCommas = 0;
                                            for (var i = 0, len = adress.display_name.length; i < len; i++) {
                                                if (adress.display_name[i] == ',') {
                                                    countCommas = countCommas + 1;
                                                }
                                                else if (countCommas >= 5) {
                                                    truncatedDisplayName = adress.display_name.substring(0, i - 1);
                                                    path.endPathGeocoding = truncatedDisplayName;
                                                    path.endPathGeocodingDetails = path.endPathGeocoding;
                                                    break;
                                                }
                                            }
                                        }
                                    }, function (err) {
                                        path.endPathGeocodingDetails = null;
                                        path.endPathGeocoding = null;
                                    });
                                }
                                i_1++;
                                lastLat_1 = path.beginPathLatitude;
                                lastlng_1 = path.beginPathLongitude;
                            });
                        }
                        _this.loader.dismiss();
                        _this.openResultsModal();
                    }, function (err) { });
                }
                //historique des arret
                if (form.endDate != "" && form.startDate != "" && form.list == "arret") {
                    var firstDateTime = new Date(form.startDate);
                    var lastDateTime = new Date(form.endDate);
                    _this.loader = _this.loadingCtrl.create({
                        content: "Veuillez attendre..."
                    });
                    _this.loader.present();
                    if (form.startDate == null && form.endDate == null) {
                        _this.loader.dismiss();
                        var alert_7 = _this.alertCtrl.create({
                            title: 'Error',
                            subTitle: 'Informations erronées',
                            buttons: ['Ok']
                        });
                        alert_7.present();
                    }
                    _this.allPaths = _this.historicalService.getAllStops(_this.selectedDevice, {
                        startDate: firstDateTime,
                        endDate: new Date(lastDateTime.getTime() + 3600000)
                    }).subscribe(function (stops) {
                        if (stops && stops.length) {
                            _this.stops = stops;
                            _this.stops.forEach(function (stop) {
                                stop.geocodingDetails = _this.dataManagementService.getRelativePosition(stop.stopLatitude, stop.stopLongitude);
                                stop.geocoding = stop.geocodingDetails;
                                stop.beginStopTime = stop.beginStopTime + 2 * __WEBPACK_IMPORTED_MODULE_13__providers_global_config__["f" /* time_difference */];
                                if (stop.geocodingDetails == null) {
                                    _this.geocodingService.inverseGeoconding(stop.stopLatitude, stop.stopLongitude, 17).subscribe(function (adress) {
                                        stop.geocodingDetails = adress.display_name;
                                        if (adress.address.road != null && adress.address.neighbourhood != null && adress.address.city != null) {
                                            stop.geocoding = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                                            stop.geocodingDetails = adress.address.road + ' ' + adress.address.neighbourhood + '(' + adress.address.city + ')';
                                        }
                                        else {
                                            var truncatedDisplayName = adress.display_name;
                                            var countCommas = 0;
                                            for (var i = 0, len = adress.display_name.length; i < len; i++) {
                                                if (adress.display_name[i] == ',') {
                                                    countCommas = countCommas + 1;
                                                }
                                                else if (countCommas >= 5) {
                                                    truncatedDisplayName = adress.display_name.substring(0, i - 1);
                                                    stop.geocoding = truncatedDisplayName;
                                                    stop.geocodingDetails = stop.geocoding;
                                                    break;
                                                }
                                            }
                                        }
                                    }, function (err) {
                                        stop.geocodingDetails = null;
                                        stop.geocoding = null;
                                    });
                                }
                            });
                        }
                        _this.loader.dismiss();
                        _this.openStopsResultsModal();
                    }, function (err) { });
                }
                //historique kilometrage
                if (form.endDate != "" && form.startDate != "" && form.list == "kilo") {
                    var firstDateTime = new Date(form.startDate);
                    var startHour = new Date(form.startDate);
                    var lastDateTime = new Date(form.endDate);
                    _this.loader = _this.loadingCtrl.create({
                        content: "Veuillez attendre..."
                    });
                    _this.loader.present();
                    if (form.startDate == null && form.endDate == null) {
                        _this.loader.dismiss();
                        var alert_8 = _this.alertCtrl.create({
                            title: 'Error',
                            subTitle: 'Informations erronées',
                            buttons: ['Ok']
                        });
                        alert_8.present();
                    }
                    _this.AllPaths = _this.historicalService.getAllMileages(_this.selectedDevice, {
                        startDate: startHour - (24 * 60 * 60 * 1000),
                        endDate: new Date(lastDateTime.getTime() + 3600000)
                    }).subscribe(function (mileages) {
                        _this.mileages = mileages;
                        _this.mileages.forEach(function (mileage) {
                            var startHour = mileage.startHour;
                            mileage.startHour = startHour + (60 * 60 * 1000);
                        });
                        _this.totalMileage = _this.mileages[_this.mileages.length - 1];
                        _this.mileages.splice(_this.mileages.length - 1);
                        _this.loader.dismiss();
                        _this.openMileageResultModal();
                    }, function (err) { });
                }
            });
        }
        else {
            var alert_9 = this.alertCtrl.create({
                title: 'Historique',
                subTitle: 'Veuillez choisir un véhicule ',
                buttons: ['Ok']
            });
            alert_9.present();
        }
    };
    //draw arret
    Historical.prototype.drawStop = function (stop) {
        var _this = this;
        if (this.stopClicked == null || this.stopClicked.beginStopTime != stop.beginStopTime) {
            this.stopClicked = new __WEBPACK_IMPORTED_MODULE_19__objects_real_time__["c" /* Stop */]();
            this.stopClicked.beginStopTime = stop.beginStopTime;
            this.stopClicked.endStopTime = stop.endStopTime;
        }
        this.mapService.removeMarkersFromMap();
        var marker = L.marker({
            lat: stop.stopLatitude,
            lng: stop.stopLongitude
        });
        var date = new Date(stop.beginStopTime);
        var beginStopTime = stop.beginStopTime;
        var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */](beginStopTime);
        var popup = "<b>Date debut d'arrêt: </b>" + pointDatePipe.transform(stop.beginStopTime, 'dd/MM/yyyy HH:mm:ss') + "<br><b>Durée d'arrêt: </b>" + stop.stopDurationStr + "<br><hr><b>" + stop.geocodingDetails + "</b>";
        marker.setIcon(new Icon({
            iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "endMarker.png",
            iconAnchor: [-2, 30],
            popupAnchor: [10, -25]
        }));
        marker.bindPopup(popup);
        marker.on('click', function () {
            _this.mapService.map.setView({
                lat: stop.stopLatitude,
                lng: stop.stopLongitude
            }, 17);
        });
        marker.on('add', function () {
            marker.openPopup();
        });
        this.mapService.addMarker(marker);
        this.mapService.map.setView({
            lat: stop.stopLatitude,
            lng: stop.stopLongitude
        }, 15);
    };
    // open modal "historique de kilometrage" result
    Historical.prototype.openMileageResultModal = function () {
        var _this = this;
        this.mapService.removePolylinesFromMap();
        this.mapService.removeMarkersFromMap();
        var mileageListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_24__mileage_mileage__["a" /* MileageComponent */], {
            mileages: this.mileages,
            totalMileage: this.totalMileage
        });
        if (this.mileages == null) {
            var alert_10 = this.alertCtrl.create({
                title: 'Historique',
                subTitle: 'Aucune informations',
                buttons: ['Ok']
            });
            alert_10.present();
        }
        else {
            mileageListModal.present();
            mileageListModal.onDidDismiss(function (mileageClicked) {
                if (mileageClicked == null) {
                    _this.openFormModal();
                }
                else if (mileageClicked == 1) {
                }
                else
                    _this.drawMileage(mileageClicked);
            });
        }
        this.resultopened = false;
        this.openStopResult = false;
        this.openMileageResult = true;
    };
    // draw Kilometrage
    Historical.prototype.drawMileage = function (mileage) {
        var _this = this;
        if (this.mileageClicked == null || this.mileageClicked.startHour != mileage.startHour) {
            this.mileageClicked = new __WEBPACK_IMPORTED_MODULE_2__objects_real_time__["a" /* Mileage */]();
            this.mileageClicked.startHour = mileage.startHour;
            this.mileageClicked.endHour = mileage.endHour;
        }
        var startHour = mileage.startHour - (2 * 60 * 60 * 1000);
        this.historicalService.getMileageDetails(this.selectedDevice, {
            startDate: startHour,
            endDate: mileage.endHour
        }).subscribe(function (mileage) {
            var points = mileage.points;
            var stops = mileage.stops;
            var polyline = L.polyline(points, {
                color: '#0031D9',
                weight: 3
            });
            points.forEach(function (coordinate, i) {
                var marker = L.marker(coordinate);
                if (i != 0 && i != points.length - 1) {
                    marker.setIcon(new Icon({
                        iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                        iconAnchor: [2, 2]
                    }));
                    var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */](coordinate.date);
                    var popup = '<b>Heure:</b> ' + pointDatePipe.transform(coordinate.date, 'dd/MM/yyyy HH:mm:ss') + '<b><br>vitesse:</b> ' + coordinate.speed + ' Km/h';
                    marker.bindPopup(popup);
                    marker.on('click', function () {
                        _this.mapService.map.setView(coordinate, 17);
                    });
                    _this.mapService.addMarker(marker);
                }
            });
            stops.forEach(function (stop, i) {
                var marker = L.marker({
                    lat: stop.stopLatitude,
                    lng: stop.stopLongitude
                });
                var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */](stop.beginStopTime);
                var popup = "<b>Date debut d'arrêt: </b>" + pointDatePipe.transform(stop.beginStopTime, 'dd/MM/yyyy HH:mm:ss') + "<br><b>Durée d'arrêt: </b>" + stop.stopDurationStr;
                marker.setIcon(new Icon({
                    iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["b" /* imagesDir */] + "stop_smal.png",
                    iconAnchor: [-2, 30],
                    popupAnchor: [10, -25]
                }));
                marker.bindPopup(popup);
                marker.on('click', function () {
                    _this.mapService.map.setView({
                        lat: stop.stopLatitude,
                        lng: stop.stopLongitude
                    }, 17);
                });
                _this.mapService.addMarker(marker);
            });
            _this.mapService.addPolyline(polyline);
            var middle = points[Math.round((points.length - 1) / 2)];
            //map center offset(axis y)
            // this.mapService.offsetMap(middle, 12, 0, -120);
        });
    };
    // open resultat des arrets
    Historical.prototype.openStopsResultsModal = function () {
        var _this = this;
        this.mapService.removePolylinesFromMap();
        this.mapService.removeMarkersFromMap();
        var stopListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__stop_list_stop_list__["a" /* StopList */], {
            stops: this.stops
        });
        if (this.stops == null) {
            var alert_11 = this.alertCtrl.create({
                title: 'Historique',
                subTitle: 'Aucune informations',
                buttons: ['Ok']
            });
            alert_11.present();
        }
        else {
            stopListModal.present();
            stopListModal.onDidDismiss(function (stopClicked) {
                if (stopClicked == null) {
                    _this.openFormModal();
                }
                else if (stopClicked == 1) {
                }
                else
                    _this.drawStop(stopClicked);
            });
        }
        this.resultopened = false;
        this.openStopResult = true;
    };
    Historical.prototype.isValidPoint = function (point) {
        if (point && point.lng !== 0 && point.lng !== 0)
            return true;
        else
            return false;
    };
    Historical.prototype.logout = function () {
        localStorage.removeItem('currentuser');
        this._app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_17__home_home__["a" /* HomePage */]);
    };
    return Historical;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["_13" /* ViewChild */])('mycontent'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */])
], Historical.prototype, "nav", void 0);
Historical = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-historical',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\historical\historical.html"*/'<!-- margin-top:20px; -->\n\n<ion-header style=" height:48px;margin-top:20px;"><!--margin-top:20px;-->\n\n  <ion-fab top left outline class="ion-fab1" #fab style="margin-top:-7px;">\n\n    <button ion-fab mini outline style="margin-top:0px;margin-left: -5px !important;background-color:rgba(0,0,0,0.6);align-items:center;align-content: center;"\n\n      *ngIf="Root==true" (click)="openmenu()">\n\n      <i class="fa fa-list" aria-hidden="true"></i>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab top left outline class="ion-fab1" #fab style="margin-top:-7px;margin-left: -5px !important;">\n\n    <button ion-fab mini outline style="margin-right: -5px !important;background-color:rgba(0,0,0,0.6);align-items:center;align-content: center;"\n\n      *ngIf="Root==false" (click)="logout()">\n\n      <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab right *ngIf="resultopened==true" style="margin-top:-5px;padding-right:30px">\n\n    <button ion-fab mini (click)="openResultsModal()">\n\n      <ion-icon ios="ios-redo" md="md-redo"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab right *ngIf="openStopResult==true" style="margin-top:-5px;padding-right:30px">\n\n    <button ion-fab mini (click)="openStopsResultsModal()">\n\n      <ion-icon ios="ios-redo" md="md-redo"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab right *ngIf="openMileageResult==true" style="margin-top:-5px;padding-right:30px;">\n\n    <button ion-fab mini (click)="openMileageResultModal()">\n\n      <ion-icon ios="ios-redo" md="md-redo"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <!-- <ion-fab top right class="ion-fab2" style="margin-top:-7px">\n\n    <button ion-fab mini round outline strong  style="margin-top:0px;margin-right:60px;background-color:rgba(0,0,0,0.6)" (click)="openGroupsModal()"><ion-icon name="arrow-up"></ion-icon></button>\n\n  </ion-fab> -->\n\n  <ion-fab top right style="margin-top:-7px;">\n\n    <button ion-fab mini round outline strong (click)="calldriver(driverphone)" color="primary" style="margin-top:0px;margin-right: -5px !important;background-color:rgb(70, 238, 14)">\n\n      <ion-icon name="call"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <!-- <ion-fab top left outline class="ion-fab1" #fab style="margin-top:-7px;margin-left:50px;">\n\n    <button ion-fab mini outline style="margin-top:0px;background-color:rgba(0,0,0,0.6);align-content: center;align-items:center;" ><i class="fa fa-history" aria-hidden="true"></i></button>\n\n    <ion-fab-list side="bottom"  >\n\n      <button ion-button round outline strong (click)="openFormModal(fab)" color="light"style="background-color:rgba(0,0,0,0.4);width:80%"><ion-icon name="list"></ion-icon> Historique </button>\n\n      <button ion-button round outline strong (click)="AlertLancementMoteur(selectedDevice)" color="secondary" style="width:80%;background-color:rgba(70, 238, 14, 0.4);color:#FFF" >Lancement</button>\n\n      <button ion-button round outline strong (click)="AlertArretMoteur(selectedDevice)" color="danger" style="width:80%;background-color:rgba(242, 11, 11, 0.4);color:#FFF" >Arrêt (Moteur)</button>\n\n    </ion-fab-list>\n\n  </ion-fab> -->\n\n  <ion-title>\n\n    <button ion-button round style="background-color:rgba(0,0,0,0.2);color:white;font-size:5vw;width:8 0%;height:100%;" (click)="openmodalrealtime()">{{matricule}}</button>\n\n  </ion-title>\n\n\n\n</ion-header>\n\n\n\n<ion-content [ngStyle]="{ \'margin-top\': marginTop} ">\n\n  <ion-grid style="padding-top:20px;width:33%;margin-left:0px;">\n\n    <ion-row>\n\n      <button ion-button round outline strong (click)="openFormModal()" color="light" style="background-color:rgba(0,0,0,0.4);width:90%;height:30px;font-size: 4vw;">\n\n        Historique </button>\n\n    </ion-row>\n\n    <!-- <ion-row>\n\n      <button ion-button round outline strong (click)="openFormModalParc()" color="light" style="background-color:rgba(0,0,0,0.4);width:90%;height:30px;font-size: 4vw;">\n\n        G. Parc </button>\n\n    </ion-row> -->\n\n    <ion-row>\n\n      <button ion-button round outline strong (click)="AlertLancementMoteur(selectedDevice)" color="secondary" style="width:90%;background-color:rgba(70, 238, 14, 0.4);color:#FFF;height:30px;font-size: 4vw;">Lancement</button>\n\n    </ion-row>\n\n    <button ion-button round outline strong (click)="AlertArretMoteur(selectedDevice)" color="danger" style="width:90%;background-color:rgba(242, 11, 11, 0.4);color:#FFF;height:30px;font-size: 4vw;">Arrêt </button>\n\n  </ion-grid>\n\n  <!-- Right Side button+result button -->\n\n  <ion-fab bottom left *ngIf="pathDrawn == true">\n\n    <button ion-fab mini (click)="clearPolylines()" color="danger">\n\n      <ion-icon name="close"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab bottom left *ngIf="pathDrawn == false && previousPathdrawn==true && DeviceId!==null">\n\n    <button ion-fab mini (click)="displayCurrentPath(DeviceId)" [ngStyle]="{\'background-color\': \'rgb(70, 238, 14)\'}">\n\n      <ion-icon name="arrow-forward"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <!-- <ion-fab bottom left *ngIf="resultopened==true">\n\n    <button ion-fab mini (click)="openResultsModal()">\n\n      <ion-icon name="search" ></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab bottom left *ngIf="openStopResult==true">\n\n    <button ion-fab mini (click)="openStopsResultsModal()">\n\n      <ion-icon name="search" ></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab bottom left *ngIf="openMileageResult==true">\n\n    <button ion-fab mini (click)="openMileageResultModal()">\n\n      <ion-icon name="search" ></ion-icon>\n\n    </button>\n\n  </ion-fab> -->\n\n  <div class="leaflet-top leaflet-right" style="margin-top:85px; margin-right:2px;">\n\n    <div class="pois-toggle " (click)="drawPointInterests()">\n\n      <div class=" leaflet-bar leaflet-control">\n\n        <button title="Afficher/Cacher Poi" style="outline: none;height:30px;width:30px;background-color:white;  border-radius: 5px;">\n\n          <ion-icon ios="ios-eye-off" md="md-eye-off"></ion-icon>\n\n        </button>\n\n      </div>\n\n    </div>\n\n    <div class="pois-toggle " (click)="openPoiModal()">\n\n      <div class=" leaflet-bar leaflet-control">\n\n        <button title="Afficher/Cacher Poi" style="outline: none;height:30px;width:30px;background-color:white;    border-radius: 5px;">\n\n          <ion-icon ios="ios-pin" md="md-pin"></ion-icon>\n\n        </button>\n\n      </div>\n\n    </div>\n\n    <div class="pois-toggle " (click)="drawpath()">\n\n      <div class=" leaflet-bar leaflet-control">\n\n        <button title="Afficher/Cacher Poi" style="outline: none;height:30px;width:30px;background-color:white;    border-radius: 5px;">\n\n          <ion-icon ios="ios-car" md="md-car"></ion-icon>\n\n        </button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <!-- Leaflet Map -->\n\n  <div id="historicalMap" class="leaflet-pseudo-fullscreen leaflet-fullscreen-on" style="height: 94%!important; top: 6.5% !important;"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\historical\historical.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DecimalPipe */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_16__providers_real_time_service__["a" /* RealTimeService */], __WEBPACK_IMPORTED_MODULE_14__utils_geocoding_service__["a" /* GeocodingService */], __WEBPACK_IMPORTED_MODULE_10__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_9__providers_historical_service__["a" /* HistoricalService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__utils_map_service__["a" /* MapService */]])
], Historical);

//# sourceMappingURL=historical.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__historical_historical__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_real_time_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_historical_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_management_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(storage, historicalService, app, loadingCtrl, realTimeService, dataManagementService, navCtrl, signinService, toastController) {
        this.storage = storage;
        this.historicalService = historicalService;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.realTimeService = realTimeService;
        this.dataManagementService = dataManagementService;
        this.navCtrl = navCtrl;
        this.signinService = signinService;
        this.toastController = toastController;
        this.buttonColor = '#c42e36';
        this.login = null;
        this.mdp = null;
        this.newRealTimeRecords = null;
        this.oldRealTimeRecords = null;
        this.searchWord = '';
        this.loginTest = null;
        this.mdpTest = null;
        //recuperation current user
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
        if (this.currentuser) {
            this.login = this.currentuser.username;
            this.mdp = this.currentuser.password;
            this.Signing();
        }
    }
    //Signing method
    HomePage.prototype.Signing = function () {
        var _this = this;
        this.buttonColor = '#345465';
        this.signinService.login({ "username": this.login, "password": this.mdp }).subscribe(function (currentUser) {
            currentUser.password = _this.mdp;
            _this.realTimeService.currentuser = currentUser;
            _this.historicalService.currentuser = currentUser;
            _this.dataManagementService.currentuser = currentUser;
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            _this.goToRt();
        }, function () {
            var toast = _this.toastController.create({
                message: 'Authentification Echouée!',
                duration: 2000
            });
            _this.buttonColor = '#c42e36';
            toast.present();
        });
    };
    //GO to Historical
    HomePage.prototype.goToRt = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__historical_historical__["a" /* Historical */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar >\n\n    <ion-title > <a>Bienvenue</a></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-login">\n\n \n\n  <ion-card class="login-card">\n\n    <ion-card-content>\n\n      <ion-list no-line>\n\n       <ion-item>\n\n          <ion-input type="text" [(ngModel)]="login" name="login" placeholder="Identifiant"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n         \n\n          <ion-input type="password" [(ngModel)]="mdp" name="mdp" placeholder="Mot de passe"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <button  margin-top ion-button margin-right block (click)=Signing() [ngStyle]="{\'background-color\': buttonColor}">\n\n      Connexion\n\n      </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n       <ion-title> <img src="assets/img/logorim.jpg" height="60" /></ion-title>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_historical_service__["a" /* HistoricalService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_real_time_service__["a" /* RealTimeService */], __WEBPACK_IMPORTED_MODULE_6__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_login__["a" /* SigningService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return imagesDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return imagescar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return nominatim_dns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return time_difference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return imagesPOIDir; });
//export var dns: string = "http://79.137.75.178:8080/ws_rimtrack_all_dev/";
//export var dns: string = "http://localhost:8080/rimtrack-all-v2/";
var dns = "http://37.187.171.84/ws_rimtrack_all/";
//export var dns: string = "http://79.137.75.178:8080/ws_rimtrack_all/";
var imagesDir = "http://37.187.171.84/images/";
var imagescar = "assets/icons/";
var nominatim_dns = "http://37.187.171.84/nominatim";
var time_difference = -3600000;
var imagesPOIDir = "poi/";
//# sourceMappingURL=global.config.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupService = (function () {
    function GroupService(_http) {
        this._http = _http;
        this.toastyAdd = false;
        this.toastyUpdate = false;
        this.groups = [];
        this.vehiculeLabels = [];
        this.bigCurrentPage = 1;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
    }
    GroupService.prototype.getGroupsByPageAndSize = function (page, size) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/list' + '?page=' + page + '&size=' + size, { headers: headers }).map(function (res) { return res.json(); });
    };
    GroupService.prototype.getVehiculesMatricules = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/minify', { headers: headers }).map(function (res) { return res.json(); });
    };
    GroupService.prototype.getVehiculesGroup = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/vehicules/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    GroupService.prototype.addGroup = function (groupDto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(groupDto);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/', groupDto, options).map(function (res) { return res.json(); });
    };
    GroupService.prototype.deleteGroupById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    GroupService.prototype.putGroupDTO = function (groupDto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(groupDto);
        return this._http.put(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/', groupDto, options).map(function (res) { return res.json(); });
    };
    GroupService.prototype.getGroup = function (idGroupe) {
        return this.groups.find(function (group) { return group.idGroupe === idGroupe; });
    };
    GroupService.prototype.getOne = function (idGroup) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/' + idGroup, { headers: headers }).map(function (res) { return res.json(); });
    };
    return GroupService;
}());
GroupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], GroupService);

//# sourceMappingURL=group.service.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiculeForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_index__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vehicule_service__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehiculeForm = (function () {
    function VehiculeForm(navParams, vehiculeService, viewCtrl, toastCtrl) {
        this.navParams = navParams;
        this.vehiculeService = vehiculeService;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.idDevice = 0;
        this.idDriver = 0;
        this.groupsofVehicule = null;
        this.devicesToSelect = [];
        this.email1 = "";
        this.email2 = "";
        this.email3 = "";
        this.email4 = "";
        this.email5 = "";
        this.vehiculeInfo = null;
        this.groupLabels = [];
        this.groupsToSelect = [];
        this.value = {};
        this.showGroup = false;
        this.idGroups = [];
        this.showDriver = false;
        this.idtest = [];
        this.groupName = null;
        this.driverLabels = [];
        this.driverName = null;
        this.deviceLabels = [];
        this.request = false;
        this.driversToSelect = [];
        this.adding = false;
        this.updating = false;
        this.detaills = false;
        this.affecting = false;
        this.mode = 0;
        this.vehicule = navParams.get('vehicule');
    }
    VehiculeForm.prototype.ngOnInit = function () {
        var _this = this;
        this.groupLabels = this.vehiculeService.groupLabels;
        this.driverLabels = this.vehiculeService.driverLabels;
        if (this.deviceLabels.length == 0) {
            this.request = true;
            this.vehiculeService.getDevicesLabel().subscribe(function (response) {
                _this.deviceLabels = response;
                _this.vehiculeService.deviceLabels = response;
                _this.customInfoToSelectDevice();
            });
            this.vehiculeService.getGroupsLabel().subscribe(function (response) {
                _this.groupLabels = response;
                _this.vehiculeService.groupLabels = response;
                _this.customInfoToSelectGroup(_this.groupLabels, _this.groupsToSelect, true);
            });
            this.vehiculeService.getDriversLabel().subscribe(function (response) {
                _this.driverLabels = response;
                _this.vehiculeService.driverLabels = response;
                _this.customInfoToSelectDriver();
            });
        }
        this.vehicule.emails = "";
        var params = this.vehicule.idVehicule;
        this.mode = +params;
        if (!this.request) {
            this.customInfoToSelectGroup(this.groupLabels, this.groupsToSelect, true);
            this.customInfoToSelectDriver();
            this.customInfoToSelectDevice();
            this.showAffecting();
            this.manipulationData(this.mode);
        }
        else {
            this.showDetaills();
            this.manipulationData(-this.mode);
        }
    };
    VehiculeForm.prototype.selectGroup = function () {
        for (var i = 0; i < this.groupLabels.length; i++) {
            for (var j = 0; j < this.idtest.length; j++) {
                if (this.idtest[j] == this.groupsToSelect[i].text) {
                    this.idGroups[j] = this.groupsToSelect[i].id;
                }
            }
        }
    };
    VehiculeForm.prototype.refreshValueGroups = function (value) {
        this.value = value;
        this.selectedItems = value;
    };
    VehiculeForm.prototype.selectedGroup = function (value) {
        if (value.id == -1) {
            this.showGroup = true;
            this.showDriver = false;
        }
        else {
            this.idGroups.push(value.id);
        }
    };
    VehiculeForm.prototype.removedGroup = function (value) {
        this.idGroups = this.idGroups.filter(function (id) { return id !== value.id; });
    };
    VehiculeForm.prototype.customInfoToSelectGroup = function (list, listPush, addOption) {
        for (var i = 0; i < list.length; i++) {
            var group = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](list[i].nom, list[i].idGroupe);
            listPush.push(group);
        }
        if (addOption) {
            var group = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */]("Autres", -1);
            this.groupsToSelect.push(group);
        }
    };
    VehiculeForm.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    VehiculeForm.prototype.customInfoToSelectDevice = function () {
        for (var i = 0; i < this.deviceLabels.length; i++) {
            var device = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](this.deviceLabels[i].idDevice.toString(), this.deviceLabels[i].idDevice);
            this.devicesToSelect.push(device);
        }
    };
    VehiculeForm.prototype.customInfoToSelectDriver = function () {
        for (var i = 0; i < this.driverLabels.length; i++) {
            var driver_1 = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](this.driverLabels[i].firstName, this.driverLabels[i].idDriver);
            this.driversToSelect.push(driver_1);
        }
        var driver = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */]("Autres", -1);
        this.driversToSelect.push(driver);
    };
    VehiculeForm.prototype.showAdd = function () {
        this.adding = true;
        this.updating = false;
        this.detaills = false;
        this.affecting = false;
    };
    VehiculeForm.prototype.showUpdate = function () {
        this.adding = false;
        this.updating = true;
        this.detaills = false;
        this.affecting = false;
    };
    VehiculeForm.prototype.showDetaills = function () {
        this.adding = false;
        this.updating = false;
        this.detaills = true;
        this.affecting = false;
    };
    VehiculeForm.prototype.showAffecting = function () {
        this.adding = false;
        this.updating = false;
        this.detaills = false;
        this.affecting = true;
    };
    VehiculeForm.prototype.manipulationData = function (id) {
        var _this = this;
        this.vehiculeInfo = this.vehicule;
        if (this.vehiculeInfo == null)
            this.vehiculeService.getOne(id)
                .subscribe(function (response) {
                _this.vehiculeInfo = response;
                _this.config(_this.vehicule, _this.vehiculeInfo);
                _this.deviceNumber = _this.vehiculeInfo.device.deviceNumber;
                console.log(_this.deviceNumber);
                _this.formatEmails(_this.vehiculeInfo);
                if (_this.vehiculeInfo.idDriver > 0)
                    _this.driver = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](_this.vehiculeInfo.lastName, _this.vehiculeInfo.idDriver);
                _this.device = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](_this.vehiculeInfo.device.deviceNumber.toString(), _this.vehiculeInfo.device.idDevice);
                _this.idDevice = response.device.idDevice;
                _this.idDriver = response.idDriver;
            });
        this.vehiculeService.getGroupsVehicule(id)
            .subscribe(function (response) {
            _this.groupsofVehicule = [];
            _this.customInfoToSelectGroup(response, _this.groupsofVehicule, false);
            for (var i = 0; i < response.length; i++) {
                if (response[i].idGroupe != 1) {
                    _this.idGroups.push(response[i].idGroupe);
                }
            }
        });
        if (this.vehiculeInfo != null) {
            this.formatEmails(this.vehiculeInfo);
            if (this.vehiculeInfo.idDriver > 0)
                this.driver = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](this.vehiculeInfo.lastName, this.vehiculeInfo.idDriver);
            this.device = new __WEBPACK_IMPORTED_MODULE_2__objects_index__["a" /* CustomSelectInfo */](this.vehiculeInfo.device.deviceNumber.toString(), this.vehiculeInfo.device.idDevice);
            this.config(this.vehicule, this.vehiculeInfo);
        }
    };
    VehiculeForm.prototype.config = function (vehicule, vehiculeInfo) {
        this.idDevice = vehiculeInfo.device.idDevice;
        this.idDriver = vehiculeInfo.idDriver;
        vehicule.idVehicule = vehiculeInfo.idVehicule;
        vehicule.matricule = vehiculeInfo.matricule;
        vehicule.mark = vehiculeInfo.mark;
        vehicule.alias = vehiculeInfo.alias;
        vehicule.maxSpeed = vehiculeInfo.maxSpeed;
        this.deviceNumber = vehiculeInfo.device.deviceNumber;
    };
    VehiculeForm.prototype.formatEmails = function (vehiculeInfo) {
        var emails = vehiculeInfo.emails;
        if (emails.length > 0)
            this.email1 = emails.slice(0, emails.indexOf(";"));
        emails = emails.substr(emails.indexOf(";") + 1);
        if (emails.length > 0)
            this.email2 = emails.slice(0, emails.indexOf(";"));
        emails = emails.substr(emails.indexOf(";") + 1);
        if (emails.length > 0)
            this.email3 = emails.slice(0, emails.indexOf(";"));
        emails = emails.substr(emails.indexOf(";") + 1);
        if (emails.length > 0)
            this.email4 = emails.slice(0, emails.indexOf(";"));
        emails = emails.substr(emails.indexOf(";") + 1);
        if (emails.length > 0)
            this.email5 = emails.slice(0, emails.indexOf(";") + 1);
    };
    VehiculeForm.prototype.update = function () {
        var _this = this;
        this.selectGroup();
        if (this.deviceNumber == null)
            this.deviceNumber = 0;
        if (this.vehicule.maxSpeed >= 0 || this.vehicule.maxSpeed == null) {
            if (this.idDevice != 0) {
                this.vehiculeService.update(this.vehicule, this.idGroups.toString(), this.idDriver, this.deviceNumber).subscribe(function (response) {
                    _this.vehiculeService.toastyUpdate = true;
                    var toast = _this.toastCtrl.create({
                        message: '' + _this.vehicule.matricule + ' est modifié avec succés',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                    _this.viewCtrl.dismiss(null);
                }, function () {
                    var toast = _this.toastCtrl.create({
                        message: 'Opération échouée',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                });
            }
            else {
                var toast = this.toastCtrl.create({
                    message: ' Veuillez selectionnée un boitier',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Vitesse max doit-etre supérieure  à 0',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    VehiculeForm.prototype.ionViewWillLeave = function () {
    };
    return VehiculeForm;
}());
VehiculeForm = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'app-vehicule-form',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\vehicules\vehicule-form\vehicule-form.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <ion-title style="text-align: center"><a style="color:white"> Modifier Véhicule</a> </ion-title>\n\n          <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" >\n\n            <ion-icon name="arrow-down"></ion-icon>\n\n          </button>\n\n          </ion-buttons>\n\n        </ion-navbar>\n\n </ion-header>\n\n <ion-content padding text-center style="background-color: rgba(194, 190, 190, 0.446) ;">\n\n        <ion-list style="margin-top:40px;" >\n\n                <ion-item  style=" background-color:rgba(0,0,0,0.2)!important;" >\n\n                  <ion-input disabled="true" [(ngModel)]="vehicule.device.idDevice"></ion-input>\n\n                </ion-item>\n\n                <ion-item style=" background-color:rgba(0,0,0,0.2)!important;width:100%!important">\n\n                 \n\n                    <ion-label>Groupes</ion-label> \n\n                <ion-select  *ngIf="groupsToSelect.length >0" [(ngModel)]="idtest"  [multiple]="true" (selected)="selectedGroup($event)" (removed)="removedGroup($event)" style="width:100%!important"> \n\n                    <ion-label>Groupes</ion-label> \n\n                  <ion-option  *ngFor="let groupToSelect of groupsToSelect">{{groupToSelect.text}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n                    <ion-label>Matricule</ion-label>  \n\n                    <ion-input  placeholder="Matricule" [(ngModel)]="vehicule.matricule" ></ion-input>\n\n                </ion-item>\n\n                <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n                    <ion-label>Surnom</ion-label>  \n\n                  <ion-input  placeholder="Surnom" [(ngModel)]="vehicule.alias" ></ion-input>\n\n              </ion-item>\n\n              <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n                  <ion-label>Marque</ion-label>  \n\n                <ion-input  placeholder="Marque" [(ngModel)]="vehicule.mark" ></ion-input>\n\n            </ion-item>\n\n            <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n                <ion-label>Vitesse Max</ion-label>  \n\n              <ion-input type="number" placeholder="Vitesse Max" [(ngModel)]="vehicule.maxSpeed" ></ion-input>\n\n          </ion-item>\n\n          <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n              <ion-label>N° SIM</ion-label>  \n\n            <ion-input type="number" placeholder="N° SIM" [(ngModel)]="deviceNumber" ></ion-input>\n\n        </ion-item>\n\n        \n\n       </ion-list>\n\n     \n\n          <button ion-button center round (click)="update()">Modifier</button>\n\n          <button ion-button center round (click)="closeModal()">Annuler</button>\n\n     \n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\vehicules\vehicule-form\vehicule-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_vehicule_service__["a" /* VehiculeService */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ToastController */]])
], VehiculeForm);

//# sourceMappingURL=vehicule-form.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestPoi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_management_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poi_poi__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GestPoi = (function () {
    function GestPoi(navCtrl, alertCtrl, toastCtrl, menu, dataManagementService, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.dataManagementService = dataManagementService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.MARKER = "MARKER";
        this.POLYGON = "POLYGON";
        this.pointInterests = null;
        this.imagesDir = __WEBPACK_IMPORTED_MODULE_0__providers_global_config__["b" /* imagesDir */];
        this.imagesPOIDir = __WEBPACK_IMPORTED_MODULE_0__providers_global_config__["c" /* imagesPOIDir */];
    }
    GestPoi.prototype.openmenu = function () {
        this.menu.open();
    };
    GestPoi.prototype.ngOnInit = function () {
        this.loadPoi();
    };
    GestPoi.prototype.loadPoi = function () {
        var _this = this;
        this.dataManagementService.getAllPointInterests().subscribe(function (pointInterests) {
            _this.dataManagementService.pointInterests = pointInterests;
            _this.pointInterests = pointInterests;
        });
    };
    GestPoi.prototype.delete = function (point) {
        var _this = this;
        //slidingItem.close();
        var alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Voulez vous vraiment supprimer :' + point.name + '?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.deletepoi(point);
                    }
                }
            ]
        });
        alert.present();
    };
    GestPoi.prototype.deletepoi = function (point) {
        var _this = this;
        this.dataManagementService.deletePointInterest(point.idPointInterest).subscribe(function (suprimed) {
            if (suprimed) {
                if (point.type == "MARKER") {
                    _this.pointInterests.splice(_this.pointInterests.indexOf(point), 1);
                }
                if (point.type == "POLYGON") {
                    _this.pointInterests.splice(_this.pointInterests.indexOf(point), 1);
                }
                var toast = _this.toastCtrl.create({
                    message: '' + point.name + ' est supprimé avec succés',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
            }
        }, function () { });
    };
    GestPoi.prototype.edit = function (point) {
        var pointInterest = point;
        var PoiModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__poi_poi__["a" /* Poi */], {
            pointInterest: pointInterest
        });
        PoiModal.present();
    };
    return GestPoi;
}());
GestPoi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-gest-poi',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\gestpoi\gestpoi.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-title><span style="color:white">Points d\'intérêt</span></ion-title>\n\n  </ion-navbar>\n\n  <ion-fab top left outline class="ion-fab1" #fab >\n\n    <button ion-fab mini outline style="margin-left: -5px !important;margin-top:0px;background-color:rgba(0,0,0,0.6);"\n\n      (click)="openmenu()">\n\n      <i class="fa fa-list" aria-hidden="true"></i>\n\n    </button>\n\n  </ion-fab>\n\n</ion-header>\n\n<ion-content style="padding-top:10px;">\n\n  <ion-list-header>Points</ion-list-header>\n\n  <ion-list *ngFor="let pointInterest of pointInterests">\n\n    <ion-item-sliding #item *ngIf="pointInterest.type==MARKER">\n\n\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="{{imagesDir}}{{pointInterest.imageUri}}" style="width:25px;height:25px;">\n\n        </ion-avatar>\n\n\n\n        <h2>{{pointInterest.name}} </h2>\n\n        <!-- <button ion-button float-right clear color="danger" (click)="delete(pointInterest)" style="width:20px;">\n\n          <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n        </button> -->\n\n\n\n\n\n        <p>{{pointInterest.coordinate.lat}} ; {{pointInterest.coordinate.lng}}</p>\n\n        <p style="font-size:15px">{{pointInterest.address}}</p>\n\n\n\n      </ion-item>\n\n      <ion-item-options side="right" >\n\n        <button ion-button style="width:60px;background-color:#488aff" (click)="edit(pointInterest)">\n\n          <ion-icon ios="ios-settings-outline" md="md-settings"></ion-icon>\n\n        </button>\n\n        <button ion-button style="width:60px;" color="danger" (click)="delete(pointInterest)">\n\n          <ion-icon ios="ios-trash-outline" md="md-trash"></ion-icon>\n\n        </button>\n\n\n\n      </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list-header>Zones</ion-list-header>\n\n  <ion-list *ngFor="let pointInterest of pointInterests">\n\n    <ion-item-sliding *ngIf="pointInterest.type==POLYGON">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="{{imagesDir+imagesPOIDir+pointInterest.imageUri}}" style="width:25px;height:25px;">\n\n        </ion-avatar>\n\n\n\n        <h2>{{pointInterest.name}} </h2>\n\n\n\n        <p>{{pointInterest.coordinate.lat}} ; {{pointInterest.coordinate.lng}}</p>\n\n        <p style="font-size:15px">{{pointInterest.address}}</p>\n\n\n\n      </ion-item>\n\n      <ion-item-options side="right" >\n\n          <button ion-button style="width:60px;background-color:#488aff" (click)="edit(pointInterest)">\n\n            <ion-icon ios="ios-settings-outline" md="md-settings"></ion-icon>\n\n          </button>\n\n          <button ion-button style="width:60px;" color="danger" (click)="delete(pointInterest)">\n\n            <ion-icon ios="ios-trash-outline" md="md-trash"></ion-icon>\n\n          </button>\n\n        </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\gestpoi\gestpoi.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], GestPoi);

//# sourceMappingURL=gestpoi.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_map_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_data_management__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poi_poi__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StopList = (function () {
    function StopList(navCtrl, datamanagementService, mapService, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.datamanagementService = datamanagementService;
        this.mapService = mapService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.StopArray = [];
        this.stops = navParams.get('stops');
    }
    //Dessiner stop
    StopList.prototype.drawStop = function (stop) {
        this.viewCtrl.dismiss(stop);
    };
    //fermer modal
    StopList.prototype.closeModal = function () {
        this.viewCtrl.dismiss(1);
    };
    StopList.prototype.returnModal = function () {
        this.viewCtrl.dismiss(null);
    };
    //ouvrir modal poi 
    StopList.prototype.openPoiModal = function (stop) {
        var _this = this;
        this.viewCtrl.dismiss(null);
        var pointInterest = new __WEBPACK_IMPORTED_MODULE_2__objects_data_management__["a" /* PointInterest */]();
        pointInterest.address = stop.geocodingDetails;
        pointInterest.coordinate.lat = stop.stopLatitude;
        pointInterest.coordinate.lng = stop.stopLongitude;
        var PoiModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__poi_poi__["a" /* Poi */], { pointInterest: pointInterest });
        PoiModal.present();
        PoiModal.onDidDismiss(function (form) {
            if (pointInterest.type == "MARKER") {
                var circle = L.circle(pointInterest.coordinate, {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.1,
                    radius: pointInterest.ray
                });
                _this.mapService.addCircle(circle);
                _this.mapService.map.setView({ lat: stop.stopLatitude, lng: stop.stopLongitude }, 15);
                setTimeout(function () {
                    _this.mapService.removeCirclesFromMap();
                }, 3000);
            }
            _this.drawStop(stop);
        });
    };
    return StopList;
}());
StopList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-stop-list',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\stop-list\stop-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title><span style="color:white">Liste des arrêts</span></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="closeModal()">\n\n  <ion-icon name="arrow-down" style="color:white"></ion-icon>\n\n</button>\n\n  </ion-buttons>\n\n  <ion-buttons start>\n\n    <button ion-button icon-only (click)="returnModal()">\n\n      <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n\n</button>\n\n</ion-buttons>\n\n    \n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding style="background-color: rgba(255, 255, 255, 0.69) !important;">\n\n  <div style="overflow: auto ; height: auto;">\n\n    <table class="table table-striped" style="font-size: 15px;font-weight: bold" width="100%">\n\n      <thead>\n\n        <tr style="background-color: #F5F5F5;opacity: 0.65">\n\n          <th width="25%" style="text-align: center">\n\n            <i class="fa fa-clock-o" aria-hidden="true"></i> Date Arrêt\n\n          </th>\n\n          <th width="45%" style="text-align: center">Lieu Arrêt</th>\n\n          <th width="30%" style="text-align: center">Durée Arrêt</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody style="background-color: #FFFAFA;opacity: 0.5;font: bolder;">\n\n\n\n\n\n\n\n        <tr *ngFor="let stop of stops" style="border-top: solid black 1px;">\n\n\n\n          <td width="15%" data-toggle="tooltip" (click)="drawStop(stop)" title="{{stop.beginStopTime | date:\'dd-MM-y HH:mm\'}}">\n\n            {{stop.beginStopTime | date:\'dd-MM HH:mm\'}}\n\n          </td>\n\n          <td width="55%" data-toggle="tooltip" (click)="drawStop(stop)" title="{{stop.geocodingDetails}}">\n\n            {{stop.geocoding }}\n\n          </td>\n\n          <td width="30%" data-toggle="tooltip" (click)="drawStop(stop)" title="{{stop.stopDurationStr}}">\n\n            {{stop.stopDurationStr}}\n\n          </td>\n\n\n\n          <td colspan="3" style="text-align: center">\n\n\n\n            <button type="button" (click)="openPoiModal(stop)" style="width:50px;height:50px; background-color:rgba(0,0,0,0)">\n\n              <i class="fa fa-map-marker" aria-hidden="true" style="width:50px;height:50px;"></i>\n\n            </button>\n\n\n\n          </td>\n\n\n\n        </tr>\n\n\n\n\n\n\n\n\n\n      </tbody>\n\n    </table>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\stop-list\stop-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_0__utils_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ModalController */]])
], StopList);

//# sourceMappingURL=stop-list.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historical_service__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoricalForm = (function () {
    function HistoricalForm(historicalService, viewCtrl, navCtrl, navParams, loadingCtrl) {
        this.historicalService = historicalService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.startDate1 = new Date();
        this.endDate1 = new Date();
        this.list = "trajet";
        this.startDate1.setTime(this.startDate1.getTime() - 3 * 86400000);
        this.startDate = this.startDate1.toISOString();
        this.endDate = this.endDate1.toISOString();
    }
    HistoricalForm.prototype.getAllPaths = function () {
        this.viewCtrl.dismiss({ startDate: this.startDate, endDate: this.endDate, list: this.list });
    };
    HistoricalForm.prototype.closeModal = function () {
        this.viewCtrl.dismiss({ startDate: "", endDate: "", list: "" });
    };
    return HistoricalForm;
}());
HistoricalForm = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historical-form',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\historical-form\historical-form.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title style="width:100%">\n\n      <a>Historique</a>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="closeModal()">\n\n        <ion-icon name="arrow-down" style="color:white"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-center style="background-color: rgba(255, 255, 255, 0.85) !important;">\n\n  <ion-item style="background-color:rgba(0,0,0,0.3);margin-top:200px;">\n\n    <ion-label style="color:white">Historique:\n\n      <ion-icon ios="ios-arrow-down" md="md-arrow-down"></ion-icon>\n\n    </ion-label>\n\n    <ion-select select-ios-padding-end [(ngModel)]="list" interface="popover" style="width:100%;color:white">\n\n      <ion-option value="trajet">Liste des trajets</ion-option>\n\n      <ion-option value="arret">Liste des arrêts</ion-option>\n\n      <ion-option value="kilo">Liste de Kilométrage</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item style="margin-top: 70px;background-color:rgba(0,0,0,0.3)">\n\n    <ion-label style="color:white">Date début</ion-label>\n\n    <ion-datetime name="startDate" displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="startDate" style="color:white"></ion-datetime>\n\n  </ion-item>\n\n\n\n  <ion-item style="margin-bottom: 20px;background-color:rgba(0,0,0,0.3)">\n\n    <ion-label style="color:white">Date fin</ion-label>\n\n    <ion-datetime name="endDate" displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="endDate" style="color:white"> </ion-datetime>\n\n  </ion-item>\n\n  <!--<ion-item>\n\n    <ion-label>Date de début</ion-label>\n\n    <ion-datetime displayFormat="YYYY/MM/DD" [(ngModel)]="firstDate"></ion-datetime>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Date de fin</ion-label>\n\n    <ion-datetime displayFormat="YYYY/MM/DD" [(ngModel)]="lastDate"></ion-datetime>\n\n  </ion-item>-->\n\n\n\n  <button ion-button center round (click)="getAllPaths()">Chercher\n\n    <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n  </button>\n\n  <button ion-button center round (click)="closeModal()">Annuler\n\n    <!--<ion-icon style="margin-left: 5px" name="close"></ion-icon>-->\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\historical-form\historical-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_historical_service__["a" /* HistoricalService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], HistoricalForm);

//# sourceMappingURL=historical-form.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PathsList = (function () {
    function PathsList(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.paths = navParams.get('paths');
    }
    PathsList.prototype.drawPath = function (path) {
        this.viewCtrl.dismiss(path);
    };
    PathsList.prototype.closeModal = function () {
        this.viewCtrl.dismiss(1);
    };
    PathsList.prototype.returnModal = function () {
        this.viewCtrl.dismiss(null);
    };
    return PathsList;
}());
PathsList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-paths-list',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\paths-list\paths-list.html"*/'<!--\n  Generated template for the PathsList page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><span style="color:white">Liste des trajets</span></ion-title>\n    <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()">\n        <ion-icon name="arrow-down" style="color:white"></ion-icon>\n      </button>\n        </ion-buttons>\n        <ion-buttons start>\n          <button ion-button icon-only (click)="returnModal()">\n            <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n    </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: rgba(255, 255, 255, 0.69) !important;">\n  <div style = "overflow: auto ; height: auto;">\n  <table style="font-size: 15px;" >\n    <thead>\n      <tr style="background-color: #F5F5F5;opacity: 0.65">\n        <th  style="text-align: center;width:1px;"><i class="fa fa-clock-o" aria-hidden="true"></i> Date Départ\n        </th>\n        <th  style="text-align: center;padding-left: 15px;padding-right: 15px;">Lieu Départ</th>\n        <th  style="text-align: center;padding-left: 15px;padding-right: 15px"><i class="fa fa-clock-o" aria-hidden="true"></i> Date Arrivée\n        </th>\n        <th style="text-align: center;padding-left: 15px;padding-right: 15px">Lieu Arrivée</th>\n        <th style="text-align: center; padding-right: 15px;padding-left: 15px">KM</th>\n        <th style="text-align: center; padding-right: 15px; padding-left: 15px">V Max</th>\n        <th style="text-align: center;padding-right: 15px; padding-left: 15px">Durée Trajet</th>\n        <th style="text-align: center;padding-right: 15px; padding-left: 15px">Durée Arrêt</th>\n      </tr>\n    </thead>\n    <tbody style="background-color: #FFFAFA;opacity: 0.5;font: bolder;">\n      <tr *ngFor="let path of paths" (click)="drawPath(path)" style="border-top: solid black 1px;">\n        <td style="text-align: center" data-toggle="tooltip" title="{{path.beginPathTime}};">\n            {{path.displayBeginPathTime | date:\'dd-MM HH:mm\'}}\n        </td>\n        <td style="text-align: center;padding-left: 10px;padding-right: 10px" data-toggle="tooltip" title="{{path.beginPathGeocodingDetails}}">\n          {{path.beginPathGeocoding }}\n        </td>\n        <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.endPathTime}}">\n          {{path.displayEndPathTime  | date:\'dd-MM HH:mm\'}}\n        </td>\n        <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.endPathGeocodingDetails}}">\n          {{path.endPathGeocoding}}\n        </td>\n        <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.distanceDriven">{{path.distanceDriven | number:\'1.2-2\'}}\n        </td>\n        <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.maxSpeed}}">\n          {{path.maxSpeed}}\n        </td>\n        <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.pathDurationStr}}">\n          {{path.pathDurationStr}}\n        </td>\n        <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.nextStopDurationStr}}">\n          {{path.nextStopDurationStr}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\paths-list\paths-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], PathsList);

//# sourceMappingURL=paths-list.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contentHeaders; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createAuthorizationHeader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(17);

var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
function createAuthorizationHeader(headers) {
    headers.append('Authorization', localStorage.getItem('id_token'));
}
//# sourceMappingURL=headers.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigningService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_headers__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigningService = (function () {
    function SigningService(http) {
        this.http = http;
    }
    SigningService.prototype.login = function (credentials) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'signin', credentials, { headers: __WEBPACK_IMPORTED_MODULE_4__utils_headers__["a" /* contentHeaders */] }).map(function (res) { return res.json(); });
    };
    SigningService.prototype.logout = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_headers__["b" /* createAuthorizationHeader */])(headers);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'signout', {}, { headers: headers }).map(function (res) { return res.json(); });
    };
    return SigningService;
}());
SigningService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], SigningService);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_geocoding_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_real_time_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__group_realtime_group_realtime__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var GroupsPage = (function () {
    function GroupsPage(alertCtrl, modalCtrl, navCtrl, geocodingService, pipe, dataManagementService, navParams, viewCtrl, realTimeService) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.geocodingService = geocodingService;
        this.pipe = pipe;
        this.dataManagementService = dataManagementService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.realTimeService = realTimeService;
        this.imageUri = "../../assets/icons/c1x0.png";
        this.searchWord = '';
        this.newRealTimeRecords = null;
        this.oldRealTimeRecords = null;
        this.angles = new Map();
        this.realTimeRecordsItemSource = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    GroupsPage.prototype.ngOnInit = function () {
        var _this = this;
        // if(!this.groups)
        //  this.loadGroups();
        this.realTimeService.getGroupMini().subscribe(function (x) {
            _this.groups = x;
        });
        //  this.realTimeService.findVehiculesByGroupsId(15,1,0).subscribe(x=>{
        //    console.log(x);
        //  })
    };
    // ngAfterViewInit() {
    //   // this.content.ionScroll.subscribe(($event: any) => {
    //   //   let dimensions = this.content.getContentDimensions();
    //   //   let scrollHeight = dimensions.scrollHeight;
    //   //   let scrollTop = dimensions.scrollTop;
    //   //   let contentHeight = dimensions.contentHeight;
    //   //   let heightAndScrollTop = contentHeight + scrollTop;
    //   //   if((scrollHeight - heightAndScrollTop) <= 0 && (scrollHeight - heightAndScrollTop) >= 0) { 
    //   //     this.realTimeService.findVehiculesByGroupsId(15,1,0).subscribe(x=>{
    //   //       console.log(x);
    //   //     })
    //   //   }
    //   // });
    // }
    // goToRealTimeRecord(deviceId: Vehicule,isvalid:boolean){
    //   if(isvalid){
    //   let data={vehicule: deviceId ,groups:this.groups}
    //   this.viewCtrl.dismiss(data);
    //   }
    // }
    // loadGroups() {
    //   this.allGroups = this.realTimeService.getAllGroups(this.searchWord).subscribe(groupes => {
    //     this.groups = groupes;
    //     this.groups.forEach(group => {
    //       group.vehicules.forEach(vehicule => {
    //         vehicule.realTimeRecord=new RealTimeRecord();
    //         this.realTimeService.getRealTimeRecord(vehicule.idDevice).subscribe(x=>{
    //           vehicule.realTimeRecord = x;
    //           vehicule.realTimeRecord.vehicule=new RealTimeRecord();
    //           vehicule.realTimeRecord.vehicule=vehicule;
    //           this.trackRealTimeRecord(vehicule.realTimeRecord);
    //         },(err) => {
    //         });
    //       })
    //     });
    //   });
    //   //this.getAllRealTimeRecords();
    // }
    // getAllRealTimeRecords() {
    //   this.allRealTimeRecords = this.realTimeService.getAllRealTimeRecords().subscribe(realTimeRecords => {
    //     this.realTimeRecordsItemSource.next(realTimeRecords);
    //     if (this.newRealTimeRecords) {
    //       this.oldRealTimeRecords = this.newRealTimeRecords;
    //     }
    //     this.newRealTimeRecords = realTimeRecords;
    //     realTimeRecords.forEach(realTimeRecord => {
    //       console.log(realTimeRecord)
    //       realTimeRecord.vehicule = this.getVehicule(realTimeRecord.idRealTimeRecord);
    //        this.trackRealTimeRecord(realTimeRecord);
    //       });
    //     });
    //   }
    // getVehicule(idDevice: number): Vehicule {
    //   let foundVehicule = new Vehicule();
    //   for (let i = 0; i < this.groups.length; i++) {
    //     for (let j = 0; j < this.groups[i].vehicules.length; j++) {
    //       if (this.groups[i].vehicules[j].idDevice == idDevice) {
    //         foundVehicule = this.groups[i].vehicules[j];
    //         break;
    //       }
    //     }
    //   }
    //   return foundVehicule;
    // }
    //   trackRealTimeRecord(realTimeRecord: RealTimeRecord) {
    //     let angle = 0;
    //     var date = new Date(realTimeRecord.recordTime);
    //     realTimeRecord.recordTime=new Date(new Date(realTimeRecord.recordTime).setHours(new Date(realTimeRecord.recordTime).getHours()-1));
    //     var minutes = date.getMinutes() + "";
    //     if (minutes.length == 1) {
    //       minutes = "0" + date.getMinutes();
    //     }
    //     let icon;
    //     let marker;
    //     let popup;
    //     if (!this.dataManagementService.pointInterests) {
    //       this.dataManagementService.getAllPointInterests().subscribe(pointInterests => {
    //         this.dataManagementService.pointInterests = pointInterests;
    //         realTimeRecord.relativePosition = this.dataManagementService.getRelativePosition(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng);
    //       })
    //     }
    //     else {
    //       realTimeRecord.relativePosition = this.dataManagementService.getRelativePosition(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng);
    //     }
    //     if (realTimeRecord.type === "AA") {
    //       angle = realTimeRecord.rotationAngle * 8;
    //     }
    //     if (this.oldRealTimeRecords && realTimeRecord.type === "GPRMC") {
    //       let oldRealTimeRecord = this.getOldRealTimeRecord(realTimeRecord.idRealTimeRecord);
    //       if (oldRealTimeRecord) {
    //         if (!this.compareTwoCoordinate(oldRealTimeRecord.coordinate, realTimeRecord.coordinate)) {
    //           angle = Math.atan2(realTimeRecord.coordinate.lng - oldRealTimeRecord.coordinate.lng, realTimeRecord.coordinate.lat - oldRealTimeRecord.coordinate.lat) * 180 / Math.PI;
    //           this.angles.set(realTimeRecord.idRealTimeRecord, angle);
    //         } else {
    //           angle = this.angles.get(realTimeRecord.idRealTimeRecord);
    //         }
    //       }
    //     }
    //    /* popup = '<b>Chauffeur:</b> ' + this.dataManagementService.getDriverName(realTimeRecord.vehicule.driver) +
    //     '<br><b>Matricule:</b> ' + realTimeRecord.vehicule.matricule +
    //     '<br><b>Mark:</b> ' + realTimeRecord.vehicule.mark +
    //     '<br><b>Lat,Lng:</b><i> [' + this.PipeLngLat(realTimeRecord.coordinate.lat) + ',' + this.PipeLngLat(realTimeRecord.coordinate.lng) + ']</i><br><b>Vitesse :</b>' + realTimeRecord.speed +
    //     "<br><b>date et l'heure:</b> " + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + minutes +
    //     "<br><b>Signal GSM:</b> " + realTimeRecord.signal +
    //     " <i class='fa fa-wifi' aria-hidden='true'></i><br><b>Sat en vue:</b> " + realTimeRecord.satInView + " <i class='fa fa-globe' aria-hidden='true'></i>";
    // */
    //     marker = new Marker(realTimeRecord.coordinate, {
    //       rotationAngle: angle
    //     });
    //   //this.imageUri:string = "/images/c1x0.png";
    //     if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition== true) {
    //       icon = new Icon({
    //         iconUrl: imagescar + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
    //         iconAnchor: [-2, 30],
    //         popupAnchor: [10, -10]
    //       });
    //       this.imageUri = imagescar+ "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
    //     }
    //     if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed > 0 ) {
    //       icon = new Icon({
    //         iconUrl: imagescar + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
    //         iconAnchor: [-2, 30],
    //         popupAnchor: [10, -25]
    //       });
    //       this.imageUri = imagescar + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
    //     }
    //     if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition== false) {
    //       icon = new Icon({
    //         iconUrl: imagescar + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
    //         iconAnchor: [-2, 30],
    //         popupAnchor: [10, -25]
    //       });
    //       this.imageUri = imagescar + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
    //     }
    //     if (realTimeRecord.realTimeRecordStatus == 'NON_VALID' || realTimeRecord.realTimeRecordStatus == 'TECHNICAL_ISSUE') {
    //       icon = new Icon({
    //         iconUrl: imagescar + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
    //         iconAnchor: [-2, 30],
    //         popupAnchor: [10, -25]
    //       });
    //       this.imageUri = imagescar + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
    //     }
    //     realTimeRecord.icon = this.imageUri;
    //     this.geocodingService.inverseGeoconding(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng, 18).subscribe(adress => {
    //       realTimeRecord.geocoding = this.getGeocoding(adress.address);
    //       realTimeRecord.geocodingDetails = adress.display_name;
    //       this.updateSpecificGroups(realTimeRecord);
    //     },(err) => {
    //     });
    //   }
    //   getOldRealTimeRecord(id: number): RealTimeRecord {
    //     let result = this.oldRealTimeRecords.filter(rt => {
    //       return rt.idRealTimeRecord == id;
    //     });
    //     if (result) return result[0];
    //     else return null;
    //   }
    //   compareTwoCoordinate(p1, p2) {
    //     if (p1.lat == p2.lat && p1.lng == p2.lng) return true;
    //     else false;
    //   }
    //   PipeLngLat(value: any) {
    //     return this.pipe.transform(value, '2.2-6');
    //   }
    //   getGeocoding(address: any): string {
    //     let geocoding: string = null;
    //     if (address) {
    //       if (address.road != null) {
    //         geocoding = address.road;
    //       }
    //       if (address.neighbourhood != null) {
    //         geocoding = geocoding ? geocoding + ' ' + address.neighbourhood : address.neighbourhood;
    //       }
    //       if (address.city != null) {
    //         geocoding = geocoding ? geocoding + ' (' + address.city + ')' : address.city;
    //       }
    //       if (geocoding == null) {
    //         geocoding = 'chargement..';
    //       }
    //     }
    //     return geocoding;
    //   }
    //   updateSpecificGroups(realTimeRecord: RealTimeRecord) {
    //     if (this.groups)
    //       this.groups.forEach(group => {
    //         if (group)
    //           group.vehicules.forEach(vehicule => {
    //             if (vehicule.idDevice == realTimeRecord.idRealTimeRecord)
    //               vehicule.realTimeRecord = realTimeRecord;
    //           })
    //       })
    //   }
    //   //   isValidPoint(point: {lat: number,lng: number}) {
    //   //     if (point && point.lng !== 0 && point.lng !== 0)return true;
    //   //     else return false;
    //   // }
    GroupsPage.prototype.selectedGroup = function (group) {
        var _this = this;
        this.groupmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__group_realtime_group_realtime__["a" /* GroupeRealtime */], {
            group: group
        });
        this.groupmodal.present();
        this.groupmodal.onDidDismiss(function (data) {
            if (data) {
                _this.viewCtrl.dismiss(data);
            }
        });
    };
    GroupsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    return GroupsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Content */])
], GroupsPage.prototype, "content", void 0);
GroupsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-groups-page',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\groups-page\groups-page.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <a style="font-size: 4vw;" >Groupes et véhicules</a>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="closeModal()">\n\n        <ion-icon name="arrow-down" style="color:white"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content class="Content" style="background-color: rgba(255, 255, 255, 0.82) !important; padding: auto;">\n\n    <!--<ion-card *ngFor="let group of groups">\n\n        <ion-list  style="background-color:rgba(255.255.255.0.8)" >\n\n            <ion-row >\n\n                <ion-col col-12 col-md-12 col-sm-12 col-xs-12>{{group.nom}}</ion-col>\n\n                    \n\n                  \n\n            </ion-row>\n\n        </ion-list>\n\n    </ion-card-->\n\n\n\n\n\n\n\n        <ion-list >\n\n            <button ion-item  *ngFor="let group of groups" style="margin: 10px 5px 10px 5px; opacity:0.8" (click)="selectedGroup(group)">\n\n                    {{group.nom}}\n\n            </button>  \n\n            \n\n          </ion-list>\n\n\n\n\n\n  <!-- <div style="font-size: 15px;border-radius:0px; margin-top: 0%;">\n\n    <div style="width: 500%">\n\n      <table class="table" style="width: 20%">\n\n        <tbody>\n\n          <ng-template ngFor let-item [ngForOf]="groups">\n\n            <tr style="color: black">\n\n              <td style="font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: #B0C4DE;opacity: 0.75;">{{item.nom}}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>\n\n                <div style="overflow:auto">\n\n                  <table class="table" frame="hsides" rules="cols" style="width: 100%;">\n\n                    <thead frame="hsides" border="1">\n\n                    \n\n                    </thead>\n\n                    <tbody style="border :colspan; text-align: center;" frame="hsides" frame="hsides" rules="all">\n\n                      <ng-container *ngFor="let vehicule of item.vehicules">\n\n                        <tr [ngClass]="{\'activeRT\': selectedDevice == vehicule.idDevice}" style="border-bottom:1pt solid black;">\n\n                          <td width="10%" (click)="goToRealTimeRecord(vehicule,isValidPoint(vehicule.realTimeRecord.coordinate))">\n\n                          \n\n                            <img width="30 px" *ngIf="isValidPoint(vehicule.realTimeRecord.coordinate)" src="{{vehicule?.realTimeRecord?.icon}}">\n\n                            <ion-label *ngIf="!isValidPoint(vehicule.realTimeRecord.coordinate)" style="background-color:#f39c12;color:white;"> Aucune Info</ion-label>\n\n                          </td>\n\n                          <td width="30%" (click)="goToRealTimeRecord(vehicule,isValidPoint(vehicule.realTimeRecord.coordinate))">\n\n\n\n                            <div>\n\n                              <b>\n\n                                {{vehicule.matricule}}\n\n                                <br> {{vehicule?.driver?.firstName}} {{vehicule?.driver?.lastName}}\n\n                              </b>\n\n                            </div>\n\n                          </td>\n\n                          <td width="40%" (click)="goToRealTimeRecord(vehicule,isValidPoint(vehicule.realTimeRecord.coordinate))">\n\n                            <div *ngIf="isValidPoint(vehicule.realTimeRecord.coordinate)">\n\n                              <b>\n\n                                <div *ngIf="vehicule.realTimeRecord.relativePosition">\n\n                                  <b>\n\n                                    {{vehicule?.realTimeRecord?.relativePosition}}\n\n                                  </b>\n\n                                </div>\n\n                                <div *ngIf="!vehicule.realTimeRecord.relativePosition">\n\n                                  <b>\n\n                                    {{vehicule?.realTimeRecord.geocoding}}\n\n                                  </b>\n\n                                </div>\n\n                                <div>\n\n                                  <b>\n\n                                    {{vehicule?.realTimeRecord?.recordTime| date:\'d-M HH:mm\'}}\n\n                                  </b>\n\n                                </div>\n\n                                <div>\n\n                                  <b>\n\n                                    {{vehicule?.realTimeRecord?.speed}} KM/H\n\n                                  </b>\n\n                                </div>\n\n                              </b>\n\n                            </div>\n\n\n\n                         \n\n                            <div *ngIf="!isValidPoint(vehicule.realTimeRecord.coordinate)">\n\n                              <ion-label style="background-color:#f39c12;color:white;"> Aucune Info</ion-label>\n\n\n\n                            </div>\n\n\n\n\n\n\n\n\n\n                          </td>\n\n\n\n                        </tr>\n\n                      </ng-container>\n\n                    </tbody>\n\n                  </table>\n\n\n\n                </div>\n\n              </td>\n\n            </tr>\n\n          </ng-template>\n\n        </tbody>\n\n      </table>\n\n    </div>\n\n  </div> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\groups-page\groups-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__utils_geocoding_service__["a" /* GeocodingService */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DecimalPipe */], __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_real_time_service__["a" /* RealTimeService */]])
], GroupsPage);

//# sourceMappingURL=groups-page.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupeRealtime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_real_time_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_geocoding_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_management_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__objects_real_time__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_leaflet__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Marker = L.Marker;
var Icon = L.Icon;


var GroupeRealtime = (function () {
    function GroupeRealtime(plateform, navCtrl, pipe, geocodingService, navParams, viewCtrl, dataManagementService, realTimeService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.pipe = pipe;
        this.geocodingService = geocodingService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.dataManagementService = dataManagementService;
        this.realTimeService = realTimeService;
        this.page = 0;
        this.imageUri = "../../assets/icons/c1x0.png";
        this.newRealTimeRecords = null;
        this.oldRealTimeRecords = null;
        this.angles = new Map();
        this.status = true;
        this.size = 60;
        plateform.ready().then(function (data) {
            _this.size = Math.floor((plateform.height() - 48) / 48) + 5;
        });
    }
    GroupeRealtime.prototype.ngOnInit = function () {
        this.group = this.navParams.get('group');
    };
    GroupeRealtime.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    GroupeRealtime.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.realTimeService.findVehiculesByGroupsId(this.group.idGroupe, this.size, this.page).subscribe(function (x) {
            if (x.last) {
                _this.status = false;
            }
            _this.vehicules = x.content;
            _this.vehicules.forEach(function (vehicule) {
                vehicule.realTimeRecord = new __WEBPACK_IMPORTED_MODULE_7__objects_real_time__["b" /* RealTimeRecord */]();
                _this.realTimeService.getRealTimeRecord(vehicule.device.idDevice).subscribe(function (y) {
                    vehicule.realTimeRecord = y;
                    vehicule.realTimeRecord.vehicule = new __WEBPACK_IMPORTED_MODULE_7__objects_real_time__["b" /* RealTimeRecord */]();
                    vehicule.realTimeRecord.vehicule = vehicule;
                    _this.trackRealTimeRecord(vehicule.realTimeRecord);
                    _this.totalpage = x.totalPages;
                }, function (err) {
                });
            });
        });
        //this.content.addScrollPadding(1); //.subscribe(($event: any) => {});
        // this.content.ionScroll.subscribe(($event: any) => {
        //   this.status = true;
        //   let dimensions = this.content.getContentDimensions();
        //   let scrollHeight = dimensions.scrollHeight;
        //   let scrollTop = dimensions.scrollTop;
        //   let contentHeight = dimensions.contentHeight;
        //   let heightAndScrollTop = contentHeight + scrollTop;
        //   // console.log(scrollHeight +' '+ heightAndScrollTop+' '+heightAndScrollTop);
        //   if ((scrollHeight - heightAndScrollTop) <= 0 && (scrollHeight - heightAndScrollTop) >= 0 && this.totalpage>this.page) {
        //     this.page++;
        //     this.realTimeService.findVehiculesByGroupsId(this.group.idGroupe, this.size, this.page).subscribe(x => {
        //       if (x.content.length > 0) {
        //         if (x.content.length < this.size)
        //           this.status = false;
        //         this.vehiculeLoaded = x.content;
        //         this.vehiculeLoaded.forEach(vehicule => {
        //           vehicule.realTimeRecord = new RealTimeRecord();
        //           this.realTimeService.getRealTimeRecord(vehicule.device.idDevice).subscribe(y => {
        //             vehicule.realTimeRecord = y;
        //             vehicule.realTimeRecord.vehicule = new RealTimeRecord();
        //             vehicule.realTimeRecord.vehicule = vehicule;
        //             this.trackRealTimeRecord(vehicule.realTimeRecord);
        //           }, (err) => {
        //           });
        //         })
        //         this.vehiculeLoaded.forEach(vehicule => {
        //           this.vehicules.push(vehicule);
        //         });
        //         this.status = false;
        //       } else {
        //         this.status = false;
        //       }
        //     })
        //   }else{
        //     this.status=false;
        //   }
        // });
    };
    GroupeRealtime.prototype.charger = function () {
        var _this = this;
        if (this.totalpage > this.page) {
            this.page++;
            this.realTimeService.findVehiculesByGroupsId(this.group.idGroupe, this.size, this.page).subscribe(function (x) {
                if (x.last)
                    _this.status = false;
                _this.vehiculeLoaded = x.content;
                _this.vehiculeLoaded.forEach(function (vehicule) {
                    vehicule.realTimeRecord = new __WEBPACK_IMPORTED_MODULE_7__objects_real_time__["b" /* RealTimeRecord */]();
                    _this.realTimeService.getRealTimeRecord(vehicule.device.idDevice).subscribe(function (y) {
                        vehicule.realTimeRecord = y;
                        vehicule.realTimeRecord.vehicule = new __WEBPACK_IMPORTED_MODULE_7__objects_real_time__["b" /* RealTimeRecord */]();
                        vehicule.realTimeRecord.vehicule = vehicule;
                        _this.trackRealTimeRecord(vehicule.realTimeRecord);
                    }, function (err) {
                    });
                });
                _this.vehiculeLoaded.forEach(function (vehicule) {
                    _this.vehicules.push(vehicule);
                });
            });
        }
    };
    GroupeRealtime.prototype.isValidPoint = function (point) {
        if (point && point.lng !== 0 && point.lng !== 0)
            return true;
        else
            return false;
    };
    GroupeRealtime.prototype.goToRealTimeRecord = function (vehicule, isvalid) {
        if (isvalid) {
            var data = {
                vehicule: vehicule
            };
            this.viewCtrl.dismiss(data);
        }
    };
    // loadGroups() {
    //   this.allGroups = this.realTimeService.getAllGroups(this.searchWord).subscribe(groupes => {
    //     this.groups = groupes;
    //     this.groups.forEach(group => {
    //       group.vehicules.forEach(vehicule => {
    //         vehicule.realTimeRecord=new RealTimeRecord();
    //         this.realTimeService.getRealTimeRecord(vehicule.idDevice).subscribe(x=>{
    //           vehicule.realTimeRecord = x;
    //           vehicule.realTimeRecord.vehicule=new RealTimeRecord();
    //           vehicule.realTimeRecord.vehicule=vehicule;
    //           this.trackRealTimeRecord(vehicule.realTimeRecord);
    //         },(err) => {
    //         });
    //       })
    //     });
    //   });
    //   //this.getAllRealTimeRecords();
    // }
    // getAllRealTimeRecords() {
    //   this.allRealTimeRecords = this.realTimeService.getAllRealTimeRecords().subscribe(realTimeRecords => {
    //     this.realTimeRecordsItemSource.next(realTimeRecords);
    //     if (this.newRealTimeRecords) {
    //       this.oldRealTimeRecords = this.newRealTimeRecords;
    //     }
    //     this.newRealTimeRecords = realTimeRecords;
    //     realTimeRecords.forEach(realTimeRecord => {
    //       console.log(realTimeRecord)
    //       realTimeRecord.vehicule = this.getVehicule(realTimeRecord.idRealTimeRecord);
    //        this.trackRealTimeRecord(realTimeRecord);
    //       });
    //     });
    //   }
    // getVehicule(idDevice: number): Vehicule {
    //   let foundVehicule = new Vehicule();
    //   for (let i = 0; i < this.groups.length; i++) {
    //     for (let j = 0; j < this.groups[i].vehicules.length; j++) {
    //       if (this.groups[i].vehicules[j].idDevice == idDevice) {
    //         foundVehicule = this.groups[i].vehicules[j];
    //         break;
    //       }
    //     }
    //   }
    //   return foundVehicule;
    // }
    GroupeRealtime.prototype.trackRealTimeRecord = function (realTimeRecord) {
        var _this = this;
        var angle = 0;
        var date = new Date(realTimeRecord.recordTime);
        realTimeRecord.recordTime = new Date(new Date(realTimeRecord.recordTime).setHours(new Date(realTimeRecord.recordTime).getHours() - 1));
        var minutes = date.getMinutes() + "";
        if (minutes.length == 1) {
            minutes = "0" + date.getMinutes();
        }
        var icon;
        var marker;
        var popup;
        if (!this.dataManagementService.pointInterests) {
            this.dataManagementService.getAllPointInterests().subscribe(function (pointInterests) {
                _this.dataManagementService.pointInterests = pointInterests;
                realTimeRecord.relativePosition = _this.dataManagementService.getRelativePosition(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng);
            });
        }
        else {
            realTimeRecord.relativePosition = this.dataManagementService.getRelativePosition(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng);
        }
        if (realTimeRecord.type === "AA") {
            angle = realTimeRecord.rotationAngle * 8;
        }
        if (this.oldRealTimeRecords && realTimeRecord.type === "GPRMC") {
            var oldRealTimeRecord = this.getOldRealTimeRecord(realTimeRecord.idRealTimeRecord);
            if (oldRealTimeRecord) {
                if (!this.compareTwoCoordinate(oldRealTimeRecord.coordinate, realTimeRecord.coordinate)) {
                    angle = Math.atan2(realTimeRecord.coordinate.lng - oldRealTimeRecord.coordinate.lng, realTimeRecord.coordinate.lat - oldRealTimeRecord.coordinate.lat) * 180 / Math.PI;
                    this.angles.set(realTimeRecord.idRealTimeRecord, angle);
                }
                else {
                    angle = this.angles.get(realTimeRecord.idRealTimeRecord);
                }
            }
        }
        /* popup = '<b>Chauffeur:</b> ' + this.dataManagementService.getDriverName(realTimeRecord.vehicule.driver) +
              '<br><b>Matricule:</b> ' + realTimeRecord.vehicule.matricule +
              '<br><b>Mark:</b> ' + realTimeRecord.vehicule.mark +
              '<br><b>Lat,Lng:</b><i> [' + this.PipeLngLat(realTimeRecord.coordinate.lat) + ',' + this.PipeLngLat(realTimeRecord.coordinate.lng) + ']</i><br><b>Vitesse :</b>' + realTimeRecord.speed +
              "<br><b>date et l'heure:</b> " + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + minutes +
              "<br><b>Signal GSM:</b> " + realTimeRecord.signal +
              " <i class='fa fa-wifi' aria-hidden='true'></i><br><b>Sat en vue:</b> " + realTimeRecord.satInView + " <i class='fa fa-globe' aria-hidden='true'></i>";
             
          */
        marker = new Marker(realTimeRecord.coordinate, {
            rotationAngle: angle
        });
        //this.imageUri:string = "/images/c1x0.png";
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition == true) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_4__providers_global_config__["d" /* imagescar */] + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -10]
            });
            this.imageUri = __WEBPACK_IMPORTED_MODULE_4__providers_global_config__["d" /* imagescar */] + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed > 0) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_4__providers_global_config__["d" /* imagescar */] + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            this.imageUri = __WEBPACK_IMPORTED_MODULE_4__providers_global_config__["d" /* imagescar */] + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition == false) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_4__providers_global_config__["d" /* imagescar */] + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            this.imageUri = __WEBPACK_IMPORTED_MODULE_4__providers_global_config__["d" /* imagescar */] + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'NON_VALID' || realTimeRecord.realTimeRecordStatus == 'TECHNICAL_ISSUE') {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_4__providers_global_config__["d" /* imagescar */] + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            this.imageUri = __WEBPACK_IMPORTED_MODULE_4__providers_global_config__["d" /* imagescar */] + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        realTimeRecord.icon = this.imageUri;
        this.geocodingService.inverseGeoconding(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng, 18).subscribe(function (adress) {
            realTimeRecord.geocoding = _this.getGeocoding(adress.address);
            realTimeRecord.geocodingDetails = adress.display_name;
            _this.updateSpecificGroups(realTimeRecord);
        }, function (err) {
        });
    };
    GroupeRealtime.prototype.getOldRealTimeRecord = function (id) {
        var result = this.oldRealTimeRecords.filter(function (rt) {
            return rt.idRealTimeRecord == id;
        });
        if (result)
            return result[0];
        else
            return null;
    };
    GroupeRealtime.prototype.compareTwoCoordinate = function (p1, p2) {
        if (p1.lat == p2.lat && p1.lng == p2.lng)
            return true;
        else
            false;
    };
    GroupeRealtime.prototype.PipeLngLat = function (value) {
        return this.pipe.transform(value, '2.2-6');
    };
    GroupeRealtime.prototype.getGeocoding = function (address) {
        var geocoding = null;
        if (address) {
            if (address.road != null) {
                geocoding = address.road;
            }
            if (address.neighbourhood != null) {
                geocoding = geocoding ? geocoding + ' ' + address.neighbourhood : address.neighbourhood;
            }
            if (address.city != null) {
                geocoding = geocoding ? geocoding + ' (' + address.city + ')' : address.city;
            }
            if (geocoding == null) {
                geocoding = 'chargement..';
            }
        }
        return geocoding;
    };
    GroupeRealtime.prototype.updateSpecificGroups = function (realTimeRecord) {
        if (this.groups)
            this.groups.forEach(function (group) {
                if (group)
                    group.vehicules.forEach(function (vehicule) {
                        if (vehicule.idDevice == realTimeRecord.idRealTimeRecord)
                            vehicule.realTimeRecord = realTimeRecord;
                    });
            });
    };
    return GroupeRealtime;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* ViewChild */])('mainScreen'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
], GroupeRealtime.prototype, "elementView", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], GroupeRealtime.prototype, "content", void 0);
GroupeRealtime = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-group-realtime',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\groups-page\group-realtime\group-realtime.html"*/'<ion-header>\n\n\n\n        <ion-navbar>\n\n          <ion-title>\n\n            <a>{{group.nom}}</a>\n\n          </ion-title>\n\n          <ion-buttons end>\n\n              <button ion-button icon-only (click)="closeModal()">\n\n                <ion-icon name="arrow-down" style="color:white"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n        </ion-navbar>\n\n      \n\n      \n\n      </ion-header>\n\n    <ion-content style="opacity:0.82;">\n\n            <div style="font-size: 15px;border-radius:0px; margin-top: 0%;">\n\n                    <div style="width: 500%">\n\n                      <table class="table" style="width: 20%">\n\n                        <tbody>\n\n                         \n\n                            <tr>\n\n                              <td>\n\n                                <div style="overflow:auto">\n\n                                  <table class="table" frame="hsides" rules="cols" style="width: 100%;">\n\n                                   \n\n                                    <tbody style="border :colspan; text-align: center;" frame="hsides" frame="hsides" rules="all">\n\n                                      <ng-container *ngFor="let vehicule of vehicules">\n\n                                        <tr [ngClass]="{\'activeRT\': selectedDevice == vehicule.idDevice}" style="border-bottom:1pt solid black;">\n\n                                          <td width="10%" (click)="goToRealTimeRecord(vehicule,isValidPoint(vehicule.realTimeRecord.coordinate))">\n\n                                          \n\n                                            <img width="30 px" *ngIf="isValidPoint(vehicule.realTimeRecord.coordinate)" src="{{vehicule?.realTimeRecord?.icon}}">\n\n                                            <ion-label *ngIf="!isValidPoint(vehicule.realTimeRecord.coordinate)" style="background-color:#f39c12;color:white;"> Aucune Info</ion-label>\n\n                                          </td>\n\n                                          <td width="30%" (click)="goToRealTimeRecord(vehicule,isValidPoint(vehicule.realTimeRecord.coordinate))">\n\n                \n\n                                            <div>\n\n                                              <b>\n\n                                                {{vehicule.matricule}}\n\n                                                <br> {{vehicule?.driver?.firstName}} {{vehicule?.driver?.lastName}}\n\n                                              </b>\n\n                                            </div>\n\n                                          </td>\n\n                                          <td width="40%" (click)="goToRealTimeRecord(vehicule,isValidPoint(vehicule.realTimeRecord.coordinate))">\n\n                                            <div *ngIf="isValidPoint(vehicule.realTimeRecord.coordinate)">\n\n                                              <b>\n\n                                                <div *ngIf="vehicule.realTimeRecord.relativePosition">\n\n                                                  <b>\n\n                                                    {{vehicule?.realTimeRecord?.relativePosition}}\n\n                                                  </b>\n\n                                                </div>\n\n                                                <div *ngIf="!vehicule.realTimeRecord.relativePosition">\n\n                                                  <b>\n\n                                                    {{vehicule?.realTimeRecord.geocoding}}\n\n                                                  </b>\n\n                                                </div>\n\n                                                <div>\n\n                                                  <b>\n\n                                                    {{vehicule?.realTimeRecord?.recordTime| date:\'d-M HH:mm\'}}\n\n                                                  </b>\n\n                                                </div>\n\n                                                <div>\n\n                                                  <b>\n\n                                                    {{vehicule?.realTimeRecord?.speed}} KM/H\n\n                                                  </b>\n\n                                                </div>\n\n                                              </b>\n\n                                            </div>\n\n                \n\n                                         \n\n                                            <div *ngIf="!isValidPoint(vehicule.realTimeRecord.coordinate)">\n\n                                              <ion-label style="background-color:#f39c12;color:white;"> Aucune Info</ion-label>\n\n                \n\n                                            </div>\n\n                \n\n                \n\n                \n\n                \n\n                                          </td>\n\n                \n\n                                        </tr>\n\n                                      </ng-container>\n\n                                    </tbody>\n\n                                  </table>\n\n                \n\n                                </div>\n\n                              </td>\n\n                            </tr>\n\n                          \n\n                        </tbody>\n\n                        <tfoot>\n\n                           <button ion-button outline full *ngIf="status==true" (click)="charger()"> Plus ...</button>\n\n                          <!-- <div ><img *ngIf="status==true" src="assets/icons/loading2.gif" style="width: 35px;margin-left: 45%;"/></div> -->\n\n                          \n\n                        </tfoot>\n\n                      </table>\n\n                    </div>\n\n                  </div> \n\n    </ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\groups-page\group-realtime\group-realtime.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* DecimalPipe */], __WEBPACK_IMPORTED_MODULE_5__utils_geocoding_service__["a" /* GeocodingService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_0__providers_real_time_service__["a" /* RealTimeService */]])
], GroupeRealtime);

//# sourceMappingURL=group-realtime.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MileageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_map_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MileageComponent = (function () {
    function MileageComponent(navCtrl, datamanagementService, mapService, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.datamanagementService = datamanagementService;
        this.mapService = mapService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.MileageArray = [];
        this.mileages = navParams.get('mileages');
        this.totalMileage = navParams.get('totalMileage');
    }
    MileageComponent.prototype.addMileageToArray = function (mileage, event) {
        if (!event.ctrlKey) {
            this.MileageArray = [];
            this.mapService.removePolylinesFromMap();
            this.mapService.removeMarkersFromMap();
        }
        this.MileageArray.push(mileage);
        this.viewCtrl.dismiss(mileage);
    };
    MileageComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss(1);
    };
    MileageComponent.prototype.returnModal = function () {
        this.viewCtrl.dismiss(null);
    };
    return MileageComponent;
}());
MileageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-mileage-list',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\mileage\mileage.html"*/'<ion-header>\n\n    \n\n      <ion-navbar>\n\n        <ion-title><span style="color:white">Kilométrage</span></ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()">\n\n        <ion-icon name="arrow-down" style="color:white"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n        <ion-buttons start>\n\n          <button ion-button icon-only (click)="returnModal()">\n\n            <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n\n    </button>\n\n      </ion-buttons>\n\n      </ion-navbar>\n\n    \n\n</ion-header>\n\n<ion-content padding style="background-color: rgba(255, 255, 255, 0.69) !important;">\n\n    <table class="table table-striped"  style="font-size: 15px;font-weight: bold" width="100%">\n\n        <thead  style="background-color: #F5F5F5;opacity: 0.65">\n\n        <tr>\n\n            <th width="33%" style="text-align: center"><i class="fa fa-clock-o"\n\n                                                          aria-hidden="true"></i> Date début\n\n            </th>\n\n            <th width="33%" style="text-align: center">Kilométrage</th>\n\n            <th width="33%" style="text-align: center">Durée circulation</th>\n\n        </tr>\n\n        </thead>\n\n        <tbody class="datatable-body"  style="background-color: #F5F5F5;opacity: 0.65">\n\n        <tr *ngFor="let mileage of mileages " (click)="addMileageToArray(mileage, $event)" style="border-top: solid black 1px;" >\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{mileage.startHour | date:\'dd-MM-y HH:mm\'}}">\n\n                {{mileage.startHour | date:\'dd-MM-yyyy HH:mm\'}}\n\n            </td>\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{mileage.drivingDistance}} Km">\n\n                {{mileage.drivingDistance | number:\'1.2-2\'}}\n\n            </td>\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{mileage.drivingDurationStr}}">\n\n                {{mileage.drivingDurationStr}}\n\n            </td>\n\n        </tr>\n\n         <tr style="font-weight: 900;color: green">\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip">\n\n                Total:\n\n            </td>\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{totalMileage.drivingDistance}} Km">\n\n                {{totalMileage.drivingDistance | number:\'1.2-2\'}}\n\n            </td>\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{totalMileage.drivingDurationStr}}">\n\n                {{totalMileage.drivingDurationStr}}\n\n            </td>\n\n        </tr>\n\n        </tbody>\n\n    </table>\n\n</ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\mileage\mileage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_0__utils_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ModalController */]])
], MileageComponent);

//# sourceMappingURL=mileage.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vehicules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vehicule_form_vehicule_form__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_vehicule_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Vehicules = (function () {
    function Vehicules(menu, toastCtrl, modalCtrl, alertCtrl, navctrl, vehiculeService) {
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navctrl = navctrl;
        this.vehiculeService = vehiculeService;
        this.bigCurrentPage = 1;
        this.itemsPerPage = 25;
        this.vehicules = [];
        this.bigTotalItems = 175;
        this.deviceLabels = [];
    }
    Vehicules.prototype.ngOnInit = function () {
        var _this = this;
        this.getListVehicules(this.bigCurrentPage - 1, this.itemsPerPage);
        this.vehiculeService.getGroupsLabel().subscribe(function (response) {
            _this.vehiculeService.groupLabels = response;
        });
        this.vehiculeService.getDriversLabel().subscribe(function (response) {
            _this.vehiculeService.driverLabels = response;
        });
        this.vehiculeService.getDevicesLabel().subscribe(function (response) {
            _this.vehiculeService.deviceLabels = response;
            _this.deviceLabels = response;
            _this.numberDeviceFree = _this.deviceLabels.length;
        });
    };
    Vehicules.prototype.openmenu = function () {
        this.menu.open();
    };
    Vehicules.prototype.getListVehicules = function (page, size) {
        var _this = this;
        this.vehiculeService.bigCurrentPage = this.bigCurrentPage;
        this.vehiculeService.getListVehicules(this.bigCurrentPage - 1, this.itemsPerPage).subscribe(function (response) {
            _this.vehicules = response.content;
            _this.vehicules = _this.vehicules.sort(function (a, b) {
                if (a.device.idDevice < b.device.idDevice) {
                    return -1;
                }
                else if (a.device.idDevice > b.device.idDevice) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.vehiculeService.vehicules = _this.vehicules;
            _this.bigTotalItems = response.totalElements;
        });
    };
    Vehicules.prototype.presentConfirm = function (vehicule) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Informations',
            message: 'Equipement:' + vehicule.device.idDevice + '<br> Vitesse Max :' + vehicule.maxSpeed + '<br> Chauffeur : ' + vehicule.lastName + '<br> Email :' + vehicule.emails + '<br> Surnom : ' + vehicule.alias + '<br> Marque : ' + vehicule.mark,
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Modifier',
                    role: '',
                    handler: function () {
                        _this.openModifModal(vehicule);
                    }
                }
            ]
        });
        alert.present();
    };
    Vehicules.prototype.delete = function (vehicule) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Voulez vous vraiment supprimer :' + vehicule.matricule + '?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.deletevehicule(vehicule);
                    }
                }
            ]
        });
        alert.present();
    };
    Vehicules.prototype.deletevehicule = function (vehicule) {
        var _this = this;
        this.vehiculeService.delete(vehicule.idVehicule).subscribe(function (suprimed) {
            if (suprimed) {
                if (_this.vehicules.length == 1) {
                    _this.vehicules = [];
                }
                else {
                    _this.getListVehicules(_this.bigCurrentPage - 1, _this.itemsPerPage);
                }
                _this.numberDeviceFree = _this.numberDeviceFree + 1;
                var toast = _this.toastCtrl.create({
                    message: '' + vehicule.matricule + ' est supprimé avec succés',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'suppresion échoué',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, function () {
            var toast = _this.toastCtrl.create({
                message: 'suppresion échoué',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    Vehicules.prototype.openModifModal = function (vehicule) {
        var PoiModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__vehicule_form_vehicule_form__["a" /* VehiculeForm */], { vehicule: vehicule });
        PoiModal.present();
        PoiModal.onDidDismiss(function (form) {
        });
    };
    return Vehicules;
}());
Vehicules = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-vehicules',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\vehicules\vehicules.html"*/'<ion-header  >\n\n  <ion-navbar hideBackButton="true" >\n\n    <ion-title><span style="color:white">Véhicules</span></ion-title>\n\n  </ion-navbar>\n\n  <ion-fab top left outline class="ion-fab1" #fab >\n\n    <button ion-fab mini outline style="margin-left: -5px !important;margin-top:0px;background-color:rgba(0,0,0,0.6);align-items:center;align-content: center;"\n\n      (click)="openmenu()">\n\n      <i class="fa fa-list" aria-hidden="true"></i>\n\n    </button>\n\n  </ion-fab>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- <table style="font-size: 15px;">\n\n    <thead>\n\n      <tr style="background-color: #F5F5F5;opacity: 0.65;height:50px;font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: rgb(115, 144, 182);opacity: 0.75;">\n\n        <th style="text-align: center;">Equipement</th>\n\n        <th style="text-align: center;padding-left:9px;padding-right:9px;">Immatricule</th>\n\n        <th style="text-align: center;padding-left: 9px;padding-right: 9px"> Surnom</th>\n\n        <th style="text-align: center;padding-left: 9px;padding-right: 9px">Mark</th>\n\n      </tr>\n\n    </thead>\n\n    <tbody style="background-color: #FFFAFA;opacity: 0.5;font: bolder;font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: #B0C4DE;opacity: 0.75;">\n\n\n\n      <tr *ngFor="let vehicule of vehicules" style="border-top: solid black 1px;height:50px;">\n\n        <td style="text-align: center" (click)="presentConfirm(vehicule)">\n\n          {{vehicule.device.idDevice}}\n\n        </td>\n\n        <td style="text-align: center;" data-toggle="tooltip" (click)="presentConfirm(vehicule)">\n\n          {{vehicule.matricule}}\n\n        </td>\n\n        <td style="text-align: center;" data-toggle="tooltip" (click)="presentConfirm(vehicule)">\n\n          {{vehicule.alias}}\n\n        </td>\n\n        <td style="text-align: center;" data-toggle="tooltip" (click)="presentConfirm(vehicule)">\n\n          {{vehicule.mark}}\n\n        </td>\n\n      </tr>\n\n    </tbody>\n\n  </table> -->\n\n  <ion-card >\n\n      <ion-list>\n\n        <ion-row >\n\n          <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n             Matricule \n\n          </ion-col>\n\n          <br>\n\n          <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n             Chauffeur \n\n          </ion-col>\n\n          <br>\n\n          <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n              Vitesse Max \n\n          </ion-col>\n\n         </ion-row>\n\n      </ion-list>\n\n    </ion-card>\n\n\n\n  <ion-card *ngFor="let vehicule of vehicules">\n\n      <ion-list>\n\n        <ion-row (click)="presentConfirm(vehicule)" >\n\n          <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n             {{vehicule.matricule}}\n\n          </ion-col>\n\n          <br>\n\n          <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n             {{vehicule.lastName}}\n\n          </ion-col>\n\n          <br>\n\n          <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n              {{vehicule.maxSpeed}}\n\n          </ion-col>\n\n         \n\n         \n\n        </ion-row>\n\n      </ion-list>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\vehicules\vehicules.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_vehicule_service__["a" /* VehiculeService */]])
], Vehicules);

//# sourceMappingURL=vehicules.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Groupes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_group_service__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Groupes = (function () {
    function Groupes(menu, groupeService) {
        this.menu = menu;
        this.groupeService = groupeService;
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.itemsPerPage = 25;
        this.groups = [];
        this.imagesDir = __WEBPACK_IMPORTED_MODULE_0__providers_global_config__["b" /* imagesDir */];
    }
    Groupes.prototype.ngOnInit = function () {
        var _this = this;
        this.getListGroups(this.bigCurrentPage - 1, this.itemsPerPage);
        this.groupeService.getVehiculesMatricules().subscribe(function (response) {
            _this.groupeService.vehiculeLabels = response;
        });
    };
    Groupes.prototype.openmenu = function () {
        this.menu.open();
    };
    Groupes.prototype.getListGroups = function (page, size) {
        var _this = this;
        this.groupeService.bigCurrentPage = this.bigCurrentPage;
        this.groupeService.getGroupsByPageAndSize(this.bigCurrentPage - 1, this.itemsPerPage).subscribe(function (groups) {
            _this.groups = groups.content;
            _this.groupeService.groups = _this.groups;
            _this.bigTotalItems = groups.totalElements;
        });
    };
    Groupes.prototype.alertinfo = function (group) {
    };
    return Groupes;
}());
Groupes = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-groupes',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\groupes\groupes.html"*/'<ion-header>\n\n  <ion-navbar style="height:48px" hideBackButton="true">\n\n    <ion-title></ion-title>\n\n    <ion-title><span style="color:white">Groupes</span></ion-title>\n\n\n\n  </ion-navbar>\n\n  <ion-fab top left outline class="ion-fab1" #fab >\n\n    <button ion-fab mini outline style="margin-left: -5px !important;margin-top:0px;background-color:rgba(0,0,0,0.6);align-items:center;align-content: center;"\n\n      (click)="openmenu()">\n\n      <i class="fa fa-list" aria-hidden="true"></i>\n\n    </button>\n\n  </ion-fab>\n\n</ion-header>\n\n<ion-content>\n\n\n\n\n\n  <!--<ion-list>\n\n                <ion-item *ngFor="let group of groups"  >\n\n                    <ion-avatar item-start>\n\n                      <img src="{{imagesDir+group.imageUrl}}" style="\n\n                      width: 80px;\n\n                      height:  40px;\n\n                  " />\n\n                  </ion-avatar>\n\n                  <h2>{{group.nom}}</h2>\n\n                  \n\n                  \n\n                </ion-item>\n\n              </ion-list>-->\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-row (click)="presentConfirm(vehicule)">\n\n        <ion-col col-3 col-sm-3 col-md-3 col-xs-12>\n\n          Icon\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-9 col-sm-9 col-md-9 col-xs-12>\n\n          Groupe\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card *ngFor="let group of groups">\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-3 col-sm-3 col-md-3 col-xs-12>\n\n          <img src="{{imagesDir+group.imageUrl}}" />\n\n        </ion-col>\n\n        <ion-col col-9 col-sm-9 col-md-9 col-xs-12>\n\n          <span style="margin-left:5px"></span>{{group.nom}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n  <!--<ion-grid>\n\n                  <ion-row >\n\n                    <ion-col col-3 col-sm-3 col-md-3  col-xs-12>\n\n                        <img src="{{imagesDir+group.imageUrl}}"  />\n\n                    </ion-col>\n\n                    <ion-col col-9 col-sm-9 col-md-9 col-xs-12>\n\n                        {{group.nom}}\n\n                      </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>-->\n\n\n\n\n\n  <!--<table class="table table-striped" style="font-size: 15px;width:100%" >\n\n                <thead style="width:100%!important">\n\n                  <tr style="background-color: #F5F5F5;opacity: 0.65;height:50px;font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: rgb(115, 144, 182);width:100%!important;opacity: 0.75;">\n\n                    <th  style="text-align: center;width:50%" >Nom</th>\n\n                    <th  style="text-align: center;width:50%">Image</th>\n\n                  \n\n                  </tr>\n\n                </thead>\n\n                <tbody style="background-color: #FFFAFA;opacity: 0.5;font: bolder;font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: #B0C4DE;opacity: 0.75;">\n\n                  \n\n                     <tr *ngFor="let group of groups" style="border-top: solid black 1px;height:50px;">\n\n                      <td style="text-align: center"  >\n\n                            {{group.nom}}\n\n                      </td>\n\n                      <td style="text-align: center;" data-toggle="tooltip">\n\n                            <img src="{{imagesDir+group.imageUrl}}" width="30px" />\n\n                      </td>\n\n                     \n\n                    </tr>\n\n                  </tbody>\n\n              </table>-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\groupes\groupes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_group_service__["a" /* GroupService */]])
], Groupes);

//# sourceMappingURL=groupes.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_driver_service__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DriverComponent = (function () {
    function DriverComponent(menu, driverService) {
        this.menu = menu;
        this.driverService = driverService;
        // pag vars
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.itemsPerPage = 25;
        this.drivers = [];
        this.bigCurrentPage = this.driverService.bigCurrentPage;
    }
    DriverComponent.prototype.ngOnInit = function () {
        this.getListDrivers(this.bigCurrentPage - 1, this.itemsPerPage);
    };
    DriverComponent.prototype.getListDrivers = function (page, size) {
        var _this = this;
        this.driverService.bigCurrentPage = this.bigCurrentPage;
        this.driverService.getDriversByPageAndSize(this.bigCurrentPage - 1, this.itemsPerPage).subscribe(function (drivers) {
            console.log(drivers);
            _this.drivers = drivers.content;
            _this.driverService.drivers = _this.drivers;
            _this.bigTotalItems = drivers.totalElements;
        });
    };
    DriverComponent.prototype.openmenu = function () {
        this.menu.open();
    };
    return DriverComponent;
}());
DriverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-chauffeurs',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\chauffeurs\chauffeurs.html"*/'<ion-header>\n\n  <ion-navbar style="height:48px" hideBackButton="true">\n\n    <ion-title ><span style="color:white">Chauffeurs</span>  </ion-title>\n\n  </ion-navbar>\n\n  <ion-fab top left outline class="ion-fab1" #fab >\n\n    <button ion-fab mini outline style="margin-left: -5px !important;margin-top:0px;background-color:rgba(0,0,0,0.6);align-items:center;align-content: center;"\n\n      (click)="openmenu()">\n\n      <i class="fa fa-list" aria-hidden="true"></i>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-list>\n\n          <ion-row >\n\n            <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n               Nom \n\n            </ion-col>\n\n            <br>\n\n            <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n               Télephone \n\n            </ion-col>\n\n            <br>\n\n            <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n                CIN \n\n            </ion-col>\n\n           \n\n           \n\n          </ion-row>\n\n        </ion-list>\n\n      </ion-card>\n\n    <ion-card *ngFor="let driver of drivers">\n\n        <ion-list>\n\n          <ion-row >\n\n            <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n               {{driver.lastName}} {{driver.firstName}}\n\n            </ion-col>\n\n            <br>\n\n            <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n               {{driver.telephone}}\n\n            </ion-col>\n\n            <br>\n\n            <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n                {{driver.cin}}\n\n            </ion-col>\n\n           \n\n           \n\n          </ion-row>\n\n        </ion-list>\n\n      </ion-card>\n\n\n\n\n\n  <!-- <table style="font-size: 15px;width:100%">\n\n    <thead style="width:100%!important">\n\n      <tr style="background-color: #F5F5F5;opacity: 0.65;height:50px;font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: rgb(115, 144, 182);width:100%!important;opacity: 0.75;">\n\n        <th style="text-align: center;width:33%">Nom</th>\n\n        <th style="text-align: center;width:33%">Téléphone</th>\n\n        <th style="text-align: center;width:33%">CIN</th>\n\n      </tr>\n\n    </thead>\n\n    <tbody style="background-color: #FFFAFA;opacity: 0.5;font: bolder;font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: #B0C4DE;opacity: 0.75;">\n\n\n\n      <tr *ngFor="let driver of drivers" style="border-top: solid black 1px;height:50px;">\n\n        <td style="text-align: center">\n\n          {{driver.lastName}} {{driver.firstName}}\n\n        </td>\n\n        <td style="text-align: center;" data-toggle="tooltip">\n\n          {{driver.telephone}}\n\n        </td>\n\n        <td style="text-align: center;" data-toggle="tooltip">\n\n          {{driver.cin}}\n\n        </td>\n\n\n\n      </tr>\n\n    </tbody>\n\n  </table> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\datamana\chauffeurs\chauffeurs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_driver_service__["a" /* DriverService */]])
], DriverComponent);

//# sourceMappingURL=chauffeurs.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverService = (function () {
    function DriverService(_http) {
        this._http = _http;
        this.toastyAdd = false;
        this.toastyUpdate = false;
        this.drivers = [];
        this.bigCurrentPage = 1;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
    }
    DriverService.prototype.getDriversByPageAndSize = function (page, size) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'drivers/' + 'list' + '?page=' + page + '&size=' + size, { headers: headers }).map(function (res) { return res.json(); });
    };
    DriverService.prototype.deleteDriverById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'drivers/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    DriverService.prototype.putDriver = function (driver) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(driver);
        return this._http.put(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'drivers/', driver, options).map(function (res) { return res.json(); });
    };
    DriverService.prototype.addDriver = function (driver) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(driver);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'drivers/', driver, options).map(function (res) { return res.json(); });
    };
    DriverService.prototype.getDriver = function (idDriver) {
        return this.drivers.find(function (driver) { return driver.idDriver === idDriver; });
    };
    DriverService.prototype.getOne = function (idDriver) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'drivers/' + idDriver, { headers: headers }).map(function (res) { return res.json(); });
    };
    return DriverService;
}());
DriverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], DriverService);

//# sourceMappingURL=driver.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(245);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataManagementService = (function () {
    function DataManagementService(_http) {
        this._http = _http;
        this.pointInterests = null;
        this.groups = null;
        this.selectedGroup = null;
        this.selectedVehiculeId = null;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
    }
    DataManagementService.prototype.inverseGeoconding = function (latitude, longitude, zoom) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["e" /* nominatim_dns */] + '/reverse.php?format=json&lat=' + latitude + '&lon=' + longitude + '&zoom=' + zoom + '&accept-language=fr&addressdetails=1').map(function (res) { return res.json(); });
    };
    DataManagementService.prototype.getAllPointInterests = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'pointInterests', { headers: headers }).map(function (res) { return res.json(); });
    };
    DataManagementService.prototype.deletePointInterest = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'pointInterests/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataManagementService.prototype.addPointInterest = function (pointInterest) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'pointInterests', pointInterest, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataManagementService.prototype.updatePointInterest = function (pointinterest) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var body = JSON.stringify(pointinterest);
        return this._http.put(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'pointInterests/', pointinterest, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataManagementService.prototype.getAllGroups = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/minify', { headers: headers }).map(function (res) { return res.json(); });
    };
    // must exe only if pointInterests not NULL !!!
    DataManagementService.prototype.getRelativePosition = function (lat, lng) {
        var _this = this;
        var relativePosition = null;
        this.pointInterests.forEach(function (pointInterest) {
            var distance = _this.distance(lat, lng, pointInterest.coordinate.lat, pointInterest.coordinate.lng);
            if (distance < pointInterest.ray / 1000) {
                relativePosition = pointInterest.name;
            }
            /*if (distance > pointInterest.ray / 1000 && distance < 0.1) {
                relativePosition = Math.round(distance * 1000) + " metre de " + pointInterest.name;
            }*/
            if (distance > pointInterest.ray / 1000 && distance < 0.2) {
                var distanceStr = distance.toString().substr(0, 4);
                relativePosition = "à " + distanceStr + " Km de " + pointInterest.name;
            }
        });
        return relativePosition;
    };
    DataManagementService.prototype.distance = function (lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
                (1 - c((lon2 - lon1) * p)) / 2;
        var distance = 12742 * Math.asin(Math.sqrt(a));
        return distance;
    };
    DataManagementService.prototype.getDriverName = function (driver) {
        if (driver) {
            if (driver.firstName && driver.lastName) {
                return driver.firstName + ' ' + driver.lastName;
            }
            else if (driver.firstName) {
                return driver.firstName;
            }
            else if (driver.lastName) {
                return driver.lastName;
            }
            else
                return "anonyme";
        }
        else
            return "pas de chauffeur";
    };
    DataManagementService.prototype.getDriverPhonenumber = function (driver) {
        if (driver) {
            if (driver.telephone)
                return driver.telephone;
        }
    };
    return DataManagementService;
}());
DataManagementService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], DataManagementService);

//# sourceMappingURL=data-management.service.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_group_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_datamana_vehicules_vehicule_form_vehicule_form__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_gestpoi_gestpoi__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_poi_poi__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_login__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_historical_historical__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_groups_page_groups_page__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_historical_form_historical_form__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_paths_list_paths_list__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__utils_geocoding_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__utils_map_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_real_time_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_historical_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_data_management_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_stop_list_stop_list__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_mileage_mileage__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_datamana_vehicules_vehicules__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_datamana_groupes_groupes__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_vehicule_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_datamana_chauffeurs_chauffeurs__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_driver_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_launch_navigator__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_groups_page_group_realtime_group_realtime__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_poi_poi__["a" /* Poi */],
            __WEBPACK_IMPORTED_MODULE_16__pages_historical_historical__["a" /* Historical */],
            __WEBPACK_IMPORTED_MODULE_17__pages_groups_page_groups_page__["a" /* GroupsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_historical_form_historical_form__["a" /* HistoricalForm */],
            __WEBPACK_IMPORTED_MODULE_19__pages_paths_list_paths_list__["a" /* PathsList */],
            __WEBPACK_IMPORTED_MODULE_26__pages_stop_list_stop_list__["a" /* StopList */],
            __WEBPACK_IMPORTED_MODULE_27__pages_mileage_mileage__["a" /* MileageComponent */],
            __WEBPACK_IMPORTED_MODULE_2__pages_gestpoi_gestpoi__["a" /* GestPoi */],
            __WEBPACK_IMPORTED_MODULE_28__pages_datamana_vehicules_vehicules__["a" /* Vehicules */],
            __WEBPACK_IMPORTED_MODULE_29__pages_datamana_groupes_groupes__["a" /* Groupes */],
            __WEBPACK_IMPORTED_MODULE_1__pages_datamana_vehicules_vehicule_form_vehicule_form__["a" /* VehiculeForm */],
            __WEBPACK_IMPORTED_MODULE_31__pages_datamana_chauffeurs_chauffeurs__["a" /* DriverComponent */],
            __WEBPACK_IMPORTED_MODULE_34__pages_groups_page_group_realtime_group_realtime__["a" /* GroupeRealtime */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {
                swipeBackEnabled: 'false'
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_historical_historical__["a" /* Historical */],
            __WEBPACK_IMPORTED_MODULE_17__pages_groups_page_groups_page__["a" /* GroupsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_historical_form_historical_form__["a" /* HistoricalForm */],
            __WEBPACK_IMPORTED_MODULE_19__pages_paths_list_paths_list__["a" /* PathsList */],
            __WEBPACK_IMPORTED_MODULE_5__pages_poi_poi__["a" /* Poi */],
            __WEBPACK_IMPORTED_MODULE_26__pages_stop_list_stop_list__["a" /* StopList */],
            __WEBPACK_IMPORTED_MODULE_27__pages_mileage_mileage__["a" /* MileageComponent */],
            __WEBPACK_IMPORTED_MODULE_2__pages_gestpoi_gestpoi__["a" /* GestPoi */],
            __WEBPACK_IMPORTED_MODULE_28__pages_datamana_vehicules_vehicules__["a" /* Vehicules */],
            __WEBPACK_IMPORTED_MODULE_29__pages_datamana_groupes_groupes__["a" /* Groupes */],
            __WEBPACK_IMPORTED_MODULE_1__pages_datamana_vehicules_vehicule_form_vehicule_form__["a" /* VehiculeForm */],
            __WEBPACK_IMPORTED_MODULE_31__pages_datamana_chauffeurs_chauffeurs__["a" /* DriverComponent */],
            __WEBPACK_IMPORTED_MODULE_34__pages_groups_page_group_realtime_group_realtime__["a" /* GroupeRealtime */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_30__providers_vehicule_service__["a" /* VehiculeService */],
            __WEBPACK_IMPORTED_MODULE_15__providers_login__["a" /* SigningService */],
            __WEBPACK_IMPORTED_MODULE_20__utils_geocoding_service__["a" /* GeocodingService */],
            __WEBPACK_IMPORTED_MODULE_21__utils_map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_22__providers_real_time_service__["a" /* RealTimeService */],
            __WEBPACK_IMPORTED_MODULE_24__providers_data_management_service__["a" /* DataManagementService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_23__providers_historical_service__["a" /* HistoricalService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* DecimalPipe */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_0__providers_group_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_32__providers_driver_service__["a" /* DriverService */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */],
            { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__driver__ = __webpack_require__(286);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group__ = __webpack_require__(287);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicule__ = __webpack_require__(288);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__vehicule__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Driver */
/* unused harmony export VehiculeApparence */
/* unused harmony export DriverLabel */
var Driver = (function () {
    function Driver() {
    }
    return Driver;
}());

var VehiculeApparence = (function () {
    function VehiculeApparence(text, id) {
        this.text = text;
        this.id = id;
    }
    return VehiculeApparence;
}());

var DriverLabel = (function () {
    function DriverLabel(idDriver, firstName) {
        this.idDriver = idDriver;
        this.firstName = firstName;
    }
    return DriverLabel;
}());

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Groupe */
/* unused harmony export VehiculeGetDTO */
/* unused harmony export GroupAddDTO */
var Groupe = (function () {
    function Groupe(groupeId, nom, imageUrl, vehicules) {
        this.vehicules = [];
        this.idGroupe = groupeId;
        this.nom = nom;
        this.imageUrl = imageUrl;
        this.vehicules = vehicules;
    }
    return Groupe;
}());

var VehiculeGetDTO = (function () {
    function VehiculeGetDTO(idVehicule, matricule) {
        this.idVehicule = idVehicule;
        this.matricule = matricule;
    }
    return VehiculeGetDTO;
}());

var GroupAddDTO = (function () {
    function GroupAddDTO() {
    }
    return GroupAddDTO;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VehiculeInfo */
/* unused harmony export DeviceLabel */
/* unused harmony export GroupLabel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomSelectInfo; });
/* unused harmony export Vehicule */
var VehiculeInfo = (function () {
    function VehiculeInfo() {
        this.emails = "";
    }
    return VehiculeInfo;
}());

var DeviceLabel = (function () {
    function DeviceLabel(idDevice, deviceNumber) {
        this.idDevice = idDevice;
        this.deviceNumber = deviceNumber;
    }
    return DeviceLabel;
}());

var GroupLabel = (function () {
    function GroupLabel(idGroupe, nom) {
        this.idGroupe = idGroupe;
        this.nom = nom;
    }
    return GroupLabel;
}());

var CustomSelectInfo = (function () {
    function CustomSelectInfo(text, id) {
        this.text = text;
        this.id = id;
    }
    return CustomSelectInfo;
}());

var Vehicule = (function () {
    function Vehicule() {
    }
    return Vehicule;
}());

//# sourceMappingURL=vehicule.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_historical_historical__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_gestpoi_gestpoi__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_datamana_vehicules_vehicules__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_datamana_groupes_groupes__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_datamana_chauffeurs_chauffeurs__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, _app, actionSheetCtrl, menuCtrl, alertCtrl, storage, splashScreen, toastCtrl) {
        var _this = this;
        this.platform = platform;
        this._app = _app;
        this.actionSheetCtrl = actionSheetCtrl;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.listhide = true;
        this.tempsreelopened = true;
        platform.ready().then(function () {
            //alert de confirmation de quitter l'application
            platform.registerBackButtonAction(function () {
                if (_this.nav.canGoBack()) {
                    _this.nav.pop();
                }
                else {
                    if (_this.alert) {
                        _this.alert.dismiss();
                        _this.alert = null;
                    }
                    else {
                        _this.showAlert();
                    }
                }
            });
            //check previous signing
            _this.checkPreviousAuthorization();
            splashScreen.hide();
            statusBar.show();
            statusBar.styleDefault();
        });
    }
    // fermer menu
    MyApp.prototype.menuclose = function () {
        this.menuCtrl.close();
        this.listhide = true;
    };
    //list getion de donnée
    MyApp.prototype.hidelist = function () {
        this.listhide = !this.listhide;
    };
    //navigation to gestion Poi
    MyApp.prototype.GotoGestpoi = function () {
        this.tempsreelopened = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_gestpoi_gestpoi__["a" /* GestPoi */]);
        this.menuclose();
    };
    MyApp.prototype.GotoGestchauf = function () {
        this.tempsreelopened = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_datamana_chauffeurs_chauffeurs__["a" /* DriverComponent */]);
        this.menuclose();
    };
    //navigation to  temps reel et historique
    MyApp.prototype.GotoTempsRealandHistorique = function () {
        if (!this.tempsreelopened) {
            this._app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_historical_historical__["a" /* Historical */]);
        }
        this.menuclose();
        this.tempsreelopened = true;
    };
    //navigation to gestion de vehicule
    MyApp.prototype.GoToGestVehi = function () {
        this.tempsreelopened = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_datamana_vehicules_vehicules__["a" /* Vehicules */]);
        this.menuclose();
    };
    //verification d'authentification
    MyApp.prototype.checkPreviousAuthorization = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
    };
    MyApp.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Voulez vous vraiment quitter ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Quitter',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    MyApp.prototype.GoToGestGroup = function () {
        this.tempsreelopened = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_datamana_groupes_groupes__["a" /* Groupes */]);
        this.menuclose();
    };
    //alert deconnexion
    MyApp.prototype.logoutconfirm = function () {
        var _this = this;
        this.menuclose();
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Souhaitez-vous vraiment vous déconnecter?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                    }
                }, {
                    text: 'Déconnexion',
                    handler: function () {
                        _this.logout();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    //deconnexion
    MyApp.prototype.logout = function () {
        localStorage.removeItem('currentuser');
        this._app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])('mycontent'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\app\app.html"*/'<ion-menu [content]="mycontent" ><!--style="margin-top:20px"-->\n\n  <ion-header style="height:48px;margin-top:20px;">\n\n    <ion-title ><span style="color:white">Menu</span>  </ion-title>\n\n  </ion-header>\n\n  <ion-content style="background-color:white">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/logorim.jpg">\n\n      </ion-avatar>\n\n      <h2>Rim Télécom</h2>\n\n      <p>Online</p>\n\n    </ion-item>\n\n    <button ion-button color="light" (click)="GotoTempsRealandHistorique()" style="width:90%">Temps réel & Historique</button>\n\n    <button ion-button color="light" (click)="hidelist()" style="width:90%">Gestion de données</button>\n\n    <ion-list [hidden]="listhide">\n\n      <ion-card>\n\n        <ion-list>\n\n          <button ion-item (click)="GoToGestVehi()">\n\n            <i class="fa fa-car" aria-hidden="true" ></i>\n\n              Véhicules\n\n          </button>\n\n          <button ion-item (click)="GoToGestGroup()">\n\n            <i class="fa fa-users" aria-hidden="true"></i>\n\n              Groupes\n\n          </button>\n\n          <button ion-item (click)="GotoGestchauf()">\n\n            <i class="fa fa-user" aria-hidden="true"></i>\n\n            Conducteurs  \n\n          </button>\n\n          <button ion-item (click)="GotoGestpoi()">\n\n            <i class="fa fa-flag" aria-hidden="true"></i>\n\n            Points d\'intérêt\n\n          </button>\n\n        </ion-list>\n\n      </ion-card>\n\n    </ion-list>  \n\n  </ion-content>\n\n  <ion-footer>\n\n    <button ion-button outline full color="danger" (click)="logoutconfirm()">Déconnexion</button>\n\n  </ion-footer>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocodingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeocodingService = (function () {
    function GeocodingService(_http) {
        this._http = _http;
    }
    GeocodingService.prototype.distance = function (lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
                (1 - c((lon2 - lon1) * p)) / 2;
        var distance = 12742 * Math.asin(Math.sqrt(a));
        return distance;
    };
    GeocodingService.prototype.inverseGeoconding = function (latitude, longitude, zoom) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2__providers_global_config__["e" /* nominatim_dns */] + '/reverse.php?format=json&lat=' + latitude + '&lon=' + longitude + '&zoom=' + zoom + '&accept-language=fr&addressdetails=1').map(function (res) { return res.json(); });
    };
    GeocodingService.prototype.getMyIpAdress = function () {
        return this._http.get('http://api.ipify.org/?format=json').map(function (res) { return res.json(); });
    };
    GeocodingService.prototype.getMyLocation = function (ip) {
        return this._http.get('freegeoip.net/json/' + ip).map(function (res) { return res.json(); });
    };
    return GeocodingService;
}());
GeocodingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GeocodingService);

//# sourceMappingURL=geocoding.service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Marker = L.Marker;
var Icon = L.Icon;

var MapService = (function () {
    function MapService() {
        this.mapLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.markerWasAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.markerWasEdited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.polygons = [];
        this.markers = [];
        this.polylines = [];
        this.circles = [];
        this.newRtMarkers = [];
        this.rtMarkers = [];
        this.markersPoi = [];
        this.polygonsPoi = [];
        this.baseMaps = {
            RimTelecom: L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),
            googlestreet: L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                id: 'Google Streets',
                maxZoom: 20,
                maxNativeZoom: 17,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),
            googlehybride: L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),
            googleSat: L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),
            'Google Terrain': L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }),
            OpenStreetMap: L.tileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
                maxZoom: 20,
                maxNativeZoom: 17,
                attribution: '&copy; <a href="rimtelecom.ma">Rim telecom</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
            }),
            Esri: L.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
                attribution: 'Rimtelecom'
            }),
            CartoDB: L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                maxZoom: 20,
                maxNativeZoom: 17,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            }),
            Esri_WorldImagery: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                maxZoom: 20,
                maxNativeZoom: 17,
                attribution: 'Rimtelecom'
            })
        };
    }
    MapService.prototype.addRtMarker = function (rtMarker) {
        rtMarker.value.setIcon(rtMarker.icon);
        this.rtMarkers.push(rtMarker);
        rtMarker.value.addTo(this.map);
    };
    MapService.prototype.updateRtMarkertest = function (coordinate, popup, icon, id, isCurrentPathClicked) {
        //tester si la liste est vide
        //si oui 
        var _this = this;
        if (this.newRtMarkers == null || this.newRtMarkers.length == 0) {
            var marker = L.marker(L.latLng(coordinate.lat, coordinate.lng));
            marker.addTo(this.map);
            marker.bindPopup(popup);
            marker.setIcon(icon);
            //  marker.on('click', () => {this.map.setView(coordinate, 14);});
            this.newRtMarkers.push({ id: id, marker: marker });
        }
        else {
            this.newRtMarkers.map(function (rt) {
                if (rt.id == id) {
                    //rt.marker.remove();
                    _this.newRtMarkers.splice(_this.newRtMarkers.indexOf(rt), 1);
                    rt.marker.setLatLng(coordinate);
                    rt.marker.setIcon(icon);
                    rt.marker.getPopup().setContent(popup);
                    if (isCurrentPathClicked == true) {
                        var marker = L.marker(L.latLng(coordinate.lat, coordinate.lng));
                        marker.setIcon(new Icon({
                            iconUrl: __WEBPACK_IMPORTED_MODULE_2__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                            iconAnchor: [2, 2]
                        }));
                        _this.addMarker(marker);
                        var points = [];
                        points.push(rt.marker.getLatLng());
                        points.push(coordinate.value.getLatLng());
                        var polyline = L.polyline(points, { color: '#0031D9', weight: 3 });
                        _this.addPolyline(polyline);
                    }
                }
            });
        }
    };
    MapService.prototype.updateRtMarker = function (rtMarker, isCurrentPathClicked) {
        var _this = this;
        var ok = false;
        this.rtMarkers.map(function (rt) {
            if (rt.id == rtMarker.id) {
                if (isCurrentPathClicked == true) {
                    var marker = new Marker(rt.value.getLatLng());
                    marker.setIcon(new Icon({
                        iconUrl: __WEBPACK_IMPORTED_MODULE_2__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                        iconAnchor: [2, 2]
                    }));
                    /*marker.on('click', () => {
                        this.map.setView(rt.value.getLatLng(), 17);
                    });*/
                    _this.addMarker(marker);
                    var points = [];
                    points.push(rt.value.getLatLng());
                    points.push(rtMarker.value.getLatLng());
                    var polyline = L.polyline(points, { color: '#0031D9', weight: 3 });
                    _this.addPolyline(polyline);
                }
                rt.value.setLatLng(rtMarker.value.getLatLng());
                //rt.value.getPopup().setContent(rtMarker.value.getPopup().getContent());
                /*rt.value.on('click', () => {
                    this.map.setView(rtMarker.value.getLatLng(), 16);
                });*/
                rt.value.options.rotationAngle = rtMarker.angle;
                /*rt.value.setIcon(rtMarker.icon);*/
                ok = true;
            }
        });
        if (!ok) {
            rtMarker.value.setIcon(rtMarker.icon);
            this.rtMarkers.push(rtMarker);
            rtMarker.value.addTo(this.map);
        }
    };
    MapService.prototype.removeAllRtMarkers = function () {
        var _this = this;
        this.newRtMarkers.forEach(function (m) {
            _this.map.removeLayer(m.marker);
        });
        this.newRtMarkers = [];
    };
    MapService.prototype.setView = function (coordinate) {
        this.map.setView(coordinate, 15);
    };
    MapService.prototype.addCircle = function (circle) {
        this.circles.push(circle);
        circle.addTo(this.map);
    };
    MapService.prototype.removeCirclesFromMap = function () {
        var _this = this;
        this.circles.forEach(function (m) {
            _this.map.removeLayer(m);
        });
        this.circles = [];
    };
    MapService.prototype.addMarker = function (marker) {
        this.markers.push(marker);
        marker.addTo(this.map);
    };
    MapService.prototype.addMarkerPoi = function (marker) {
        this.markersPoi.push(marker);
        marker.addTo(this.map);
    };
    MapService.prototype.removeMarkersPoiFromMap = function () {
        var _this = this;
        this.markersPoi.forEach(function (m) {
            _this.map.removeLayer(m);
        });
        this.markersPoi = [];
    };
    MapService.prototype.removeMarker = function (index) {
        this.map.removeLayer(this.markers[index]);
        delete this.markers[index];
    };
    MapService.prototype.addMarkersToMap = function () {
        var _this = this;
        this.markers.forEach(function (marker) {
            marker.addTo(_this.map);
        });
    };
    MapService.prototype.removeMarkersFromMap = function () {
        var _this = this;
        this.markers.forEach(function (m) {
            _this.map.removeLayer(m);
        });
        this.markers = [];
    };
    MapService.prototype.addPolyline = function (polyline) {
        this.polylines.push(polyline);
        polyline.addTo(this.map);
    };
    MapService.prototype.removePolylinesFromMap = function () {
        var _this = this;
        this.polylines.forEach(function (m) {
            _this.map.removeLayer(m);
        });
        this.polylines = [];
    };
    MapService.prototype.addPolygon = function (polygon) {
        this.polygons.push(polygon);
        polygon.addTo(this.map);
    };
    MapService.prototype.addPolygonPoi = function (polygon) {
        this.polygonsPoi.push(polygon);
        polygon.addTo(this.map);
    };
    MapService.prototype.removePolygon = function (index) {
        //this.map.removeLayer(this.polygons[index]);
        delete this.polygons[index];
    };
    MapService.prototype.addPolygonsToMap = function () {
        var _this = this;
        this.polygons.forEach(function (Polygon) {
            Polygon.addTo(_this.map);
        });
    };
    MapService.prototype.removePolygonsFromMap = function () {
        var _this = this;
        this.polygons.forEach(function (m) {
            _this.map.removeLayer(m);
        });
        this.polygons = [];
    };
    MapService.prototype.removePolygonsPoiFromMap = function () {
        var _this = this;
        this.polygonsPoi.forEach(function (m) {
            _this.map.removeLayer(m);
        });
        this.polygonsPoi = [];
    };
    MapService.prototype.resetMap = function () {
        this.removeMarkersFromMap();
        this.removePolygonsFromMap();
        this.removePolylinesFromMap();
    };
    MapService.prototype.disableMouseEvent = function (elementId) {
        var element = document.getElementById(elementId);
        L.DomEvent.disableClickPropagation(element);
        L.DomEvent.disableScrollPropagation(element);
    };
    ;
    return MapService;
}());
MapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MapService);

//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTimeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_headers__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RealTimeService = (function () {
    function RealTimeService(_http, storage) {
        this._http = _http;
        this.storage = storage;
    }
    RealTimeService.prototype.getRealTimeRecord = function (deviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        // ici il faut recuperer utilisateur courant !!!!
        // il faut dabord lors de authen => tu gard utilisteur sur le storage pour que tu puise le recuperer ici
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'realTimeRecords/' + deviceId, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getAllPois = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'pointInterests/dtos', { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getAllRealTimeRecords = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var parms = "";
        headers.append('Authorization', this.currentuser.token);
        if (!this.currentuser.isRoot) {
            parms = '?id=' + this.currentuser.id;
        }
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'realTimeRecords' + parms, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getAllGroups = function (keyword) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var parms = "";
        if (!this.currentuser.isRoot) {
            parms = '&id=' + this.currentuser.id;
        }
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'groupes/details?keyword=' + keyword + parms, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getGroupMini = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var parms = "";
        if (!this.currentuser.isRoot) {
            parms = '&id=' + this.currentuser.id;
        }
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'groupes/minifyGroups', { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.findVehiculesByGroupsId = function (idgroup, size, page) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var parms = "";
        if (!this.currentuser.isRoot) {
            parms = '&id=' + this.currentuser.id;
        }
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'vehicules/paginate/by/' + idgroup + '?size=' + size + '&page=' + page, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.getCurrentPath = function (deviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'paths/currentPath/' + deviceId, null, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.startEngine = function (idBoitier) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_headers__["b" /* createAuthorizationHeader */])(headers);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'engine/start/' + idBoitier, null, { headers: headers }).map(function (res) { return res.json(); });
    };
    RealTimeService.prototype.stopEngine = function (idBoitier) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_headers__["b" /* createAuthorizationHeader */])(headers);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'engine/stop/' + idBoitier, null, { headers: headers }).map(function (res) { return res.json(); });
    };
    return RealTimeService;
}());
RealTimeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], RealTimeService);

//# sourceMappingURL=real-time.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Poi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_geocoding_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_map_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_data_management__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Poi = (function () {
    function Poi(navParams, toastCtrl, mapService, alertCtrl, toastr, dataManagementService, viewCtrl, geocodingService) {
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.mapService = mapService;
        this.alertCtrl = alertCtrl;
        this.toastr = toastr;
        this.dataManagementService = dataManagementService;
        this.viewCtrl = viewCtrl;
        this.geocodingService = geocodingService;
        this.pointInterests = [];
        this.pointInterestsPoint = [];
        this.pointInterestsPolygon = [];
        this.images = [
            { text: "marker1", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "marker1.png" },
            { text: "marker2", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "marker2.png" },
            { text: "marker3", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "marker3.png" },
            { text: "marker4", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "marker4.png" },
            { text: "marker5", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "marker5.png" },
            { text: "marker6", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "marker6.png" },
            { text: "marker7", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "marker7.png" },
            { text: "marker8", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "marker8.png" },
            { text: "marker9", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "marker9.png" },
            { text: "marker10", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "marker10.png" },
            { text: "marker11", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "marker11.png" },
            { text: "flag1", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "flag1.png" },
            { text: "flag2", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "flag2.png" },
            { text: "house1", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + "house1.png" },
            { text: "house2", uri: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["b" /* imagesDir */] + "house.png" }
        ];
        this.pointinterest = new __WEBPACK_IMPORTED_MODULE_3__objects_data_management__["a" /* PointInterest */]();
        this.selectedImage = this.images[0];
        this.pointinterest = navParams.get('pointInterest');
        this.name = this.pointinterest.name;
    }
    //fermer modal with point d'interet non null
    Poi.prototype.closeModal = function () {
        this.viewCtrl.dismiss({ pointinterest: this.pointinterest });
    };
    //ajouter poi
    Poi.prototype.addpoi = function () {
        var _this = this;
        if (this.pointinterest.name == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Alert',
                subTitle: 'Ajouter un Nom',
                buttons: ['Ok']
            });
            alert_1.present();
        }
        else {
            this.pointinterest.type = 'MARKER';
            this.selectedImage.uri = __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["c" /* imagesPOIDir */] + this.selectedImage.text;
            console.log(this.selectedImage);
            this.pointinterest.imageUri = this.selectedImage.uri;
            this.dataManagementService.addPointInterest(this.pointinterest).subscribe(function (pointInterest) {
                _this.dataManagementService.pointInterests.push(pointInterest);
            });
            this.viewCtrl.dismiss({ pointinterest: this.pointinterest });
        }
    };
    Poi.prototype.edit = function () {
        var _this = this;
        this.dataManagementService.updatePointInterest(this.pointinterest).subscribe(function (updated) {
            if (updated) {
                _this.viewCtrl.dismiss(_this.pointinterest);
                var toast = _this.toastCtrl.create({
                    message: '' + _this.pointinterest.name + ' est modifié avec succés',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
            }
        }, function () {
        });
    };
    return Poi;
}());
Poi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'app-poi',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\poi\poi.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <ion-title style="text-align: center" *ngIf="name==null"><a> Ajouter POI</a> </ion-title>\n\n      <ion-title style="text-align: center" *ngIf="name!=null"><a> Modifier POI</a> </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="closeModal()">\n\n        <ion-icon name="arrow-down"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n    \n\n  </ion-header>\n\n  <ion-content padding text-center style="background-color: rgba(255, 255, 255, 0.85) ;">\n\n        <ion-list style="margin-top:40px;" >\n\n                <ion-item  style=" background-color:rgba(0,0,0,0.2)!important;" >\n\n               \n\n                  <ion-input placeholder="Nom..."[(ngModel)]="pointinterest.name"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n                    \n\n                    <textarea id="note" rows="4" placeholder="Adresse ..."[(ngModel)]="pointinterest.address" style="color:white; background-color:rgba(0,0,0,0)!important;"></textarea>\n\n                </ion-item>\n\n                <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n                        <ion-input type="number" placeholder="Rayon" [(ngModel)]="pointinterest.ray"></ion-input>\n\n                </ion-item>\n\n       </ion-list>\n\n       <p>[lat],[lng]\n\n       \n\n        {{pointinterest.coordinate.lat}},{{pointinterest.coordinate.lng}}\n\n       </p>\n\n       \n\n    <!-- <div class="form-group">\n\n        <div class="dropdown">\n\n            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"\n\n                    data-toggle="dropdown" aria-haspopup="true"\n\n                    aria-expanded="true" style="border-radius: 0px;">\n\n                <img src="{{selectedImage.uri}}" width="17px"/> {{selectedImage.text}}\n\n                <span class="caret"></span>\n\n            </button>\n\n            <ul class="dropdown-menu" style="border-radius: 0px;">\n\n                <li *ngFor="let image of images" (click)="selectedImage = image;"style=" list-style-type: none; ">\n\n                    <a>\n\n                        <img src="{{image.uri}}" width="25px"/> {{image.text}}\n\n                    </a>\n\n                </li>\n\n            </ul>\n\n        </div>\n\n    </div> -->\n\n    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"\n\n            data-toggle="dropdown" aria-haspopup="true"\n\n            aria-expanded="true" style="border-radius: 0px;">\n\n        <img src="{{selectedImage.uri}}" width="17px"/> {{selectedImage.text}}\n\n        <span class="caret"></span>\n\n        </button>\n\n    <ion-slides style="background-color:rgba(0,0,0,0.2); height:auto;width:auto;align-items:center; justify-content:center;">\n\n        <ion-slide *ngFor="let image of images" style="background-color:rgba(0,0,0,0);height:auto;width:auto;">\n\n          <ion-item class="item item-trns item-stable" style="background-color:rgba(0,0,0,0);" >\n\n            <li (click)="selectedImage = image;"style=" list-style-type: none; ">\n\n                <a>\n\n                    <img src="{{image.uri}}" width="25px"/> {{image.text}}\n\n                </a>\n\n            </li>\n\n           </ion-item> \n\n        </ion-slide>\n\n    </ion-slides>   \n\n                       \n\n                      \n\n                       \n\n       <button ion-button center round *ngIf="name==null" (click)="addpoi()">Ajouter comme Point d\'Intérêt\n\n            <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n        </button>\n\n        <button ion-button center round *ngIf="name!=null" (click)="edit()">Modifier\n\n                <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n            </button>\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack version ios\rimtrack\src\pages\poi\poi.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__utils_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__utils_geocoding_service__["a" /* GeocodingService */]])
], Poi);

//# sourceMappingURL=poi.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RealTimeRecord; });
/* unused harmony export Group */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Vehicule; });
/* unused harmony export User */
/* unused harmony export Authority */
/* unused harmony export Credentials */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mileage; });
var RealTimeRecord = (function () {
    function RealTimeRecord() {
        this.vehicule = null;
        this.geocoding = "Chargement..";
        this.geocodingDetails = 'Chargement..';
        this.speed = 0;
        this.recordTime = new Date();
        this.coordinate = { lat: 0, lng: 0 };
        this.realTimeRecordStatus = '';
        this.rotationAngle = 0;
    }
    return RealTimeRecord;
}());

var Group = (function () {
    function Group() {
    }
    return Group;
}());

var Vehicule = (function () {
    function Vehicule() {
        this.realTimeRecord = new RealTimeRecord();
    }
    return Vehicule;
}());

var User = (function () {
    function User() {
        this.username = '';
        this.email = '';
        this.authorities = [];
        this.groups = [];
        this.enabled = true;
        this.isRoot = false;
    }
    return User;
}());

var Authority = (function () {
    function Authority() {
    }
    return Authority;
}());

var Credentials = (function () {
    function Credentials() {
        this.username = '';
        this.password = '';
    }
    return Credentials;
}());

var Stop = (function () {
    function Stop() {
    }
    return Stop;
}());

var Mileage = (function () {
    function Mileage() {
        this.drivingDistance = 0;
        this.drivingDurationStr = '';
    }
    return Mileage;
}());

//# sourceMappingURL=real-time.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoricalService = (function () {
    function HistoricalService(_http) {
        this._http = _http;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
    }
    HistoricalService.prototype.getMileageDetails = function (deviceId, dateInterval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'mileage/details/' + deviceId, dateInterval, { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getAllMileages = function (deviceId, dateInterval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'mileage/' + deviceId, dateInterval, { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getAllGroups = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/minify', { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getAllPaths = function (deviceId, dateInterval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'paths/' + deviceId, dateInterval, { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getAllStops = function (deviceId, dateInterval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'stops/' + deviceId, dateInterval, { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getCurrentPath = function (deviceId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'paths/currentPath/' + deviceId, null, { headers: headers }).map(function (res) { return res.json(); });
    };
    HistoricalService.prototype.getPathDetails = function (deviceId, dateInterval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'paths/details/' + deviceId, dateInterval, { headers: headers }).map(function (res) { return res.json(); });
    };
    return HistoricalService;
}());
HistoricalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], HistoricalService);

//# sourceMappingURL=historical.service.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map