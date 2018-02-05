webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Poi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_geocoding_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_map_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_data_management__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_config__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-poi',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\poi\poi.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <ion-title style="text-align: center" *ngIf="name==null"><a> Ajouter POI</a> </ion-title>\n\n      <ion-title style="text-align: center" *ngIf="name!=null"><a> Modifier POI</a> </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only style="color:white" (click)="closeModal()">\n\n        <ion-icon name="arrow-down"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n    \n\n  </ion-header>\n\n  <ion-content padding text-center style="background-color: rgba(255, 255, 255,1) ;">\n\n        <ion-list style="margin-top:40px;" >\n\n                <ion-item  style=" background-color:rgba(0,0,0,0.2)!important;" >\n\n               \n\n                  <ion-input placeholder="Nom..."[(ngModel)]="pointinterest.name"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n                    \n\n                    <textarea id="note" rows="4" placeholder="Adresse ..."[(ngModel)]="pointinterest.address" style="color:white; background-color:rgba(0,0,0,0)!important;"></textarea>\n\n                </ion-item>\n\n                <ion-item style=" background-color:rgba(0,0,0,0.2)!important;">\n\n                        <ion-input type="number" placeholder="Rayon" [(ngModel)]="pointinterest.ray"></ion-input>\n\n                </ion-item>\n\n       </ion-list>\n\n       <p>[lat],[lng]\n\n       \n\n        {{pointinterest.coordinate.lat}},{{pointinterest.coordinate.lng}}\n\n       </p>\n\n       \n\n    <!-- <div class="form-group">\n\n        <div class="dropdown">\n\n            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"\n\n                    data-toggle="dropdown" aria-haspopup="true"\n\n                    aria-expanded="true" style="border-radius: 0px;">\n\n                <img src="{{selectedImage.uri}}" width="17px"/> {{selectedImage.text}}\n\n                <span class="caret"></span>\n\n            </button>\n\n            <ul class="dropdown-menu" style="border-radius: 0px;">\n\n                <li *ngFor="let image of images" (click)="selectedImage = image;"style=" list-style-type: none; ">\n\n                    <a>\n\n                        <img src="{{image.uri}}" width="25px"/> {{image.text}}\n\n                    </a>\n\n                </li>\n\n            </ul>\n\n        </div>\n\n    </div> -->\n\n    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"\n\n            data-toggle="dropdown" aria-haspopup="true"\n\n            aria-expanded="true" style="border-radius: 0px;">\n\n        <img src="{{selectedImage.uri}}" width="17px"/> {{selectedImage.text}}\n\n        <span class="caret"></span>\n\n        </button>\n\n    <ion-slides style="background-color:rgba(0,0,0,0.2); height:auto;width:auto;align-items:center; justify-content:center;">\n\n        <ion-slide *ngFor="let image of images" style="background-color:rgba(0,0,0,0);height:auto;width:auto;">\n\n          <ion-item class="item item-trns item-stable" style="background-color:rgba(0,0,0,0);" >\n\n            <li (click)="selectedImage = image;"style=" list-style-type: none; ">\n\n                <a>\n\n                    <img src="{{image.uri}}" width="25px"/> {{image.text}}\n\n                </a>\n\n            </li>\n\n           </ion-item> \n\n        </ion-slide>\n\n    </ion-slides>   \n\n                       \n\n                      \n\n                       \n\n       <button ion-button center round *ngIf="name==null" (click)="addpoi()">Ajouter\n\n            <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n        </button>\n\n        <button ion-button center round *ngIf="name!=null" (click)="edit()">Modifier\n\n                <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n        </button>\n\n        <button ion-button center round (click)="closeModal()">Annuler\n\n            <!--<ion-icon style="margin-left: 5px" name="close"></ion-icon>-->\n\n          </button>\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\poi\poi.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__utils_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__utils_geocoding_service__["a" /* GeocodingService */]])
], Poi);

//# sourceMappingURL=poi.js.map

/***/ }),

/***/ 103:
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
        this.coordinate = {
            lat: 0,
            lng: 0
        };
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

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return imagesDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return imagescar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return nominatim_dns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return time_difference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return imagesPOIDir; });
//export var dns: string = "http://79.137.75.178/ws_rimtrack_all/";
//export var dns: string = "http://localhost:8080/rimtrack-all-v2/";
var dns = "http://37.187.171.84/ws_rimtrack_all/";
//export var dns : string="http://192.168.1.108:8080/"
//export var dns: string = "http://79.137.75.178:8080/ws_rimtrack_all/";
var imagesDir = "http://37.187.171.84/images/";
var imagescar = "assets/icons/";
var nominatim_dns = "http://37.187.171.84/nominatim";
var time_difference = -3600000;
var imagesPOIDir = "poi/";
//# sourceMappingURL=global.config.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OilChangeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_config__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OilChangeService = (function () {
    function OilChangeService(_http) {
        this._http = _http;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
    }
    OilChangeService.prototype.getListOilChanges = function (idVehicule) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__providers_global_config__["a" /* dns */] + 'oilChanges/list/' + idVehicule, { headers: headers }).map(function (res) { return res.json(); });
    };
    OilChangeService.prototype.getProviders = function (type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__providers_global_config__["a" /* dns */] + 'providers/listByType?type=' + type, { headers: headers }).map(function (res) { return res.json(); });
    };
    OilChangeService.prototype.delete = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_3__providers_global_config__["a" /* dns */] + 'oilChanges/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    OilChangeService.prototype.readData = function (idVehicule, fileName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__providers_global_config__["a" /* dns */] + 'oilChanges/readData/' + idVehicule + '?fileName=' + fileName, { headers: headers }).map(function (res) { return res.json(); });
    };
    OilChangeService.prototype.getDataInExcel = function (idVehicule, date) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* ResponseContentType */].Blob });
        var body = JSON.stringify(date);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__providers_global_config__["a" /* dns */] + 'oilChanges/exportExcel/' + idVehicule, date, options).map(function (res) { return res.blob(); });
    };
    OilChangeService.prototype.add = function (oilChange, idVehicule, idProvider, providerName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(oilChange);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__providers_global_config__["a" /* dns */] + 'oilChanges/?idVehicule=' + idVehicule + '&idProvider=' + idProvider + '&providerName=' + providerName, oilChange, options).map(function (res) { return res.json(); });
    };
    OilChangeService.prototype.update = function (oilChange, idProvider, providerName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(oilChange);
        return this._http.put(__WEBPACK_IMPORTED_MODULE_3__providers_global_config__["a" /* dns */] + 'oilChanges/?idProvider=' + idProvider + '&providerName=' + providerName, oilChange, options).map(function (res) { return res.json(); });
    };
    return OilChangeService;
}());
OilChangeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], OilChangeService);

//# sourceMappingURL=oil-change.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiculeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(14);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = JSON.stringify(vehicule);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/?idDevice=' + idDevice + '&idGroups=' + idGroups + '&idDriver=' + idDriver + '&deviceNumber=' + deviceNumber, vehicule, options).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.update = function (vehicule, idGroups, idDriver, deviceNumber) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = JSON.stringify(vehicule);
        return this._http.put(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/?idGroups=' + idGroups + '&idDriver=' + idDriver + '&deviceNumber=' + deviceNumber, vehicule, options).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.addGroup = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/byName/?groupeName=' + name, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.addDriver = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'drivers/byName/?driverName=' + name, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getGroupsVehicule = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/groups/' + id, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getOne = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/' + id, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.assignement = function (idVehicule, idDriver) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/assignement/?idVehicule=' + idVehicule + '&idDriver=' + idDriver, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getListVehicules = function (page, size) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/list' + '?page=' + page + '&size=' + size, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.delete = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', this.currentuser.token);
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/' + id, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getGroupsLabel = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'groupes/labels', {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getDriversLabel = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'drivers/labels', {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    VehiculeService.prototype.getDevicesLabel = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'devices/labels', {
            headers: headers
        }).map(function (res) { return res.json(); });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], VehiculeService);

//# sourceMappingURL=vehicule.service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointInterest; });
/* unused harmony export Driver */
// Object point d'interet
var PointInterest = (function () {
    function PointInterest() {
        this.ray = 100;
        this.decode = [];
        this.coordinate = {
            lat: 0,
            lng: 0
        };
    }
    return PointInterest;
}());

//Object chauffeur
var Driver = (function () {
    function Driver() {
    }
    return Driver;
}());

//# sourceMappingURL=data-management.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Historical; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_global_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_real_time__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stop_list_stop_list__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_data_management__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_map_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_historical_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data_management_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__historical_form_historical_form__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__paths_list_paths_list__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_global_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_geocoding_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_leaflet__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_real_time_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__groups_page_groups_page__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__objects_real_time__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__poi_poi__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__mileage_mileage__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_launch_navigator__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__gestion_park_gest_park__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic_angular_util_events__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__assets_jqwidgets_ts_angular_jqxgauge__ = __webpack_require__(424);
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
    function Historical(plm, events, menu, statusBar, alertCtrl, launchNavigator, geolocation, actionSheetCtrl, viewCtrl /*, private callNumber: CallNumber,*/, storage, pipe, toastController, realTimeService, geocodingService, dataManagementService, _app, historicalService, loadingCtrl, modalCtrl, navCtrl, navParams, mapService) {
        var _this = this;
        this.plm = plm;
        this.events = events;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.launchNavigator = launchNavigator;
        this.geolocation = geolocation;
        this.actionSheetCtrl = actionSheetCtrl;
        this.viewCtrl = viewCtrl; /*, private callNumber: CallNumber,*/
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
        // ngAfterViewInit(): void {
        //   this.myGauge.value(0);   
        //  }
        //labels: any = { position: 'outside', interval: 20 };
        this.labels = {
            position: 'outside',
            interval: 20,
            formatValue: function (value, position) {
                if (value < 181)
                    return value + '';
            }
        };
        this.ticksMinor = {
            interval: 5,
            size: '5%'
        };
        this.ticksMajor = {
            interval: 10,
            size: '10%'
        };
        this.cap = {
            size: '5%',
            style: {
                fill: '#2e79bb',
                stroke: '#2e79bb'
            }
        };
        this.border = {
            style: {
                fill: '#8e9495',
                stroke: '#7b8384',
                'stroke-width': 1
            }
        };
        this.pointer = {
            style: {
                fill: '#2e79bb'
            },
            width: 5
        };
        this.ranges = [{
                startValue: 0,
                endValue: 60,
                style: {
                    fill: '#4cb848',
                    stroke: '#4cb848'
                },
                startDistance: 0,
                endDistance: 0
            },
            {
                startValue: 60,
                endValue: 100,
                style: {
                    fill: '#fad00b',
                    stroke: '#fad00b'
                },
                startDistance: 0,
                endDistance: 0
            },
            {
                startValue: 100,
                endValue: 180,
                style: {
                    fill: '#e53d37',
                    stroke: '#e53d37'
                },
                startDistance: 0,
                endDistance: 0
            }
        ];
        this.dash = -30;
        this.show = false;
        this.matricule = "Temps Réel";
        this.stops = [];
        this.pointInterests = null;
        this.oldRealTimeRecords = null;
        this.angles = new Map();
        this.pathDrawn = false;
        this.previousPathdrawn = false;
        this.pathDraw = false;
        this.currentPathClickedDeviceIds = null;
        this.modalopen = false;
        this.dismissbutton = false;
        this.poisInMap = false;
        this.resultopened = false;
        this.openStopResult = false;
        this.openMileageResult = false;
        this.mileages = [];
        this.pathpoirealtime = false;
        this.imageUri = "../../assets/icons/c1x0.png";
        this.history = false;
        this.navCtrl.swipeBackEnabled = false;
        this.totalMileage = new __WEBPACK_IMPORTED_MODULE_2__objects_real_time__["a" /* Mileage */]();
        this.Root = JSON.parse(localStorage.getItem('currentuser')).isRoot;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentlocationlat = resp.coords.latitude;
            _this.currentlocationlng = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        events.subscribe('Showinfo', function (x) {
            if (x) {
                _this.show = !_this.show;
            }
            else
                _this.show = false;
        });
    }
    Historical.prototype.setShowDashbord = function () {
        if (this.dash == -30)
            this.dash = -140;
        else
            this.dash = -30;
    };
    Historical.prototype.getShowDashbord = function () {
        return this.dash;
    };
    // initialisation du map +open group modal
    Historical.prototype.ngOnInit = function () {
        var _this = this;
        this.initMap();
        this.loader = this.loadingCtrl.create({
            content: "Veuillez attendre..."
        });
        this.loader.present();
        this.openGroupsModal();
        this.loader.dismiss();
        console.log(this.history);
        setInterval(function () {
            if (!_this.history)
                _this.reCalculeRealTimeRecord();
        }, 20000);
    };
    Historical.prototype.reCalculeRealTimeRecord = function () {
        var _this = this;
        if (this.vehicule) {
            this.vehicule.realTimeRecord = new __WEBPACK_IMPORTED_MODULE_19__objects_real_time__["b" /* RealTimeRecord */]();
            this.realTimeService.getRealTimeRecord(this.selectedDevice).subscribe(function (y) {
                _this.vehicule.realTimeRecord = y;
                _this.vehicule.realTimeRecord.vehicule = new __WEBPACK_IMPORTED_MODULE_19__objects_real_time__["b" /* RealTimeRecord */]();
                _this.vehicule.realTimeRecord.vehicule = _this.vehicule;
                _this.trackRealTimeRecord(_this.vehicule.realTimeRecord);
            });
        }
    };
    // open menu
    Historical.prototype.openmenu = function () {
        this.menu.open();
    };
    Historical.prototype.openmodalrealtime = function () {
        this.show = false;
        this.history = false;
        this.resultopened = false;
        this.openStopResult = false;
        this.openMileageResult = false;
        this.previousPathdrawn = false;
        this.pathDrawn = false;
        this.clearPolylines();
        this.groupmodal.present();
    };
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
            layers: [this.mapService.baseMaps.googlestreet]
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
        var _this = this;
        if (this.selectedDevice) {
            if (this.currentlocationlat && this.currentlocationlng) {
                var options = {
                    start: [this.currentlocationlat, this.currentlocationlng],
                    app: this.launchNavigator.APP.GOOGLE_MAPS
                };
                this.launchNavigator.navigate([this.latpoi, this.lngpoi], options)
                    .then(function (success) { return console.log('Launched navigator'); }, function (error) {
                    var alert = _this.alertCtrl.create({
                        title: 'Attention',
                        subTitle: 'Veuillez installer Google Maps ',
                        buttons: ['Ok']
                    });
                    alert.present();
                });
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
    };
    //open gestion de park
    Historical.prototype.openParc = function () {
        var data = {
            idDevice: this.vehicule,
            matricule: this.matricule
        };
        var gestparc = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_25__gestion_park_gest_park__["a" /* GestionPark */], {
            data: data
        });
        gestparc.present();
    };
    // (open modal) liste des groupes et véhicules (temps réel) 
    Historical.prototype.openGroupsModal = function () {
        var _this = this;
        this.pathpoirealtime = true;
        this.history = false;
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
        });
        this.modalopen = false;
        this.dismissbutton = true;
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
        // this.myGauge.value(realTimeRecord.speed); 
        this.pathDrawn = false;
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
        popup = '<b>Chauffeur:</b> ' + this.dataManagementService.getDriverName(realTimeRecord.vehicule.driver) +
            //   '<br><b>Matricule:</b> ' + realTimeRecord.vehicule.matricule +
            '<br><b>Mark:</b> ' + realTimeRecord.vehicule.mark +
            // '<br><b>Lat,Lng:</b><i> [' + this.PipeLngLat(realTimeRecord.coordinate.lat) + ',' + this.PipeLngLat(realTimeRecord.coordinate.lng) + ']</i><br><b>Vitesse :</b>' + realTimeRecord.speed +
            //   "<br><b>date et l'heure:</b> " + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + minutes +
            "<br><b>Signal GSM:</b> " + realTimeRecord.signal +
            " <i class='fa fa-wifi' aria-hidden='true'></i><br><b>Sat en vue:</b> " + realTimeRecord.satInView + " <i class='fa fa-globe' aria-hidden='true'></i>";
        this.selectedDevice = this.vehicule.device.idDevice;
        this.realtimecoord = realTimeRecord.coordinate;
        this.matricule = realTimeRecord.vehicule.matricule;
        this.latpoi = this.PipeLngLat(realTimeRecord.coordinate.lat);
        this.lngpoi = this.PipeLngLat(realTimeRecord.coordinate.lng);
        this.vitesse = realTimeRecord.speed;
        this.dataManagementService.inverseGeoconding(this.latpoi, this.lngpoi, 17).subscribe(function (res) {
            _this.addresspoi = res.display_name;
        }, function (err) { });
        marker = new Marker(realTimeRecord.coordinate, {
            rotationAngle: angle
        });
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition == true) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["d" /* imagescar */] + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -10],
                iconSize: [15, 60],
            });
            this.pathDrawn = true;
            this.imageUri = __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["d" /* imagescar */] + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed > 0) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["d" /* imagescar */] + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25],
                iconSize: [15, 60],
            });
            this.imageUri = __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["d" /* imagescar */] + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition == false) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["d" /* imagescar */] + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25],
                iconSize: [15, 60],
            });
            this.imageUri = __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["d" /* imagescar */] + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'NON_VALID' || realTimeRecord.realTimeRecordStatus == 'TECHNICAL_ISSUE') {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["d" /* imagescar */] + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25],
                iconSize: [15, 60],
            });
            this.imageUri = __WEBPACK_IMPORTED_MODULE_1__providers_global_config__["d" /* imagescar */] + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        realTimeRecord.icon = this.imageUri;
        icon = new Icon({
            iconUrl: realTimeRecord.icon,
            iconAnchor: [-2, 30],
            popupAnchor: [10, -25],
            iconSize: [30, 30],
        });
        if (realTimeRecord.geocoding) {
            popup = popup + '<hr><b>' + realTimeRecord.geocoding + '</b><br>';
        }
        this.geocodingService.inverseGeoconding(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng, 18).subscribe(function (adress) {
            //  popup = popup + '<hr><b>' + adress.display_name + '</b><br>';
            if (realTimeRecord.relativePosition) {
                //popup = popup + '<hr><center><span class="leaflet-pelias-layer-icon-container"><div class="leaflet-pelias-layer-icon leaflet-pelias-layer-icon-point"></div></span><strong>' + realTimeRecord.relativePosition + '</strong></center>';
                _this.relativeposition = realTimeRecord.relativePosition;
            }
            else {
                _this.relativeposition = realTimeRecord.geocoding;
            }
            // realTimeRecord.geocoding = this.getGeocoding(adress.address);
            // realTimeRecord.geocodingDetails = adress.display_name;
            //  this.updateSpecificGroups(realTimeRecord);
            var displaycurrentPath = false;
            if (_this.currentPathClickedDeviceIds != null && _this.currentPathClickedDeviceIds.indexOf(realTimeRecord.idRealTimeRecord) != -1) {
                displaycurrentPath = true;
                _this.pathDrawn = true;
            }
            //  this.clearPolylines();
            _this.mapService.removeAllRtMarkers();
            _this.mapService.updateRtMarkertest(realTimeRecord.coordinate, popup, icon, realTimeRecord.idRealTimeRecord, displaycurrentPath);
            if (realTimeRecord.idRealTimeRecord == _this.selectedDevice) {
                if (realTimeRecord.vehicule.driver) {
                    _this.driverphone = realTimeRecord.vehicule.driver.telephone;
                }
                if (_this.pathDrawn == false && realTimeRecord.speed > 0) {
                    _this.displayCurrentPath(realTimeRecord.idRealTimeRecord);
                }
            }
        }, function (err) {
            var displaycurrentPath = false;
            if (_this.currentPathClickedDeviceIds != null && _this.currentPathClickedDeviceIds.indexOf(realTimeRecord.idRealTimeRecord) != -1) {
                displaycurrentPath = true;
            }
            // c'est normal => tu test ici si le record = le current !
            if (realTimeRecord.idRealTimeRecord == _this.selectedDevice) {
                marker.bindPopup(popup);
                _this.mapService.updateRtMarkertest(realTimeRecord.coordinate, popup, icon, realTimeRecord.idRealTimeRecord, displaycurrentPath);
            }
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
        this.show = !this.show;
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
                    var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"](coordinate.date);
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
            var startDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"](startTime);
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
                var endDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"](endTime);
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
        // if (number) {
        //   this.callNumber.callNumber(number, true)
        //     .then(() => console.log('Launched dialer!'))
        //     .catch(() => console.log('Error launching dialer'));
        // } else {
        //   let alert = this.alertCtrl.create({
        //     title: 'Error',
        //     subTitle: 'Numéro introuvable',
        //     buttons: ['Ok']
        //   });
        //   alert.present();
        // }
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
        var popup = '<b>Nom : </b> ' + pointInterest.name + '<br><b>Adresse</b>' + pointInterest.address + '';
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
        marker.bindPopup(popup);
    };
    // historique des trajet + historique des stops + historique de kilometrage
    Historical.prototype.openFormModal = function () {
        var _this = this;
        if (this.selectedDevice) {
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
                        var alert_5 = _this.alertCtrl.create({
                            title: 'Error',
                            subTitle: 'Informations erronées',
                            buttons: ['Ok']
                        });
                        alert_5.present();
                    }
                    _this.allPaths = _this.historicalService.getAllPaths(_this.selectedDevice, {
                        startDate: firstDateTime,
                        endDate: new Date(lastDateTime.getTime() + 3600000)
                    }).subscribe(function (paths) {
                        if (paths.length) {
                            _this.pathpoirealtime = false;
                            _this.pathDrawn = false;
                            _this.previousPathdrawn = false;
                            _this.clearPolylines();
                            _this.history = true;
                            _this.mapService.removeAllRtMarkers();
                            _this.paths = paths;
                            var lastLat_1 = paths[0].beginPathLatitude;
                            var lastlng_1 = paths[0].beginPathLongitude;
                            var i_1 = 0;
                            _this.paths.forEach(function (path) {
                                var startHour = path.beginPathTime;
                                var startTime = startHour + 2 * __WEBPACK_IMPORTED_MODULE_13__providers_global_config__["f" /* time_difference */];
                                path.displayBeginPathTime = startTime;
                                if (path.endPathTime != null) {
                                    var endHour = path.endPathTime;
                                    var endTime = endHour + 2 * __WEBPACK_IMPORTED_MODULE_13__providers_global_config__["f" /* time_difference */];
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
                        var alert_6 = _this.alertCtrl.create({
                            title: 'Error',
                            subTitle: 'Informations erronées',
                            buttons: ['Ok']
                        });
                        alert_6.present();
                    }
                    _this.allPaths = _this.historicalService.getAllStops(_this.selectedDevice, {
                        startDate: firstDateTime,
                        endDate: new Date(lastDateTime.getTime() + 3600000)
                    }).subscribe(function (stops) {
                        if (stops && stops.length) {
                            _this.pathpoirealtime = false;
                            _this.pathDrawn = false;
                            _this.previousPathdrawn = false;
                            _this.clearPolylines();
                            _this.history = true;
                            _this.mapService.removeAllRtMarkers();
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
                        var alert_7 = _this.alertCtrl.create({
                            title: 'Error',
                            subTitle: 'Informations erronées',
                            buttons: ['Ok']
                        });
                        alert_7.present();
                    }
                    _this.AllPaths = _this.historicalService.getAllMileages(_this.selectedDevice, {
                        startDate: startHour - (24 * 60 * 60 * 1000),
                        endDate: new Date(lastDateTime.getTime() + 3600000)
                    }).subscribe(function (mileages) {
                        if (_this.mileages) {
                            _this.pathpoirealtime = false;
                            _this.pathDrawn = false;
                            _this.previousPathdrawn = false;
                            _this.clearPolylines();
                            _this.mapService.removeAllRtMarkers();
                            _this.history = true;
                        }
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
            var alert_8 = this.alertCtrl.create({
                title: 'Historique',
                subTitle: 'Veuillez choisir un véhicule ',
                buttons: ['Ok']
            });
            alert_8.present();
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
        var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"](beginStopTime);
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
        var mileageListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_23__mileage_mileage__["a" /* MileageComponent */], {
            mileages: this.mileages,
            totalMileage: this.totalMileage
        });
        if (this.mileages == null) {
            var alert_9 = this.alertCtrl.create({
                title: 'Historique',
                subTitle: 'Aucune informations',
                buttons: ['Ok']
            });
            alert_9.present();
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
                    var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"](coordinate.date);
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
                var pointDatePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"](stop.beginStopTime);
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
            var alert_10 = this.alertCtrl.create({
                title: 'Historique',
                subTitle: 'Aucune informations',
                buttons: ['Ok']
            });
            alert_10.present();
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
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])('mycontent'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */])
], Historical.prototype, "nav", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])('myGauge'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_27__assets_jqwidgets_ts_angular_jqxgauge__["a" /* jqxGaugeComponent */])
], Historical.prototype, "myGauge", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])('gaugeValue'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_core__["ElementRef"])
], Historical.prototype, "gaugeValue", void 0);
Historical = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'page-historical',
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["trigger"])('myAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["transition"])(':enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["style"])({
                        transform: 'translateY(100%)',
                        opacity: 0
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["animate"])('200ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["style"])({
                        transform: 'translateY(0)',
                        'opacity': 1
                    }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["transition"])(':leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["style"])({
                        transform: 'translateY(0)',
                        'opacity': 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["animate"])('400ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["style"])({
                        transform: 'translateY(100%)',
                        'opacity': 0
                    }))
                ])
            ])
        ],template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\historical\historical.html"*/'<!-- margin-top:20px; -->\n\n<ion-header style=" height:48px;margin-top:20px;">\n\n  <!--margin-top:20px;-->\n\n  <ion-fab top left outline class="ion-fab1" #fab style="margin-top:-7px;">\n\n    <button ion-fab mini outline style="margin-top:0px;margin-left: -5px !important;background-color:rgba(0,0,0,0.6);align-items:center;align-content: center;"\n\n      *ngIf="Root==true" (click)="openmenu()">\n\n      <i class="fa fa-list" aria-hidden="true"></i>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab left *ngIf="resultopened==true" style="margin-top:-5px;margin-left:35px">\n\n    <button ion-fab mini (click)="openResultsModal()">\n\n      <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab left *ngIf="openStopResult==true" style="margin-top:-5px;margin-left:35px">\n\n    <button ion-fab mini (click)="openStopsResultsModal()">\n\n      <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab left *ngIf="openMileageResult==true" style="margin-top:-5px;margin-left:35px;">\n\n    <button ion-fab mini (click)="openMileageResultModal()">\n\n      <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab top left outline class="ion-fab1" #fab style="margin-top:-7px;margin-left: -5px !important;">\n\n    <button ion-fab mini outline style="margin-right: -5px !important;background-color:rgba(0,0,0,0.6);align-items:center;align-content: center;"\n\n      *ngIf="Root==false" (click)="logout()">\n\n      <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab top right style="margin-top:-7px;">\n\n    <button ion-fab mini round outline strong (click)="calldriver(driverphone)" color="primary" style="margin-top:0px;margin-right: -5px !important;background-color:rgb(70, 238, 14)">\n\n      <ion-icon name="call"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-title>\n\n    <button ion-button round style="background-color:rgba(0,0,0,0.2);color:white;font-size:5vw;width:8 0%;height:100%;" (click)="openmodalrealtime()">{{matricule}}</button>\n\n  </ion-title>\n\n\n\n</ion-header>\n\n\n\n<ion-content [ngStyle]="{ \'margin-top\': marginTop} ">\n\n  <ion-fab top left *ngIf="pathDrawn == true && previousPathdrawn==true">\n\n    <button ion-fab mini (click)="clearPolylines()" color="danger">\n\n      <ion-icon name="close"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-fab top left *ngIf="pathDrawn == false && previousPathdrawn==true && selectedDevice!==null">\n\n    <button ion-fab mini (click)="displayCurrentPath(selectedDevice)" [ngStyle]="{\'background-color\': \'rgb(70, 238, 14)\'}">\n\n      <ion-icon name="arrow-forward"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <div class="leaflet-top leaflet-right" style="margin-top:85px; margin-right:2px;">\n\n    <div class="pois-toggle " (click)="drawPointInterests()">\n\n      <div class=" leaflet-bar leaflet-control">\n\n        <button title="Afficher/Cacher Poi" style="outline: none;height:30px;width:30px;background-color:white;  border-radius: 5px;">\n\n          <ion-icon ios="ios-eye-off" md="md-eye-off"></ion-icon>\n\n        </button>\n\n      </div>\n\n    </div>\n\n      <div *ngIf="!history" class="pois-toggle " (click)="openPoiModal()">\n\n        <div class=" leaflet-bar leaflet-control">\n\n          <button title="Afficher/Cacher Poi" style="outline: none;height:30px;width:30px;background-color:white;    border-radius: 5px;">\n\n            <ion-icon ios="ios-pin" md="md-pin"></ion-icon>\n\n          </button>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  <!-- Leaflet Map -->\n\n  <div id="historicalMap" class="leaflet-pseudo-fullscreen leaflet-fullscreen-on" style="height: 94%!important; top: 6.5% !important;"></div>\n\n</ion-content>\n\n<ion-footer *ngIf="show" [@myAnimation] style="text-align:left;">\n\n  <!-- <div [ngStyle]="{\'margin-bottom\':getShowDashbord()+\'px\'}">\n\n        <jqxGauge #myGauge \n\n            [height]=\'180\' [startAngle]="16"\n\n            [animationDuration]="1500"\n\n            [ranges]="ranges" [cap]="cap" [border]="border" \n\n            [ticksMinor]="ticksMinor" [ticksMajor]="ticksMajor"\n\n            [labels]="labels" [pointer]="pointer"> \n\n        </jqxGauge>\n\n      </div> -->\n\n  <ion-navbar style="height:80px">\n\n    <!-- <ion-label style="font-size:11.5px;padding-left:10px;">\n\n      <ion-icon ios="ios-pin" md="md-pin"></ion-icon> {{relativeposition}}</ion-label> -->\n\n    <ion-fab top left style="align-items:center;margin-left:50px;" (click)="drawpath()">\n\n      <button ion-fab mini style="background-color:#7dd8cf">\n\n          <i class="fa fa-location-arrow" aria-hidden="true"><br><b style="font-size:10px">OK</b> </i>   </button>\n\n    </ion-fab>\n\n    <ion-fab top left style="align-items:center;margin-left:100px;" (click)="openFormModal()">\n\n        <button ion-fab mini color="primary">\n\n            <i class="fa fa-history" aria-hidden="true"></i>\n\n        </button>\n\n      </ion-fab>\n\n      <ion-fab top left style="align-items:center;margin-left:150px;" (click)="openParc()">\n\n          <button ion-fab mini style="background-color:#8aa4af" >\n\n              <ion-icon ios="ios-car" md="md-car"></ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n    <!-- <button ion-button round outline strong (click)="openFormModal()" style="width:30%;height:30px;font-size: 4vw;">\n\n      Historique </button>\n\n    <button ion-button round outline strong (click)="openParc()" color="secondary" style="width:22%;height:30px;font-size: 4vw;">\n\n      G.Park\n\n    </button> -->\n\n  </ion-navbar>\n\n  <ion-fab top left>\n\n    <button ion-fab mini  color="danger">\n\n      <ion-icon ios="ios-power" md="md-power"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab color="danger" (click)="AlertArretMoteur(selectedDevice)">\n\n        <ion-icon ios="ios-square" md="md-square"></ion-icon>\n\n      </button>\n\n      <button ion-fab color="secondary" (click)="AlertLancementMoteur(selectedDevice)">\n\n        <ion-icon ios="ios-play" md="md-play"></ion-icon>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\historical\historical.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_26_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_24__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* ViewController */] /*, private callNumber: CallNumber,*/, __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["DecimalPipe"], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_16__providers_real_time_service__["a" /* RealTimeService */], __WEBPACK_IMPORTED_MODULE_14__utils_geocoding_service__["a" /* GeocodingService */], __WEBPACK_IMPORTED_MODULE_10__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_9__providers_historical_service__["a" /* HistoricalService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__utils_map_service__["a" /* MapService */]])
], Historical);

//# sourceMappingURL=historical.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_nav_params__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__historical_historical__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_real_time_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_historical_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_management_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(74);
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
    function HomePage(storage, navParams, historicalService, app, loadingCtrl, realTimeService, dataManagementService, navCtrl, signinService, toastController) {
        this.storage = storage;
        this.navParams = navParams;
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__historical_historical__["a" /* Historical */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\home\home.html"*/' <ion-header>\n\n  <ion-navbar >\n\n    <ion-title > <a style="color:white">Bienvenue</a></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-login">\n\n \n\n  <ion-card class="login-card">\n\n    <ion-card-content>\n\n      <ion-list no-line>\n\n       <ion-item>\n\n          <ion-input type="text" [(ngModel)]="login" name="login" placeholder="Identifiant" ></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n         \n\n          <ion-input type="password" [(ngModel)]="mdp" name="mdp" placeholder="Mot de passe" ></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <button  margin-top ion-button margin-right block (click)=Signing() [ngStyle]="{\'background-color\': buttonColor}">\n\n      Connexion\n\n      </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n       <ion-title> <img src="assets/img/logorim.jpg" height="60" /></ion-title>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_historical_service__["a" /* HistoricalService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_real_time_service__["a" /* RealTimeService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_login__["a" /* SigningService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 176:
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
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentCirculationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_nav_params__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_document_circulation_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_events__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__doc_circ_aff_doc_circ__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_modal_modal_controller__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DocumentCirculationComponent = (function () {
    function DocumentCirculationComponent(documentService, events, navParams, modalCtrl) {
        this.documentService = documentService;
        this.events = events;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.insuranceProviders = [];
        this.otherProviders = [];
        this.idProvider = 0;
        this.listInsurance = [];
        this.listVisit = [];
        this.listCertification = [];
        this.listPermit = [];
        this.listTaxe = [];
        this.insurance = new __WEBPACK_IMPORTED_MODULE_3__model_index__["f" /* RunningDocument */]();
        this.showInsurance = false;
        this.showVisit = false;
        this.showCertification = false;
        this.showPermit = false;
        this.showTaxe = false;
        this.click = false;
        this.insuranceRequest = true;
        this.visitRequest = true;
        this.certificationRequest = true;
        this.permitRequest = true;
        this.taxeRequest = true;
        this.download = true;
        this.showProvider = false;
        this.providerName = null;
        this.datesExpiration = new __WEBPACK_IMPORTED_MODULE_3__model_index__["c" /* LastDates */]();
        this.indexFile = -1;
        this.item = null;
        this.dns = __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["a" /* dns */];
        this.date = new __WEBPACK_IMPORTED_MODULE_3__model_index__["a" /* DateInterval */]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_6__providers_global_config__["a" /* dns */] + 'upload'
        });
        this.idVehicule = navParams.data.idDevice.idVehicule;
        this.matricule = navParams.data.matricule;
    }
    DocumentCirculationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
        this.uploader.authToken = this.currentuser.token;
        this.documentService.getProviders("INSURANCE").subscribe(function (response) {
            _this.insuranceProviders = response;
        });
        this.documentService.getProviders("OTHER").subscribe(function (response) {
            _this.otherProviders = response;
        });
        this.datesExpiration = new __WEBPACK_IMPORTED_MODULE_3__model_index__["c" /* LastDates */]();
        this.insuranceRequest = true;
        this.visitRequest = true;
        this.certificationRequest = true;
        this.permitRequest = true;
        this.taxeRequest = true;
        this.documentService.getExpirationDates(this.idVehicule).subscribe(function (response) {
            if (response.insurance != null) {
                _this.datesExpiration.insurance = new Date(response.insurance);
                _this.dateinsurance = _this.datesExpiration.insurance.toISOString();
            }
            if (response.visit != null) {
                _this.datesExpiration.visit = new Date(response.visit);
                _this.datevisit = _this.datesExpiration.visit.toISOString();
            }
            if (response.certification != null) {
                _this.datesExpiration.certification = new Date(response.certification);
                _this.datecertification = _this.datesExpiration.certification.toISOString();
            }
            if (response.taxe != null) {
                _this.datesExpiration.taxe = new Date(response.taxe);
                _this.datetaxe = _this.datesExpiration.taxe.toISOString();
            }
            if (response.permit != null) {
                _this.datesExpiration.permit = new Date(response.permit);
                _this.datepermit = _this.datesExpiration.permit.toISOString();
            }
            if (_this.datesExpiration.insurance == null) {
                _this.datesExpiration.insurance = new Date(1483142400000);
                _this.dateinsurance = _this.datesExpiration.insurance.toISOString();
            }
            if (_this.datesExpiration.visit == null) {
                _this.datesExpiration.visit = new Date(1483142400000);
                _this.datevisit = _this.datesExpiration.visit.toISOString();
            }
            if (_this.datesExpiration.certification == null) {
                _this.datesExpiration.certification = new Date(1483142400000);
                _this.datecertification = _this.datesExpiration.certification.toISOString();
            }
            if (_this.datesExpiration.taxe == null) {
                _this.datesExpiration.taxe = new Date(1483142400000);
                _this.datetaxe = _this.datesExpiration.taxe.toISOString();
            }
            if (_this.datesExpiration.permit == null) {
                _this.datesExpiration.permit = new Date(1483142400000);
                _this.datepermit = _this.datesExpiration.permit.toISOString();
            }
        });
        this.subscriptionUpload = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].interval(100).subscribe(function (x) {
            _this.uploader.onAfterAddingFile = function (file) {
                file.withCredentials = false;
            };
            if (_this.item != null && _this.indexFile >= 0)
                if (_this.uploader.queue.length > 0) {
                    if (_this.uploader.queue[_this.indexFile] != undefined && _this.uploader.queue[_this.indexFile].isSuccess) {
                        _this.item.isSuccess = false;
                        _this.item.remove();
                        _this.documentService.readData(_this.idVehicule, _this.insurance.type, _this.item.file.name).subscribe(function (response) {
                            if (response.length > 0) {
                                for (var i = 0; i < response.length; i++) {
                                    if (_this.insurance.type == "INSURANCE") {
                                        _this.listInsurance.push(response[i]);
                                        if (_this.datesExpiration.insurance.getTime() < response[i].endTime) {
                                            _this.datesExpiration.insurance = new Date(response[i].endTime);
                                            _this.dateinsurance = _this.datesExpiration.insurance.toISOString();
                                        }
                                    }
                                    if (_this.insurance.type == "VISIT") {
                                        _this.listVisit.push(response[i]);
                                        if (_this.datesExpiration.visit.getTime() < response[i].endTime) {
                                            _this.datesExpiration.visit = new Date(response[i].endTime);
                                            _this.datevisit = _this.datesExpiration.visit.toISOString();
                                        }
                                    }
                                    if (_this.insurance.type == "OPERATIONAL_CERTIFICATION") {
                                        _this.listCertification.push(response[i]);
                                        if (_this.datesExpiration.certification.getTime() < response[i].endTime) {
                                            _this.datesExpiration.certification = new Date(response[i].endTime);
                                            _this.datecertification = _this.datesExpiration.certification.toISOString();
                                        }
                                    }
                                    if (_this.insurance.type == "PERMIT_CIRCULATION") {
                                        _this.listPermit.push(response[i]);
                                        if (_this.datesExpiration.permit.getTime() < response[i].endTime) {
                                            _this.datesExpiration.permit = new Date(response[i].endTime);
                                            _this.datepermit = _this.datesExpiration.permit.toISOString();
                                        }
                                    }
                                    if (_this.insurance.type == "ROAD_TAXES") {
                                        _this.listTaxe.push(response[i]);
                                        if (_this.datesExpiration.taxe.getTime() < response[i].endTime) {
                                            _this.datesExpiration.taxe = new Date(response[i].endTime);
                                            _this.datetaxe = _this.datesExpiration.taxe.toISOString();
                                        }
                                    }
                                }
                            }
                            else { }
                        }, function () { });
                        _this.item = null;
                    }
                }
        });
        this.config();
    };
    DocumentCirculationComponent.prototype.config = function () {
        this.operationTime = new Date();
        this.endTime = new Date();
        this.endTime.setFullYear(this.endTime.getFullYear() + 1);
        this.insurance.cost = 0;
        this.insurance.id = 0;
    };
    DocumentCirculationComponent.prototype.closeModal = function () {
        this.events.publish('Dismiss', null);
    };
    DocumentCirculationComponent.prototype.changeType = function (type) {
        this.insurance.type = type;
    };
    DocumentCirculationComponent.prototype.loadListInsurance = function () {
        var _this = this;
        if (this.insuranceProviders.length > 0) {
            this.idProvider = this.insuranceProviders[0].id;
            this.showProvider = false;
        }
        this.changeType("INSURANCE");
        this.listInsurance = [];
        this.documentService.getListDocuments(this.idVehicule, this.insurance.type).subscribe(function (response) {
            var data = { insurance: _this.insurance, listInsurance: response, datesExpiration: _this.datesExpiration, idVehicule: _this.idVehicule };
            var doccirc = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__doc_circ_aff_doc_circ__["a" /* DocCirc */], { data: data });
            doccirc.present();
        });
        if (this.insuranceProviders.length > 0) {
            this.idProvider = this.insuranceProviders[0].id;
        }
    };
    DocumentCirculationComponent.prototype.loadListVisit = function () {
        var _this = this;
        this.changeType("VISIT");
        if (this.visitRequest) {
            this.listVisit = [];
            this.documentService.getListDocuments(this.idVehicule, this.insurance.type).subscribe(function (response) {
                var data = { insurance: _this.insurance, listInsurance: response, datesExpiration: _this.datesExpiration, idVehicule: _this.idVehicule };
                var doccirc = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__doc_circ_aff_doc_circ__["a" /* DocCirc */], { data: data });
                doccirc.present();
            });
        }
        if (this.otherProviders.length > 0) {
            this.idProvider = this.otherProviders[0].id;
        }
    };
    DocumentCirculationComponent.prototype.loadListCertification = function () {
        var _this = this;
        this.changeType("OPERATIONAL_CERTIFICATION");
        if (this.certificationRequest) {
            this.listCertification = [];
            this.documentService.getListDocuments(this.idVehicule, this.insurance.type).subscribe(function (response) {
                var data = { insurance: _this.insurance, listInsurance: response, datesExpiration: _this.datesExpiration, idVehicule: _this.idVehicule };
                var doccirc = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__doc_circ_aff_doc_circ__["a" /* DocCirc */], { data: data });
                doccirc.present();
            });
        }
    };
    DocumentCirculationComponent.prototype.loadListPermit = function () {
        var _this = this;
        this.changeType("PERMIT_CIRCULATION");
        if (this.permitRequest) {
            this.listPermit = [];
            this.documentService.getListDocuments(this.idVehicule, this.insurance.type).subscribe(function (response) {
                var data = { insurance: _this.insurance, listInsurance: response, datesExpiration: _this.datesExpiration, idVehicule: _this.idVehicule };
                var doccirc = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__doc_circ_aff_doc_circ__["a" /* DocCirc */], { data: data });
                doccirc.present();
            });
        }
        if (this.otherProviders.length > 0) {
            this.idProvider = this.otherProviders[0].id;
        }
    };
    DocumentCirculationComponent.prototype.loadListTaxe = function () {
        var _this = this;
        this.changeType("ROAD_TAXES");
        if (this.taxeRequest) {
            this.listTaxe = [];
            this.documentService.getListDocuments(this.idVehicule, this.insurance.type).subscribe(function (response) {
                var data = { insurance: _this.insurance, listInsurance: response, datesExpiration: _this.datesExpiration, idVehicule: _this.idVehicule };
                var doccirc = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__doc_circ_aff_doc_circ__["a" /* DocCirc */], { data: data });
                doccirc.present();
            });
        }
        if (this.otherProviders.length > 0) {
            this.idProvider = this.otherProviders[0].id;
        }
    };
    return DocumentCirculationComponent;
}());
DocumentCirculationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\documentcirculation\documentcirculation.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title style="text-align: center;font-size: 4vw;"><a style="font-size: 4vw;color:white"> {{matricule}} </a> </ion-title>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only (click)="closeModal()">\n\n          <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n   \n\n   <br>\n\n   <br>\n\n   <br>\n\n      \n\n    <button ion-button full outline  (click)="loadListInsurance()" >Gestion Assurances </button>\n\n    <br>\n\n  \n\n    <button ion-button full outline  (click)="loadListVisit()" >Gestion Visite</button>\n\n<br>\n\n   \n\n    <button ion-button full outline  (click)="loadListCertification()">Gestion Vignette</button>\n\n    <br>\n\n    <button ion-button full outline (click)="loadListCertification()" >Gestion certification exploitation</button>\n\n  <br>\n\n    <button ion-button full outline (click)="loadListPermit()" >Gestion permis circulation </button>\n\n  \n\n  </ion-content>\n\n '/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\documentcirculation\documentcirculation.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_document_circulation_service__["a" /* DocumentCirculationService */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
], DocumentCirculationComponent);

//# sourceMappingURL=documentcirculation.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocCirc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_components_modal_modal_controller__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_params__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_document_circulation_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__doc_circ_form_doc_circ_form__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DocCirc = (function () {
    function DocCirc(navParams, viewCtrl, documentService, modalCtrl, alertCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.documentService = documentService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.data = [];
        this.insuranceProviders = [];
        this.otherProviders = [];
        this.listInsurance = [];
        this.listVisit = [];
        this.listCertification = [];
        this.listPermit = [];
        this.listTaxe = [];
        this.datesExpiration = new __WEBPACK_IMPORTED_MODULE_4__model_index__["c" /* LastDates */]();
        this.all = navParams.get('data');
        this.listInsurance = this.all.listInsurance;
        this.insurance = this.all.insurance;
        this.datesExpiration = this.all.datesExpiration;
        this.idVehicule = this.all.idVehicule;
    }
    DocCirc.prototype.ngOninit = function () {
        this.data = this.navParams.get('data');
    };
    DocCirc.prototype.ngAfterViewInit = function () {
    };
    DocCirc.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    DocCirc.prototype.update = function (item, i) {
        var _this = this;
        this.index = i;
        item.type = this.insurance.type;
        console.log(item);
        var doccircform = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__doc_circ_form_doc_circ_form__["a" /* DocCircForm */], {
            item: item
        });
        doccircform.present();
        doccircform.onDidDismiss(function (data) {
            if (data) {
                _this.documentService.update(data.insurance, data.idProvider, data.providerName).subscribe(function (response) {
                    if (data.insurance.type == "INSURANCE") {
                        _this.insuranceProviders = _this.insuranceProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                        var provider = new __WEBPACK_IMPORTED_MODULE_4__model_index__["e" /* Provider */]();
                        provider.id = response.idProvider;
                        provider.name = response.providerName;
                        _this.insuranceProviders.push(provider);
                        _this.listInsurance = _this.listInsurance.filter(function (insurance) { return insurance.id !== data.insurance.id; });
                        _this.listInsurance.splice(_this.index, 0, response);
                        // if (this.datesExpiration.insurance.getTime() < response.endTime) {
                        //   this.datesExpiration.insurance = new Date(response.endTime);
                        // }
                    }
                    if (data.insurance.type == "VISIT") {
                        _this.otherProviders = _this.otherProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                        var provider = new __WEBPACK_IMPORTED_MODULE_4__model_index__["e" /* Provider */]();
                        provider.id = response.idProvider;
                        provider.name = response.providerName;
                        _this.otherProviders.push(provider);
                        _this.listVisit = _this.listVisit.filter(function (visit) { return visit.id !== data.insurance.id; });
                        _this.listVisit.splice(_this.index, 0, response);
                        // if (this.datesExpiration.visit.getTime() <response.endTime) {
                        //     this.datesExpiration.visit = new Date(response.endTime);
                        // }
                    }
                    if (data.insurance.type == "OPERATIONAL_CERTIFICATION") {
                        _this.otherProviders = _this.otherProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                        var provider = new __WEBPACK_IMPORTED_MODULE_4__model_index__["e" /* Provider */]();
                        provider.id = response.idProvider;
                        provider.name = response.providerName;
                        _this.otherProviders.push(provider);
                        _this.listCertification = _this.listCertification.filter(function (certification) { return certification.id !== data.insurance.id; });
                        _this.listCertification.splice(_this.index, 0, response);
                        // if (this.datesExpiration.certification.getTime() < response.endTime) {
                        //     this.datesExpiration.certification = new Date(response.endTime);
                        // }
                    }
                    if (data.insurance.type == "PERMIT_CIRCULATION") {
                        _this.otherProviders = _this.otherProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                        var provider = new __WEBPACK_IMPORTED_MODULE_4__model_index__["e" /* Provider */]();
                        provider.id = response.idProvider;
                        provider.name = response.providerName;
                        _this.otherProviders.push(provider);
                        _this.listPermit = _this.listPermit.filter(function (permit) { return permit.id !== data.insurance.id; });
                        _this.listPermit.splice(_this.index, 0, response);
                        // if (this.datesExpiration.permit.getTime() < response.endTime) {
                        //     this.datesExpiration.permit = new Date(response.endTime);
                        // }
                    }
                    if (data.insurance.type == "ROAD_TAXES") {
                        _this.otherProviders = _this.otherProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                        var provider = new __WEBPACK_IMPORTED_MODULE_4__model_index__["e" /* Provider */]();
                        provider.id = response.idProvider;
                        provider.name = response.providerName;
                        _this.otherProviders.push(provider);
                        _this.listTaxe = _this.listTaxe.filter(function (taxe) { return taxe.id !== data.insurance.id; });
                        _this.listTaxe.splice(_this.index, 0, response);
                        // if (this.datesExpiration.taxe.getTime() < response.endTime) {
                        //     this.datesExpiration.taxe = new Date(response.endTime);
                        // }
                    }
                    // this.myModalAddClose.nativeElement.click();
                    // this.modalInsurance.nativeElement.click();
                    // this.showProvider = false;
                    // this.providerName = null;
                    // this.config();
                });
            }
        });
    };
    DocCirc.prototype.add = function () {
        var _this = this;
        this.insurance.operationTime = new Date();
        this.insurance.endTime = new Date();
        this.insurance.endTime.setFullYear(this.insurance.endTime.getFullYear() + 1);
        var doccircform = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__doc_circ_form_doc_circ_form__["a" /* DocCircForm */], {
            item: this.insurance
        });
        doccircform.present();
        doccircform.onDidDismiss(function (data) {
            if (data) {
                _this.documentService.add(data.insurance, _this.idVehicule, data.idProvider, data.providerName).subscribe(function (response) {
                    if (data.insurance.type == "INSURANCE") {
                        _this.listInsurance.push(response);
                        _this.insuranceProviders = _this.insuranceProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                        var provider = new __WEBPACK_IMPORTED_MODULE_4__model_index__["e" /* Provider */]();
                        provider.id = response.idProvider;
                        provider.name = response.providerName;
                        _this.insuranceProviders.push(provider);
                        _this.addProvider(_this.insuranceProviders, response.idProvider, response.providerName);
                        if (_this.datesExpiration.insurance.getTime() < response.endTime) {
                            _this.datesExpiration.insurance = new Date(response.endTime);
                        }
                    }
                    if (data.insurance.type == "VISIT") {
                        _this.listInsurance.push(response);
                        _this.otherProviders = _this.otherProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                        var provider = new __WEBPACK_IMPORTED_MODULE_4__model_index__["e" /* Provider */]();
                        provider.id = response.idProvider;
                        provider.name = response.providerName;
                        _this.otherProviders.push(provider);
                        if (_this.datesExpiration.visit.getTime() < response.endTime) {
                            _this.datesExpiration.visit = new Date(response.endTime);
                        }
                    }
                    if (data.insurance.type == "OPERATIONAL_CERTIFICATION") {
                        _this.listInsurance.push(response);
                        _this.otherProviders = _this.otherProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                        var provider = new __WEBPACK_IMPORTED_MODULE_4__model_index__["e" /* Provider */]();
                        provider.id = response.idProvider;
                        provider.name = response.providerName;
                        _this.otherProviders.push(provider);
                        if (_this.datesExpiration.certification.getTime() < response.endTime) {
                            _this.datesExpiration.certification = new Date(response.endTime);
                        }
                    }
                    if (data.insurance.type == "PERMIT_CIRCULATION") {
                        _this.listInsurance.push(response);
                        _this.otherProviders = _this.otherProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                        var provider = new __WEBPACK_IMPORTED_MODULE_4__model_index__["e" /* Provider */]();
                        provider.id = response.idProvider;
                        provider.name = response.providerName;
                        _this.otherProviders.push(provider);
                        if (_this.datesExpiration.permit.getTime() < response.endTime) {
                            _this.datesExpiration.permit = new Date(response.endTime);
                        }
                    }
                    if (data.insurance.type == "ROAD_TAXES") {
                        _this.listInsurance.push(response);
                        _this.otherProviders = _this.otherProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                        var provider = new __WEBPACK_IMPORTED_MODULE_4__model_index__["e" /* Provider */]();
                        provider.id = response.idProvider;
                        provider.name = response.providerName;
                        _this.otherProviders.push(provider);
                        if (_this.datesExpiration.taxe.getTime() < response.endTime) {
                            _this.datesExpiration.taxe = new Date(response.endTime);
                        }
                    }
                }, function () { });
            }
        });
    };
    DocCirc.prototype.addProvider = function (list, idProvider, providerName) {
        list = list.filter(function (provider) { return provider.id !== idProvider; });
        var provider = new __WEBPACK_IMPORTED_MODULE_4__model_index__["e" /* Provider */]();
        provider.id = idProvider;
        provider.name = providerName;
        list.push(provider);
    };
    return DocCirc;
}());
DocCirc = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\documentcirculation\doc-circ-aff\doc-circ.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title style="text-align: center;font-size: 4vw;">\n\n      <a style="font-size: 4vw;">{{insurance.type}}</a>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only style="color:white" (click)="closeModal()">\n\n        <ion-icon name="arrow-down"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col col-3 col-sm-3 col-md-3 col-xs-12>\n\n          Date début\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-3 col-sm-3 col-md-3 col-xs-12>\n\n          Date fin\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-3 col-sm-3 col-md-3 col-xs-12>\n\n          Fournisseur\n\n        </ion-col>\n\n        <ion-col col-3 col-sm-3 col-md-3 col-xs-12>\n\n          coût\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card *ngFor="let item of listInsurance; let i = index" (click)="update(item,i)">\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col col-3 col-sm-3 col-md-3 col-xs-12>\n\n          {{item.operationTime |  date:\'dd-MM-yy\'}}\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-3 col-sm-3 col-md-3 col-xs-12>\n\n          {{item.endTime |  date:\'dd-MM-yy\'}}\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-3 col-sm-3 col-md-3 col-xs-12>\n\n          {{item.providerName}}\n\n        </ion-col>\n\n        <ion-col col-3 col-sm-3 col-md-3 col-xs-12>\n\n          {{item.cost}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-fab right bottom>\n\n      <button ion-fab (click)="add()" ><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\documentcirculation\doc-circ-aff\doc-circ.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_document_circulation_service__["a" /* DocumentCirculationService */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular_components_modal_modal_controller__["a" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
], DocCirc);

//# sourceMappingURL=doc-circ.js.map

/***/ }),

/***/ 212:
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
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocCircForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_nav_params__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_document_circulation_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocCircForm = (function () {
    function DocCircForm(navParams, viewCtrl, documentService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.documentService = documentService;
        this.insuranceProviders = [];
        this.otherProviders = [];
        this.showfournisseur = false;
        this.idProvider = 0;
        this.data = navParams.get('item');
        this.providerName = this.data.providerName;
        this.datedebut = (new Date(this.data.operationTime)).toISOString();
        this.datefin = (new Date(this.data.endTime)).toISOString();
    }
    DocCircForm.prototype.ngOnInit = function () {
        var _this = this;
        this.documentService.getProviders("INSURANCE").subscribe(function (response) {
            _this.insuranceProviders = response;
        });
        this.documentService.getProviders("OTHER").subscribe(function (response) {
            _this.otherProviders = response;
        });
    };
    DocCircForm.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    DocCircForm.prototype.update = function () {
        this.data.operationTime = (new Date(this.datedebut)).getTime();
        this.data.endTime = (new Date(this.datefin)).getTime();
        var data = { insurance: this.data, idProvider: this.idProvider, providerName: this.providerName };
        this.viewCtrl.dismiss(data);
    };
    DocCircForm.prototype.typefournisseur = function (type) {
        var _this = this;
        if (type == "0") {
            this.showfournisseur = true;
            this.providerName = "";
        }
        else {
        }
        this.insuranceProviders.forEach(function (fournisseur) {
            if (fournisseur == type) {
                _this.idProvider = fournisseur.id;
            }
        });
        this.data.providerName = this.providerName;
    };
    return DocCircForm;
}());
DocCircForm = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\documentcirculation\doc-circ-aff\doc-circ-form\doc-circ-form.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title style="text-align: center;font-size: 4vw;">\n\n      <a style="font-size: 4vw;">Ajouter </a>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only style="color:white" (click)="closeModal()">\n\n        <ion-icon name="arrow-down"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item style="padding-top:80px">\n\n      <ion-label>Date début</ion-label>\n\n      <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="datedebut"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Date fin</ion-label>\n\n      <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="datefin"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item *ngIf="!showfournisseur && data.type==\'INSURANCE\'">\n\n      <ion-label>Fournisseur</ion-label>\n\n      <ion-select [(ngModel)]="providerName" (ionChange)="typefournisseur(providerName)" interface="popover">\n\n        <ion-option *ngFor="let fournisseur of insuranceProviders" [value]="fournisseur.name">{{fournisseur.name}}</ion-option>\n\n        <ion-option value="0">Autres</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngIf="showfournisseur && data.type==\'INSURANCE\'">\n\n      <ion-label>Fournisseur</ion-label>\n\n      <ion-input type="text" placeholder="Fournisseur" [(ngModel)]="providerName"></ion-input>\n\n    </ion-item>\n\n\n\n        <ion-item *ngIf="!showfournisseur && data.type!=\'INSURANCE\'">\n\n            <ion-label>Fournisseur</ion-label>\n\n            <ion-select [(ngModel)]="providerName" (ionChange)="typefournisseur(providerName)" interface="popover">\n\n              <ion-option *ngFor="let fournisseur of otherProviders" [value]="fournisseur.name">{{fournisseur.name}}</ion-option>\n\n              <ion-option value="0">Autres</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="showfournisseur && data.type!=\'INSURANCE\'">\n\n            <ion-label>Fournisseur</ion-label>\n\n            <ion-input type="text" placeholder="Fournisseur" [(ngModel)]="providerName"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n      <ion-label>coût</ion-label>\n\n      <ion-input type="number" [(ngModel)]="data.cost"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button center round (click)="update()">Enregistrer\n\n    <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n  </button>\n\n\n\n  <button ion-button center round (click)="closeModal()">Annuler\n\n    <!--<ion-icon style="margin-left: 5px" name="close"></ion-icon>-->\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\documentcirculation\doc-circ-aff\doc-circ-form\doc-circ-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_document_circulation_service__["a" /* DocumentCirculationService */]])
], DocCircForm);

//# sourceMappingURL=doc-circ-form.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VidangeForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_components_toast_toast_controller__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_oil_change_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VidangeForm = (function () {
    function VidangeForm(viewCtrl, toastCtrl, navParams, oilChangeService, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.oilChangeService = oilChangeService;
        this.alertCtrl = alertCtrl;
        this.showupdate = true;
        this.showtypemoteur = false;
        this.showtypehuile = false;
        this.showtypefair = false;
        this.showtypefcarburant = false;
        this.showtypefseparator = false;
        this.showfournisseur = false;
        this.listProviders = [];
        this.listType = [{
                name: "5000",
                value: 5000
            },
            {
                name: "8000",
                value: 8000
            },
            {
                name: "10000",
                value: 10000
            },
            {
                name: "15000",
                value: 15000
            },
            {
                name: "20000",
                value: 20000
            },
            {
                name: "30000",
                value: 30000
            },
            {
                name: "40000",
                value: 40000
            },
            {
                name: "50000",
                value: 50000
            },
            {
                name: "Autres",
                value: -1
            }
        ];
        this.oil = navParams.get('oil');
        if (this.oil.operationTime) {
            this.operationTime = (new Date(this.oil.operationTime)).toISOString();
        }
        else
            this.operationTime = (new Date()).toISOString();
        this.idProvider = this.oil.idProvider;
    }
    VidangeForm.prototype.ngOnInit = function () {
        var _this = this;
        this.oilChangeService.getProviders("MAINTENANCE").subscribe(function (response) {
            _this.listProviders = response;
            console.log(response);
        });
    };
    VidangeForm.prototype.precisionRound = function (number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    };
    VidangeForm.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    VidangeForm.prototype.typehmoteur = function (type) {
        if (type == -1) {
            this.showtypemoteur = true;
            this.oil.typeEngineOil = 0;
        }
    };
    VidangeForm.prototype.typehhuile = function (type) {
        if (type == -1) {
            this.showtypehuile = true;
            this.oil.typeOilF = 0;
        }
    };
    VidangeForm.prototype.typefair = function (type) {
        if (type == -1) {
            this.showtypefair = true;
            this.oil.typeAirF = 0;
        }
    };
    VidangeForm.prototype.typefcaruburant = function (type) {
        if (type == -1) {
            this.showtypefcarburant = true;
            this.oil.typeFuelF = 0;
        }
    };
    VidangeForm.prototype.typefseparator = function (type) {
        if (type == -1) {
            this.showtypefseparator = true;
            this.oil.typeSeparatorF = 0;
        }
    };
    VidangeForm.prototype.typefournisseur = function (type) {
        if (type == 0) {
            this.showfournisseur = true;
            this.oil.providerName = "";
            this.idProvider = -1;
        }
        this.idProvider = type;
    };
    VidangeForm.prototype.update = function () {
        this.oil.operationTime = new Date(this.operationTime);
        if (this.oil.engineOil != false || this.oil.oilF != false ||
            this.oil.airF != false || this.oil.fuelF != false ||
            this.oil.separatorF != false) {
            var valid1 = this.validationTypeEngineOil();
            var valid2 = this.validationTypeOilF();
            var valid3 = this.validationTypeAirF();
            var valid4 = this.validationTypeFuelF();
            var valid5 = this.validationTypeSeparatorF();
            if (valid1 && valid2 && valid3 && valid4 && valid5) {
                if (this.oil.cost >= 10) {
                    if (this.oil.quantity < 0) {
                        this.oil.quantity = 0;
                    }
                    var data = {
                        oil: this.oil,
                        idProvider: this.idProvider,
                        providerName: this.oil.providerName
                    };
                    this.viewCtrl.dismiss(data);
                }
            }
        }
    };
    VidangeForm.prototype.verify = function (value) {
        var found = false;
        for (var j = 0; j < this.listType.length; j++) {
            if (this.listType[j].value == value) {
                found = true;
                break;
            }
        }
        if (!found && value != 0) {
            return true;
        }
        return false;
    };
    VidangeForm.prototype.validationTypeEngineOil = function () {
        if (this.oil.engineOil && this.oil.typeEngineOil <= 0 || this.oil.quantity <= 0 && this.oil.engineOil) {
            if (this.oil.quantity <= 0) {
                var toast = this.toastCtrl.create({
                    message: 'Veuillez entrer une valeur supérieure a 0 pour la Quantité',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                //
            }
            if (this.oil.typeEngineOil <= 0) {
                var toast = this.toastCtrl.create({
                    message: 'Veuillez entrer une valeur pour le type H Moteur',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                // this.customOption.customToasterWarning(this.toastyService, 3000, "Veuillez entrer une valeur pour le type H Moteur");
            }
            return false;
        }
        if (!this.oil.engineOil) {
            this.oil.typeEngineOil = 0;
            //   console.log("here" + this.oilChange.typeEngineOil);
        }
        return true;
    };
    VidangeForm.prototype.validationTypeOilF = function () {
        if (this.oil.oilF && this.oil.typeOilF <= 0) {
            var toast = this.toastCtrl.create({
                message: 'Veuillez entrer une valeur pour le type F Huile',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            // this.customOption.customToasterWarning(this.toastyService, 3000, "Veuillez entrer une valeur pour le type F Huile");
            return false;
        }
        if (!this.oil.oilF) {
            this.oil.typeOilF = 0;
        }
        return true;
    };
    VidangeForm.prototype.validationTypeAirF = function () {
        if (this.oil.airF && this.oil.typeAirF <= 0) {
            var toast = this.toastCtrl.create({
                message: 'Veuillez entrer une valeur pour le type F Air',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            //   this.customOption.customToasterWarning(this.toastyService, 3000, "Veuillez entrer une valeur pour le type F Air");
            return false;
        }
        if (!this.oil.airF) {
            this.oil.typeAirF = 0;
        }
        return true;
    };
    VidangeForm.prototype.validationTypeFuelF = function () {
        if (this.oil.fuelF && this.oil.typeFuelF <= 0) {
            var toast = this.toastCtrl.create({
                message: 'Veuillez entrer une valeur pour le type F Carburant',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            //  this.customOption.customToasterWarning(this.toastyService, 3000, "Veuillez entrer une valeur pour le type F Carburant");
            return false;
        }
        if (!this.oil.fuelF) {
            this.oil.typeFuelF = 0;
        }
        return true;
    };
    VidangeForm.prototype.validationTypeSeparatorF = function () {
        if (this.oil.separatorF && this.oil.typeSeparatorF <= 0) {
            var toast = this.toastCtrl.create({
                message: 'Veuillez entrer une valeur pour le type F Séparateur',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            // this.customOption.customToasterWarning(this.toastyService, 3000, "Veuillez entrer une valeur pour le type F Séparateur ");
            return false;
        }
        if (!this.oil.separatorF) {
            this.oil.typeSeparatorF = 0;
        }
        return true;
    };
    VidangeForm.prototype.add = function () {
        if (this.oil.engineOil != false || this.oil.oilF != false ||
            this.oil.airF != false || this.oil.fuelF != false ||
            this.oil.separatorF != false) {
            var valid1 = this.validationTypeEngineOil();
            var valid2 = this.validationTypeOilF();
            var valid3 = this.validationTypeAirF();
            var valid4 = this.validationTypeFuelF();
            var valid5 = this.validationTypeSeparatorF();
            if (valid1 && valid2 && valid3 && valid4 && valid5) {
                if (this.oil.cost >= 10) {
                    if (this.oil.quantity < 0) {
                        this.oil.quantity = 0;
                    }
                    var data = {
                        oil: this.oil,
                        idProvider: this.idProvider,
                        providerName: this.oil.providerName
                    };
                    this.viewCtrl.dismiss(data);
                }
            }
        }
    };
    return VidangeForm;
}());
VidangeForm = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\vidange\vidange-form\vidange-form.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title style="text-align: center" *ngIf="showupdate">\n\n      <a style="color:white"> Ajouter </a>\n\n    </ion-title>\n\n    <ion-title style="text-align: center" *ngIf="!showupdate">\n\n      <a> Modifier</a>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only style="color:white" (click)="closeModal()">\n\n        <ion-icon name="arrow-down"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="ajoutcarburant" padding text-center style="background-color: rgb(255, 255, 255) ;">\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Date</ion-label>\n\n      <ion-datetime name="startDate"  displayFormat="DD/MM/YYYY, HH:mm"[(ngModel)]="operationTime" style="color:rgba(0,0,0)!important;"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-checkbox item-right  [(ngModel)]="oil.engineOil"></ion-checkbox>\n\n      <ion-label>F.Moteur</ion-label>\n\n    </ion-item>\n\n    <ion-item *ngIf="oil.engineOil && !showtypemoteur" >\n\n        <ion-label>Type</ion-label>\n\n        <ion-select [(ngModel)]="oil.typeEngineOil" (ionChange)="typehmoteur(oil.typeEngineOil)"  interface="popover">\n\n            <ion-option *ngFor="let type of listType"    [value]="type.value">{{type.name}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngIf="showtypemoteur && oil.engineOil">\n\n            <ion-label>Type</ion-label>\n\n            <ion-input type="number" [(ngModel)]="oil.typeEngineOil"></ion-input>\n\n     </ion-item>\n\n     <ion-item *ngIf="oil.engineOil">\n\n      <ion-label>Quantité</ion-label>\n\n      <ion-input type="number" [(ngModel)]="oil.quantity"></ion-input>\n\n</ion-item>\n\n    <!--   -->\n\n    <ion-item>\n\n      <ion-checkbox item-right  [(ngModel)]="oil.oilF"></ion-checkbox>\n\n      <ion-label>F.Huile</ion-label>\n\n    </ion-item>\n\n    <ion-item *ngIf="oil.oilF && !showtypehuile" >\n\n        <ion-label>Type</ion-label>\n\n        <ion-select [(ngModel)]="oil.typeOilF" (ionChange)="typehhuile(oil.typeOilF)" interface="popover">\n\n            <ion-option *ngFor="let type of listType"   [value]="type.value">{{type.name}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngIf="showtypehuile && oil.oilF">\n\n            <ion-label>Type</ion-label>\n\n            <ion-input type="number"  [(ngModel)]="oil.typeOilF"></ion-input>\n\n     </ion-item>\n\n           <!--   -->\n\n    <ion-item>\n\n            <ion-checkbox item-right  [(ngModel)]="oil.airF"></ion-checkbox>\n\n            <ion-label>F.Air</ion-label>\n\n          </ion-item>\n\n          <ion-item *ngIf="oil.airF && !showtypefair" >\n\n              <ion-label>Type</ion-label>\n\n              <ion-select [(ngModel)]="oil.typeAirF" (ionChange)="typefair(oil.typeAirF)" interface="popover">\n\n                  <ion-option *ngFor="let type of listType"   [value]="type.value">{{type.name}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          <ion-item *ngIf="showtypefair && oil.airF">\n\n                  <ion-label>Type</ion-label>\n\n                  <ion-input type="number"  [(ngModel)]="oil.typeAirF"></ion-input>\n\n           </ion-item>\n\n             <!--   -->\n\n    <ion-item>\n\n      <ion-checkbox item-right  [(ngModel)]="oil.fuelF"></ion-checkbox>\n\n      <ion-label>F.Carburant</ion-label>\n\n    </ion-item>\n\n    <ion-item *ngIf="oil.fuelF && !showtypefcarburant" >\n\n        <ion-label>Type</ion-label>\n\n        <ion-select [(ngModel)]="oil.typeFuelF" (ionChange)="typefcaruburant(oil.typeFuelF)" interface="popover">\n\n            <ion-option *ngFor="let type of listType"   [value]="type.value">{{type.name}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngIf="showtypefcarburant && oil.fuelF">\n\n            <ion-label>Type</ion-label>\n\n            <ion-input type="number"  [(ngModel)]="oil.typeFuelF"></ion-input>\n\n     </ion-item>\n\n           <!--   -->\n\n             \n\n             <ion-item>\n\n              <ion-checkbox item-right  [(ngModel)]="oil.separatorF"></ion-checkbox>\n\n              <ion-label>F.Separator</ion-label>\n\n            </ion-item>\n\n            <ion-item *ngIf="oil.separatorF && !showtypefseparator" >\n\n                <ion-label>Type</ion-label>\n\n                <ion-select [(ngModel)]="oil.typeSeparatorF" (ionChange)="typefseparator(oil.typeSeparatorF)" interface="popover">\n\n                    <ion-option *ngFor="let type of listType"   [value]="type.value">{{type.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item *ngIf="showtypefseparator && oil.separatorF">\n\n                    <ion-label>Type</ion-label>\n\n                    <ion-input type="number"[(ngModel)]="oil.typeSeparatorF"></ion-input>\n\n             </ion-item>\n\n             <!--   -->\n\n      <ion-item>\n\n      <ion-label>Coût Total</ion-label>\n\n      <ion-input min="10" type="number" [(ngModel)]="oil.cost"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="!showfournisseur">\n\n      <ion-label>Fournisseur</ion-label>\n\n      <ion-select [(ngModel)]="oil.idProvider" (ionChange)="typefournisseur(oil.idProvider)"  interface="popover">\n\n        <ion-option *ngFor="let fournisseur of listProviders" [value]="fournisseur.id">{{fournisseur.name}}</ion-option>\n\n        <ion-option value="0">Autres</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item  *ngIf="showfournisseur">\n\n      <ion-label>Fournisseur</ion-label>\n\n      <ion-input type="text"  [(ngModel)]="oil.providerName"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Observations</ion-label>\n\n      <ion-input type="text"  [(ngModel)]="oil.observation"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <button ion-button center round *ngIf="showupdate" (click)="update()">Enregistrer\n\n    <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n  </button>\n\n  <!-- <button ion-button center round *ngIf="showupdate" (click)="add()">Valider\n\n  \n\n  </button> -->\n\n  <button ion-button center round (click)="closeModal()">Annuler\n\n    <!--<ion-icon style="margin-left: 5px" name="close"></ion-icon>-->\n\n  </button>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\vidange\vidange-form\vidange-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular_components_toast_toast_controller__["a" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_oil_change_service__["a" /* OilChangeService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
], VidangeForm);

//# sourceMappingURL=vidange-form.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VidangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_oil_change_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_modal_modal_controller__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_util_events__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_toast_toast_controller__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__vidange_form_vidange_form__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var VidangeComponent = (function () {
    function VidangeComponent(oilChangeService, toastCtrl, events, navParams, viewCtrl, alertCtrl, modalCtrl) {
        this.oilChangeService = oilChangeService;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_0__providers_global_config__["a" /* dns */] + 'upload'
        });
        this.formData = new FormData();
        this.idVehicule = 0;
        this.listProviders = [];
        this.listOilChanges = null;
        this.oilChange = new __WEBPACK_IMPORTED_MODULE_3__model_index__["d" /* OilChange */]();
        this.date = new Date();
        this.showUpdate = false;
        this.idProvider = -1;
        this.index = 0;
        this.providerName = null;
        this.showProvider = false;
        this.checkboxFlag = true;
        this.showTypeEngineOil = false;
        this.showTypeOilF = false;
        this.showTypeAirF = false;
        this.showTypeFuelF = false;
        this.showTypeSeparatorF = false;
        this.matricule = null;
        this.indexFile = -1;
        this.item = null;
        this.dns = __WEBPACK_IMPORTED_MODULE_0__providers_global_config__["a" /* dns */];
        this.dateIntervale = new __WEBPACK_IMPORTED_MODULE_3__model_index__["a" /* DateInterval */]();
        this.idVehicule = navParams.data.idDevice.idVehicule;
        this.matricule = navParams.data.matricule;
    }
    VidangeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
        this.uploader.authToken = this.currentuser.token;
        this.oilChangeService.getProviders("MAINTENANCE").subscribe(function (response) {
            _this.listProviders = response;
        });
        this.listOilChanges = [];
        this.oilChangeService.getListOilChanges(this.idVehicule).subscribe(function (response) {
            _this.listOilChanges = response;
            _this.config();
            console.log(response);
        });
        this.subscriptionUpload = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].interval(100).subscribe(function (x) {
            _this.uploader.onAfterAddingFile = function (file) {
                file.withCredentials = false;
            };
            if (_this.item != null && _this.indexFile >= 0)
                if (_this.uploader.queue.length > 0) {
                    if (_this.uploader.queue[_this.indexFile] != undefined && _this.uploader.queue[_this.indexFile].isSuccess) {
                        _this.item.isSuccess = false;
                        _this.item.remove();
                        _this.oilChangeService.readData(_this.idVehicule, _this.item.file.name).subscribe(function (response) {
                            if (response.length > 0) {
                                for (var i = 0; i < response.length; i++) {
                                    _this.listOilChanges.push(response[i]);
                                }
                            }
                            else { }
                        }, function () { });
                    }
                }
        });
    };
    VidangeComponent.prototype.config = function () {
        this.operationTime = new Date();
        this.endTime = new Date();
        this.endTime.setFullYear(this.endTime.getFullYear() + 1);
        this.date = new Date();
        this.oilChange.quantity = 0;
        this.oilChange.cost = 0;
        this.oilChange.observation = null;
        if (this.listProviders.length > 0) {
            this.idProvider = this.listProviders[0].id;
            this.showProvider = false;
        }
        else {
            this.showProvider = true;
        }
        this.showUpdate = false;
        this.providerName = null;
        this.oilChange.engineOil = false;
        this.oilChange.typeEngineOil = 0;
        this.oilChange.oilF = false;
        this.oilChange.typeOilF = 0;
        this.oilChange.airF = false;
        this.oilChange.typeAirF = 0;
        this.oilChange.fuelF = false;
        this.oilChange.typeFuelF = 0;
        this.oilChange.separatorF = false;
        this.oilChange.typeSeparatorF = 0;
        this.showTypeEngineOil = false;
        this.showTypeOilF = false;
        this.showTypeAirF = false;
        this.showTypeFuelF = false;
        this.showTypeSeparatorF = false;
        this.oilChange.id = 0;
    };
    VidangeComponent.prototype.closeModal = function () {
        this.events.publish('Dismiss', null);
    };
    VidangeComponent.prototype.precisionRound = function (number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    };
    VidangeComponent.prototype.uploadListener = function (item, indexFile) {
        this.item = item;
        this.indexFile = indexFile;
    };
    VidangeComponent.prototype.presentConfirm = function (oil, i) {
        var _this = this;
        var msg = 'Observation:' + oil.observation + '<br>';
        if (oil.engineOil)
            msg += 'H Moteur Type:' + oil.typeEngineOil + '<br> ';
        if (oil.oilF)
            msg += 'F Huile :' + oil.typeOilF + '<br> ';
        if (oil.fuelF)
            msg += 'F Carburant :' + oil.typeFuelF + '<br> ';
        if (oil.airF)
            msg += 'F Air Type :' + oil.typeAirF + '<br> ';
        if (oil.separatorF)
            msg += 'F Separator:' + oil.typeSeparatorF + '<br> ';
        var alert = this.alertCtrl.create({
            title: 'Informations',
            message: msg,
            buttons: [{
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Modifier',
                    role: '',
                    handler: function () {
                        _this.update(oil);
                    }
                }
            ]
        });
        alert.present();
        this.index = i;
    };
    VidangeComponent.prototype.update = function (oil) {
        var _this = this;
        var vidangemodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__vidange_form_vidange_form__["a" /* VidangeForm */], {
            oil: oil
        });
        vidangemodal.present();
        vidangemodal.onDidDismiss(function (data) {
            _this.ngAfterViewInit();
            if (data)
                _this.oilChangeService.update(data.oil, data.idProvider, data.providerName).subscribe(function (response) {
                    _this.listOilChanges = _this.listOilChanges.filter(function (oilChange) { return oilChange.id !== data.oil.id; });
                    _this.listOilChanges.splice(_this.index, 0, response);
                    _this.listProviders = _this.listProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                    var provider = new __WEBPACK_IMPORTED_MODULE_3__model_index__["e" /* Provider */]();
                    provider.id = response.idProvider;
                    provider.name = response.providerName;
                    _this.listProviders.push(provider);
                    _this.config();
                    var toast = _this.toastCtrl.create({
                        message: 'Vidange a été modifier avec succés',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                });
        });
    };
    VidangeComponent.prototype.add = function () {
        var _this = this;
        var vidangemodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__vidange_form_vidange_form__["a" /* VidangeForm */], {
            oil: this.oilChange
        });
        vidangemodal.present();
        vidangemodal.onDidDismiss(function (data) {
            _this.ngAfterViewInit();
            _this.oilChange.operationTime = _this.date.getTime();
            if (data)
                _this.oilChangeService.add(data.oil, _this.idVehicule, data.idProvider, data.providerName).subscribe(function (response) {
                    _this.listOilChanges.push(response);
                    _this.listProviders = _this.listProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                    var provider = new __WEBPACK_IMPORTED_MODULE_3__model_index__["e" /* Provider */]();
                    provider.id = response.idProvider;
                    provider.name = response.providerName;
                    _this.listProviders.push(provider);
                    _this.config();
                    var toast = _this.toastCtrl.create({
                        message: 'Vidange a été ajouter avec succés',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }, function () { });
        });
    };
    return VidangeComponent;
}());
VidangeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\vidange\vidange.html"*/'<ion-header>\n\n    <ion-navbar style="height:48px" hideBackButton="true">\n\n      <ion-title>\n\n        <span style="color:white">{{matricule}}</span>\n\n      </ion-title>\n\n      <ion-buttons left>\n\n          <button ion-button icon-only (click)="closeModal()">\n\n            <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n   \n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-card>\n\n      <ion-list>\n\n        <ion-row>\n\n          <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n           Date\n\n          </ion-col>\n\n          <br>\n\n          <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          Quatité\n\n          </ion-col>\n\n          <br>\n\n          <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n           Coût\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-list>\n\n    </ion-card>\n\n    <ion-card *ngFor="let oil of listOilChanges;let i = index">\n\n        <ion-list>\n\n          <ion-row (click)="presentConfirm(oil,i)">\n\n            <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n                {{oil.operationTime | date: \'yyyy-MM-dd HH:mm:ss\'}}\n\n            </ion-col>\n\n            <br>\n\n            <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n                {{oil.quantity}}\n\n            </ion-col>\n\n            <br>\n\n            <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n              {{precisionRound(oil.cost,2)}}\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-list>\n\n      </ion-card>\n\n      <ion-fab right bottom>\n\n        <button ion-fab (click)="add()" ><ion-icon name="add"></ion-icon></button>\n\n      </ion-fab>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\vidange\vidange.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_oil_change_service__["a" /* OilChangeService */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_toast_toast_controller__["a" /* ToastController */], __WEBPACK_IMPORTED_MODULE_10_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
], VidangeComponent);

//# sourceMappingURL=vidange.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carburant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fueling_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carburant_form_carburant_form__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_modal_modal_controller__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_navigation_nav_controller__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_util_events__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_toast_toast_controller__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var Carburant = (function () {
    function Carburant(fuelingService, toastCtrl, events, navParams, viewCtrl, alertCtrl, modalCtrl) {
        this.fuelingService = fuelingService;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_0__providers_global_config__["a" /* dns */] + 'upload'
        });
        this.paymentTypes = [];
        this.fuelProviders = [];
        this.idVehicule = 0;
        this.listFuels = null;
        this.formData = new FormData();
        this.fuel = new __WEBPACK_IMPORTED_MODULE_3__model_index__["b" /* FuelingInfo */]();
        this.date = new Date();
        this.showUpdate = false;
        this.idProvider = 0;
        this.idType = 0;
        this.index = 0;
        this.providerName = null;
        this.showProvider = false;
        this.showType = false;
        this.typeName = null;
        this.matricule = null;
        this.indexFile = -1;
        this.item = null;
        this.dns = __WEBPACK_IMPORTED_MODULE_0__providers_global_config__["a" /* dns */];
        this.dateIntervale = new __WEBPACK_IMPORTED_MODULE_3__model_index__["a" /* DateInterval */]();
        this.idVehicule = navParams.data.idDevice.idVehicule;
        this.matricule = navParams.data.matricule;
    }
    Carburant.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
        this.uploader.authToken = this.currentuser.token;
        this.fuelingService.getListType('PAYMENT').subscribe(function (response) {
            _this.paymentTypes = response;
            console.log(response);
        });
        this.fuelingService.getProviders("FUEL").subscribe(function (response) {
            _this.fuelProviders = response;
        });
        this.listFuels = [];
        this.fuelingService.getListFueling(this.idVehicule).subscribe(function (response) {
            _this.listFuels = response;
            _this.config();
            console.log(response);
        });
        this.subscriptionUpload = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].interval(100).subscribe(function (x) {
            _this.uploader.onAfterAddingFile = function (file) {
                file.withCredentials = false;
            };
            if (_this.item != null && _this.indexFile >= 0)
                if (_this.uploader.queue.length > 0) {
                    if (_this.uploader.queue[_this.indexFile] != undefined && _this.uploader.queue[_this.indexFile].isSuccess) {
                        _this.item.isSuccess = false;
                        _this.item.remove();
                        _this.fuelingService.readData(_this.idVehicule, _this.item.file.name).subscribe(function (response) {
                            if (response.length > 0) {
                                for (var i = 0; i < response.length; i++) {
                                    _this.listFuels.push(response[i]);
                                }
                            }
                            else { }
                        }, function () { });
                    }
                }
        });
    };
    //   ngOnDestroy() {
    //     this.subscriptionVehicule.unsubscribe();
    //     this.subscriptionUpload.unsubscribe();
    // }
    Carburant.prototype.precisionRound = function (number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    };
    Carburant.prototype.closeModal = function () {
        this.events.publish('Dismiss', null);
    };
    Carburant.prototype.config = function () {
        this.operationTime = new Date();
        this.endTime = new Date();
        this.endTime.setFullYear(this.endTime.getFullYear() + 1);
        this.date = new Date();
        this.fuel.quantity = 0;
        this.fuel.odometre = 0;
        this.fuel.numberPayment = 0;
        this.fuel.costUnit = 0;
        this.fuel.cost = 0;
        this.fuel.observation = null;
        if (this.fuelProviders.length > 0) {
            this.idProvider = this.fuelProviders[0].id;
            this.showProvider = false;
        }
        else {
            this.showProvider = true;
        }
        if (this.paymentTypes.length > 0) {
            this.idType = this.paymentTypes[0].id;
            this.showType = false;
        }
        else {
            this.showType = true;
        }
        this.showUpdate = false;
        this.providerName = null;
        this.typeName = null;
        this.fuel.id = 0;
    };
    Carburant.prototype.uploadListener = function (item, indexFile) {
        this.item = item;
        this.indexFile = indexFile;
    };
    Carburant.prototype.presentConfirm = function (fuel, i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Informations',
            message: 'Fournisseur:' + fuel.providerName + '<br> Odométre :' + fuel.odometre + '<br> Type Paiement : ' + fuel.type.name + '<br> Observation :' + fuel.observation + '<br> Num Paiement : ' + fuel.numberPayment + '',
            buttons: [{
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Modifier',
                    role: '',
                    handler: function () {
                        _this.update(fuel);
                    }
                }
            ]
        });
        alert.present();
        this.index = i;
    };
    Carburant.prototype.update = function (fuel) {
        var _this = this;
        var fuelmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__carburant_form_carburant_form__["a" /* CarburantForm */], {
            fuel: fuel
        });
        fuelmodal.present();
        fuelmodal.onDidDismiss(function (data) {
            _this.ngAfterViewInit();
            if (data) {
                _this.fuelingService.update(data.fuel, data.idProvider, data.idType, data.providerName, data.typeName).subscribe(function (response) {
                    console.log(response);
                    _this.listFuels = _this.listFuels.filter(function (fuel) { return fuel.id !== data.fuel.id; });
                    _this.listFuels.splice(_this.index, 0, response);
                    _this.paymentTypes = _this.paymentTypes.filter(function (type) { return type.id !== response.type.id; });
                    _this.paymentTypes.push(response.type);
                    _this.fuelProviders = _this.fuelProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                    var provider = new __WEBPACK_IMPORTED_MODULE_3__model_index__["e" /* Provider */]();
                    provider.id = response.idProvider;
                    provider.name = response.providerName;
                    _this.fuelProviders.push(provider);
                    _this.config();
                    var toast = _this.toastCtrl.create({
                        message: 'Carburant a été modifier avec succés',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }, function () { });
            }
        });
    };
    Carburant.prototype.addFuel = function () {
        var _this = this;
        this.config();
        var fuelmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__carburant_form_carburant_form__["a" /* CarburantForm */], {
            fuel: this.fuel
        });
        console.log(this.fuel);
        fuelmodal.present();
        fuelmodal.onDidDismiss(function (data) {
            _this.ngAfterViewInit();
            if (data) {
                _this.fuel.operationTime = _this.date.getTime();
                _this.fuelingService.add(data.fuel, _this.idVehicule, data.idProvider, data.idType, data.providerName, data.typeName).subscribe(function (response) {
                    _this.listFuels.push(response);
                    _this.paymentTypes = _this.paymentTypes.filter(function (type) { return type.id !== response.type.id; });
                    _this.paymentTypes.push(response.type);
                    _this.fuelProviders = _this.fuelProviders.filter(function (provider) { return provider.id !== response.idProvider; });
                    var provider = new __WEBPACK_IMPORTED_MODULE_3__model_index__["e" /* Provider */]();
                    provider.id = response.idProvider;
                    provider.name = response.providerName;
                    _this.fuelProviders.push(provider);
                    _this.config();
                    var toast = _this.toastCtrl.create({
                        message: 'Carburant a été ajouter avec succés',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }, function () { });
            }
        });
    };
    Carburant.prototype.confirmDelete = function (fuel) {
        this.delete(fuel.id);
    };
    Carburant.prototype.delete = function (id) {
        var _this = this;
        this.fuelingService.delete(id).subscribe(function (response) {
            if (response) {
                _this.listFuels = _this.listFuels.filter(function (fuel) { return fuel.id !== id; });
            }
            else { }
        }, function () { });
    };
    return Carburant;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('mycontent'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11_ionic_angular_navigation_nav_controller__["a" /* NavController */])
], Carburant.prototype, "nav", void 0);
Carburant = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\carburant\carburant.html"*/'<ion-header>\n\n    <ion-navbar style="height:48px" hideBackButton="true">\n\n      <ion-title>\n\n        <span style="color:white">{{matricule}}</span>\n\n      </ion-title>\n\n      <ion-buttons left>\n\n          <button ion-button icon-only (click)="closeModal()">\n\n            <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n   \n\n  </ion-header>\n\n  <ion-content>\n\n    \n\n      <ion-card>\n\n          <ion-list>\n\n            <ion-row>\n\n              <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n               Date\n\n              </ion-col>\n\n              <br>\n\n              <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n              Qte\n\n              </ion-col>\n\n              <br>\n\n              <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n                Odométre\n\n                  </ion-col>\n\n                  <br>\n\n                  <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n                    Paiement\n\n                  </ion-col>\n\n                        <br>\n\n              <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n               Coût\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-list>\n\n        </ion-card>\n\n        <ion-card *ngFor="let fuel of listFuels;let i = index">\n\n            <ion-list>\n\n              <ion-row (click)="presentConfirm(fuel,i)">\n\n                <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n                    {{fuel.operationTime | date: \'dd/MM/yyyy HH:mm:ss\'}}\n\n                </ion-col>\n\n                <br>\n\n                    <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n                        {{fuel.odometre}}\n\n                    </ion-col>\n\n                    <br>\n\n                <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n                    {{fuel.quantity}}\n\n                </ion-col>\n\n                <br>\n\n                <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n                    {{fuel.type.name}}\n\n                      </ion-col>\n\n                      <br>\n\n                <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n                    {{precisionRound(fuel.cost,2)}}\n\n                </ion-col>\n\n               \n\n                \n\n                     \n\n              </ion-row>\n\n            </ion-list>\n\n          </ion-card>\n\n          <ion-fab right bottom>\n\n            <button ion-fab (click)="addFuel()" ><ion-icon name="add"></ion-icon></button>\n\n          </ion-fab>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\carburant\carburant.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_fueling_service__["a" /* FuelingService */], __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_toast_toast_controller__["a" /* ToastController */], __WEBPACK_IMPORTED_MODULE_12_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_10_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
], Carburant);

//# sourceMappingURL=carburant.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarburantForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fueling_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarburantForm = (function () {
    function CarburantForm(viewCtrl, navParams, fuelingService, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.fuelingService = fuelingService;
        this.alertCtrl = alertCtrl;
        this.showupdate = true;
        this.idProvider = 0;
        this.idType = 0;
        this.providerName = null;
        this.typeName = null;
        this.showprovider = true;
        this.showtype = true;
        this.fuel = navParams.get('fuel');
        if (this.fuel.cost != 0)
            this.showupdate = false;
        if (this.fuel.operationTime) {
            this.operationTime = (new Date(this.fuel.operationTime)).toISOString();
        }
        else
            this.operationTime = (new Date()).toISOString();
    }
    CarburantForm.prototype.ngOnInit = function () {
        var _this = this;
        this.fuel.cost = this.precisionRound(this.fuel.cost, 2);
        this.fuelingService.getProviders("FUEL").subscribe(function (response) {
            _this.fuelProviders = response;
        });
        this.fuelingService.getListType('PAYMENT').subscribe(function (response) {
            _this.paymentTypes = response;
        });
    };
    CarburantForm.prototype.precisionRound = function (number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    };
    CarburantForm.prototype.autresproviders = function (value) {
        var _this = this;
        if (value == "0") {
            this.showprovider = false;
            this.fuel.idProvider = 0;
            this.fuel.providerName = "";
        }
        else {
            this.fuelProviders.forEach(function (provider) {
                if (provider.id == value) {
                    _this.fuel.providerName = provider.name;
                }
            });
        }
    };
    CarburantForm.prototype.autrestype = function (value) {
        var _this = this;
        if (value == "0") {
            this.showtype = false;
            this.fuel.type.id = 0;
        }
        else {
            this.paymentTypes.forEach(function (type) {
                if (type.id == value) {
                    _this.fuel.type.name = type.name;
                }
            });
        }
    };
    CarburantForm.prototype.update = function () {
        this.fuel.operationTime = new Date(this.operationTime);
        if (this.fuel.cost >= 10 && this.fuel.odometre >= 10) {
            var data = { fuel: this.fuel, typeName: this.fuel.type.name, idType: this.fuel.type.id, providerName: this.fuel.providerName, idProvider: this.fuel.idProvider };
            this.viewCtrl.dismiss(data);
        }
    };
    CarburantForm.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
    };
    CarburantForm.prototype.add = function () {
        this.fuel.operationTime = new Date(this.operationTime);
        if (this.fuel.cost >= 10 && this.fuel.odometre >= 10) {
            var data = { fuel: this.fuel, typeName: this.fuel.type.name, idType: this.fuel.type.id, providerName: this.fuel.providerName, idProvider: this.fuel.idProvider };
            this.viewCtrl.dismiss(data);
        }
    };
    CarburantForm.prototype.onChange = function () {
        if (this.fuel.costUnit > 0 && this.fuel.quantity > 0)
            this.fuel.cost = this.fuel.costUnit * this.fuel.quantity;
    };
    return CarburantForm;
}());
CarburantForm = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\carburant\carburant-form\carburant-form.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <ion-title style="text-align: center" *ngIf="showupdate"><a style="color:white"> Ajouter </a> </ion-title>\n\n          <ion-title style="text-align: center" *ngIf="!showupdate" ><a style="color:white"> Modifier</a> </ion-title>\n\n         \n\n    <ion-buttons left>\n\n        <button ion-button icon-only (click)="closeModal()">\n\n          <ion-icon style="color:white" name="arrow-round-back"></ion-icon> \n\n        </button>\n\n      </ion-buttons>\n\n        </ion-navbar>\n\n        \n\n      </ion-header>\n\n      <ion-content class="ajoutcarburant" padding text-center style="background-color: rgb(255, 255, 255) ;">\n\n            <ion-list >\n\n                <ion-item >\n\n                <ion-label>Date</ion-label>\n\n                <ion-datetime name="startDate" displayFormat="DD/MM/YYYY, HH:mm" [(ngModel)]="operationTime" style="color:rgba(0,0,0)!important;"></ion-datetime>\n\n                    </ion-item>\n\n                <ion-item >\n\n                    <ion-label>Coût/L</ion-label>\n\n                    <ion-input min="10"  type="number"  (ionChange)="onChange()"  [(ngModel)]="fuel.costUnit"></ion-input>\n\n                </ion-item>\n\n                <ion-item >\n\n                    <ion-label>Odométre</ion-label>\n\n                    <ion-input min="10" type="number"  [(ngModel)]="fuel.odometre"></ion-input>\n\n                </ion-item>\n\n              \n\n                <ion-item>\n\n                        <ion-label>Quantité</ion-label>\n\n                        <ion-input type="number" (ionChange)="onChange()"  [(ngModel)]="fuel.quantity"></ion-input>\n\n                    </ion-item>\n\n                  \n\n                    <ion-item >\n\n                            <ion-label>Coût Total</ion-label>\n\n                            <ion-input type="number" placeholder="Coût Total" [(ngModel)]="fuel.cost"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item *ngIf="showtype">\n\n                        <ion-label>Type Paiement</ion-label>\n\n                        <ion-select [(ngModel)]="fuel.type.id"  (ionChange)="autrestype(fuel.type.id)" interface="popover">\n\n                                <ion-option *ngFor="let type of paymentTypes" [value]="type.id">{{type.name}}</ion-option>\n\n                                <ion-option value="0" >Autres</ion-option>\n\n                        </ion-select>\n\n                   </ion-item>\n\n                   <ion-item  *ngIf="!showtype" >\n\n                                <ion-label>Type Paiement</ion-label>\n\n                                <ion-input type="text"  [(ngModel)]="fuel.type.name"></ion-input>\n\n                        </ion-item>\n\n\n\n                    <ion-item >\n\n                            <ion-label>Num Paiement</ion-label>\n\n                            <ion-input type="number"  [(ngModel)]="fuel.numberPayment"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item >\n\n                            <ion-label>Observations</ion-label>\n\n                            <ion-input type="text"  [(ngModel)]="fuel.observation"></ion-input>\n\n                    </ion-item>\n\n                    \n\n                    <ion-item  *ngIf="showprovider">\n\n                        <ion-label>Fournisseur</ion-label>\n\n                        <ion-select [(ngModel)]="fuel.idProvider"  (ionChange)="autresproviders(fuel.idProvider)" interface="popover">\n\n                          <ion-option *ngFor="let fournisseur of fuelProviders" [value]="fournisseur.id">{{fournisseur.name}}</ion-option>\n\n                          <ion-option value="0" >Autres</ion-option>\n\n                        </ion-select>   \n\n                      </ion-item>\n\n                      <ion-item *ngIf="!showprovider" >\n\n                                <ion-label>Fournisseur</ion-label>\n\n                                <ion-input type="text"  [(ngModel)]="fuel.providerName"></ion-input>\n\n                        </ion-item>\n\n                      <!-- <ion-item style="background-color:rgba(58, 58, 58, 0.2)!important;">\n\n                        <ion-label>Fournisseur</ion-label>\n\n                        <ion-select [(ngModel)]="fuel.providerName" (ionChange)="autres(fuel.providerName)" interface="popover">\n\n                          <ion-option *ngFor="let fournisseur of fuelProviders" [value]="fournisseur.name">{{fournisseur.name}}</ion-option>\n\n                          <ion-option value="0" >Autres</ion-option>\n\n                        </ion-select>\n\n                      </ion-item> -->\n\n           </ion-list>\n\n           \n\n                <button ion-button center round *ngIf="!showupdate" (click)="update()">Enregistrer\n\n                <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n              </button>\n\n              <button ion-button center round *ngIf="showupdate" (click)="add()">Valider\n\n                <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n              </button>\n\n              <button ion-button center round (click)="closeModal()">Annuler\n\n                <!--<ion-icon style="margin-left: 5px" name="close"></ion-icon>-->\n\n              </button>\n\n      </ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\carburant\carburant-form\carburant-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fueling_service__["a" /* FuelingService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
], CarburantForm);

//# sourceMappingURL=carburant-form.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionPark; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__documentcirculation_documentcirculation__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vidange_vidange__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carburant_carburant__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashbord_dashbord__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_navigation_view_controller__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_events__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GestionPark = (function () {
    function GestionPark(navParams, viewCtrl, events) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__carburant_carburant__["a" /* Carburant */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__dashbord_dashbord__["a" /* Dashbord */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__vidange_vidange__["a" /* VidangeComponent */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_0__documentcirculation_documentcirculation__["a" /* DocumentCirculationComponent */];
        this.data = navParams.get('data');
        events.subscribe('Dismiss', function (x) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            viewCtrl.dismiss(x);
        });
    }
    return GestionPark;
}());
GestionPark = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\gest-park.html"*/'<ion-tabs #myTabs>\n\n    <ion-tab [root]="tab1Root" tabIcon="ios-color-fill" tabTitle="Carburant" [rootParams]="data">Carburant</ion-tab>\n\n    <ion-tab [root]="tab3Root"  tabIcon="funnel" tabTitle="Vidange" [rootParams]="data" ></ion-tab>\n\n    <ion-tab [root]="tab4Root"  tabIcon="document" tabTitle="D.Circulation" [rootParams]="data" ></ion-tab>\n\n    <ion-tab [root]="tab2Root"  tabIcon="stats" tabTitle="TDB" [rootParams]="data" ></ion-tab>\n\n  </ion-tabs>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\gest-park.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_events__["a" /* Events */]])
], GestionPark);

//# sourceMappingURL=gest-park.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashbord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fueling_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_events__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_toast_toast_controller__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Dashbord = (function () {
    function Dashbord(navParams, fuelingService, events, toastCtrl) {
        this.fuelingService = fuelingService;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.idVehicule = 0;
        this.dashbordInfo = null;
        this.matricule = null;
        this.dns = __WEBPACK_IMPORTED_MODULE_0__providers_global_config__["a" /* dns */];
        this.date = new __WEBPACK_IMPORTED_MODULE_2__model_index__["a" /* DateInterval */]();
        this.startDate1 = new Date();
        this.endDate1 = new Date();
        this.load = false;
        this.costInterview = 0;
        this.costTotal = 0;
        this.groupeName = null;
        this.idVehicule = navParams.data.idDevice.idVehicule;
        this.matricule = navParams.data.matricule;
        this.endDate1.setTime(this.endDate1.getTime());
        this.startDate1 = new Date(this.endDate1.getFullYear(), 0, 1);
        this.startDate = (this.startDate1).toISOString();
        this.endDate = (this.endDate1).toISOString();
    }
    Dashbord.prototype.ngOnInit = function () {
    };
    Dashbord.prototype.getInfoVehiculeDashbord = function () {
        var _this = this;
        this.date.startDate = this.startDate;
        this.date.endDate = this.endDate;
        this.fuelingService.getDashbordInfo(this.idVehicule, this.date).subscribe(function (response) {
            _this.dashbordInfo = response;
            _this.load = false;
            _this.costInterview = _this.dashbordInfo.batteryMaintenance + _this.dashbordInfo.tireMaintenance + _this.dashbordInfo.reparation;
            _this.costTotal = _this.dashbordInfo.runningDocument + _this.dashbordInfo.fuel + _this.dashbordInfo.oilChange + _this.costInterview;
            if (_this.costTotal > 0)
                _this.configHighcharts();
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Aucune information à afficher',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        });
    };
    Dashbord.prototype.closeModal = function () {
        this.events.publish('Dismiss', null);
    };
    Dashbord.prototype.configHighcharts = function () {
        __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"].defaults.global.tooltips.enabled = true;
        __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"].defaults.global.legend.position = 'bottom';
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'pie',
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
            data: {
                labels: ["Batterie", "Carburant", "Vidange", "Réparation", "Document Circulation", "Pneu"],
                datasets: [{
                        label: '# of Votes',
                        data: [this.dashbordInfo.batteryMaintenance, this.dashbordInfo.fuel, this.dashbordInfo.oilChange, this.dashbordInfo.reparation, this.dashbordInfo.runningDocument, this.dashbordInfo.tireMaintenance],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            '#f9bbcf',
                            '#95ceff',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#95ceff",
                            "#FFCE56"
                        ]
                    }]
            }
        });
    };
    return Dashbord;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('doughnutCanvas'),
    __metadata("design:type", Object)
], Dashbord.prototype, "doughnutCanvas", void 0);
Dashbord = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\dashbord\dashbord.html"*/'<ion-header>\n\n  <ion-navbar style="height:48px" hideBackButton="true">\n\n    <ion-title>\n\n      <span style="color:white">{{matricule}}</span>\n\n    </ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="closeModal()">\n\n        <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n    <ion-item  style="margin-top: 30px;">\n\n        <ion-label>Date début</ion-label>\n\n        <ion-datetime displayFormat="MM/DD/YYYY HH:mm" [(ngModel)]="startDate"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item  style="margin-bottom: 20px">\n\n          <ion-label>Date fin</ion-label>\n\n          <ion-datetime displayFormat="MM/DD/YYYY HH:mm" [(ngModel)]="endDate"></ion-datetime>\n\n        </ion-item>\n\n  \n\n  <button ion-button full outline (click)="getInfoVehiculeDashbord()" [disabled]="load" type="button">Valider</button>\n\n\n\n  <ion-card  style="height: 65%;" >\n\n      <canvas #doughnutCanvas></canvas>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestion-park\dashbord\dashbord.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_fueling_service__["a" /* FuelingService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
], Dashbord);

//# sourceMappingURL=dashbord.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], GroupService);

//# sourceMappingURL=group.service.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiculeForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_index__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vehicule_service__ = __webpack_require__(160);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-vehicule-form',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\datamana\vehicules\vehicule-form\vehicule-form.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <ion-title style="text-align: center"><a style="color:white"> Modifier Véhicule</a> </ion-title>\n\n          <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()" >\n\n            <ion-icon style="color:white" name="arrow-down"></ion-icon>\n\n          </button>\n\n          </ion-buttons>\n\n        </ion-navbar>\n\n </ion-header>\n\n <ion-content padding text-center style="background-color:white">\n\n        <ion-list style="margin-top:40px;" >\n\n                <ion-item  style=" background-color:white!important;" >\n\n                  <ion-input disabled="true" [(ngModel)]="vehicule.device.idDevice"></ion-input>\n\n                </ion-item>\n\n                <ion-item style=" background-color:white!important;width:100%!important">\n\n                 \n\n                    <ion-label>Groupes</ion-label> \n\n                <ion-select  *ngIf="groupsToSelect.length >0" [(ngModel)]="idtest"  [multiple]="true" (selected)="selectedGroup($event)" (removed)="removedGroup($event)" style="width:100%!important"> \n\n                    <ion-label>Groupes</ion-label> \n\n                  <ion-option  *ngFor="let groupToSelect of groupsToSelect">{{groupToSelect.text}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <ion-item style=" background-color:white!important;">\n\n                    <ion-label>Matricule</ion-label>  \n\n                    <ion-input   [(ngModel)]="vehicule.matricule" ></ion-input>\n\n                </ion-item>\n\n                <ion-item style=" background-color:white!important;">\n\n                    <ion-label>Surnom</ion-label>  \n\n                  <ion-input  [(ngModel)]="vehicule.alias" ></ion-input>\n\n              </ion-item>\n\n              <ion-item style=" background-color:white!important;">\n\n                  <ion-label>Marque</ion-label>  \n\n                <ion-input   [(ngModel)]="vehicule.mark" ></ion-input>\n\n            </ion-item>\n\n            <ion-item style=" background-color:white!important;">\n\n                <ion-label>Vitesse Max</ion-label>  \n\n              <ion-input type="number"  [(ngModel)]="vehicule.maxSpeed" ></ion-input>\n\n          </ion-item>\n\n          <ion-item style=" background-color:white!important;">\n\n              <ion-label>N° SIM</ion-label>  \n\n            <ion-input type="number"  [(ngModel)]="deviceNumber" ></ion-input>\n\n        </ion-item>\n\n        \n\n       </ion-list>\n\n     \n\n          <button ion-button center round (click)="update()">Modifier</button>\n\n          <button ion-button center round (click)="closeModal()">Annuler</button>\n\n     \n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\datamana\vehicules\vehicule-form\vehicule-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_vehicule_service__["a" /* VehiculeService */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ToastController */]])
], VehiculeForm);

//# sourceMappingURL=vehicule-form.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestPoi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_management_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poi_poi__ = __webpack_require__(100);
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
    //
    GestPoi.prototype.openmenu = function () {
        this.menu.open();
    };
    //get all point d'interet
    GestPoi.prototype.ngOnInit = function () {
        this.loadPoi();
    };
    //
    GestPoi.prototype.loadPoi = function () {
        var _this = this;
        this.dataManagementService.getAllPointInterests().subscribe(function (pointInterests) {
            _this.dataManagementService.pointInterests = pointInterests;
            _this.pointInterests = pointInterests;
        });
    };
    GestPoi.prototype.delete = function (point) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Voulez vous vraiment supprimer :' + point.name + '?',
            buttons: [{
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
    // delete poi
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
    //edit poi open modal poi.ts
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-gest-poi',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestpoi\gestpoi.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-title>\n\n      <span style="color:white">Points d\'intérêt</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-fab top left outline class="ion-fab1" #fab>\n\n    <!--IOS margin-top:10px; -->\n\n    <button ion-fab mini outline style="margin-left: -5px !important;background-color:rgba(0,0,0,0.6);margin-top:10px;" (click)="openmenu()">\n\n      <i class="fa fa-list" aria-hidden="true"></i>\n\n    </button>\n\n  </ion-fab>\n\n</ion-header>\n\n\n\n<ion-content style="padding-top:10px;">\n\n  <ion-list-header>Points</ion-list-header>\n\n  <ion-list *ngFor="let pointInterest of pointInterests">\n\n    <ion-item-sliding #item *ngIf="pointInterest.type==MARKER">\n\n\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="{{imagesDir}}{{pointInterest.imageUri}}" style="width:25px;height:25px;">\n\n        </ion-avatar>\n\n        <h2>{{pointInterest.name}} </h2>\n\n        <p>{{pointInterest.coordinate.lat}} ; {{pointInterest.coordinate.lng}}</p>\n\n        <p style="font-size:15px">{{pointInterest.address}}</p>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button style="width:60px;background-color:#488aff" (click)="edit(pointInterest)">\n\n          <ion-icon ios="ios-settings-outline" md="md-settings"></ion-icon>\n\n        </button>\n\n        <button ion-button style="width:60px;" color="danger" (click)="delete(pointInterest)">\n\n          <ion-icon ios="ios-trash-outline" md="md-trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list-header>Zones</ion-list-header>\n\n  <ion-list *ngFor="let pointInterest of pointInterests">\n\n    <ion-item-sliding *ngIf="pointInterest.type==POLYGON">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="{{imagesDir+imagesPOIDir+pointInterest.imageUri}}" style="width:25px;height:25px;">\n\n        </ion-avatar>\n\n        <h2>{{pointInterest.name}} </h2>\n\n        <p>{{pointInterest.coordinate.lat}} ; {{pointInterest.coordinate.lng}}</p>\n\n        <p style="font-size:15px">{{pointInterest.address}}</p>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button style="width:60px;background-color:#488aff" (click)="edit(pointInterest)">\n\n          <ion-icon ios="ios-settings-outline" md="md-settings"></ion-icon>\n\n        </button>\n\n        <button ion-button style="width:60px;" color="danger" (click)="delete(pointInterest)">\n\n          <ion-icon ios="ios-trash-outline" md="md-trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\gestpoi\gestpoi.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], GestPoi);

//# sourceMappingURL=gestpoi.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_map_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_data_management__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poi_poi__ = __webpack_require__(100);
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
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-stop-list',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\stop-list\stop-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title><span style="color:white">Liste des arrêts</span></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="closeModal()">\n\n  <ion-icon name="arrow-down" style="color:white"></ion-icon>\n\n</button>\n\n  </ion-buttons>\n\n  <ion-buttons left>\n\n    <button ion-button icon-only (click)="returnModal()">\n\n      <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n\n</button>\n\n</ion-buttons>\n\n    \n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding style="background-color: rgba(255, 255, 255, 1) !important;">\n\n  <div style="overflow: auto ; height: auto;">\n\n    <table class="table table-striped" style="font-size: 15px;font-weight: bold" width="100%">\n\n      <thead>\n\n        <tr style="background-color: #F5F5F5;opacity: 0.65">\n\n          <th width="25%" style="text-align: center">\n\n            <i class="fa fa-clock-o" aria-hidden="true"></i> Date Arrêt\n\n          </th>\n\n          <th width="45%" style="text-align: center">Lieu Arrêt</th>\n\n          <th width="30%" style="text-align: center">Durée Arrêt</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody style="background-color: #FFFAFA;opacity: 0.5;font: bolder;">\n\n\n\n\n\n\n\n        <tr *ngFor="let stop of stops" style="border-top: solid black 1px;">\n\n\n\n          <td width="15%" data-toggle="tooltip" (click)="drawStop(stop)" title="{{stop.beginStopTime | date:\'dd-MM-y HH:mm\'}}">\n\n            {{stop.beginStopTime | date:\'dd-MM HH:mm\'}}\n\n          </td>\n\n          <td width="55%" data-toggle="tooltip" (click)="drawStop(stop)" title="{{stop.geocodingDetails}}">\n\n            {{stop.geocoding }}\n\n          </td>\n\n          <td width="30%" data-toggle="tooltip" (click)="drawStop(stop)" title="{{stop.stopDurationStr}}">\n\n            {{stop.stopDurationStr}}\n\n          </td>\n\n\n\n          <td colspan="3" style="text-align: center">\n\n\n\n            <button type="button" (click)="openPoiModal(stop)" style="width:50px;height:50px; background-color:rgba(0,0,0,0)">\n\n              <i class="fa fa-map-marker" aria-hidden="true" style="width:50px;height:50px;"></i>\n\n            </button>\n\n\n\n          </td>\n\n\n\n        </tr>\n\n\n\n\n\n\n\n\n\n      </tbody>\n\n    </table>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\stop-list\stop-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_0__utils_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ModalController */]])
], StopList);

//# sourceMappingURL=stop-list.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historical_service__ = __webpack_require__(73);
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
    //get all paths
    HistoricalForm.prototype.getAllPaths = function () {
        this.viewCtrl.dismiss({
            startDate: this.startDate,
            endDate: this.endDate,
            list: this.list
        });
    };
    // close modal
    HistoricalForm.prototype.closeModal = function () {
        this.viewCtrl.dismiss({
            startDate: "",
            endDate: "",
            list: ""
        });
    };
    return HistoricalForm;
}());
HistoricalForm = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-historical-form',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\historical-form\historical-form.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title style="width:100%">\n\n      <a style="color:white">Historique</a>\n\n    </ion-title>\n\n    <ion-buttons left>\n\n        <button ion-button icon-only (click)="closeModal()">\n\n          <ion-icon style="color:white" name="arrow-round-back"></ion-icon> \n\n        </button>\n\n      </ion-buttons>\n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-center style="background-color: rgba(255, 255, 255,1) !important;">\n\n  <ion-item style="background-color:rgba(0,0,0,0.3);margin-top:200px;">\n\n    <ion-label style="color:white">Historique:\n\n      <ion-icon ios="ios-arrow-down" md="md-arrow-down"></ion-icon>\n\n    </ion-label>\n\n    <ion-select select-ios-padding-end [(ngModel)]="list" interface="popover" style="width:100%;color:white">\n\n      <ion-option value="trajet">Liste des trajets</ion-option>\n\n      <ion-option value="arret">Liste des arrêts</ion-option>\n\n      <ion-option value="kilo">Liste de Kilométrage</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item style="margin-top: 70px;background-color:rgba(0,0,0,0.3)">\n\n    <ion-label style="color:white">Date début</ion-label>\n\n    <ion-datetime name="startDate" displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="startDate" style="color:white"></ion-datetime>\n\n  </ion-item>\n\n\n\n  <ion-item style="margin-bottom: 20px;background-color:rgba(0,0,0,0.3)">\n\n    <ion-label style="color:white">Date fin</ion-label>\n\n    <ion-datetime name="endDate" displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="endDate" style="color:white"> </ion-datetime>\n\n  </ion-item>\n\n  <!--<ion-item>\n\n    <ion-label>Date de début</ion-label>\n\n    <ion-datetime displayFormat="YYYY/MM/DD" [(ngModel)]="firstDate"></ion-datetime>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Date de fin</ion-label>\n\n    <ion-datetime displayFormat="YYYY/MM/DD" [(ngModel)]="lastDate"></ion-datetime>\n\n  </ion-item>-->\n\n\n\n  <button ion-button center round (click)="getAllPaths()">Chercher\n\n    <!--<ion-icon style ="margin-left: 5px" name="search"></ion-icon>-->\n\n  </button>\n\n  <button ion-button center round (click)="closeModal()">Annuler\n\n    <!--<ion-icon style="margin-left: 5px" name="close"></ion-icon>-->\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\historical-form\historical-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_historical_service__["a" /* HistoricalService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], HistoricalForm);

//# sourceMappingURL=historical-form.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-paths-list',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\paths-list\paths-list.html"*/'<!--\n\n  Generated template for the PathsList page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="returnModal()">\n\n        <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <span style="color:white">Liste des trajets</span>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="closeModal()">\n\n        <ion-icon name="arrow-down" style="color:white"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background-color: rgba(255, 255, 255, 1) !important;">\n\n  <div style="overflow: auto ; height: auto;">\n\n    <table style="font-size: 15px;">\n\n      <thead>\n\n        <tr style="background-color: #F5F5F5;opacity: 0.65">\n\n          <th style="text-align: center;width:1px;">\n\n            Date Départ\n\n          </th>\n\n          <th style="text-align: center;padding-left: 15px;padding-right: 15px;">Lieu Départ</th>\n\n          <th style="text-align: center;padding-left: 15px;padding-right: 15px">\n\n             Date Arrivée\n\n          </th>\n\n          <th style="text-align: center;padding-left: 15px;padding-right: 15px">Lieu Arrivée</th>\n\n          <th style="text-align: center; padding-right: 15px;padding-left: 15px">KM</th>\n\n          <th style="text-align: center; padding-right: 15px; padding-left: 15px">V Max</th>\n\n          <th style="text-align: center;padding-right: 15px; padding-left: 15px">Durée Trajet</th>\n\n          <th style="text-align: center;padding-right: 15px; padding-left: 15px">Durée Arrêt</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody style="background-color: #FFFAFA;opacity: 0.5;font: bolder;">\n\n        <tr *ngFor="let path of paths" (click)="drawPath(path)" style="border-top: solid black 1px;">\n\n          <td style="text-align: center" data-toggle="tooltip" title="{{path.beginPathTime}};">\n\n            {{path.displayBeginPathTime | date:\'dd-MM HH:mm\'}}\n\n          </td>\n\n          <td style="text-align: center;padding-left: 10px;padding-right: 10px; " data-toggle="tooltip" title="{{path.beginPathGeocodingDetails}}">\n\n            {{path.beginPathGeocoding }}\n\n          </td>\n\n          <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.endPathTime}}">\n\n            {{path.displayEndPathTime | date:\'dd-MM HH:mm\'}}\n\n          </td>\n\n          <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.endPathGeocodingDetails}}">\n\n            {{path.endPathGeocoding}}\n\n          </td>\n\n          <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.distanceDriven">{{path.distanceDriven | number:\'1.2-2\'}}\n\n          </td>\n\n          <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.maxSpeed}}">\n\n            {{path.maxSpeed}}\n\n          </td>\n\n          <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.pathDurationStr}}">\n\n            {{path.pathDurationStr}}\n\n          </td>\n\n          <td style="text-align: center;padding-left: 15px;padding-right: 15px" data-toggle="tooltip" title="{{path.nextStopDurationStr}}">\n\n            {{path.nextStopDurationStr}}\n\n          </td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\paths-list\paths-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], PathsList);

//# sourceMappingURL=paths-list.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contentHeaders; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createAuthorizationHeader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(27);

var contentHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
function createAuthorizationHeader(headers) {
    headers.append('Authorization', localStorage.getItem('id_token'));
}
//# sourceMappingURL=headers.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigningService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_headers__ = __webpack_require__(418);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], SigningService);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_geocoding_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_real_time_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__group_realtime_group_realtime__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_loading_loading_controller__ = __webpack_require__(137);
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
    function GroupsPage(alertCtrl, loading, modalCtrl, navCtrl, geocodingService, pipe, dataManagementService, navParams, viewCtrl, realTimeService) {
        this.alertCtrl = alertCtrl;
        this.loading = loading;
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
        var date1 = new Date();
        console.log(date1.setHours(0, 0, 0, 0));
        var loader = this.loading.create();
        loader.present();
        this.realTimeService.getGroupMini().subscribe(function (x) {
            _this.groups = x;
            _this.data = x;
            loader.dismiss();
        });
        // if(!this.groups)
        //  this.loadGroups();
        //  this.realTimeService.findVehiculesByGroupsId(15,1,0).subscribe(x=>{
        //    console.log(x);
        //  })
    };
    //selection group and go to group-realtime.ts
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
    //fermer modal
    GroupsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(null);
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
    GroupsPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.groups = this.data;
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.groups = this.groups.filter(function (group) {
                return (group.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return GroupsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Content */])
], GroupsPage.prototype, "content", void 0);
GroupsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-groups-page',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\groups-page\groups-page.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <a style="font-size: 4vw;color:#fff">Groupes</a>\n\n    </ion-title>\n\n\n\n    <ion-buttons left>\n\n        <button ion-button icon-only (click)="closeModal()">\n\n          <ion-icon style="color:white" name="arrow-round-back"></ion-icon> \n\n        </button>\n\n      </ion-buttons>\n\n      <ion-buttons right>\n\n          <button ion-button icon-only (click)="ngOnInit()">\n\n              <ion-icon style="color:white"  ios="ios-refresh" md="md-refresh"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n<ion-content class="Content" style="background-color: rgba(255, 255, 255, 1) !important; padding: auto;">\n\n  <!--<ion-card *ngFor="let group of groups">\n\n        <ion-list  style="background-color:rgba(255.255.255.0.8)" >\n\n            <ion-row >\n\n                <ion-col col-12 col-md-12 col-sm-12 col-xs-12>{{group.nom}}</ion-col>   \n\n            </ion-row>\n\n        </ion-list>\n\n    </ion-card-->\n\n    <ion-searchbar\n\n   \n\n  \n\n    (ionInput)="getItems($event)">\n\n   \n\n  </ion-searchbar>\n\n    <div style="font-size: 15px;border-radius:0px; margin-top: 0%;">\n\n        <div style="width: 500%">\n\n          <table class="table table-striped" style="width: 20%">\n\n            <tbody>\n\n             \n\n                <tr>\n\n                  <td>\n\n                    <div style="overflow:auto">\n\n                      <table class="table" style="width: 100%;" >\n\n                          <tbody style="border :colspan; text-align: center;" frame="hsides" frame="hsides" rules="all">\n\n                           \n\n                              <ng-container *ngFor="let group of groups">\n\n                                \n\n                                <tr>\n\n\n\n                                  <td width="10%" height="40px" (click)="selectedGroup(group)">\n\n                                    {{group.nom}}\n\n                                    </td>\n\n                                    </tr>\n\n                                    </ng-container>\n\n                                    </tbody>\n\n                                    </table>\n\n                                    </div>\n\n                                    </td>\n\n                                    </tr>\n\n            </tbody></table>\n\n            </div>\n\n            </div>\n\n\n\n                                  \n\n  <!-- <ion-list>\n\n    <button ion-item *ngFor="let group of groups" style="margin: 10px 5px 10px 5px; opacity:0.8" (click)="selectedGroup(group)">\n\n      {{group.nom}}\n\n    </button>\n\n  </ion-list> -->\n\n  <!-- <div style="font-size: 15px;border-radius:0px; margin-top: 0%;">\n\n    <div style="width: 500%">\n\n      <table class="table" style="width: 20%">\n\n        <tbody>\n\n          <ng-template ngFor let-item [ngForOf]="groups">\n\n            <tr style="color: black">\n\n              <td style="font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: #B0C4DE;opacity: 0.75;">{{item.nom}}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>\n\n                <div style="overflow:auto">\n\n                  <table class="table" frame="hsides" rules="cols" style="width: 100%;">\n\n                    <thead frame="hsides" border="1">\n\n                    \n\n                    </thead>\n\n                    <tbody style="border :colspan; text-align: center;" frame="hsides" frame="hsides" rules="all">\n\n                      <ng-container *ngFor="let vehicule of item.vehicules">\n\n                        <tr [ngClass]="{\'activeRT\': selectedDevice == vehicule.idDevice}" style="border-bottom:1pt solid black;">\n\n                          <td width="10%" (click)="goToRealTimeRecord(vehicule,isValidPoint(vehicule.realTimeRecord.coordinate))">\n\n                          \n\n                            <img width="30 px" *ngIf="isValidPoint(vehicule.realTimeRecord.coordinate)" src="{{vehicule?.realTimeRecord?.icon}}">\n\n                            <ion-label *ngIf="!isValidPoint(vehicule.realTimeRecord.coordinate)" style="background-color:#f39c12;color:white;"> Aucune Info</ion-label>\n\n                          </td>\n\n                          <td width="30%" (click)="goToRealTimeRecord(vehicule,isValidPoint(vehicule.realTimeRecord.coordinate))">\n\n\n\n                            <div>\n\n                              <b>\n\n                                {{vehicule.matricule}}\n\n                                <br> {{vehicule?.driver?.firstName}} {{vehicule?.driver?.lastName}}\n\n                              </b>\n\n                            </div>\n\n                          </td>\n\n                          <td width="40%" (click)="goToRealTimeRecord(vehicule,isValidPoint(vehicule.realTimeRecord.coordinate))">\n\n                            <div *ngIf="isValidPoint(vehicule.realTimeRecord.coordinate)">\n\n                              <b>\n\n                                <div *ngIf="vehicule.realTimeRecord.relativePosition">\n\n                                  <b>\n\n                                    {{vehicule?.realTimeRecord?.relativePosition}}\n\n                                  </b>\n\n                                </div>\n\n                                <div *ngIf="!vehicule.realTimeRecord.relativePosition">\n\n                                  <b>\n\n                                    {{vehicule?.realTimeRecord.geocoding}}\n\n                                  </b>\n\n                                </div>\n\n                                <div>\n\n                                  <b>\n\n                                    {{vehicule?.realTimeRecord?.recordTime| date:\'d-M HH:mm\'}}\n\n                                  </b>\n\n                                </div>\n\n                                <div>\n\n                                  <b>\n\n                                    {{vehicule?.realTimeRecord?.speed}} KM/H\n\n                                  </b>\n\n                                </div>\n\n                              </b>\n\n                            </div>\n\n\n\n                         \n\n                            <div *ngIf="!isValidPoint(vehicule.realTimeRecord.coordinate)">\n\n                              <ion-label style="background-color:#f39c12;color:white;"> Aucune Info</ion-label>\n\n                            </div>\n\n                          </td>\n\n                        </tr>\n\n                      </ng-container>\n\n                    </tbody>\n\n                  </table>\n\n\n\n                </div>\n\n              </td>\n\n            </tr>\n\n          </ng-template>\n\n        </tbody>\n\n      </table>\n\n    </div>\n\n  </div> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\groups-page\groups-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__utils_geocoding_service__["a" /* GeocodingService */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["DecimalPipe"], __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_real_time_service__["a" /* RealTimeService */]])
], GroupsPage);

//# sourceMappingURL=groups-page.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupeRealtime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_historical_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_real_time_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_geocoding_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_management_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__objects_real_time__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_leaflet__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_leaflet__);
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
    function GroupeRealtime(plateform, navCtrl, historicalService, pipe, geocodingService, navParams, viewCtrl, dataManagementService, realTimeService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.historicalService = historicalService;
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
        this.size = 10;
        plateform.ready().then(function (data) {
            _this.size = Math.floor((plateform.height() - 48) / 48) + 1;
            console.log(_this.size + '  ' + _this.page);
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
            _this.data = x.content;
            _this.vehicules.forEach(function (vehicule) {
                vehicule.realTimeRecord = new __WEBPACK_IMPORTED_MODULE_8__objects_real_time__["b" /* RealTimeRecord */]();
                var startHour = new Date().setHours(0, 0, 0, 0); //.//setHours(0,0,0,0).getTime();
                var endDate = new Date().getTime();
                _this.realTimeService.getRealTimeRecord(vehicule.device.idDevice).subscribe(function (y) {
                    vehicule.realTimeRecord = y;
                    vehicule.realTimeRecord.vehicule = new __WEBPACK_IMPORTED_MODULE_8__objects_real_time__["b" /* RealTimeRecord */]();
                    vehicule.realTimeRecord.vehicule = vehicule;
                    _this.AllPaths = _this.historicalService.getAllMileages(vehicule.device.idDevice, { startDate: startHour, endDate: endDate }).subscribe(function (mileages) {
                        _this.mileages = mileages;
                        _this.mileages.forEach(function (mileage) {
                            var startHour = mileage.startHour;
                            mileage.startHour = startHour + (60 * 60 * 1000);
                        });
                        _this.totalMileage = _this.mileages[_this.mileages.length - 1];
                        _this.mileages.splice(_this.mileages.length - 1);
                        vehicule.realTimeRecord.mileages = Math.round(_this.totalMileage.drivingDistance);
                    }, function (err) { });
                    _this.trackRealTimeRecord(vehicule.realTimeRecord);
                    _this.totalpage = x.totalPages;
                }, function (err) {
                    vehicule.realTimeRecord == null;
                    _this.trackRealTimeRecord(vehicule.realTimeRecord);
                });
            });
        });
        this.data = this.vehicules;
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
                    vehicule.realTimeRecord = new __WEBPACK_IMPORTED_MODULE_8__objects_real_time__["b" /* RealTimeRecord */]();
                    _this.realTimeService.getRealTimeRecord(vehicule.device.idDevice).subscribe(function (y) {
                        vehicule.realTimeRecord = y;
                        vehicule.realTimeRecord.vehicule = new __WEBPACK_IMPORTED_MODULE_8__objects_real_time__["b" /* RealTimeRecord */]();
                        vehicule.realTimeRecord.vehicule = vehicule;
                        _this.trackRealTimeRecord(vehicule.realTimeRecord);
                    }, function (err) {
                        vehicule.realTimeRecord == null;
                        _this.trackRealTimeRecord(vehicule.realTimeRecord);
                    });
                });
                _this.vehiculeLoaded.forEach(function (vehicule) {
                    _this.vehicules.push(vehicule);
                    _this.data.push(vehicule);
                });
            });
        }
    };
    GroupeRealtime.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        this.vehicules = this.data;
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.vehicules = this.vehicules.filter(function (vehicule) {
                return (vehicule.matricule.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
        this.imageUri = __WEBPACK_IMPORTED_MODULE_5__providers_global_config__["d" /* imagescar */] + "c3x0.png";
        realTimeRecord.icon = this.imageUri;
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition == true) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_5__providers_global_config__["d" /* imagescar */] + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -10]
            });
            this.imageUri = __WEBPACK_IMPORTED_MODULE_5__providers_global_config__["d" /* imagescar */] + "c4x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed > 0) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_5__providers_global_config__["d" /* imagescar */] + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            this.imageUri = __WEBPACK_IMPORTED_MODULE_5__providers_global_config__["d" /* imagescar */] + "c1x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'VALID' && realTimeRecord.speed == 0 && realTimeRecord.ignition == false) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_5__providers_global_config__["d" /* imagescar */] + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            this.imageUri = __WEBPACK_IMPORTED_MODULE_5__providers_global_config__["d" /* imagescar */] + "c2x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord.realTimeRecordStatus == 'NON_VALID' || realTimeRecord.realTimeRecordStatus == 'TECHNICAL_ISSUE') {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_5__providers_global_config__["d" /* imagescar */] + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            this.imageUri = __WEBPACK_IMPORTED_MODULE_5__providers_global_config__["d" /* imagescar */] + "c3x" + Math.abs(Math.round(angle / 45) * 45) + ".png";
        }
        if (realTimeRecord == null) {
            icon = new Icon({
                iconUrl: __WEBPACK_IMPORTED_MODULE_5__providers_global_config__["d" /* imagescar */] + "c3x0.png",
                iconAnchor: [-2, 30],
                popupAnchor: [10, -25]
            });
            this.imageUri = __WEBPACK_IMPORTED_MODULE_5__providers_global_config__["d" /* imagescar */] + "c3x0.png";
        }
        realTimeRecord.icon = this.imageUri;
        this.geocodingService.inverseGeoconding(realTimeRecord.coordinate.lat, realTimeRecord.coordinate.lng, 18).subscribe(function (adress) {
            realTimeRecord.geocoding = _this.getGeocoding(adress.address);
            realTimeRecord.geocodingDetails = adress.display_name;
            _this.updateSpecificGroups(realTimeRecord);
        }, function (err) { });
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
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('mainScreen'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
], GroupeRealtime.prototype, "elementView", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Content */])
], GroupeRealtime.prototype, "content", void 0);
GroupeRealtime = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-group-realtime',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\groups-page\group-realtime\group-realtime.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <a style="color:white">{{group.nom}}</a>\n\n    </ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="closeModal()">\n\n        <ion-icon style="color:white" name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n<ion-content style="opacity:1;">\n\n    <ion-searchbar\n\n   \n\n  \n\n    (ionInput)="getItems($event)">\n\n   \n\n  </ion-searchbar>\n\n\n\n\n\n\n\n  <div style="font-size: 15px;border-radius:0px; margin-top: 0%;">\n\n    <div style="width: 500%">\n\n      <table class="table table-striped" style="width: 20%">\n\n        <tbody>\n\n\n\n          <tr>\n\n            <td>\n\n              <div style="overflow:auto">\n\n                <table class="table" style="width: 100%;">\n\n\n\n                  <tbody style="border :colspan; text-align: center;" frame="hsides" frame="hsides" rules="all">\n\n                     \n\n                    <ng-container *ngFor="let vehicule of vehicules">\n\n                      <tr [ngClass]="{\'activeRT\': selectedDevice == vehicule.idDevice}">\n\n                        <td width="10%" (click)="goToRealTimeRecord(vehicule,isValidPoint(vehicule.realTimeRecord.coordinate))">\n\n\n\n                          <img width="30px"  src="{{vehicule?.realTimeRecord?.icon}}">\n\n                        </td>\n\n                        <td width="30%" (click)="goToRealTimeRecord(vehicule,isValidPoint(vehicule.realTimeRecord.coordinate))">\n\n\n\n                          <div style="font-size:12px; font-family: \'Noto Sans\', sans-serif;font-weight:bold;">\n\n                            <b>\n\n                              {{vehicule.matricule}}\n\n                              <br>\n\n\n\n                            </b>\n\n                          </div>\n\n                          <div style="font-size:12px; font-family: \'Noto Sans\', sans-serif;">\n\n\n\n                            {{vehicule.realTimeRecord?.vehicule?.driver?.lastName}} {{vehicule.realTimeRecord?.vehicule?.driver?.firstName}}\n\n                            <br>\n\n\n\n                          </div>\n\n\n\n                          <div style="font-size:10px;font-family: \'Noto Sans\', sans-serif;font-weight:lighter">\n\n\n\n                            {{vehicule?.realTimeRecord?.recordTime| date:\'dd-MM-yy HH:mm\'}}\n\n\n\n                          </div>\n\n\n\n                        </td>\n\n                        <td width="40%" (click)="goToRealTimeRecord(vehicule,isValidPoint(vehicule.realTimeRecord.coordinate))">\n\n                          <div *ngIf="isValidPoint(vehicule.realTimeRecord.coordinate)">\n\n\n\n                            <div *ngIf="vehicule.realTimeRecord.relativePosition" style="font-size:10px; font-family: \'Noto Sans\', sans-serif;font-weight:lighter">\n\n                              <b style="font-weight:bold">\n\n                                {{vehicule?.realTimeRecord?.relativePosition}}\n\n                              </b>\n\n                            </div>\n\n                            <div *ngIf="!vehicule.realTimeRecord.relativePosition" style="font-size:10px; font-family: \'Noto Sans\', sans-serif;">\n\n                              <b style="font-weight:bold">\n\n                                {{vehicule?.realTimeRecord.geocoding}}\n\n                              </b>\n\n                            </div>\n\n                            <div style="font-size:10px; font-family: \'Noto Sans\', sans-serif;">{{vehicule?.realTimeRecord.mileages}}<span>KM</span></div>\n\n\n\n                            <div style="font-size:10px; font-family: \'Noto Sans\', sans-serif;">\n\n\n\n                              {{vehicule?.realTimeRecord?.speed}} KM/H\n\n\n\n                            </div>\n\n                          </div>\n\n\n\n\n\n\n\n                          <div *ngIf="!isValidPoint(vehicule.realTimeRecord.coordinate)">\n\n                            <ion-label style="color:red;font-weight:bold"> Aucune Info</ion-label>\n\n\n\n                          </div>\n\n                        </td>\n\n\n\n                      </tr>\n\n                    </ng-container>\n\n                  </tbody>\n\n                </table>\n\n\n\n              </div>\n\n            </td>\n\n          </tr>\n\n\n\n        </tbody>\n\n        <tfoot>\n\n          <button ion-button outline full *ngIf="status==true" (click)="charger()"> Plus ...</button>\n\n          <!-- <div ><img *ngIf="status==true" src="assets/icons/loading2.gif" style="width: 35px;margin-left: 45%;"/></div> -->\n\n\n\n        </tfoot>\n\n      </table>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\groups-page\group-realtime\group-realtime.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_historical_service__["a" /* HistoricalService */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["DecimalPipe"], __WEBPACK_IMPORTED_MODULE_6__utils_geocoding_service__["a" /* GeocodingService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_7__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_1__providers_real_time_service__["a" /* RealTimeService */]])
], GroupeRealtime);

//# sourceMappingURL=group-realtime.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MileageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_map_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-mileage-list',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\mileage\mileage.html"*/'<ion-header>\n\n    \n\n      <ion-navbar>\n\n        <ion-title><span style="color:white">Kilométrage</span></ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="closeModal()">\n\n        <ion-icon name="arrow-down" style="color:white"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n        <ion-buttons left>\n\n          <button ion-button icon-only (click)="returnModal()">\n\n            <ion-icon ios="ios-return-left" md="md-return-left" style="color:white"></ion-icon>\n\n    </button>\n\n      </ion-buttons>\n\n      </ion-navbar>\n\n    \n\n</ion-header>\n\n<ion-content padding style="background-color: rgba(255, 255, 255, 1) !important;">\n\n    <table class="table table-striped"  style="font-size: 15px;font-weight: bold" width="100%">\n\n        <thead  style="background-color: #F5F5F5;opacity: 0.65">\n\n        <tr>\n\n            <th width="33%" style="text-align: center"><i class="fa fa-clock-o"\n\n                                                          aria-hidden="true"></i> Date début\n\n            </th>\n\n            <th width="33%" style="text-align: center">Kilométrage</th>\n\n            <th width="33%" style="text-align: center">Durée circulation</th>\n\n        </tr>\n\n        </thead>\n\n        <tbody class="datatable-body"  style="background-color: #F5F5F5;opacity: 0.65">\n\n        <tr *ngFor="let mileage of mileages " (click)="addMileageToArray(mileage, $event)" style="border-top: solid black 1px;" >\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{mileage.startHour | date:\'dd-MM-y HH:mm\'}}">\n\n                {{mileage.startHour | date:\'dd-MM-yyyy HH:mm\'}}\n\n            </td>\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{mileage.drivingDistance}} Km">\n\n                {{mileage.drivingDistance | number:\'1.2-2\'}}\n\n            </td>\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{mileage.drivingDurationStr}}">\n\n                {{mileage.drivingDurationStr}}\n\n            </td>\n\n        </tr>\n\n         <tr style="font-weight: 900;color: green">\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip">\n\n                Total:\n\n            </td>\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{totalMileage.drivingDistance}} Km">\n\n                {{totalMileage.drivingDistance | number:\'1.2-2\'}}\n\n            </td>\n\n            <td width="33%" style="text-align: center" data-toggle="tooltip"\n\n                title="{{totalMileage.drivingDurationStr}}">\n\n                {{totalMileage.drivingDurationStr}}\n\n            </td>\n\n        </tr>\n\n        </tbody>\n\n    </table>\n\n</ion-content>'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\mileage\mileage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_management_service__["a" /* DataManagementService */], __WEBPACK_IMPORTED_MODULE_0__utils_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ModalController */]])
], MileageComponent);

//# sourceMappingURL=mileage.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jqxGaugeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jqwidgets_jqxcore_js__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jqwidgets_jqxcore_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__jqwidgets_jqxcore_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jqwidgets_jqxdraw_js__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jqwidgets_jqxdraw_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__jqwidgets_jqxdraw_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jqwidgets_jqxgauge_js__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jqwidgets_jqxgauge_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__jqwidgets_jqxgauge_js__);
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
/*
jQWidgets v5.5.0 (2017-Dec)
Copyright (c) 2011-2017 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />




var jqxGaugeComponent = (function () {
    function jqxGaugeComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'border', 'caption', 'cap', 'colorScheme', 'disabled', 'easing', 'endAngle', 'height', 'int64', 'labels', 'min', 'max', 'pointer', 'radius', 'ranges', 'startAngle', 'showRanges', 'style', 'ticksMajor', 'ticksMinor', 'ticksDistance', 'value', 'width'];
        // jqxGaugeComponent events
        this.onValueChanging = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.onValueChanged = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.elementRef = containerElement;
    }
    jqxGaugeComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxGaugeComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxGauge(this.properties[i])) {
                        this.host.jqxGauge(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxGaugeComponent.prototype.arraysEqual = function (attrValue, hostValue) {
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    };
    jqxGaugeComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxGaugeComponent.prototype.moveClasses = function (parentEl, childEl) {
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, classes);
        }
        parentEl.className = '';
        var _a;
    };
    jqxGaugeComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxGaugeComponent.prototype.createComponent = function (options) {
        if (options) {
            JQXLite.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = JQXLite(this.elementRef.nativeElement.firstChild);
        this.moveClasses(this.elementRef.nativeElement, this.host[0]);
        this.moveStyles(this.elementRef.nativeElement, this.host[0]);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGauge', options);
        this.__updateRect__();
    };
    jqxGaugeComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxGaugeComponent.prototype.__updateRect__ = function () {
        this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxGaugeComponent.prototype.setOptions = function (options) {
        this.host.jqxGauge('setOptions', options);
    };
    // jqxGaugeComponent properties
    jqxGaugeComponent.prototype.animationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxGauge('animationDuration');
        }
    };
    jqxGaugeComponent.prototype.border = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('border', arg);
        }
        else {
            return this.host.jqxGauge('border');
        }
    };
    jqxGaugeComponent.prototype.caption = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('caption', arg);
        }
        else {
            return this.host.jqxGauge('caption');
        }
    };
    jqxGaugeComponent.prototype.cap = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('cap', arg);
        }
        else {
            return this.host.jqxGauge('cap');
        }
    };
    jqxGaugeComponent.prototype.colorScheme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxGauge('colorScheme');
        }
    };
    jqxGaugeComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('disabled', arg);
        }
        else {
            return this.host.jqxGauge('disabled');
        }
    };
    jqxGaugeComponent.prototype.easing = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('easing', arg);
        }
        else {
            return this.host.jqxGauge('easing');
        }
    };
    jqxGaugeComponent.prototype.endAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('endAngle', arg);
        }
        else {
            return this.host.jqxGauge('endAngle');
        }
    };
    jqxGaugeComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('height', arg);
        }
        else {
            return this.host.jqxGauge('height');
        }
    };
    jqxGaugeComponent.prototype.int64 = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('int64', arg);
        }
        else {
            return this.host.jqxGauge('int64');
        }
    };
    jqxGaugeComponent.prototype.labels = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('labels', arg);
        }
        else {
            return this.host.jqxGauge('labels');
        }
    };
    jqxGaugeComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('min', arg);
        }
        else {
            return this.host.jqxGauge('min');
        }
    };
    jqxGaugeComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('max', arg);
        }
        else {
            return this.host.jqxGauge('max');
        }
    };
    jqxGaugeComponent.prototype.pointer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('pointer', arg);
        }
        else {
            return this.host.jqxGauge('pointer');
        }
    };
    jqxGaugeComponent.prototype.radius = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('radius', arg);
        }
        else {
            return this.host.jqxGauge('radius');
        }
    };
    jqxGaugeComponent.prototype.ranges = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ranges', arg);
        }
        else {
            return this.host.jqxGauge('ranges');
        }
    };
    jqxGaugeComponent.prototype.startAngle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('startAngle', arg);
        }
        else {
            return this.host.jqxGauge('startAngle');
        }
    };
    jqxGaugeComponent.prototype.showRanges = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('showRanges', arg);
        }
        else {
            return this.host.jqxGauge('showRanges');
        }
    };
    jqxGaugeComponent.prototype.style = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('style', arg);
        }
        else {
            return this.host.jqxGauge('style');
        }
    };
    jqxGaugeComponent.prototype.ticksMajor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksMajor', arg);
        }
        else {
            return this.host.jqxGauge('ticksMajor');
        }
    };
    jqxGaugeComponent.prototype.ticksMinor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksMinor', arg);
        }
        else {
            return this.host.jqxGauge('ticksMinor');
        }
    };
    jqxGaugeComponent.prototype.ticksDistance = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksDistance', arg);
        }
        else {
            return this.host.jqxGauge('ticksDistance');
        }
    };
    jqxGaugeComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('value', arg);
        }
        else {
            return this.host.jqxGauge('value');
        }
    };
    jqxGaugeComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('width', arg);
        }
        else {
            return this.host.jqxGauge('width');
        }
    };
    // jqxGaugeComponent functions
    jqxGaugeComponent.prototype.disable = function () {
        this.host.jqxGauge('disable');
    };
    jqxGaugeComponent.prototype.enable = function () {
        this.host.jqxGauge('enable');
    };
    jqxGaugeComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxGauge("val", value);
        }
        else {
            return this.host.jqxGauge("val");
        }
    };
    ;
    jqxGaugeComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('valueChanging', function (eventData) { _this.onValueChanging.emit(eventData); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
    };
    return jqxGaugeComponent;
}()); //jqxGaugeComponent
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('animationDuration'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrAnimationDuration", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('border'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrBorder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('caption'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrCaption", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('cap'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrCap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('colorScheme'),
    __metadata("design:type", String)
], jqxGaugeComponent.prototype, "attrColorScheme", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('disabled'),
    __metadata("design:type", Boolean)
], jqxGaugeComponent.prototype, "attrDisabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('easing'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrEasing", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('endAngle'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrEndAngle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('int64'),
    __metadata("design:type", Boolean)
], jqxGaugeComponent.prototype, "attrInt64", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('labels'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrLabels", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('min'),
    __metadata("design:type", Number)
], jqxGaugeComponent.prototype, "attrMin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('max'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrMax", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('pointer'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrPointer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('radius'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrRadius", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('ranges'),
    __metadata("design:type", Array)
], jqxGaugeComponent.prototype, "attrRanges", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('startAngle'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrStartAngle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('showRanges'),
    __metadata("design:type", Boolean)
], jqxGaugeComponent.prototype, "attrShowRanges", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('style'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrStyle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('ticksMajor'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrTicksMajor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('ticksMinor'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrTicksMinor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('ticksDistance'),
    __metadata("design:type", String)
], jqxGaugeComponent.prototype, "attrTicksDistance", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('value'),
    __metadata("design:type", Number)
], jqxGaugeComponent.prototype, "attrValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('width'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('height'),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "attrHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('auto-create'),
    __metadata("design:type", Boolean)
], jqxGaugeComponent.prototype, "autoCreate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "onValueChanging", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(),
    __metadata("design:type", Object)
], jqxGaugeComponent.prototype, "onValueChanged", void 0);
jqxGaugeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'jqxGauge',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"]])
], jqxGaugeComponent);

//# sourceMappingURL=angular_jqxgauge.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vehicules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vehicule_form_vehicule_form__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_vehicule_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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
    //Get list groups and devices
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
    //get list vehicules "pagination"
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
    //alert Modification
    Vehicules.prototype.presentConfirm = function (vehicule) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Informations',
            message: 'Equipement:' + vehicule.device.idDevice + '<br> Vitesse Max :' + vehicule.maxSpeed + '<br> Chauffeur : ' + vehicule.lastName + '<br> Email :' + vehicule.emails + '<br> Surnom : ' + vehicule.alias + '<br> Marque : ' + vehicule.mark,
            buttons: [{
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
    //alert supprimer vehicule "non utilise"
    Vehicules.prototype.delete = function (vehicule) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Voulez vous vraiment supprimer :' + vehicule.matricule + '?',
            buttons: [{
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
    //methode de suppression
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
    // modification modal "vehicule-form.ts"
    Vehicules.prototype.openModifModal = function (vehicule) {
        var PoiModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__vehicule_form_vehicule_form__["a" /* VehiculeForm */], {
            vehicule: vehicule
        });
        PoiModal.present();
        PoiModal.onDidDismiss(function (form) { });
    };
    return Vehicules;
}());
Vehicules = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-vehicules',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\datamana\vehicules\vehicules.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-title>\n\n      <span style="color:white">Véhicules</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-fab top left outline class="ion-fab1" #fab>\n\n    <!--IOS margin-top:10px; -->\n\n    <button ion-fab mini outline style="margin-left: -5px !important;background-color:rgba(0,0,0,0.6);margin-top:10px;" (click)="openmenu()">\n\n      <i class="fa fa-list" aria-hidden="true"></i>\n\n    </button>\n\n  </ion-fab>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          Matricule\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          Chauffeur\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          Vitesse Max\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card *ngFor="let vehicule of vehicules">\n\n    <ion-list>\n\n      <ion-row (click)="presentConfirm(vehicule)">\n\n        <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          {{vehicule.matricule}}\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          {{vehicule.lastName}}\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          {{vehicule.maxSpeed}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\datamana\vehicules\vehicules.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_vehicule_service__["a" /* VehiculeService */]])
], Vehicules);

//# sourceMappingURL=vehicules.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Groupes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_group_service__ = __webpack_require__(409);
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
    //Get list groups
    Groupes.prototype.ngOnInit = function () {
        var _this = this;
        this.getListGroups(this.bigCurrentPage - 1, this.itemsPerPage);
        this.groupeService.getVehiculesMatricules().subscribe(function (response) {
            _this.groupeService.vehiculeLabels = response;
        });
    };
    //Open Menu
    Groupes.prototype.openmenu = function () {
        this.menu.open();
    };
    //
    Groupes.prototype.getListGroups = function (page, size) {
        var _this = this;
        this.groupeService.bigCurrentPage = this.bigCurrentPage;
        this.groupeService.getGroupsByPageAndSize(this.bigCurrentPage - 1, this.itemsPerPage).subscribe(function (groups) {
            _this.groups = groups.content;
            _this.groupeService.groups = _this.groups;
            _this.bigTotalItems = groups.totalElements;
        });
    };
    return Groupes;
}());
Groupes = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-groupes',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\datamana\groupes\groupes.html"*/'<ion-header>\n\n  <ion-navbar style="height:48px" hideBackButton="true">\n\n    <ion-title></ion-title>\n\n    <ion-title>\n\n      <span style="color:white">Groupes</span>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n  <ion-fab top left outline class="ion-fab1" #fab>\n\n    <!--IOS margin-top:10px; -->\n\n    <button ion-fab mini outline style="margin-left: -5px !important;background-color:rgba(0,0,0,0.6);margin-top:10px;" (click)="openmenu()">\n\n      <i class="fa fa-list" aria-hidden="true"></i>\n\n    </button>\n\n  </ion-fab>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col col-3 col-sm-3 col-md-3 col-xs-12>\n\n          Icon\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-9 col-sm-9 col-md-9 col-xs-12>\n\n          Groupe\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card *ngFor="let group of groups">\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-3 col-sm-3 col-md-3 col-xs-12>\n\n          <img src="{{imagesDir+group.imageUrl}}" />\n\n        </ion-col>\n\n        <ion-col col-9 col-sm-9 col-md-9 col-xs-12>\n\n          <span style="margin-left:5px"></span>{{group.nom}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\datamana\groupes\groupes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_group_service__["a" /* GroupService */]])
], Groupes);

//# sourceMappingURL=groupes.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_driver_service__ = __webpack_require__(429);
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
    // Get List chauffeurs
    DriverComponent.prototype.ngOnInit = function () {
        this.getListDrivers(this.bigCurrentPage - 1, this.itemsPerPage);
    };
    //
    DriverComponent.prototype.getListDrivers = function (page, size) {
        var _this = this;
        this.driverService.bigCurrentPage = this.bigCurrentPage;
        this.driverService.getDriversByPageAndSize(this.bigCurrentPage - 1, this.itemsPerPage).subscribe(function (drivers) {
            _this.drivers = drivers.content;
            _this.driverService.drivers = _this.drivers;
            _this.bigTotalItems = drivers.totalElements;
        });
    };
    //open menu
    DriverComponent.prototype.openmenu = function () {
        this.menu.open();
    };
    return DriverComponent;
}());
DriverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-chauffeurs',template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\datamana\chauffeurs\chauffeurs.html"*/'<ion-header>\n\n  <ion-navbar style="height:48px" hideBackButton="true">\n\n    <ion-title>\n\n      <span style="color:white">Chauffeurs</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-fab top left outline class="ion-fab1" #fab>\n\n    <!--IOS margin-top:10px; -->\n\n    <button ion-fab mini outline style="margin-left: -5px !important;background-color:rgba(0,0,0,0.6);margin-top:10px; " (click)="openmenu()">\n\n      <i class="fa fa-list" aria-hidden="true"></i>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          Nom\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          Télephone\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          CIN\n\n        </ion-col>\n\n\n\n\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-card *ngFor="let driver of drivers">\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          {{driver.lastName}} {{driver.firstName}}\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          {{driver.telephone}}\n\n        </ion-col>\n\n        <br>\n\n        <ion-col col-4 col-sm-4 col-md-4 col-xs-12>\n\n          {{driver.cin}}\n\n        </ion-col>\n\n\n\n\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-card>\n\n  <!-- <table style="font-size: 15px;width:100%">\n\n    <thead style="width:100%!important">\n\n      <tr style="background-color: #F5F5F5;opacity: 0.65;height:50px;font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: rgb(115, 144, 182);width:100%!important;opacity: 0.75;">\n\n        <th style="text-align: center;width:33%">Nom</th>\n\n        <th style="text-align: center;width:33%">Téléphone</th>\n\n        <th style="text-align: center;width:33%">CIN</th>\n\n      </tr>\n\n    </thead>\n\n    <tbody style="background-color: #FFFAFA;opacity: 0.5;font: bolder;font-size: 17px; font-weight: bold;text-align: center;padding-top: 10px;padding-bottom: 10px; background-color: #B0C4DE;opacity: 0.75;">\n\n\n\n      <tr *ngFor="let driver of drivers" style="border-top: solid black 1px;height:50px;">\n\n        <td style="text-align: center">\n\n          {{driver.lastName}} {{driver.firstName}}\n\n        </td>\n\n        <td style="text-align: center;" data-toggle="tooltip">\n\n          {{driver.telephone}}\n\n        </td>\n\n        <td style="text-align: center;" data-toggle="tooltip">\n\n          {{driver.cin}}\n\n        </td>\n\n\n\n      </tr>\n\n    </tbody>\n\n  </table> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\pages\datamana\chauffeurs\chauffeurs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_driver_service__["a" /* DriverService */]])
], DriverComponent);

//# sourceMappingURL=chauffeurs.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], DriverService);

//# sourceMappingURL=driver.service.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], DataManagementService);

//# sourceMappingURL=data-management.service.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(435);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_document_circulation_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_gestion_park_documentcirculation_documentcirculation__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_gestion_park_vidange_vidange_form_vidange_form__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_gestion_park_vidange_vidange__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_gestion_park_carburant_carburant__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_gestion_park_gest_park__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_group_service__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_datamana_vehicules_vehicule_form_vehicule_form__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gestpoi_gestpoi__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_poi_poi__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_login__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_historical_historical__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_groups_page_groups_page__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_historical_form_historical_form__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_paths_list_paths_list__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__utils_geocoding_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__utils_map_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_real_time_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_historical_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_data_management_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_stop_list_stop_list__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_mileage_mileage__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_datamana_vehicules_vehicules__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_datamana_groupes_groupes__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_vehicule_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_datamana_chauffeurs_chauffeurs__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_driver_service__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_launch_navigator__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_groups_page_group_realtime_group_realtime__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_gestion_park_dashbord_dashbord__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_fueling_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_gestion_park_carburant_carburant_form_carburant_form__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser_animations__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__assets_jqwidgets_ts_angular_jqxgauge__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_oil_change_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_gestion_park_documentcirculation_doc_circ_aff_doc_circ__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_gestion_park_documentcirculation_doc_circ_aff_doc_circ_form_doc_circ_form__ = __webpack_require__(213);
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
    Object(__WEBPACK_IMPORTED_MODULE_12__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_poi_poi__["a" /* Poi */],
            __WEBPACK_IMPORTED_MODULE_21__pages_historical_historical__["a" /* Historical */],
            __WEBPACK_IMPORTED_MODULE_22__pages_groups_page_groups_page__["a" /* GroupsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_historical_form_historical_form__["a" /* HistoricalForm */],
            __WEBPACK_IMPORTED_MODULE_24__pages_paths_list_paths_list__["a" /* PathsList */],
            __WEBPACK_IMPORTED_MODULE_31__pages_stop_list_stop_list__["a" /* StopList */],
            __WEBPACK_IMPORTED_MODULE_8__pages_gestpoi_gestpoi__["a" /* GestPoi */],
            __WEBPACK_IMPORTED_MODULE_33__pages_datamana_vehicules_vehicules__["a" /* Vehicules */],
            __WEBPACK_IMPORTED_MODULE_34__pages_datamana_groupes_groupes__["a" /* Groupes */],
            __WEBPACK_IMPORTED_MODULE_7__pages_datamana_vehicules_vehicule_form_vehicule_form__["a" /* VehiculeForm */],
            __WEBPACK_IMPORTED_MODULE_36__pages_datamana_chauffeurs_chauffeurs__["a" /* DriverComponent */],
            __WEBPACK_IMPORTED_MODULE_39__pages_groups_page_group_realtime_group_realtime__["a" /* GroupeRealtime */],
            __WEBPACK_IMPORTED_MODULE_5__pages_gestion_park_gest_park__["a" /* GestionPark */],
            __WEBPACK_IMPORTED_MODULE_4__pages_gestion_park_carburant_carburant__["a" /* Carburant */],
            __WEBPACK_IMPORTED_MODULE_40__pages_gestion_park_dashbord_dashbord__["a" /* Dashbord */],
            __WEBPACK_IMPORTED_MODULE_42__pages_gestion_park_carburant_carburant_form_carburant_form__["a" /* CarburantForm */],
            __WEBPACK_IMPORTED_MODULE_3__pages_gestion_park_vidange_vidange__["a" /* VidangeComponent */],
            __WEBPACK_IMPORTED_MODULE_32__pages_mileage_mileage__["a" /* MileageComponent */],
            __WEBPACK_IMPORTED_MODULE_2__pages_gestion_park_vidange_vidange_form_vidange_form__["a" /* VidangeForm */],
            __WEBPACK_IMPORTED_MODULE_1__pages_gestion_park_documentcirculation_documentcirculation__["a" /* DocumentCirculationComponent */],
            __WEBPACK_IMPORTED_MODULE_46__pages_gestion_park_documentcirculation_doc_circ_aff_doc_circ__["a" /* DocCirc */],
            __WEBPACK_IMPORTED_MODULE_47__pages_gestion_park_documentcirculation_doc_circ_aff_doc_circ_form_doc_circ_form__["a" /* DocCircForm */],
            __WEBPACK_IMPORTED_MODULE_44__assets_jqwidgets_ts_angular_jqxgauge__["a" /* jqxGaugeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {
                swipeBackEnabled: 'false'
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_historical_historical__["a" /* Historical */],
            __WEBPACK_IMPORTED_MODULE_22__pages_groups_page_groups_page__["a" /* GroupsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_historical_form_historical_form__["a" /* HistoricalForm */],
            __WEBPACK_IMPORTED_MODULE_24__pages_paths_list_paths_list__["a" /* PathsList */],
            __WEBPACK_IMPORTED_MODULE_10__pages_poi_poi__["a" /* Poi */],
            __WEBPACK_IMPORTED_MODULE_31__pages_stop_list_stop_list__["a" /* StopList */],
            __WEBPACK_IMPORTED_MODULE_32__pages_mileage_mileage__["a" /* MileageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_gestpoi_gestpoi__["a" /* GestPoi */],
            __WEBPACK_IMPORTED_MODULE_33__pages_datamana_vehicules_vehicules__["a" /* Vehicules */],
            __WEBPACK_IMPORTED_MODULE_34__pages_datamana_groupes_groupes__["a" /* Groupes */],
            __WEBPACK_IMPORTED_MODULE_7__pages_datamana_vehicules_vehicule_form_vehicule_form__["a" /* VehiculeForm */],
            __WEBPACK_IMPORTED_MODULE_36__pages_datamana_chauffeurs_chauffeurs__["a" /* DriverComponent */],
            __WEBPACK_IMPORTED_MODULE_39__pages_groups_page_group_realtime_group_realtime__["a" /* GroupeRealtime */],
            __WEBPACK_IMPORTED_MODULE_5__pages_gestion_park_gest_park__["a" /* GestionPark */],
            __WEBPACK_IMPORTED_MODULE_4__pages_gestion_park_carburant_carburant__["a" /* Carburant */],
            __WEBPACK_IMPORTED_MODULE_40__pages_gestion_park_dashbord_dashbord__["a" /* Dashbord */],
            __WEBPACK_IMPORTED_MODULE_42__pages_gestion_park_carburant_carburant_form_carburant_form__["a" /* CarburantForm */],
            __WEBPACK_IMPORTED_MODULE_3__pages_gestion_park_vidange_vidange__["a" /* VidangeComponent */],
            __WEBPACK_IMPORTED_MODULE_2__pages_gestion_park_vidange_vidange_form_vidange_form__["a" /* VidangeForm */],
            __WEBPACK_IMPORTED_MODULE_1__pages_gestion_park_documentcirculation_documentcirculation__["a" /* DocumentCirculationComponent */],
            __WEBPACK_IMPORTED_MODULE_46__pages_gestion_park_documentcirculation_doc_circ_aff_doc_circ__["a" /* DocCirc */],
            __WEBPACK_IMPORTED_MODULE_47__pages_gestion_park_documentcirculation_doc_circ_aff_doc_circ_form_doc_circ_form__["a" /* DocCircForm */],
            __WEBPACK_IMPORTED_MODULE_44__assets_jqwidgets_ts_angular_jqxgauge__["a" /* jqxGaugeComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_35__providers_vehicule_service__["a" /* VehiculeService */],
            __WEBPACK_IMPORTED_MODULE_20__providers_login__["a" /* SigningService */],
            __WEBPACK_IMPORTED_MODULE_25__utils_geocoding_service__["a" /* GeocodingService */],
            __WEBPACK_IMPORTED_MODULE_26__utils_map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_27__providers_real_time_service__["a" /* RealTimeService */],
            __WEBPACK_IMPORTED_MODULE_29__providers_data_management_service__["a" /* DataManagementService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_28__providers_historical_service__["a" /* HistoricalService */],
            __WEBPACK_IMPORTED_MODULE_41__providers_fueling_service__["a" /* FuelingService */],
            __WEBPACK_IMPORTED_MODULE_45__providers_oil_change_service__["a" /* OilChangeService */],
            __WEBPACK_IMPORTED_MODULE_15__angular_common__["DecimalPipe"],
            __WEBPACK_IMPORTED_MODULE_6__providers_group_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_37__providers_driver_service__["a" /* DriverService */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_storage__["a" /* IonicStorageModule */],
            __WEBPACK_IMPORTED_MODULE_0__providers_document_circulation_service__["a" /* DocumentCirculationService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_12__angular_core__["ErrorHandler"],
                useClass: __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["f" /* IonicErrorHandler */]
            }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTimeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_headers__ = __webpack_require__(418);
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
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'groupes/minifyGroups?' + parms, { headers: headers }).map(function (res) { return res.json(); });
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], RealTimeService);

//# sourceMappingURL=real-time.service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Vehicule */
/* unused harmony export Group */
/* unused harmony export RunningDocumentInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RunningDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Provider; });
/* unused harmony export Type */
/* unused harmony export TypeOil */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LastDates; });
/* unused harmony export Fueling */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FuelingInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OilChange; });
/* unused harmony export OilChangeInfo */
/* unused harmony export Tire */
/* unused harmony export TireInfo */
/* unused harmony export Battery */
/* unused harmony export BatteryInfo */
/* unused harmony export Reparation */
/* unused harmony export ReparationInfo */
/* unused harmony export DashbordInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateInterval; });
var Vehicule = (function () {
    function Vehicule() {
    }
    return Vehicule;
}());

var Group = (function () {
    function Group() {
    }
    return Group;
}());

var RunningDocumentInfo = (function () {
    function RunningDocumentInfo() {
    }
    return RunningDocumentInfo;
}());

var RunningDocument = (function () {
    function RunningDocument() {
    }
    return RunningDocument;
}());

var Provider = (function () {
    function Provider() {
    }
    return Provider;
}());

var Type = (function () {
    function Type() {
        this.id = 0;
    }
    return Type;
}());

var TypeOil = (function () {
    function TypeOil() {
    }
    return TypeOil;
}());

var LastDates = (function () {
    function LastDates() {
    }
    return LastDates;
}());

var Fueling = (function () {
    function Fueling() {
    }
    return Fueling;
}());

var FuelingInfo = (function () {
    function FuelingInfo() {
        this.type = new Type();
    }
    return FuelingInfo;
}());

var OilChange = (function () {
    function OilChange() {
    }
    return OilChange;
}());

var OilChangeInfo = (function () {
    function OilChangeInfo() {
    }
    return OilChangeInfo;
}());

var Tire = (function () {
    function Tire() {
    }
    return Tire;
}());

var TireInfo = (function () {
    function TireInfo() {
    }
    return TireInfo;
}());

var Battery = (function () {
    function Battery() {
    }
    return Battery;
}());

var BatteryInfo = (function () {
    function BatteryInfo() {
    }
    return BatteryInfo;
}());

var Reparation = (function () {
    function Reparation() {
    }
    return Reparation;
}());

var ReparationInfo = (function () {
    function ReparationInfo() {
    }
    return ReparationInfo;
}());

var DashbordInfo = (function () {
    function DashbordInfo() {
    }
    return DashbordInfo;
}());

var DateInterval = (function () {
    function DateInterval() {
    }
    return DateInterval;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocodingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_config__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GeocodingService);

//# sourceMappingURL=geocoding.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__ = __webpack_require__(39);
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
    function MapService(events) {
        this.events = events;
        this.mapLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.markerWasAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.markerWasEdited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
            })
            /*
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
                        })*/
        };
    }
    MapService.prototype.addRtMarker = function (rtMarker) {
        rtMarker.value.setIcon(rtMarker.icon);
        this.rtMarkers.push(rtMarker);
        rtMarker.value.addTo(this.map);
    };
    MapService.prototype.updateRtMarkertest = function (coordinate, popup, icon, id, isCurrentPathClicked) {
        var _this = this;
        //tester si la liste est vide
        //si oui 
        var marker = L.marker(L.latLng(coordinate.lat, coordinate.lng));
        marker.bindPopup(popup);
        marker.on('click', function () {
            _this.events.publish('Showinfo', true);
        });
        if (this.newRtMarkers == null || this.newRtMarkers.length == 0) {
            marker.addTo(this.map);
            marker.setIcon(icon);
            marker.on('click', function () {
                _this.map.setView(coordinate, 12);
            });
            this.newRtMarkers.push({
                id: id,
                marker: marker
            });
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
                        var marker_1 = L.marker(L.latLng(coordinate.lat, coordinate.lng));
                        marker_1.setIcon(new Icon({
                            iconUrl: __WEBPACK_IMPORTED_MODULE_2__providers_global_config__["b" /* imagesDir */] + "green-point.png",
                            iconAnchor: [2, 2]
                        }));
                        _this.addMarker(marker_1);
                        var points = [];
                        points.push(rt.marker.getLatLng());
                        points.push(coordinate.value.getLatLng());
                        var polyline = L.polyline(points, {
                            color: '#0031D9',
                            weight: 3
                        });
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
                    var polyline = L.polyline(points, {
                        color: '#0031D9',
                        weight: 3
                    });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__["a" /* Events */]])
], MapService);

//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], HistoricalService);

//# sourceMappingURL=historical.service.js.map

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 294,
	"./af.js": 294,
	"./ar": 295,
	"./ar-dz": 296,
	"./ar-dz.js": 296,
	"./ar-kw": 297,
	"./ar-kw.js": 297,
	"./ar-ly": 298,
	"./ar-ly.js": 298,
	"./ar-ma": 299,
	"./ar-ma.js": 299,
	"./ar-sa": 300,
	"./ar-sa.js": 300,
	"./ar-tn": 301,
	"./ar-tn.js": 301,
	"./ar.js": 295,
	"./az": 302,
	"./az.js": 302,
	"./be": 303,
	"./be.js": 303,
	"./bg": 304,
	"./bg.js": 304,
	"./bn": 305,
	"./bn.js": 305,
	"./bo": 306,
	"./bo.js": 306,
	"./br": 307,
	"./br.js": 307,
	"./bs": 308,
	"./bs.js": 308,
	"./ca": 309,
	"./ca.js": 309,
	"./cs": 310,
	"./cs.js": 310,
	"./cv": 311,
	"./cv.js": 311,
	"./cy": 312,
	"./cy.js": 312,
	"./da": 313,
	"./da.js": 313,
	"./de": 314,
	"./de-at": 315,
	"./de-at.js": 315,
	"./de-ch": 316,
	"./de-ch.js": 316,
	"./de.js": 314,
	"./dv": 317,
	"./dv.js": 317,
	"./el": 318,
	"./el.js": 318,
	"./en-au": 319,
	"./en-au.js": 319,
	"./en-ca": 320,
	"./en-ca.js": 320,
	"./en-gb": 321,
	"./en-gb.js": 321,
	"./en-ie": 322,
	"./en-ie.js": 322,
	"./en-nz": 323,
	"./en-nz.js": 323,
	"./eo": 324,
	"./eo.js": 324,
	"./es": 325,
	"./es-do": 326,
	"./es-do.js": 326,
	"./es.js": 325,
	"./et": 327,
	"./et.js": 327,
	"./eu": 328,
	"./eu.js": 328,
	"./fa": 329,
	"./fa.js": 329,
	"./fi": 330,
	"./fi.js": 330,
	"./fo": 331,
	"./fo.js": 331,
	"./fr": 332,
	"./fr-ca": 333,
	"./fr-ca.js": 333,
	"./fr-ch": 334,
	"./fr-ch.js": 334,
	"./fr.js": 332,
	"./fy": 335,
	"./fy.js": 335,
	"./gd": 336,
	"./gd.js": 336,
	"./gl": 337,
	"./gl.js": 337,
	"./gom-latn": 338,
	"./gom-latn.js": 338,
	"./he": 339,
	"./he.js": 339,
	"./hi": 340,
	"./hi.js": 340,
	"./hr": 341,
	"./hr.js": 341,
	"./hu": 342,
	"./hu.js": 342,
	"./hy-am": 343,
	"./hy-am.js": 343,
	"./id": 344,
	"./id.js": 344,
	"./is": 345,
	"./is.js": 345,
	"./it": 346,
	"./it.js": 346,
	"./ja": 347,
	"./ja.js": 347,
	"./jv": 348,
	"./jv.js": 348,
	"./ka": 349,
	"./ka.js": 349,
	"./kk": 350,
	"./kk.js": 350,
	"./km": 351,
	"./km.js": 351,
	"./kn": 352,
	"./kn.js": 352,
	"./ko": 353,
	"./ko.js": 353,
	"./ky": 354,
	"./ky.js": 354,
	"./lb": 355,
	"./lb.js": 355,
	"./lo": 356,
	"./lo.js": 356,
	"./lt": 357,
	"./lt.js": 357,
	"./lv": 358,
	"./lv.js": 358,
	"./me": 359,
	"./me.js": 359,
	"./mi": 360,
	"./mi.js": 360,
	"./mk": 361,
	"./mk.js": 361,
	"./ml": 362,
	"./ml.js": 362,
	"./mr": 363,
	"./mr.js": 363,
	"./ms": 364,
	"./ms-my": 365,
	"./ms-my.js": 365,
	"./ms.js": 364,
	"./my": 366,
	"./my.js": 366,
	"./nb": 367,
	"./nb.js": 367,
	"./ne": 368,
	"./ne.js": 368,
	"./nl": 369,
	"./nl-be": 370,
	"./nl-be.js": 370,
	"./nl.js": 369,
	"./nn": 371,
	"./nn.js": 371,
	"./pa-in": 372,
	"./pa-in.js": 372,
	"./pl": 373,
	"./pl.js": 373,
	"./pt": 374,
	"./pt-br": 375,
	"./pt-br.js": 375,
	"./pt.js": 374,
	"./ro": 376,
	"./ro.js": 376,
	"./ru": 377,
	"./ru.js": 377,
	"./sd": 378,
	"./sd.js": 378,
	"./se": 379,
	"./se.js": 379,
	"./si": 380,
	"./si.js": 380,
	"./sk": 381,
	"./sk.js": 381,
	"./sl": 382,
	"./sl.js": 382,
	"./sq": 383,
	"./sq.js": 383,
	"./sr": 384,
	"./sr-cyrl": 385,
	"./sr-cyrl.js": 385,
	"./sr.js": 384,
	"./ss": 386,
	"./ss.js": 386,
	"./sv": 387,
	"./sv.js": 387,
	"./sw": 388,
	"./sw.js": 388,
	"./ta": 389,
	"./ta.js": 389,
	"./te": 390,
	"./te.js": 390,
	"./tet": 391,
	"./tet.js": 391,
	"./th": 392,
	"./th.js": 392,
	"./tl-ph": 393,
	"./tl-ph.js": 393,
	"./tlh": 394,
	"./tlh.js": 394,
	"./tr": 395,
	"./tr.js": 395,
	"./tzl": 396,
	"./tzl.js": 396,
	"./tzm": 397,
	"./tzm-latn": 398,
	"./tzm-latn.js": 398,
	"./tzm.js": 397,
	"./uk": 399,
	"./uk.js": 399,
	"./ur": 400,
	"./ur.js": 400,
	"./uz": 401,
	"./uz-latn": 402,
	"./uz-latn.js": 402,
	"./uz.js": 401,
	"./vi": 403,
	"./vi.js": 403,
	"./x-pseudo": 404,
	"./x-pseudo.js": 404,
	"./yo": 405,
	"./yo.js": 405,
	"./zh-cn": 406,
	"./zh-cn.js": 406,
	"./zh-hk": 407,
	"./zh-hk.js": 407,
	"./zh-tw": 408,
	"./zh-tw.js": 408
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 771;

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__driver__ = __webpack_require__(790);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__group__ = __webpack_require__(791);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicule__ = __webpack_require__(792);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__vehicule__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 790:
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

/***/ 791:
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

/***/ 792:
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

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_historical_historical__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_gestpoi_gestpoi__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_datamana_vehicules_vehicules__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_datamana_groupes_groupes__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_datamana_chauffeurs_chauffeurs__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_real_time_service__ = __webpack_require__(57);
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
    function MyApp(real, platform, statusBar, _app, actionSheetCtrl, menuCtrl, alertCtrl, storage, splashScreen, toastCtrl, toastController) {
        var _this = this;
        this.real = real;
        this.platform = platform;
        this._app = _app;
        this.actionSheetCtrl = actionSheetCtrl;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.toastController = toastController;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.listhide = true;
        this.tempsreelopened = true;
        this.expirer = false;
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
    // checkPreviousAuthorization(): void {
    //   let toast=this.toastController.create({
    //         message: 'Session expirée!',
    //         duration: 4000
    //   });
    //   if(!JSON.parse(localStorage.getItem('currentuser')) ){
    //     this.rootPage = HomePage;
    //   }
    //   else{
    //     this.real.getGroupMini().subscribe(y=>{
    //       this.nav.setRoot(Historical);
    //     },(err)=>{
    //       toast.present();
    //       this.rootPage = HomePage;
    //     });
    //   }
    //}
    //alert quitter l'app
    MyApp.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Attention',
            message: 'Voulez vous vraiment quitter ?',
            buttons: [{
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
    //navigation groupe"gestion de donnee"
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
            buttons: [{
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                    }
                }, {
                    text: 'Déconnexion',
                    cssClass: 'Logout',
                    handler: function () {
                        _this.logout();
                    }
                }]
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('mycontent'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\app\app.html"*/'<ion-menu [content]="mycontent">\n\n  <!--style="margin-top:20px"-->\n\n  <ion-header style="height:48px;">\n\n    <ion-title>\n\n      <span style="color:white">Menu</span>\n\n    </ion-title>\n\n  </ion-header>\n\n  <ion-content style="background-color:white;margin-top:10px;">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/logorim.jpg">\n\n      </ion-avatar>\n\n      <h2>Rim Télécom</h2>\n\n      <p>Online</p>\n\n    </ion-item>\n\n    <button ion-button color="light" (click)="GotoTempsRealandHistorique()" style="width:90%">Temps réel & Historique</button>\n\n    <button ion-button color="light" (click)="hidelist()" style="width:90%">Gestion de données</button>\n\n    <ion-list [hidden]="listhide">\n\n      <ion-card>\n\n        <ion-list>\n\n          <button ion-item (click)="GoToGestVehi()">\n\n            <i class="fa fa-car" aria-hidden="true"></i>\n\n            Véhicules\n\n          </button>\n\n          <button ion-item (click)="GoToGestGroup()">\n\n            <i class="fa fa-users" aria-hidden="true"></i>\n\n            Groupes\n\n          </button>\n\n          <button ion-item (click)="GotoGestchauf()">\n\n            <i class="fa fa-user" aria-hidden="true"></i>\n\n            Conducteurs\n\n          </button>\n\n          <button ion-item (click)="GotoGestpoi()">\n\n            <i class="fa fa-flag" aria-hidden="true"></i>\n\n            Points d\'intérêt\n\n          </button>\n\n        </ion-list>\n\n      </ion-card>\n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n    <button ion-button outline full color="danger" (click)="logoutconfirm()">Déconnexion</button>\n\n  </ion-footer>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\MedJabrane\Desktop\Rimtelecom\rimtrack-mobile-dev-692b3ccdb3b497dbb00834206f5f3c6d73b4e207-692b3ccdb3b497dbb00834206f5f3c6d73b4e207\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__providers_real_time_service__["a" /* RealTimeService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
jQWidgets v5.5.0 (2017-Dec)
Copyright (c) 2011-2017 jQWidgets.
License: https://jqwidgets.com/license/
*/

var oldBrowser=document.all&&!document.addEventListener;if(!oldBrowser){(function(be,H){var r,ao,al=be.document,bp=be.location,bu=be.navigator,ay=be.JQXLite,Y=be.$,aS=Array.prototype.push,aE=Array.prototype.slice,aB=Array.prototype.indexOf,z=Object.prototype.toString,b=Object.prototype.hasOwnProperty,ax=String.prototype.trim,D=function(bv,bw){return new D.fn.init(bv,bw,r)},aF=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,au=/\S/,a9=/\s+/,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,aG=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,e=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,u=/(?:^|:|,)(?:\s*\[)+/g,a6=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,L=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,av=/^-ms-/,aT=/-([\da-z])/gi,n=function(bv,bw){return(bw+"").toUpperCase()},a5=function(){if(al.addEventListener){al.removeEventListener("DOMContentLoaded",a5,false);D.ready()}else{if(al.readyState==="complete"){al.detachEvent("onreadystatechange",a5);D.ready()}}},a1={};D.fn=D.prototype={constructor:D,init:function(bv,by,bz){var bx,bA,bw,bB;if(!bv){return this}if(bv.nodeType){this.context=this[0]=bv;this.length=1;return this}if(typeof bv==="string"){if(bv.charAt(0)==="<"&&bv.charAt(bv.length-1)===">"&&bv.length>=3){bx=[null,bv,null]}else{bx=aG.exec(bv)}if(bx&&(bx[1]||!by)){if(bx[1]){by=by instanceof D?by[0]:by;bB=(by&&by.nodeType?by.ownerDocument||by:al);bv=D.parseHTML(bx[1],bB,true);if(e.test(bx[1])&&D.isPlainObject(by)){this.attr.call(bv,by,true)}return D.merge(this,bv)}else{bA=al.getElementById(bx[2]);if(bA&&bA.parentNode){if(bA.id!==bx[2]){return bz.find(bv)}this.length=1;this[0]=bA}this.context=al;this.selector=bv;return this}}else{if(!by||by.jqx){return(by||bz).find(bv)}else{return this.constructor(by).find(bv)}}}else{if(D.isFunction(bv)){return bz.ready(bv)}}if(bv.selector!==H){this.selector=bv.selector;this.context=bv.context}return D.makeArray(bv,this)},selector:"",jqx:"4.5.0",length:0,size:function(){return this.length},toArray:function(){return aE.call(this)},get:function(bv){return bv==null?this.toArray():(bv<0?this[this.length+bv]:this[bv])},pushStack:function(bw,by,bv){var bx=D.merge(this.constructor(),bw);bx.prevObject=this;bx.context=this.context;if(by==="find"){bx.selector=this.selector+(this.selector?" ":"")+bv}else{if(by){bx.selector=this.selector+"."+by+"("+bv+")"}}return bx},each:function(bw,bv){return D.each(this,bw,bv)},ready:function(bv){D.ready.promise().done(bv);return this},eq:function(bv){bv=+bv;return bv===-1?this.slice(bv):this.slice(bv,bv+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(aE.apply(this,arguments),"slice",aE.call(arguments).join(","))},map:function(bv){return this.pushStack(D.map(this,function(bx,bw){return bv.call(bx,bw,bx)}))},end:function(){return this.prevObject||this.constructor(null)},push:aS,sort:[].sort,splice:[].splice};D.fn.init.prototype=D.fn;D.extend=D.fn.extend=function(){var bE,bx,bv,bw,bB,bC,bA=arguments[0]||{},bz=1,by=arguments.length,bD=false;if(typeof bA==="boolean"){bD=bA;bA=arguments[1]||{};bz=2}if(typeof bA!=="object"&&!D.isFunction(bA)){bA={}}if(by===bz){bA=this;--bz}for(;bz<by;bz++){if((bE=arguments[bz])!=null){for(bx in bE){bv=bA[bx];bw=bE[bx];if(bA===bw){continue}if(bD&&bw&&(D.isPlainObject(bw)||(bB=D.isArray(bw)))){if(bB){bB=false;bC=bv&&D.isArray(bv)?bv:[]}else{bC=bv&&D.isPlainObject(bv)?bv:{}}bA[bx]=D.extend(bD,bC,bw)}else{if(bw!==H){bA[bx]=bw}}}}}return bA};D.extend({noConflict:function(bv){if(be.$===D){be.$=Y}if(bv&&be.JQXLite===D){be.JQXLite=ay}return D},isReady:false,readyWait:1,holdReady:function(bv){if(bv){D.readyWait++}else{D.ready(true)}},ready:function(bv){if(bv===true?--D.readyWait:D.isReady){return}if(!al.body){return setTimeout(D.ready,1)}D.isReady=true;if(bv!==true&&--D.readyWait>0){return}ao.resolveWith(al,[D]);if(D.fn.trigger){D(al).trigger("ready").off("ready")}},isFunction:function(bv){return D.type(bv)==="function"},isArray:Array.isArray||function(bv){return D.type(bv)==="array"},isWindow:function(bv){return bv!=null&&bv==bv.window},isNumeric:function(bv){return !isNaN(parseFloat(bv))&&isFinite(bv)},type:function(bv){return bv==null?String(bv):a1[z.call(bv)]||"object"},isPlainObject:function(bx){if(!bx||D.type(bx)!=="object"||bx.nodeType||D.isWindow(bx)){return false}try{if(bx.constructor&&!b.call(bx,"constructor")&&!b.call(bx.constructor.prototype,"isPrototypeOf")){return false}}catch(bw){return false}var bv;for(bv in bx){}return bv===H||b.call(bx,bv)},isEmptyObject:function(bw){var bv;for(bv in bw){return false}return true},error:function(bv){throw new Error(bv)},parseHTML:function(by,bx,bv){var bw;if(!by||typeof by!=="string"){return null}if(typeof bx==="boolean"){bv=bx;bx=0}bx=bx||al;if((bw=e.exec(by))){return[bx.createElement(bw[1])]}bw=D.buildFragment([by],bx,bv?null:[]);return D.merge([],(bw.cacheable?D.clone(bw.fragment):bw.fragment).childNodes)},parseJSON:function(bv){if(!bv||typeof bv!=="string"){return null}bv=D.trim(bv);if(be.JSON&&be.JSON.parse){return be.JSON.parse(bv)}if(k.test(bv.replace(a6,"@").replace(L,"]").replace(u,""))){return(new Function("return "+bv))()}D.error("Invalid JSON: "+bv)},parseXML:function(bx){var bv,bw;if(!bx||typeof bx!=="string"){return null}try{if(be.DOMParser){bw=new DOMParser();bv=bw.parseFromString(bx,"text/xml")}else{bv=new ActiveXObject("Microsoft.XMLDOM");bv.async="false";bv.loadXML(bx)}}catch(by){bv=H}if(!bv||!bv.documentElement||bv.getElementsByTagName("parsererror").length){D.error("Invalid XML: "+bx)}return bv},noop:function(){},globalEval:function(bv){if(bv&&au.test(bv)){(be.execScript||function(bw){be["eval"].call(be,bw)})(bv)}},camelCase:function(bv){return bv.replace(av,"ms-").replace(aT,n)},nodeName:function(bw,bv){return bw.nodeName&&bw.nodeName.toLowerCase()===bv.toLowerCase()},each:function(bA,bB,bx){var bw,by=0,bz=bA.length,bv=bz===H||D.isFunction(bA);if(bx){if(bv){for(bw in bA){if(bB.apply(bA[bw],bx)===false){break}}}else{for(;by<bz;){if(bB.apply(bA[by++],bx)===false){break}}}}else{if(bv){for(bw in bA){if(bB.call(bA[bw],bw,bA[bw])===false){break}}}else{for(;by<bz;){if(bB.call(bA[by],by,bA[by++])===false){break}}}}return bA},trim:ax&&!ax.call("\uFEFF\xA0")?function(bv){return bv==null?"":ax.call(bv)}:function(bv){return bv==null?"":(bv+"").replace(T,"")},makeArray:function(bv,bx){var by,bw=bx||[];if(bv!=null){by=D.type(bv);if(bv.length==null||by==="string"||by==="function"||by==="regexp"||D.isWindow(bv)){aS.call(bw,bv)}else{D.merge(bw,bv)}}return bw},inArray:function(by,bw,bx){var bv;if(bw){if(aB){return aB.call(bw,by,bx)}bv=bw.length;bx=bx?bx<0?Math.max(0,bv+bx):bx:0;for(;bx<bv;bx++){if(bx in bw&&bw[bx]===by){return bx}}}return -1},merge:function(bz,bx){var bv=bx.length,by=bz.length,bw=0;if(typeof bv==="number"){for(;bw<bv;bw++){bz[by++]=bx[bw]}}else{while(bx[bw]!==H){bz[by++]=bx[bw++]}}bz.length=by;return bz},grep:function(bw,bB,bv){var bA,bx=[],by=0,bz=bw.length;bv=!!bv;for(;by<bz;by++){bA=!!bB(bw[by],by);if(bv!==bA){bx.push(bw[by])}}return bx},map:function(bv,bC,bD){var bA,bB,bz=[],bx=0,bw=bv.length,by=bv instanceof D||bw!==H&&typeof bw==="number"&&((bw>0&&bv[0]&&bv[bw-1])||bw===0||D.isArray(bv));if(by){for(;bx<bw;bx++){bA=bC(bv[bx],bx,bD);if(bA!=null){bz[bz.length]=bA}}}else{for(bB in bv){bA=bC(bv[bB],bB,bD);if(bA!=null){bz[bz.length]=bA}}}return bz.concat.apply([],bz)},guid:1,proxy:function(bz,by){var bx,bv,bw;if(typeof by==="string"){bx=bz[by];by=bz;bz=bx}if(!D.isFunction(bz)){return H}bv=aE.call(arguments,2);bw=function(){return bz.apply(by,bv.concat(aE.call(arguments)))};bw.guid=bz.guid=bz.guid||D.guid++;return bw},access:function(bv,bB,bE,bC,bz,bF,bD){var bx,bA=bE==null,by=0,bw=bv.length;if(bE&&typeof bE==="object"){for(by in bE){D.access(bv,bB,by,bE[by],1,bF,bC)}bz=1}else{if(bC!==H){bx=bD===H&&D.isFunction(bC);if(bA){if(bx){bx=bB;bB=function(bH,bG,bI){return bx.call(D(bH),bI)}}else{bB.call(bv,bC);bB=null}}if(bB){for(;by<bw;by++){bB(bv[by],bE,bx?bC.call(bv[by],by,bB(bv[by],bE)):bC,bD)}}bz=1}}return bz?bv:bA?bB.call(bv):bw?bB(bv[0],bE):bF},now:function(){return(new Date()).getTime()}});D.ready.promise=function(by){if(!ao){ao=D.Deferred();if(al.readyState==="complete"){setTimeout(D.ready,1)}else{if(al.addEventListener){al.addEventListener("DOMContentLoaded",a5,false);be.addEventListener("load",D.ready,false)}else{al.attachEvent("onreadystatechange",a5);be.attachEvent("onload",D.ready);var bx=false;try{bx=be.frameElement==null&&al.documentElement}catch(bw){}if(bx&&bx.doScroll){(function bv(){if(!D.isReady){try{bx.doScroll("left")}catch(bz){return setTimeout(bv,50)}D.ready()}})()}}}}return ao.promise(by)};D.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(bw,bv){a1["[object "+bv+"]"]=bv.toLowerCase()});r=D(al);var aY={};function C(bw){var bv=aY[bw]={};D.each(bw.split(a9),function(by,bx){bv[bx]=true});return bv}D.Callbacks=function(bF){bF=typeof bF==="string"?(aY[bF]||C(bF)):D.extend({},bF);var by,bv,bz,bx,bA,bB,bC=[],bD=!bF.once&&[],bw=function(bG){by=bF.memory&&bG;bv=true;bB=bx||0;bx=0;bA=bC.length;bz=true;for(;bC&&bB<bA;bB++){if(bC[bB].apply(bG[0],bG[1])===false&&bF.stopOnFalse){by=false;break}}bz=false;if(bC){if(bD){if(bD.length){bw(bD.shift())}}else{if(by){bC=[]}else{bE.disable()}}}},bE={add:function(){if(bC){var bH=bC.length;(function bG(bI){D.each(bI,function(bK,bJ){var bL=D.type(bJ);if(bL==="function"){if(!bF.unique||!bE.has(bJ)){bC.push(bJ)}}else{if(bJ&&bJ.length&&bL!=="string"){bG(bJ)}}})})(arguments);if(bz){bA=bC.length}else{if(by){bx=bH;bw(by)}}}return this},remove:function(){if(bC){D.each(arguments,function(bI,bG){var bH;while((bH=D.inArray(bG,bC,bH))>-1){bC.splice(bH,1);if(bz){if(bH<=bA){bA--}if(bH<=bB){bB--}}}})}return this},has:function(bG){return D.inArray(bG,bC)>-1},empty:function(){bC=[];return this},disable:function(){bC=bD=by=H;return this},disabled:function(){return !bC},lock:function(){bD=H;if(!by){bE.disable()}return this},locked:function(){return !bD},fireWith:function(bH,bG){bG=bG||[];bG=[bH,bG.slice?bG.slice():bG];if(bC&&(!bv||bD)){if(bz){bD.push(bG)}else{bw(bG)}}return this},fire:function(){bE.fireWith(this,arguments);return this},fired:function(){return !!bv}};return bE};D.extend({Deferred:function(bx){var bw=[["resolve","done",D.Callbacks("once memory"),"resolved"],["reject","fail",D.Callbacks("once memory"),"rejected"],["notify","progress",D.Callbacks("memory")]],by="pending",bz={state:function(){return by},always:function(){bv.done(arguments).fail(arguments);return this},then:function(){var bA=arguments;return D.Deferred(function(bB){D.each(bw,function(bD,bC){var bF=bC[0],bE=bA[bD];bv[bC[1]](D.isFunction(bE)?function(){var bG=bE.apply(this,arguments);if(bG&&D.isFunction(bG.promise)){bG.promise().done(bB.resolve).fail(bB.reject).progress(bB.notify)}else{bB[bF+"With"](this===bv?bB:this,[bG])}}:bB[bF])});bA=null}).promise()},promise:function(bA){return bA!=null?D.extend(bA,bz):bz}},bv={};bz.pipe=bz.then;D.each(bw,function(bB,bA){var bD=bA[2],bC=bA[3];bz[bA[1]]=bD.add;if(bC){bD.add(function(){by=bC},bw[bB^1][2].disable,bw[2][2].lock)}bv[bA[0]]=bD.fire;bv[bA[0]+"With"]=bD.fireWith});bz.promise(bv);if(bx){bx.call(bv,bv)}return bv},when:function(bz){var bx=0,bB=aE.call(arguments),bv=bB.length,bw=bv!==1||(bz&&D.isFunction(bz.promise))?bv:0,bE=bw===1?bz:D.Deferred(),by=function(bG,bH,bF){return function(bI){bH[bG]=this;bF[bG]=arguments.length>1?aE.call(arguments):bI;if(bF===bD){bE.notifyWith(bH,bF)}else{if(!(--bw)){bE.resolveWith(bH,bF)}}}},bD,bA,bC;if(bv>1){bD=new Array(bv);bA=new Array(bv);bC=new Array(bv);for(;bx<bv;bx++){if(bB[bx]&&D.isFunction(bB[bx].promise)){bB[bx].promise().done(by(bx,bC,bB)).fail(bE.reject).progress(by(bx,bA,bD))}else{--bw}}}if(!bw){bE.resolveWith(bC,bB)}return bE.promise()}});D.support=(function(){var bH,bG,bE,bF,by,bD,bC,bA,bz,bx,bv,bw=al.createElement("div");bw.setAttribute("className","t");bw.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";bG=bw.getElementsByTagName("*");bE=bw.getElementsByTagName("a")[0];if(!bG||!bE||!bG.length){return{}}bF=al.createElement("select");by=bF.appendChild(al.createElement("option"));bD=bw.getElementsByTagName("input")[0];bE.style.cssText="top:1px;float:left;opacity:.5";bH={leadingWhitespace:(bw.firstChild.nodeType===3),tbody:!bw.getElementsByTagName("tbody").length,htmlSerialize:!!bw.getElementsByTagName("link").length,style:/top/.test(bE.getAttribute("style")),hrefNormalized:(bE.getAttribute("href")==="/a"),opacity:/^0.5/.test(bE.style.opacity),cssFloat:!!bE.style.cssFloat,checkOn:(bD.value==="on"),optSelected:by.selected,getSetAttribute:bw.className!=="t",enctype:!!al.createElement("form").enctype,html5Clone:al.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(al.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};bD.checked=true;bH.noCloneChecked=bD.cloneNode(true).checked;bF.disabled=true;bH.optDisabled=!by.disabled;try{delete bw.test}catch(bB){bH.deleteExpando=false}if(!bw.addEventListener&&bw.attachEvent&&bw.fireEvent){bw.attachEvent("onclick",bv=function(){bH.noCloneEvent=false});bw.cloneNode(true).fireEvent("onclick");bw.detachEvent("onclick",bv)}bD=al.createElement("input");bD.value="t";bD.setAttribute("type","radio");bH.radioValue=bD.value==="t";bD.setAttribute("checked","checked");bD.setAttribute("name","t");bw.appendChild(bD);bC=al.createDocumentFragment();bC.appendChild(bw.lastChild);bH.checkClone=bC.cloneNode(true).cloneNode(true).lastChild.checked;bH.appendChecked=bD.checked;bC.removeChild(bD);bC.appendChild(bw);if(bw.attachEvent){for(bz in {submit:true,change:true,focusin:true}){bA="on"+bz;bx=(bA in bw);if(!bx){bw.setAttribute(bA,"return;");bx=(typeof bw[bA]==="function")}bH[bz+"Bubbles"]=bx}}D(function(){var bJ,bN,bL,bM,bK="padding:0;margin:0;border:0;display:block;overflow:hidden;",bI=al.getElementsByTagName("body")[0];if(!bI){return}bJ=al.createElement("div");bJ.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";bI.insertBefore(bJ,bI.firstChild);bN=al.createElement("div");bJ.appendChild(bN);bN.innerHTML="<table><tr><td></td><td>t</td></tr></table>";bL=bN.getElementsByTagName("td");bL[0].style.cssText="padding:0;margin:0;border:0;display:none";bx=(bL[0].offsetHeight===0);bL[0].style.display="";bL[1].style.display="none";bH.reliableHiddenOffsets=bx&&(bL[0].offsetHeight===0);bN.innerHTML="";bN.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";bH.boxSizing=(bN.offsetWidth===4);bH.doesNotIncludeMarginInBodyOffset=(bI.offsetTop!==1);if(be.getComputedStyle){bH.pixelPosition=(be.getComputedStyle(bN,null)||{}).top!=="1%";bH.boxSizingReliable=(be.getComputedStyle(bN,null)||{width:"4px"}).width==="4px";bM=al.createElement("div");bM.style.cssText=bN.style.cssText=bK;bM.style.marginRight=bM.style.width="0";bN.style.width="1px";bN.appendChild(bM);bH.reliableMarginRight=!parseFloat((be.getComputedStyle(bM,null)||{}).marginRight)}if(typeof bN.style.zoom!=="undefined"){bN.innerHTML="";bN.style.cssText=bK+"width:1px;padding:1px;display:inline;zoom:1";bH.inlineBlockNeedsLayout=(bN.offsetWidth===3);bN.style.display="block";bN.style.overflow="visible";bN.innerHTML="<div></div>";bN.firstChild.style.width="5px";bH.shrinkWrapBlocks=(bN.offsetWidth!==3);bJ.style.zoom=1}bI.removeChild(bJ);bJ=bN=bL=bM=null});bC.removeChild(bw);bG=bE=bF=by=bD=bC=bw=null;return bH})();var aL=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,ar=/([A-Z])/g;D.extend({cache:{},deletedIds:[],uuid:0,expando:"JQXLite"+(D.fn.jqx+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(bv){bv=bv.nodeType?D.cache[bv[D.expando]]:bv[D.expando];return !!bv&&!N(bv)},data:function(by,bw,bA,bz){if(!D.acceptData(by)){return}var bB,bD,bE=D.expando,bC=typeof bw==="string",bF=by.nodeType,bv=bF?D.cache:by,bx=bF?by[bE]:by[bE]&&bE;if((!bx||!bv[bx]||(!bz&&!bv[bx].data))&&bC&&bA===H){return}if(!bx){if(bF){by[bE]=bx=D.deletedIds.pop()||D.guid++}else{bx=bE}}if(!bv[bx]){bv[bx]={};if(!bF){bv[bx].toJSON=D.noop}}if(typeof bw==="object"||typeof bw==="function"){if(bz){bv[bx]=D.extend(bv[bx],bw)}else{bv[bx].data=D.extend(bv[bx].data,bw)}}bB=bv[bx];if(!bz){if(!bB.data){bB.data={}}bB=bB.data}if(bA!==H){bB[D.camelCase(bw)]=bA}if(bC){bD=bB[bw];if(bD==null){bD=bB[D.camelCase(bw)]}}else{bD=bB}return bD},removeData:function(by,bw,bz){if(!D.acceptData(by)){return}var bC,bB,bA,bD=by.nodeType,bv=bD?D.cache:by,bx=bD?by[D.expando]:D.expando;if(!bv[bx]){return}if(bw){bC=bz?bv[bx]:bv[bx].data;if(bC){if(!D.isArray(bw)){if(bw in bC){bw=[bw]}else{bw=D.camelCase(bw);if(bw in bC){bw=[bw]}else{bw=bw.split(" ")}}}for(bB=0,bA=bw.length;bB<bA;bB++){delete bC[bw[bB]]}if(!(bz?N:D.isEmptyObject)(bC)){return}}}if(!bz){delete bv[bx].data;if(!N(bv[bx])){return}}if(bD){D.cleanData([by],true)}else{if(D.support.deleteExpando||bv!=bv.window){delete bv[bx]}else{bv[bx]=null}}},_data:function(bw,bv,bx){return D.data(bw,bv,bx,true)},acceptData:function(bw){var bv=bw.nodeName&&D.noData[bw.nodeName.toLowerCase()];return !bv||bv!==true&&bw.getAttribute("classid")===bv}});D.fn.extend({data:function(bE,bD){var bz,bw,bC,bv,by,bx=this[0],bB=0,bA=null;if(bE===H){if(this.length){bA=D.data(bx);if(bx.nodeType===1&&!D._data(bx,"parsedAttrs")){bC=bx.attributes;for(by=bC.length;bB<by;bB++){bv=bC[bB].name;if(!bv.indexOf("data-")){bv=D.camelCase(bv.substring(5));ba(bx,bv,bA[bv])}}D._data(bx,"parsedAttrs",true)}}return bA}if(typeof bE==="object"){return this.each(function(){D.data(this,bE)})}bz=bE.split(".",2);bz[1]=bz[1]?"."+bz[1]:"";bw=bz[1]+"!";return D.access(this,function(bF){if(bF===H){bA=this.triggerHandler("getData"+bw,[bz[0]]);if(bA===H&&bx){bA=D.data(bx,bE);bA=ba(bx,bE,bA)}return bA===H&&bz[1]?this.data(bz[0]):bA}bz[1]=bF;this.each(function(){var bG=D(this);bG.triggerHandler("setData"+bw,bz);D.data(this,bE,bF);bG.triggerHandler("changeData"+bw,bz)})},null,bD,arguments.length>1,null,false)},removeData:function(bv){return this.each(function(){D.removeData(this,bv)})}});function ba(bx,bw,by){if(by===H&&bx.nodeType===1){var bv="data-"+bw.replace(ar,"-$1").toLowerCase();by=bx.getAttribute(bv);if(typeof by==="string"){try{by=by==="true"?true:by==="false"?false:by==="null"?null:+by+""===by?+by:aL.test(by)?D.parseJSON(by):by}catch(bz){}D.data(bx,bw,by)}else{by=H}}return by}function N(bw){var bv;for(bv in bw){if(bv==="data"&&D.isEmptyObject(bw[bv])){continue}if(bv!=="toJSON"){return false}}return true}D.extend({queue:function(bx,bw,by){var bv;if(bx){bw=(bw||"fx")+"queue";bv=D._data(bx,bw);if(by){if(!bv||D.isArray(by)){bv=D._data(bx,bw,D.makeArray(by))}else{bv.push(by)}}return bv||[]}},dequeue:function(bA,bz){bz=bz||"fx";var bw=D.queue(bA,bz),bB=bw.length,by=bw.shift(),bv=D._queueHooks(bA,bz),bx=function(){D.dequeue(bA,bz)};if(by==="inprogress"){by=bw.shift();bB--}if(by){if(bz==="fx"){bw.unshift("inprogress")}delete bv.stop;by.call(bA,bx,bv)}if(!bB&&bv){bv.empty.fire()}},_queueHooks:function(bx,bw){var bv=bw+"queueHooks";return D._data(bx,bv)||D._data(bx,bv,{empty:D.Callbacks("once memory").add(function(){D.removeData(bx,bw+"queue",true);D.removeData(bx,bv,true)})})}});D.fn.extend({queue:function(bv,bw){var bx=2;if(typeof bv!=="string"){bw=bv;bv="fx";bx--}if(arguments.length<bx){return D.queue(this[0],bv)}return bw===H?this:this.each(function(){var by=D.queue(this,bv,bw);D._queueHooks(this,bv);if(bv==="fx"&&by[0]!=="inprogress"){D.dequeue(this,bv)}})},dequeue:function(bv){return this.each(function(){D.dequeue(this,bv)})},delay:function(bw,bv){bw=D.fx?D.fx.speeds[bw]||bw:bw;bv=bv||"fx";return this.queue(bv,function(by,bx){var bz=setTimeout(by,bw);bx.stop=function(){clearTimeout(bz)}})},clearQueue:function(bv){return this.queue(bv||"fx",[])},promise:function(bx,bB){var bw,by=1,bC=D.Deferred(),bA=this,bv=this.length,bz=function(){if(!(--by)){bC.resolveWith(bA,[bA])}};if(typeof bx!=="string"){bB=bx;bx=H}bx=bx||"fx";while(bv--){bw=D._data(bA[bv],bx+"queueHooks");if(bw&&bw.empty){by++;bw.empty.add(bz)}}bz();return bC.promise(bB)}});var bi,aU,az,aJ=/[\t\r\n]/g,aQ=/\r/g,d=/^(?:button|input)$/i,A=/^(?:button|input|object|select|textarea)$/i,h=/^a(?:rea|)$/i,af=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,B=D.support.getSetAttribute;D.fn.extend({attr:function(bv,bw){return D.access(this,D.attr,bv,bw,arguments.length>1)},removeAttr:function(bv){return this.each(function(){D.removeAttr(this,bv)})},prop:function(bv,bw){return D.access(this,D.prop,bv,bw,arguments.length>1)},removeProp:function(bv){bv=D.propFix[bv]||bv;return this.each(function(){try{this[bv]=H;delete this[bv]}catch(bw){}})},addClass:function(bz){var bB,bx,bw,by,bA,bC,bv;if(D.isFunction(bz)){return this.each(function(bD){D(this).addClass(bz.call(this,bD,this.className))})}if(bz&&typeof bz==="string"){bB=bz.split(a9);for(bx=0,bw=this.length;bx<bw;bx++){by=this[bx];if(by.nodeType===1){if(!by.className&&bB.length===1){by.className=bz}else{bA=" "+by.className+" ";for(bC=0,bv=bB.length;bC<bv;bC++){if(bA.indexOf(" "+bB[bC]+" ")<0){bA+=bB[bC]+" "}}by.className=D.trim(bA)}}}}return this},removeClass:function(bB){var by,bz,bA,bC,bw,bx,bv;if(D.isFunction(bB)){return this.each(function(bD){D(this).removeClass(bB.call(this,bD,this.className))})}if((bB&&typeof bB==="string")||bB===H){by=(bB||"").split(a9);for(bx=0,bv=this.length;bx<bv;bx++){bA=this[bx];if(bA.nodeType===1&&bA.className){bz=(" "+bA.className+" ").replace(aJ," ");for(bC=0,bw=by.length;bC<bw;bC++){while(bz.indexOf(" "+by[bC]+" ")>=0){bz=bz.replace(" "+by[bC]+" "," ")}}bA.className=bB?D.trim(bz):""}}}return this},toggleClass:function(by,bw){var bx=typeof by,bv=typeof bw==="boolean";if(D.isFunction(by)){return this.each(function(bz){D(this).toggleClass(by.call(this,bz,this.className,bw),bw)})}return this.each(function(){if(bx==="string"){var bB,bA=0,bz=D(this),bC=bw,bD=by.split(a9);while((bB=bD[bA++])){bC=bv?bC:!bz.hasClass(bB);bz[bC?"addClass":"removeClass"](bB)}}else{if(bx==="undefined"||bx==="boolean"){if(this.className){D._data(this,"__className__",this.className)}this.className=this.className||by===false?"":D._data(this,"__className__")||""}}})},hasClass:function(bv){var by=" "+bv+" ",bx=0,bw=this.length;for(;bx<bw;bx++){if(this[bx].nodeType===1&&(" "+this[bx].className+" ").replace(aJ," ").indexOf(by)>=0){return true}}return false},val:function(by){var bv,bw,bz,bx=this[0];if(!arguments.length){if(bx){bv=D.valHooks[bx.type]||D.valHooks[bx.nodeName.toLowerCase()];if(bv&&"get" in bv&&(bw=bv.get(bx,"value"))!==H){return bw}bw=bx.value;return typeof bw==="string"?bw.replace(aQ,""):bw==null?"":bw}return}bz=D.isFunction(by);return this.each(function(bB){var bC,bA=D(this);if(this.nodeType!==1){return}if(bz){bC=by.call(this,bB,bA.val())}else{bC=by}if(bC==null){bC=""}else{if(typeof bC==="number"){bC+=""}else{if(D.isArray(bC)){bC=D.map(bC,function(bD){return bD==null?"":bD+""})}}}bv=D.valHooks[this.type]||D.valHooks[this.nodeName.toLowerCase()];if(!bv||!("set" in bv)||bv.set(this,bC,"value")===H){this.value=bC}})}});D.extend({valHooks:{option:{get:function(bv){var bw=bv.attributes.value;return !bw||bw.specified?bv.value:bv.text}},select:{get:function(bv){var bB,bx,bD=bv.options,bz=bv.selectedIndex,by=bv.type==="select-one"||bz<0,bC=by?null:[],bA=by?bz+1:bD.length,bw=bz<0?bA:by?bz:0;for(;bw<bA;bw++){bx=bD[bw];if((bx.selected||bw===bz)&&(D.support.optDisabled?!bx.disabled:bx.getAttribute("disabled")===null)&&(!bx.parentNode.disabled||!D.nodeName(bx.parentNode,"optgroup"))){bB=D(bx).val();if(by){return bB}bC.push(bB)}}return bC},set:function(bw,bx){var bv=D.makeArray(bx);D(bw).find("option").each(function(){this.selected=D.inArray(D(this).val(),bv)>=0});if(!bv.length){bw.selectedIndex=-1}return bv}}},attrFn:{},attr:function(bB,by,bC,bA){var bx,bv,bz,bw=bB.nodeType;if(!bB||bw===3||bw===8||bw===2){return}if(bA&&D.isFunction(D.fn[by])){return D(bB)[by](bC)}if(typeof bB.getAttribute==="undefined"){return D.prop(bB,by,bC)}bz=bw!==1||!D.isXMLDoc(bB);if(bz){by=by.toLowerCase();bv=D.attrHooks[by]||(af.test(by)?aU:bi)}if(bC!==H){if(bC===null){D.removeAttr(bB,by);return}else{if(bv&&"set" in bv&&bz&&(bx=bv.set(bB,bC,by))!==H){return bx}else{bB.setAttribute(by,bC+"");return bC}}}else{if(bv&&"get" in bv&&bz&&(bx=bv.get(bB,by))!==null){return bx}else{bx=bB.getAttribute(by);return bx===null?H:bx}}},removeAttr:function(by,bA){var bz,bB,bw,bv,bx=0;if(bA&&by.nodeType===1){bB=bA.split(a9);for(;bx<bB.length;bx++){bw=bB[bx];if(bw){bz=D.propFix[bw]||bw;bv=af.test(bw);if(!bv){D.attr(by,bw,"")}by.removeAttribute(B?bw:bz);if(bv&&bz in by){by[bz]=false}}}}},attrHooks:{type:{set:function(bv,bw){if(d.test(bv.nodeName)&&bv.parentNode){D.error("type property can't be changed")}else{if(!D.support.radioValue&&bw==="radio"&&D.nodeName(bv,"input")){var bx=bv.value;bv.setAttribute("type",bw);if(bx){bv.value=bx}return bw}}}},value:{get:function(bw,bv){if(bi&&D.nodeName(bw,"button")){return bi.get(bw,bv)}return bv in bw?bw.value:null},set:function(bw,bx,bv){if(bi&&D.nodeName(bw,"button")){return bi.set(bw,bx,bv)}bw.value=bx}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(bA,by,bB){var bx,bv,bz,bw=bA.nodeType;if(!bA||bw===3||bw===8||bw===2){return}bz=bw!==1||!D.isXMLDoc(bA);if(bz){by=D.propFix[by]||by;bv=D.propHooks[by]}if(bB!==H){if(bv&&"set" in bv&&(bx=bv.set(bA,bB,by))!==H){return bx}else{return(bA[by]=bB)}}else{if(bv&&"get" in bv&&(bx=bv.get(bA,by))!==null){return bx}else{return bA[by]}}},propHooks:{tabIndex:{get:function(bw){var bv=bw.getAttributeNode("tabindex");return bv&&bv.specified?parseInt(bv.value,10):A.test(bw.nodeName)||h.test(bw.nodeName)&&bw.href?0:H}}}});aU={get:function(bw,bv){var by,bx=D.prop(bw,bv);return bx===true||typeof bx!=="boolean"&&(by=bw.getAttributeNode(bv))&&by.nodeValue!==false?bv.toLowerCase():H},set:function(bw,by,bv){var bx;if(by===false){D.removeAttr(bw,bv)}else{bx=D.propFix[bv]||bv;if(bx in bw){bw[bx]=true}bw.setAttribute(bv,bv.toLowerCase())}return bv}};if(!D.support.enctype){D.propFix.enctype="encoding"}var bg=/^(?:textarea|input|select)$/i,o=/^([^\.]*|)(?:\.(.+)|)$/,G=/(?:^|\s)hover(\.\S+|)\b/,aI=/^key/,bj=/^(?:mouse|contextmenu)|click/,O=/^(?:focusinfocus|focusoutblur)$/,bt=function(bv){return D.event.special.hover?bv:bv.replace(G,"mouseenter$1 mouseleave$1")};D.event={add:function(by,bC,bJ,bA,bz){var bD,bB,bK,bI,bH,bF,bv,bG,bw,bx,bE;if(by.nodeType===3||by.nodeType===8||!bC||!bJ||!(bD=D._data(by))){return}if(bJ.handler){bw=bJ;bJ=bw.handler;bz=bw.selector}if(!bJ.guid){bJ.guid=D.guid++}bK=bD.events;if(!bK){bD.events=bK={}}bB=bD.handle;if(!bB){bD.handle=bB=function(bL){return typeof D!=="undefined"&&(!bL||D.event.triggered!==bL.type)?D.event.dispatch.apply(bB.elem,arguments):H};bB.elem=by}bC=D.trim(bt(bC)).split(" ");for(bI=0;bI<bC.length;bI++){bH=o.exec(bC[bI])||[];bF=bH[1];bv=(bH[2]||"").split(".").sort();bE=D.event.special[bF]||{};bF=(bz?bE.delegateType:bE.bindType)||bF;bE=D.event.special[bF]||{};bG=D.extend({type:bF,origType:bH[1],data:bA,handler:bJ,guid:bJ.guid,selector:bz,needsContext:bz&&D.expr.match.needsContext.test(bz),namespace:bv.join(".")},bw);bx=bK[bF];if(!bx){bx=bK[bF]=[];bx.delegateCount=0;if(!bE.setup||bE.setup.call(by,bA,bv,bB)===false){if(by.addEventListener){by.addEventListener(bF,bB,false)}else{if(by.attachEvent){by.attachEvent("on"+bF,bB)}}}}if(bE.add){bE.add.call(by,bG);if(!bG.handler.guid){bG.handler.guid=bJ.guid}}if(bz){bx.splice(bx.delegateCount++,0,bG)}else{bx.push(bG)}D.event.global[bF]=true}by=null},global:{},remove:function(by,bD,bJ,bz,bC){var bK,bL,bG,bx,bw,bA,bB,bI,bF,bv,bH,bE=D.hasData(by)&&D._data(by);if(!bE||!(bI=bE.events)){return}bD=D.trim(bt(bD||"")).split(" ");for(bK=0;bK<bD.length;bK++){bL=o.exec(bD[bK])||[];bG=bx=bL[1];bw=bL[2];if(!bG){for(bG in bI){D.event.remove(by,bG+bD[bK],bJ,bz,true)}continue}bF=D.event.special[bG]||{};bG=(bz?bF.delegateType:bF.bindType)||bG;bv=bI[bG]||[];bA=bv.length;bw=bw?new RegExp("(^|\\.)"+bw.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(bB=0;bB<bv.length;bB++){bH=bv[bB];if((bC||bx===bH.origType)&&(!bJ||bJ.guid===bH.guid)&&(!bw||bw.test(bH.namespace))&&(!bz||bz===bH.selector||bz==="**"&&bH.selector)){bv.splice(bB--,1);if(bH.selector){bv.delegateCount--}if(bF.remove){bF.remove.call(by,bH)}}}if(bv.length===0&&bA!==bv.length){if(!bF.teardown||bF.teardown.call(by,bw,bE.handle)===false){D.removeEvent(by,bG,bE.handle)}delete bI[bG]}}if(D.isEmptyObject(bI)){delete bE.handle;D.removeData(by,"events",true)}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(bw,bD,bB,bK){if(bB&&(bB.nodeType===3||bB.nodeType===8)){return}var bv,by,bE,bI,bA,bz,bG,bF,bC,bJ,bH=bw.type||bw,bx=[];if(O.test(bH+D.event.triggered)){return}if(bH.indexOf("!")>=0){bH=bH.slice(0,-1);by=true}if(bH.indexOf(".")>=0){bx=bH.split(".");bH=bx.shift();bx.sort()}if((!bB||D.event.customEvent[bH])&&!D.event.global[bH]){return}bw=typeof bw==="object"?bw[D.expando]?bw:new D.Event(bH,bw):new D.Event(bH);bw.type=bH;bw.isTrigger=true;bw.exclusive=by;bw.namespace=bx.join(".");bw.namespace_re=bw.namespace?new RegExp("(^|\\.)"+bx.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;bz=bH.indexOf(":")<0?"on"+bH:"";if(!bB){bv=D.cache;for(bE in bv){if(bv[bE].events&&bv[bE].events[bH]){D.event.trigger(bw,bD,bv[bE].handle.elem,true)}}return}bw.result=H;if(!bw.target){bw.target=bB}bD=bD!=null?D.makeArray(bD):[];bD.unshift(bw);bG=D.event.special[bH]||{};if(bG.trigger&&bG.trigger.apply(bB,bD)===false){return}bC=[[bB,bG.bindType||bH]];if(!bK&&!bG.noBubble&&!D.isWindow(bB)){bJ=bG.delegateType||bH;bI=O.test(bJ+bH)?bB:bB.parentNode;for(bA=bB;bI;bI=bI.parentNode){bC.push([bI,bJ]);bA=bI}if(bA===(bB.ownerDocument||al)){bC.push([bA.defaultView||bA.parentWindow||be,bJ])}}for(bE=0;bE<bC.length&&!bw.isPropagationStopped();bE++){bI=bC[bE][0];bw.type=bC[bE][1];bF=(D._data(bI,"events")||{})[bw.type]&&D._data(bI,"handle");if(bF){bF.apply(bI,bD)}bF=bz&&bI[bz];if(bF&&D.acceptData(bI)&&bF.apply&&bF.apply(bI,bD)===false){bw.preventDefault()}}bw.type=bH;if(!bK&&!bw.isDefaultPrevented()){if((!bG._default||bG._default.apply(bB.ownerDocument,bD)===false)&&!(bH==="click"&&D.nodeName(bB,"a"))&&D.acceptData(bB)){if(bz&&bB[bH]&&((bH!=="focus"&&bH!=="blur")||bw.target.offsetWidth!==0)&&!D.isWindow(bB)){bA=bB[bz];if(bA){bB[bz]=null}D.event.triggered=bH;bB[bH]();D.event.triggered=H;if(bA){bB[bz]=bA}}}}return bw.result},dispatch:function(bv){bv=D.event.fix(bv||be.event);var bC,bB,bL,bF,bE,bw,bD,bJ,by,bK,bz=((D._data(this,"events")||{})[bv.type]||[]),bA=bz.delegateCount,bH=aE.call(arguments),bx=!bv.exclusive&&!bv.namespace,bG=D.event.special[bv.type]||{},bI=[];bH[0]=bv;bv.delegateTarget=this;if(bG.preDispatch&&bG.preDispatch.call(this,bv)===false){return}if(bA&&!(bv.button&&bv.type==="click")){for(bL=bv.target;bL!=this;bL=bL.parentNode||this){if(bL.disabled!==true||bv.type!=="click"){bE={};bD=[];for(bC=0;bC<bA;bC++){bJ=bz[bC];by=bJ.selector;if(bE[by]===H){bE[by]=bJ.needsContext?D(by,this).index(bL)>=0:D.find(by,this,null,[bL]).length}if(bE[by]){bD.push(bJ)}}if(bD.length){bI.push({elem:bL,matches:bD})}}}}if(bz.length>bA){bI.push({elem:this,matches:bz.slice(bA)})}for(bC=0;bC<bI.length&&!bv.isPropagationStopped();bC++){bw=bI[bC];bv.currentTarget=bw.elem;for(bB=0;bB<bw.matches.length&&!bv.isImmediatePropagationStopped();bB++){bJ=bw.matches[bB];if(bx||(!bv.namespace&&!bJ.namespace)||bv.namespace_re&&bv.namespace_re.test(bJ.namespace)){bv.data=bJ.data;bv.handleObj=bJ;bF=((D.event.special[bJ.origType]||{}).handle||bJ.handler).apply(bw.elem,bH);if(bF!==H){bv.result=bF;if(bF===false){bv.preventDefault();bv.stopPropagation()}}}}}if(bG.postDispatch){bG.postDispatch.call(this,bv)}return bv.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(bw,bv){if(bw.which==null){bw.which=bv.charCode!=null?bv.charCode:bv.keyCode}return bw}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(by,bx){var bz,bA,bv,bw=bx.button,bB=bx.fromElement;if(by.pageX==null&&bx.clientX!=null){bz=by.target.ownerDocument||al;bA=bz.documentElement;bv=bz.body;by.pageX=bx.clientX+(bA&&bA.scrollLeft||bv&&bv.scrollLeft||0)-(bA&&bA.clientLeft||bv&&bv.clientLeft||0);by.pageY=bx.clientY+(bA&&bA.scrollTop||bv&&bv.scrollTop||0)-(bA&&bA.clientTop||bv&&bv.clientTop||0)}if(!by.relatedTarget&&bB){by.relatedTarget=bB===by.target?bx.toElement:bB}if(!by.which&&bw!==H){by.which=(bw&1?1:(bw&2?3:(bw&4?2:0)))}return by}},fix:function(bx){if(bx[D.expando]){return bx}var bw,bA,bv=bx,by=D.event.fixHooks[bx.type]||{},bz=by.props?this.props.concat(by.props):this.props;bx=D.Event(bv);for(bw=bz.length;bw;){bA=bz[--bw];bx[bA]=bv[bA]}if(!bx.target){bx.target=bv.srcElement||al}if(bx.target.nodeType===3){bx.target=bx.target.parentNode}bx.metaKey=!!bx.metaKey;return by.filter?by.filter(bx,bv):bx},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(bx,bw,bv){if(D.isWindow(this)){this.onbeforeunload=bv}},teardown:function(bw,bv){if(this.onbeforeunload===bv){this.onbeforeunload=null}}}},simulate:function(bw,by,bx,bv){var bz=D.extend(new D.Event(),bx,{type:bw,isSimulated:true,originalEvent:{}});if(bv){D.event.trigger(bz,null,by)}else{D.event.dispatch.call(by,bz)}if(bz.isDefaultPrevented()){bx.preventDefault()}}};D.event.handle=D.event.dispatch;D.removeEvent=al.removeEventListener?function(bw,bv,bx){if(bw.removeEventListener){bw.removeEventListener(bv,bx,false)}}:function(bx,bw,by){var bv="on"+bw;if(bx.detachEvent){if(typeof bx[bv]==="undefined"){bx[bv]=null}bx.detachEvent(bv,by)}};D.Event=function(bw,bv){if(!(this instanceof D.Event)){return new D.Event(bw,bv)}if(bw&&bw.type){this.originalEvent=bw;this.type=bw.type;this.isDefaultPrevented=(bw.defaultPrevented||bw.returnValue===false||bw.getPreventDefault&&bw.getPreventDefault())?f:bo}else{this.type=bw}if(bv){D.extend(this,bv)}this.timeStamp=bw&&bw.timeStamp||D.now();this[D.expando]=true};function bo(){return false}function f(){return true}D.Event.prototype={preventDefault:function(){this.isDefaultPrevented=f;var bv=this.originalEvent;if(!bv){return}if(bv.preventDefault){bv.preventDefault()}else{bv.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=f;var bv=this.originalEvent;if(!bv){return}if(bv.stopPropagation){bv.stopPropagation()}bv.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=f;this.stopPropagation()},isDefaultPrevented:bo,isPropagationStopped:bo,isImmediatePropagationStopped:bo};D.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bw,bv){D.event.special[bw]={delegateType:bv,bindType:bv,handle:function(bA){var by,bC=this,bB=bA.relatedTarget,bz=bA.handleObj,bx=bz.selector;if(!bB||(bB!==bC&&!D.contains(bC,bB))){bA.type=bz.origType;by=bz.handler.apply(this,arguments);bA.type=bv}return by}}});D.fn.extend({on:function(bx,bv,bA,bz,bw){var bB,by;if(typeof bx==="object"){if(typeof bv!=="string"){bA=bA||bv;bv=H}for(by in bx){this.on(by,bv,bA,bx[by],bw)}return this}if(bA==null&&bz==null){bz=bv;bA=bv=H}else{if(bz==null){if(typeof bv==="string"){bz=bA;bA=H}else{bz=bA;bA=bv;bv=H}}}if(bz===false){bz=bo}else{if(!bz){return this}}if(bw===1){bB=bz;bz=function(bC){D().off(bC);return bB.apply(this,arguments)};bz.guid=bB.guid||(bB.guid=D.guid++)}return this.each(function(){D.event.add(this,bx,bz,bA,bv)})},off:function(bx,bv,bz){var bw,by;if(bx&&bx.preventDefault&&bx.handleObj){bw=bx.handleObj;D(bx.delegateTarget).off(bw.namespace?bw.origType+"."+bw.namespace:bw.origType,bw.selector,bw.handler);return this}if(typeof bx==="object"){for(by in bx){this.off(by,bv,bx[by])}return this}if(bv===false||typeof bv==="function"){bz=bv;bv=H}if(bz===false){bz=bo}return this.each(function(){D.event.remove(this,bx,bz,bv)})},delegate:function(bv,bw,by,bx){return this.on(bw,bv,by,bx)},undelegate:function(bv,bw,bx){return arguments.length===1?this.off(bv,"**"):this.off(bw,bv||"**",bx)},trigger:function(bv,bw){return this.each(function(){D.event.trigger(bv,bw,this)})},triggerHandler:function(bv,bw){if(this[0]){return D.event.trigger(bv,bw,this[0],true)}},toggle:function(by){var bw=arguments,bv=by.guid||D.guid++,bx=0,bz=function(bA){var bB=(D._data(this,"lastToggle"+by.guid)||0)%bx;D._data(this,"lastToggle"+by.guid,bB+1);bA.preventDefault();return bw[bB].apply(this,arguments)||false};bz.guid=bv;while(bx<bw.length){bw[bx++].guid=bv}return this.click(bz)},hover:function(bv,bw){return this.mouseenter(bv).mouseleave(bw||bv)}});D.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(bw,bv){D.fn[bv]=function(by,bx){if(bx==null){bx=by;by=null}return arguments.length>0?this.on(bv,null,by,bx):this.trigger(bv)};if(aI.test(bv)){D.event.fixHooks[bv]=D.event.keyHooks}if(bj.test(bv)){D.event.fixHooks[bv]=D.event.mouseHooks}});
/*!
         * Sizzle CSS Selector Engine
         * Copyright 2012 JQXLite Foundation and other contributors
         * Released under the MIT license
         * http://sizzlejs.com/
         */
(function(co,bN){var ct,bG,ch,bw,bS,b6,bJ,bM,bI,cf,bF=true,b0="undefined",cv=("sizcache"+Math.random()).replace(".",""),bA=String,bE=co.document,bH=bE.documentElement,bX=0,bL=0,ca=[].pop,cs=[].push,bR=[].slice,bU=[].indexOf||function(cF){var cE=0,cD=this.length;for(;cE<cD;cE++){if(this[cE]===cF){return cE}}return -1},cx=function(cD,cE){cD[cv]=cE==null||cE;return cD},cB=function(){var cD={},cE=[];return cx(function(cF,cG){if(cE.push(cF)>ch.cacheLength){delete cD[cE.shift()]}return(cD[cF+" "]=cG)},cD)},cq=cB(),cr=cB(),bT=cB(),b4="[\\x20\\t\\r\\n\\f]",bQ="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",bO=bQ.replace("w","w#"),cA="([*^$|!~]?=)",cl="\\["+b4+"*("+bQ+")"+b4+"*(?:"+cA+b4+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+bO+")|)|)"+b4+"*\\]",cC=":("+bQ+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+cl+")|[^:]|\\\\.)*|.*))\\)|)",b5=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b4+"*((?:-\\d)?\\d*)"+b4+"*\\)|)(?=[^-]|$)",cp=new RegExp("^"+b4+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b4+"+$","g"),bB=new RegExp("^"+b4+"*,"+b4+"*"),cd=new RegExp("^"+b4+"*([\\x20\\t\\r\\n\\f>+~])"+b4+"*"),ci=new RegExp(cC),ck=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,b9=/^:not/,cn=/[\x20\t\r\n\f]*[+~]/,cw=/:not\($/,bY=/h\d/i,cj=/input|select|textarea|button/i,bZ=/\\(?!\\)/g,cc={ID:new RegExp("^#("+bQ+")"),CLASS:new RegExp("^\\.("+bQ+")"),NAME:new RegExp("^\\[name=['\"]?("+bQ+")['\"]?\\]"),TAG:new RegExp("^("+bQ.replace("w","w*")+")"),ATTR:new RegExp("^"+cl),PSEUDO:new RegExp("^"+cC),POS:new RegExp(b5,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+b4+"*(even|odd|(([+-]|)(\\d*)n|)"+b4+"*(?:([+-]|)"+b4+"*(\\d+)|))"+b4+"*\\)|)","i"),needsContext:new RegExp("^"+b4+"*[>+~]|"+b5,"i")},cg=function(cD){var cF=bE.createElement("div");try{return cD(cF)}catch(cE){return false}finally{cF=null}},bD=cg(function(cD){cD.appendChild(bE.createComment(""));return !cD.getElementsByTagName("*").length}),b8=cg(function(cD){cD.innerHTML="<a href='#'></a>";return cD.firstChild&&typeof cD.firstChild.getAttribute!==b0&&cD.firstChild.getAttribute("href")==="#"}),bW=cg(function(cE){cE.innerHTML="<select></select>";var cD=typeof cE.lastChild.getAttribute("multiple");return cD!=="boolean"&&cD!=="string"}),b7=cg(function(cD){cD.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!cD.getElementsByClassName||!cD.getElementsByClassName("e").length){return false}cD.lastChild.className="e";return cD.getElementsByClassName("e").length===2}),bv=cg(function(cE){cE.id=cv+0;cE.innerHTML="<a name='"+cv+"'></a><div name='"+cv+"'></div>";bH.insertBefore(cE,bH.firstChild);var cD=bE.getElementsByName&&bE.getElementsByName(cv).length===2+bE.getElementsByName(cv+0).length;bG=!bE.getElementById(cv);bH.removeChild(cE);return cD});try{bR.call(bH.childNodes,0)[0].nodeType}catch(cz){bR=function(cE){var cF,cD=[];for(;(cF=this[cE]);cE++){cD.push(cF)}return cD}}function cm(cG,cD,cI,cL){cI=cI||[];cD=cD||bE;var cJ,cE,cK,cF,cH=cD.nodeType;if(!cG||typeof cG!=="string"){return cI}if(cH!==1&&cH!==9){return[]}cK=bS(cD);if(!cK&&!cL){if((cJ=ck.exec(cG))){if((cF=cJ[1])){if(cH===9){cE=cD.getElementById(cF);if(cE&&cE.parentNode){if(cE.id===cF){cI.push(cE);return cI}}else{return cI}}else{if(cD.ownerDocument&&(cE=cD.ownerDocument.getElementById(cF))&&b6(cD,cE)&&cE.id===cF){cI.push(cE);return cI}}}else{if(cJ[2]){cs.apply(cI,bR.call(cD.getElementsByTagName(cG),0));return cI}else{if((cF=cJ[3])&&b7&&cD.getElementsByClassName){cs.apply(cI,bR.call(cD.getElementsByClassName(cF),0));return cI}}}}}return cu(cG.replace(cp,"$1"),cD,cI,cL,cK)}cm.matches=function(cE,cD){return cm(cE,null,null,cD)};cm.matchesSelector=function(cD,cE){return cm(cE,null,null,[cD]).length>0};function ce(cD){return function(cF){var cE=cF.nodeName.toLowerCase();return cE==="input"&&cF.type===cD}}function bz(cD){return function(cF){var cE=cF.nodeName.toLowerCase();return(cE==="input"||cE==="button")&&cF.type===cD}}function cb(cD){return cx(function(cE){cE=+cE;return cx(function(cF,cJ){var cH,cG=cD([],cF.length,cE),cI=cG.length;while(cI--){if(cF[(cH=cG[cI])]){cF[cH]=!(cJ[cH]=cF[cH])}}})})}bw=cm.getText=function(cH){var cG,cE="",cF=0,cD=cH.nodeType;if(cD){if(cD===1||cD===9||cD===11){if(typeof cH.textContent==="string"){return cH.textContent}else{for(cH=cH.firstChild;cH;cH=cH.nextSibling){cE+=bw(cH)}}}else{if(cD===3||cD===4){return cH.nodeValue}}}else{for(;(cG=cH[cF]);cF++){cE+=bw(cG)}}return cE};bS=cm.isXML=function(cD){var cE=cD&&(cD.ownerDocument||cD).documentElement;return cE?cE.nodeName!=="HTML":false};b6=cm.contains=bH.contains?function(cE,cD){var cG=cE.nodeType===9?cE.documentElement:cE,cF=cD&&cD.parentNode;return cE===cF||!!(cF&&cF.nodeType===1&&cG.contains&&cG.contains(cF))}:bH.compareDocumentPosition?function(cE,cD){return cD&&!!(cE.compareDocumentPosition(cD)&16)}:function(cE,cD){while((cD=cD.parentNode)){if(cD===cE){return true}}return false};cm.attr=function(cF,cE){var cG,cD=bS(cF);if(!cD){cE=cE.toLowerCase()}if((cG=ch.attrHandle[cE])){return cG(cF)}if(cD||bW){return cF.getAttribute(cE)}cG=cF.getAttributeNode(cE);return cG?typeof cF[cE]==="boolean"?cF[cE]?cE:null:cG.specified?cG.value:null:null};ch=cm.selectors={cacheLength:50,createPseudo:cx,match:cc,attrHandle:b8?{}:{href:function(cD){return cD.getAttribute("href",2)},type:function(cD){return cD.getAttribute("type")}},find:{ID:bG?function(cG,cF,cE){if(typeof cF.getElementById!==b0&&!cE){var cD=cF.getElementById(cG);return cD&&cD.parentNode?[cD]:[]}}:function(cG,cF,cE){if(typeof cF.getElementById!==b0&&!cE){var cD=cF.getElementById(cG);return cD?cD.id===cG||typeof cD.getAttributeNode!==b0&&cD.getAttributeNode("id").value===cG?[cD]:bN:[]}},TAG:bD?function(cD,cE){if(typeof cE.getElementsByTagName!==b0){return cE.getElementsByTagName(cD)}}:function(cD,cH){var cG=cH.getElementsByTagName(cD);if(cD==="*"){var cI,cF=[],cE=0;for(;(cI=cG[cE]);cE++){if(cI.nodeType===1){cF.push(cI)}}return cF}return cG},NAME:bv&&function(cD,cE){if(typeof cE.getElementsByName!==b0){return cE.getElementsByName(name)}},CLASS:b7&&function(cF,cE,cD){if(typeof cE.getElementsByClassName!==b0&&!cD){return cE.getElementsByClassName(cF)}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(cD){cD[1]=cD[1].replace(bZ,"");cD[3]=(cD[4]||cD[5]||"").replace(bZ,"");if(cD[2]==="~="){cD[3]=" "+cD[3]+" "}return cD.slice(0,4)},CHILD:function(cD){cD[1]=cD[1].toLowerCase();if(cD[1]==="nth"){if(!cD[2]){cm.error(cD[0])}cD[3]=+(cD[3]?cD[4]+(cD[5]||1):2*(cD[2]==="even"||cD[2]==="odd"));cD[4]=+((cD[6]+cD[7])||cD[2]==="odd")}else{if(cD[2]){cm.error(cD[0])}}return cD},PSEUDO:function(cE){var cF,cD;if(cc.CHILD.test(cE[0])){return null}if(cE[3]){cE[2]=cE[3]}else{if((cF=cE[4])){if(ci.test(cF)&&(cD=bx(cF,true))&&(cD=cF.indexOf(")",cF.length-cD)-cF.length)){cF=cF.slice(0,cD);cE[0]=cE[0].slice(0,cD)}cE[2]=cF}}return cE.slice(0,3)}},filter:{ID:bG?function(cD){cD=cD.replace(bZ,"");return function(cE){return cE.getAttribute("id")===cD}}:function(cD){cD=cD.replace(bZ,"");return function(cF){var cE=typeof cF.getAttributeNode!==b0&&cF.getAttributeNode("id");return cE&&cE.value===cD}},TAG:function(cD){if(cD==="*"){return function(){return true}}cD=cD.replace(bZ,"").toLowerCase();return function(cE){return cE.nodeName&&cE.nodeName.toLowerCase()===cD}},CLASS:function(cD){var cE=cq[cv][cD+" "];return cE||(cE=new RegExp("(^|"+b4+")"+cD+"("+b4+"|$)"))&&cq(cD,function(cF){return cE.test(cF.className||(typeof cF.getAttribute!==b0&&cF.getAttribute("class"))||"")})},ATTR:function(cF,cE,cD){return function(cI,cH){var cG=cm.attr(cI,cF);if(cG==null){return cE==="!="}if(!cE){return true}cG+="";return cE==="="?cG===cD:cE==="!="?cG!==cD:cE==="^="?cD&&cG.indexOf(cD)===0:cE==="*="?cD&&cG.indexOf(cD)>-1:cE==="$="?cD&&cG.substr(cG.length-cD.length)===cD:cE==="~="?(" "+cG+" ").indexOf(cD)>-1:cE==="|="?cG===cD||cG.substr(0,cD.length+1)===cD+"-":false}},CHILD:function(cD,cF,cG,cE){if(cD==="nth"){return function(cJ){var cI,cK,cH=cJ.parentNode;if(cG===1&&cE===0){return true}if(cH){cK=0;for(cI=cH.firstChild;cI;cI=cI.nextSibling){if(cI.nodeType===1){cK++;if(cJ===cI){break}}}}cK-=cE;return cK===cG||(cK%cG===0&&cK/cG>=0)}}return function(cI){var cH=cI;switch(cD){case"only":case"first":while((cH=cH.previousSibling)){if(cH.nodeType===1){return false}}if(cD==="first"){return true}cH=cI;case"last":while((cH=cH.nextSibling)){if(cH.nodeType===1){return false}}return true}}},PSEUDO:function(cG,cF){var cD,cE=ch.pseudos[cG]||ch.setFilters[cG.toLowerCase()]||cm.error("unsupported pseudo: "+cG);if(cE[cv]){return cE(cF)}if(cE.length>1){cD=[cG,cG,"",cF];return ch.setFilters.hasOwnProperty(cG.toLowerCase())?cx(function(cJ,cL){var cI,cH=cE(cJ,cF),cK=cH.length;while(cK--){cI=bU.call(cJ,cH[cK]);cJ[cI]=!(cL[cI]=cH[cK])}}):function(cH){return cE(cH,0,cD)}}return cE}},pseudos:{not:cx(function(cD){var cE=[],cF=[],cG=bJ(cD.replace(cp,"$1"));return cG[cv]?cx(function(cI,cN,cL,cJ){var cM,cH=cG(cI,null,cJ,[]),cK=cI.length;while(cK--){if((cM=cH[cK])){cI[cK]=!(cN[cK]=cM)}}}):function(cJ,cI,cH){cE[0]=cJ;cG(cE,null,cH,cF);return !cF.pop()}}),has:cx(function(cD){return function(cE){return cm(cD,cE).length>0}}),contains:cx(function(cD){return function(cE){return(cE.textContent||cE.innerText||bw(cE)).indexOf(cD)>-1}}),enabled:function(cD){return cD.disabled===false},disabled:function(cD){return cD.disabled===true},checked:function(cD){var cE=cD.nodeName.toLowerCase();return(cE==="input"&&!!cD.checked)||(cE==="option"&&!!cD.selected)},selected:function(cD){if(cD.parentNode){cD.parentNode.selectedIndex}return cD.selected===true},parent:function(cD){return !ch.pseudos.empty(cD)},empty:function(cE){var cD;cE=cE.firstChild;while(cE){if(cE.nodeName>"@"||(cD=cE.nodeType)===3||cD===4){return false}cE=cE.nextSibling}return true},header:function(cD){return bY.test(cD.nodeName)},text:function(cF){var cE,cD;return cF.nodeName.toLowerCase()==="input"&&(cE=cF.type)==="text"&&((cD=cF.getAttribute("type"))==null||cD.toLowerCase()===cE)},radio:ce("radio"),checkbox:ce("checkbox"),file:ce("file"),password:ce("password"),image:ce("image"),submit:bz("submit"),reset:bz("reset"),button:function(cE){var cD=cE.nodeName.toLowerCase();return cD==="input"&&cE.type==="button"||cD==="button"},input:function(cD){return cj.test(cD.nodeName)},focus:function(cD){var cE=cD.ownerDocument;return cD===cE.activeElement&&(!cE.hasFocus||cE.hasFocus())&&!!(cD.type||cD.href||~cD.tabIndex)},active:function(cD){return cD===cD.ownerDocument.activeElement},first:cb(function(){return[0]}),last:cb(function(cD,cE){return[cE-1]}),eq:cb(function(cD,cF,cE){return[cE<0?cE+cF:cE]}),even:cb(function(cD,cF){for(var cE=0;cE<cF;cE+=2){cD.push(cE)}return cD}),odd:cb(function(cD,cF){for(var cE=1;cE<cF;cE+=2){cD.push(cE)}return cD}),lt:cb(function(cD,cG,cF){for(var cE=cF<0?cF+cG:cF;--cE>=0;){cD.push(cE)}return cD}),gt:cb(function(cD,cG,cF){for(var cE=cF<0?cF+cG:cF;++cE<cG;){cD.push(cE)}return cD})}};function by(cE,cD,cF){if(cE===cD){return cF}var cG=cE.nextSibling;while(cG){if(cG===cD){return -1}cG=cG.nextSibling}return 1}bM=bH.compareDocumentPosition?function(cE,cD){if(cE===cD){bI=true;return 0}return(!cE.compareDocumentPosition||!cD.compareDocumentPosition?cE.compareDocumentPosition:cE.compareDocumentPosition(cD)&4)?-1:1}:function(cL,cK){if(cL===cK){bI=true;return 0}else{if(cL.sourceIndex&&cK.sourceIndex){return cL.sourceIndex-cK.sourceIndex}}var cI,cE,cF=[],cD=[],cH=cL.parentNode,cJ=cK.parentNode,cM=cH;if(cH===cJ){return by(cL,cK)}else{if(!cH){return -1}else{if(!cJ){return 1}}}while(cM){cF.unshift(cM);cM=cM.parentNode}cM=cJ;while(cM){cD.unshift(cM);cM=cM.parentNode}cI=cF.length;cE=cD.length;for(var cG=0;cG<cI&&cG<cE;cG++){if(cF[cG]!==cD[cG]){return by(cF[cG],cD[cG])}}return cG===cI?by(cL,cD[cG],-1):by(cF[cG],cK,1)};[0,0].sort(bM);bF=!bI;cm.uniqueSort=function(cF){var cG,cH=[],cE=1,cD=0;bI=bF;cF.sort(bM);if(bI){for(;(cG=cF[cE]);cE++){if(cG===cF[cE-1]){cD=cH.push(cE)}}while(cD--){cF.splice(cH[cD],1)}}return cF};cm.error=function(cD){throw new Error("Syntax error, unrecognized expression: "+cD)};function bx(cH,cM){var cE,cI,cK,cL,cJ,cF,cD,cG=cr[cv][cH+" "];if(cG){return cM?0:cG.slice(0)}cJ=cH;cF=[];cD=ch.preFilter;while(cJ){if(!cE||(cI=bB.exec(cJ))){if(cI){cJ=cJ.slice(cI[0].length)||cJ}cF.push(cK=[])}cE=false;if((cI=cd.exec(cJ))){cK.push(cE=new bA(cI.shift()));cJ=cJ.slice(cE.length);cE.type=cI[0].replace(cp," ")}for(cL in ch.filter){if((cI=cc[cL].exec(cJ))&&(!cD[cL]||(cI=cD[cL](cI)))){cK.push(cE=new bA(cI.shift()));cJ=cJ.slice(cE.length);cE.type=cL;cE.matches=cI}}if(!cE){break}}return cM?cJ.length:cJ?cm.error(cH):cr(cH,cF).slice(0)}function b2(cH,cF,cG){var cD=cF.dir,cI=cG&&cF.dir==="parentNode",cE=bL++;return cF.first?function(cL,cK,cJ){while((cL=cL[cD])){if(cI||cL.nodeType===1){return cH(cL,cK,cJ)}}}:function(cM,cL,cK){if(!cK){var cJ,cN=bX+" "+cE+" ",cO=cN+ct;while((cM=cM[cD])){if(cI||cM.nodeType===1){if((cJ=cM[cv])===cO){return cM.sizset}else{if(typeof cJ==="string"&&cJ.indexOf(cN)===0){if(cM.sizset){return cM}}else{cM[cv]=cO;if(cH(cM,cL,cK)){cM.sizset=true;return cM}cM.sizset=false}}}}}else{while((cM=cM[cD])){if(cI||cM.nodeType===1){if(cH(cM,cL,cK)){return cM}}}}}}function bK(cD){return cD.length>1?function(cH,cG,cE){var cF=cD.length;while(cF--){if(!cD[cF](cH,cG,cE)){return false}}return true}:cD[0]}function b1(cD,cE,cF,cG,cJ){var cH,cM=[],cI=0,cK=cD.length,cL=cE!=null;for(;cI<cK;cI++){if((cH=cD[cI])){if(!cF||cF(cH,cG,cJ)){cM.push(cH);if(cL){cE.push(cI)}}}}return cM}function cy(cF,cE,cH,cG,cI,cD){if(cG&&!cG[cv]){cG=cy(cG)}if(cI&&!cI[cv]){cI=cy(cI,cD)}return cx(function(cT,cQ,cL,cS){var cV,cR,cN,cM=[],cU=[],cK=cQ.length,cJ=cT||bV(cE||"*",cL.nodeType?[cL]:cL,[]),cO=cF&&(cT||!cE)?b1(cJ,cM,cF,cL,cS):cJ,cP=cH?cI||(cT?cF:cK||cG)?[]:cQ:cO;if(cH){cH(cO,cP,cL,cS)}if(cG){cV=b1(cP,cU);cG(cV,[],cL,cS);cR=cV.length;while(cR--){if((cN=cV[cR])){cP[cU[cR]]=!(cO[cU[cR]]=cN)}}}if(cT){if(cI||cF){if(cI){cV=[];cR=cP.length;while(cR--){if((cN=cP[cR])){cV.push((cO[cR]=cN))}}cI(null,(cP=[]),cV,cS)}cR=cP.length;while(cR--){if((cN=cP[cR])&&(cV=cI?bU.call(cT,cN):cM[cR])>-1){cT[cV]=!(cQ[cV]=cN)}}}}else{cP=b1(cP===cQ?cP.splice(cK,cP.length):cP);if(cI){cI(null,cQ,cP,cS)}else{cs.apply(cQ,cP)}}})}function b3(cJ){var cE,cH,cF,cI=cJ.length,cM=ch.relative[cJ[0].type],cN=cM||ch.relative[" "],cG=cM?1:0,cK=b2(function(cO){return cO===cE},cN,true),cL=b2(function(cO){return bU.call(cE,cO)>-1},cN,true),cD=[function(cQ,cP,cO){return(!cM&&(cO||cP!==cf))||((cE=cP).nodeType?cK(cQ,cP,cO):cL(cQ,cP,cO))}];for(;cG<cI;cG++){if((cH=ch.relative[cJ[cG].type])){cD=[b2(bK(cD),cH)]}else{cH=ch.filter[cJ[cG].type].apply(null,cJ[cG].matches);if(cH[cv]){cF=++cG;for(;cF<cI;cF++){if(ch.relative[cJ[cF].type]){break}}return cy(cG>1&&bK(cD),cG>1&&cJ.slice(0,cG-1).join("").replace(cp,"$1"),cH,cG<cF&&b3(cJ.slice(cG,cF)),cF<cI&&b3((cJ=cJ.slice(cF))),cF<cI&&cJ.join(""))}cD.push(cH)}}return bK(cD)}function bC(cG,cF){var cD=cF.length>0,cH=cG.length>0,cE=function(cR,cL,cQ,cP,cX){var cM,cN,cS,cW=[],cV=0,cO="0",cI=cR&&[],cT=cX!=null,cU=cf,cK=cR||cH&&ch.find.TAG("*",cX&&cL.parentNode||cL),cJ=(bX+=cU==null?1:Math.E);if(cT){cf=cL!==bE&&cL;ct=cE.el}for(;(cM=cK[cO])!=null;cO++){if(cH&&cM){for(cN=0;(cS=cG[cN]);cN++){if(cS(cM,cL,cQ)){cP.push(cM);break}}if(cT){bX=cJ;ct=++cE.el}}if(cD){if((cM=!cS&&cM)){cV--}if(cR){cI.push(cM)}}}cV+=cO;if(cD&&cO!==cV){for(cN=0;(cS=cF[cN]);cN++){cS(cI,cW,cL,cQ)}if(cR){if(cV>0){while(cO--){if(!(cI[cO]||cW[cO])){cW[cO]=ca.call(cP)}}}cW=b1(cW)}cs.apply(cP,cW);if(cT&&!cR&&cW.length>0&&(cV+cF.length)>1){cm.uniqueSort(cP)}}if(cT){bX=cJ;cf=cU}return cI};cE.el=0;return cD?cx(cE):cE}bJ=cm.compile=function(cD,cI){var cF,cE=[],cH=[],cG=bT[cv][cD+" "];if(!cG){if(!cI){cI=bx(cD)}cF=cI.length;while(cF--){cG=b3(cI[cF]);if(cG[cv]){cE.push(cG)}else{cH.push(cG)}}cG=bT(cD,bC(cH,cE))}return cG};function bV(cE,cH,cG){var cF=0,cD=cH.length;for(;cF<cD;cF++){cm(cE,cH[cF],cG)}return cG}function cu(cF,cD,cH,cL,cK){var cI,cO,cE,cN,cM,cJ=bx(cF),cG=cJ.length;if(!cL){if(cJ.length===1){cO=cJ[0]=cJ[0].slice(0);if(cO.length>2&&(cE=cO[0]).type==="ID"&&cD.nodeType===9&&!cK&&ch.relative[cO[1].type]){cD=ch.find.ID(cE.matches[0].replace(bZ,""),cD,cK)[0];if(!cD){return cH}cF=cF.slice(cO.shift().length)}for(cI=cc.POS.test(cF)?-1:cO.length-1;cI>=0;cI--){cE=cO[cI];if(ch.relative[(cN=cE.type)]){break}if((cM=ch.find[cN])){if((cL=cM(cE.matches[0].replace(bZ,""),cn.test(cO[0].type)&&cD.parentNode||cD,cK))){cO.splice(cI,1);cF=cL.length&&cO.join("");if(!cF){cs.apply(cH,bR.call(cL,0));return cH}break}}}}}bJ(cF,cJ)(cL,cD,cK,cH,cn.test(cF));return cH}if(bE.querySelectorAll){(function(){var cI,cJ=cu,cH=/'|\\/g,cF=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,cE=[":focus"],cD=[":active"],cG=bH.matchesSelector||bH.mozMatchesSelector||bH.webkitMatchesSelector||bH.oMatchesSelector||bH.msMatchesSelector;cg(function(cK){cK.innerHTML="<select><option selected=''></option></select>";if(!cK.querySelectorAll("[selected]").length){cE.push("\\["+b4+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")}if(!cK.querySelectorAll(":checked").length){cE.push(":checked")}});cg(function(cK){cK.innerHTML="<p test=''></p>";if(cK.querySelectorAll("[test^='']").length){cE.push("[*^$]="+b4+"*(?:\"\"|'')")}cK.innerHTML="<input type='hidden'/>";if(!cK.querySelectorAll(":enabled").length){cE.push(":enabled",":disabled")}});cE=new RegExp(cE.join("|"));cu=function(cQ,cL,cS,cV,cU){if(!cV&&!cU&&!cE.test(cQ)){var cO,cT,cN=true,cK=cv,cM=cL,cR=cL.nodeType===9&&cQ;if(cL.nodeType===1&&cL.nodeName.toLowerCase()!=="object"){cO=bx(cQ);if((cN=cL.getAttribute("id"))){cK=cN.replace(cH,"\\$&")}else{cL.setAttribute("id",cK)}cK="[id='"+cK+"'] ";cT=cO.length;while(cT--){cO[cT]=cK+cO[cT].join("")}cM=cn.test(cQ)&&cL.parentNode||cL;cR=cO.join(",")}if(cR){try{cs.apply(cS,bR.call(cM.querySelectorAll(cR),0));return cS}catch(cP){}finally{if(!cN){cL.removeAttribute("id")}}}}return cJ(cQ,cL,cS,cV,cU)};if(cG){cg(function(cL){cI=cG.call(cL,"div");try{cG.call(cL,"[test!='']:sizzle");cD.push("!=",cC)}catch(cK){}});cD=new RegExp(cD.join("|"));cm.matchesSelector=function(cL,cN){cN=cN.replace(cF,"='$1']");if(!bS(cL)&&!cD.test(cN)&&!cE.test(cN)){try{var cK=cG.call(cL,cN);if(cK||cI||cL.document&&cL.document.nodeType!==11){return cK}}catch(cM){}}return cm(cN,null,null,[cL]).length>0}}})()}ch.pseudos.nth=ch.pseudos.eq;function bP(){}ch.filters=bP.prototype=ch.pseudos;ch.setFilters=new bP();cm.attr=D.attr;D.find=cm;D.expr=cm.selectors;D.expr[":"]=D.expr.pseudos;D.unique=cm.uniqueSort;D.text=cm.getText;D.isXMLDoc=cm.isXML;D.contains=cm.contains})(be);var V=/Until$/,ah=/^(?:parents|prev(?:Until|All))/,br=/^.[^:#\[\.,]*$/,aR=D.expr.match.needsContext,ap={children:true,contents:true,next:true,prev:true};D.fn.extend({find:function(bv){var bz,bw,bB,bC,bA,by,bx=this;if(typeof bv!=="string"){return D(bv).filter(function(){for(bz=0,bw=bx.length;bz<bw;bz++){if(D.contains(bx[bz],this)){return true}}})}by=this.pushStack("","find",bv);for(bz=0,bw=this.length;bz<bw;bz++){bB=by.length;D.find(bv,this[bz],by);if(bz>0){for(bC=bB;bC<by.length;bC++){for(bA=0;bA<bB;bA++){if(by[bA]===by[bC]){by.splice(bC--,1);break}}}}}return by},has:function(by){var bx,bw=D(by,this),bv=bw.length;return this.filter(function(){for(bx=0;bx<bv;bx++){if(D.contains(this,bw[bx])){return true}}})},not:function(bv){return this.pushStack(aA(this,bv,false),"not",bv)},filter:function(bv){return this.pushStack(aA(this,bv,true),"filter",bv)},is:function(bv){return !!bv&&(typeof bv==="string"?aR.test(bv)?D(bv,this.context).index(this[0])>=0:D.filter(bv,this).length>0:this.filter(bv).length>0)},closest:function(bz,by){var bA,bx=0,bv=this.length,bw=[],bB=aR.test(bz)||typeof bz!=="string"?D(bz,by||this.context):0;for(;bx<bv;bx++){bA=this[bx];while(bA&&bA.ownerDocument&&bA!==by&&bA.nodeType!==11){if(bB?bB.index(bA)>-1:D.find.matchesSelector(bA,bz)){bw.push(bA);break}bA=bA.parentNode}}bw=bw.length>1?D.unique(bw):bw;return this.pushStack(bw,"closest",bz)},index:function(bv){if(!bv){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1}if(typeof bv==="string"){return D.inArray(this[0],D(bv))}return D.inArray(bv.jqx?bv[0]:bv,this)},add:function(bv,bw){var by=typeof bv==="string"?D(bv,bw):D.makeArray(bv&&bv.nodeType?[bv]:bv),bx=D.merge(this.get(),by);return this.pushStack(y(by[0])||y(bx[0])?bx:D.unique(bx))},addBack:function(bv){return this.add(bv==null?this.prevObject:this.prevObject.filter(bv))}});D.fn.andSelf=D.fn.addBack;function y(bv){return !bv||!bv.parentNode||bv.parentNode.nodeType===11}function aC(bw,bv){do{bw=bw[bv]}while(bw&&bw.nodeType!==1);return bw}D.each({parent:function(bw){var bv=bw.parentNode;return bv&&bv.nodeType!==11?bv:null},parents:function(bv){return D.dir(bv,"parentNode")},parentsUntil:function(bw,bv,bx){return D.dir(bw,"parentNode",bx)},next:function(bv){return aC(bv,"nextSibling")},prev:function(bv){return aC(bv,"previousSibling")},nextAll:function(bv){return D.dir(bv,"nextSibling")},prevAll:function(bv){return D.dir(bv,"previousSibling")},nextUntil:function(bw,bv,bx){return D.dir(bw,"nextSibling",bx)},prevUntil:function(bw,bv,bx){return D.dir(bw,"previousSibling",bx)},siblings:function(bv){return D.sibling((bv.parentNode||{}).firstChild,bv)},children:function(bv){return D.sibling(bv.firstChild)},contents:function(bv){return D.nodeName(bv,"iframe")?bv.contentDocument||bv.contentWindow.document:D.merge([],bv.childNodes)}},function(bv,bw){D.fn[bv]=function(bz,bx){var by=D.map(this,bw,bz);if(!V.test(bv)){bx=bz}if(bx&&typeof bx==="string"){by=D.filter(bx,by)}by=this.length>1&&!ap[bv]?D.unique(by):by;if(this.length>1&&ah.test(bv)){by=by.reverse()}return this.pushStack(by,bv,aE.call(arguments).join(","))}});D.extend({filter:function(bx,bv,bw){if(bw){bx=":not("+bx+")"}return bv.length===1?D.find.matchesSelector(bv[0],bx)?[bv[0]]:[]:D.find.matches(bx,bv)},dir:function(bx,bw,bz){var bv=[],by=bx[bw];while(by&&by.nodeType!==9&&(bz===H||by.nodeType!==1||!D(by).is(bz))){if(by.nodeType===1){bv.push(by)}by=by[bw]}return bv},sibling:function(bx,bw){var bv=[];for(;bx;bx=bx.nextSibling){if(bx.nodeType===1&&bx!==bw){bv.push(bx)}}return bv}});function aA(by,bx,bv){bx=bx||0;if(D.isFunction(bx)){return D.grep(by,function(bA,bz){var bB=!!bx.call(bA,bz,bA);return bB===bv})}else{if(bx.nodeType){return D.grep(by,function(bA,bz){return(bA===bx)===bv})}else{if(typeof bx==="string"){var bw=D.grep(by,function(bz){return bz.nodeType===1});if(br.test(bx)){return D.filter(bx,bw,!bv)}else{bx=D.filter(bx,bw)}}}}return D.grep(by,function(bA,bz){return(D.inArray(bA,bx)>=0)===bv})}function a(bv){var bx=aK.split("|"),bw=bv.createDocumentFragment();if(bw.createElement){while(bx.length){bw.createElement(bx.pop())}}return bw}var aK="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ab=/ JQXLite\d+="(?:null|\d+)"/g,ai=/^\s+/,M=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,c=/<([\w:]+)/,w=/<tbody/i,Q=/<|&#?\w+;/,X=/<(?:script|style|link)/i,J=/<(?:script|object|embed|option|style)/i,ad=new RegExp("<(?:"+aK+")[\\s/>]","i"),S=/^(?:checkbox|radio)$/,p=/checked\s*(?:[^=]|=\s*.checked.)/i,bq=/\/(java|ecma)script/i,aH=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,an={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},U=a(al),bh=U.appendChild(al.createElement("div"));an.optgroup=an.option;an.tbody=an.tfoot=an.colgroup=an.caption=an.thead;an.th=an.td;if(!D.support.htmlSerialize){an._default=[1,"X<div>","</div>"]}D.fn.extend({text:function(bv){return D.access(this,function(bw){return bw===H?D.text(this):this.empty().append((this[0]&&this[0].ownerDocument||al).createTextNode(bw))},null,bv,arguments.length)},wrapAll:function(bv){if(D.isFunction(bv)){return this.each(function(bx){D(this).wrapAll(bv.call(this,bx))})}if(this[0]){var bw=D(bv,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){bw.insertBefore(this[0])}bw.map(function(){var bx=this;while(bx.firstChild&&bx.firstChild.nodeType===1){bx=bx.firstChild}return bx}).append(this)}return this},wrapInner:function(bv){if(D.isFunction(bv)){return this.each(function(bw){D(this).wrapInner(bv.call(this,bw))})}return this.each(function(){var bw=D(this),bx=bw.contents();if(bx.length){bx.wrapAll(bv)}else{bw.append(bv)}})},wrap:function(bv){var bw=D.isFunction(bv);return this.each(function(bx){D(this).wrapAll(bw?bv.call(this,bx):bv)})},unwrap:function(){return this.parent().each(function(){if(!D.nodeName(this,"body")){D(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(bv){if(this.nodeType===1||this.nodeType===11){this.appendChild(bv)}})},prepend:function(){return this.domManip(arguments,true,function(bv){if(this.nodeType===1||this.nodeType===11){this.insertBefore(bv,this.firstChild)}})},before:function(){if(!y(this[0])){return this.domManip(arguments,false,function(bw){this.parentNode.insertBefore(bw,this)})}if(arguments.length){var bv=D.clean(arguments);return this.pushStack(D.merge(bv,this),"before",this.selector)}},after:function(){if(!y(this[0])){return this.domManip(arguments,false,function(bw){this.parentNode.insertBefore(bw,this.nextSibling)})}if(arguments.length){var bv=D.clean(arguments);return this.pushStack(D.merge(this,bv),"after",this.selector)}},remove:function(bv,by){var bx,bw=0;for(;(bx=this[bw])!=null;bw++){if(!bv||D.filter(bv,[bx]).length){if(!by&&bx.nodeType===1){D.cleanData(bx.getElementsByTagName("*"));D.cleanData([bx])}if(bx.parentNode){bx.parentNode.removeChild(bx)}}}return this},empty:function(){var bw,bv=0;for(;(bw=this[bv])!=null;bv++){if(bw.nodeType===1){D.cleanData(bw.getElementsByTagName("*"))}while(bw.firstChild){bw.removeChild(bw.firstChild)}}return this},clone:function(bw,bv){bw=bw==null?false:bw;bv=bv==null?bw:bv;return this.map(function(){return D.clone(this,bw,bv)})},html:function(bv){return D.access(this,function(bz){var by=this[0]||{},bx=0,bw=this.length;if(bz===H){return by.nodeType===1?by.innerHTML.replace(ab,""):H}if(typeof bz==="string"&&!X.test(bz)&&(D.support.htmlSerialize||!ad.test(bz))&&(D.support.leadingWhitespace||!ai.test(bz))&&!an[(c.exec(bz)||["",""])[1].toLowerCase()]){bz=bz.replace(M,"<$1></$2>");try{for(;bx<bw;bx++){by=this[bx]||{};if(by.nodeType===1){D.cleanData(by.getElementsByTagName("*"));by.innerHTML=bz}}by=0}catch(bA){}}if(by){this.empty().append(bz)}},null,bv,arguments.length)},replaceWith:function(bv){if(!y(this[0])){if(D.isFunction(bv)){return this.each(function(by){var bx=D(this),bw=bx.html();bx.replaceWith(bv.call(this,by,bw))})}if(typeof bv!=="string"){bv=D(bv).detach()}return this.each(function(){var bx=this.nextSibling,bw=this.parentNode;D(this).remove();if(bx){D(bx).before(bv)}else{D(bw).append(bv)}})}return this.length?this.pushStack(D(D.isFunction(bv)?bv():bv),"replaceWith",bv):this},detach:function(bv){return this.remove(bv,true)},domManip:function(bB,bF,bE){bB=[].concat.apply([],bB);var bx,bz,bA,bD,by=0,bC=bB[0],bw=[],bv=this.length;if(!D.support.checkClone&&bv>1&&typeof bC==="string"&&p.test(bC)){return this.each(function(){D(this).domManip(bB,bF,bE)})}if(D.isFunction(bC)){return this.each(function(bH){var bG=D(this);bB[0]=bC.call(this,bH,bF?bG.html():H);bG.domManip(bB,bF,bE)})}if(this[0]){bx=D.buildFragment(bB,this,bw);bA=bx.fragment;bz=bA.firstChild;if(bA.childNodes.length===1){bA=bz}if(bz){bF=bF&&D.nodeName(bz,"tr");for(bD=bx.cacheable||bv-1;by<bv;by++){bE.call(bF&&D.nodeName(this[by],"table")?a4(this[by],"tbody"):this[by],by===bD?bA:D.clone(bA,true,true))}}bA=bz=null;if(bw.length){D.each(bw,function(bG,bH){if(bH.src){if(D.ajax){D.ajax({url:bH.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})}else{D.error("no ajax")}}else{D.globalEval((bH.text||bH.textContent||bH.innerHTML||"").replace(aH,""))}if(bH.parentNode){bH.parentNode.removeChild(bH)}})}}return this}});function a4(bw,bv){return bw.getElementsByTagName(bv)[0]||bw.appendChild(bw.ownerDocument.createElement(bv))}function s(bC,bw){if(bw.nodeType!==1||!D.hasData(bC)){return}var bz,by,bv,bB=D._data(bC),bA=D._data(bw,bB),bx=bB.events;if(bx){delete bA.handle;bA.events={};for(bz in bx){for(by=0,bv=bx[bz].length;by<bv;by++){D.event.add(bw,bz,bx[bz][by])}}}if(bA.data){bA.data=D.extend({},bA.data)}}function ac(bw,bv){var bx;if(bv.nodeType!==1){return}if(bv.clearAttributes){bv.clearAttributes()}if(bv.mergeAttributes){bv.mergeAttributes(bw)}bx=bv.nodeName.toLowerCase();if(bx==="object"){if(bv.parentNode){bv.outerHTML=bw.outerHTML}if(D.support.html5Clone&&(bw.innerHTML&&!D.trim(bv.innerHTML))){bv.innerHTML=bw.innerHTML}}else{if(bx==="input"&&S.test(bw.type)){bv.defaultChecked=bv.checked=bw.checked;if(bv.value!==bw.value){bv.value=bw.value}}else{if(bx==="option"){bv.selected=bw.defaultSelected}else{if(bx==="input"||bx==="textarea"){bv.defaultValue=bw.defaultValue}else{if(bx==="script"&&bv.text!==bw.text){bv.text=bw.text}}}}}bv.removeAttribute(D.expando)}D.buildFragment=function(by,bz,bw){var bx,bv,bA,bB=by[0];bz=bz||al;bz=!bz.nodeType&&bz[0]||bz;bz=bz.ownerDocument||bz;if(by.length===1&&typeof bB==="string"&&bB.length<512&&bz===al&&bB.charAt(0)==="<"&&!J.test(bB)&&(D.support.checkClone||!p.test(bB))&&(D.support.html5Clone||!ad.test(bB))){bv=true;bx=D.fragments[bB];bA=bx!==H}if(!bx){bx=bz.createDocumentFragment();D.clean(by,bz,bx,bw);if(bv){D.fragments[bB]=bA&&bx}}return{fragment:bx,cacheable:bv}};D.fragments={};D.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(bv,bw){D.fn[bv]=function(bx){var bz,bB=0,bA=[],bD=D(bx),by=bD.length,bC=this.length===1&&this[0].parentNode;if((bC==null||bC&&bC.nodeType===11&&bC.childNodes.length===1)&&by===1){bD[bw](this[0]);return this}else{for(;bB<by;bB++){bz=(bB>0?this.clone(true):this).get();D(bD[bB])[bw](bz);bA=bA.concat(bz)}return this.pushStack(bA,bv,bD.selector)}}});function bl(bv){if(typeof bv.getElementsByTagName!=="undefined"){return bv.getElementsByTagName("*")}else{if(typeof bv.querySelectorAll!=="undefined"){return bv.querySelectorAll("*")}else{return[]}}}function am(bv){if(S.test(bv.type)){bv.defaultChecked=bv.checked}}D.extend({clone:function(bz,bB,bx){var bv,bw,by,bA;if(D.support.html5Clone||D.isXMLDoc(bz)||!ad.test("<"+bz.nodeName+">")){bA=bz.cloneNode(true)}else{bh.innerHTML=bz.outerHTML;bh.removeChild(bA=bh.firstChild)}if((!D.support.noCloneEvent||!D.support.noCloneChecked)&&(bz.nodeType===1||bz.nodeType===11)&&!D.isXMLDoc(bz)){ac(bz,bA);bv=bl(bz);bw=bl(bA);for(by=0;bv[by];++by){if(bw[by]){ac(bv[by],bw[by])}}}if(bB){s(bz,bA);if(bx){bv=bl(bz);bw=bl(bA);for(by=0;bv[by];++by){s(bv[by],bw[by])}}}bv=bw=null;return bA},clean:function(bI,bx,bv,by){var bF,bE,bH,bM,bB,bL,bC,bz,bw,bG,bK,bD,bA=bx===al&&U,bJ=[];if(!bx||typeof bx.createDocumentFragment==="undefined"){bx=al}for(bF=0;(bH=bI[bF])!=null;bF++){if(typeof bH==="number"){bH+=""}if(!bH){continue}if(typeof bH==="string"){if(!Q.test(bH)){bH=bx.createTextNode(bH)}else{bA=bA||a(bx);bC=bx.createElement("div");bA.appendChild(bC);bH=bH.replace(M,"<$1></$2>");bM=(c.exec(bH)||["",""])[1].toLowerCase();bB=an[bM]||an._default;bL=bB[0];bC.innerHTML=bB[1]+bH+bB[2];while(bL--){bC=bC.lastChild}if(!D.support.tbody){bz=w.test(bH);bw=bM==="table"&&!bz?bC.firstChild&&bC.firstChild.childNodes:bB[1]==="<table>"&&!bz?bC.childNodes:[];for(bE=bw.length-1;bE>=0;--bE){if(D.nodeName(bw[bE],"tbody")&&!bw[bE].childNodes.length){bw[bE].parentNode.removeChild(bw[bE])}}}if(!D.support.leadingWhitespace&&ai.test(bH)){bC.insertBefore(bx.createTextNode(ai.exec(bH)[0]),bC.firstChild)}bH=bC.childNodes;bC.parentNode.removeChild(bC)}}if(bH.nodeType){bJ.push(bH)}else{D.merge(bJ,bH)}}if(bC){bH=bC=bA=null}if(!D.support.appendChecked){for(bF=0;(bH=bJ[bF])!=null;bF++){if(D.nodeName(bH,"input")){am(bH)}else{if(typeof bH.getElementsByTagName!=="undefined"){D.grep(bH.getElementsByTagName("input"),am)}}}}if(bv){bK=function(bN){if(!bN.type||bq.test(bN.type)){return by?by.push(bN.parentNode?bN.parentNode.removeChild(bN):bN):bv.appendChild(bN)}};for(bF=0;(bH=bJ[bF])!=null;bF++){if(!(D.nodeName(bH,"script")&&bK(bH))){bv.appendChild(bH);if(typeof bH.getElementsByTagName!=="undefined"){bD=D.grep(D.merge([],bH.getElementsByTagName("script")),bK);bJ.splice.apply(bJ,[bF+1,0].concat(bD));bF+=bD.length}}}}return bJ},cleanData:function(bw,bE){var bz,bx,by,bD,bA=0,bF=D.expando,bv=D.cache,bB=D.support.deleteExpando,bC=D.event.special;for(;(by=bw[bA])!=null;bA++){if(bE||D.acceptData(by)){bx=by[bF];bz=bx&&bv[bx];if(bz){if(bz.events){for(bD in bz.events){if(bC[bD]){D.event.remove(by,bD)}else{D.removeEvent(by,bD,bz.handle)}}}if(bv[bx]){delete bv[bx];if(bB){delete by[bF]}else{if(by.removeAttribute){by.removeAttribute(bF)}else{by[bF]=null}}D.deletedIds.push(bx)}}}}}});(function(){var bv,bw;D.uaMatch=function(by){by=by.toLowerCase();var bx=/(chrome)[ \/]([\w.]+)/.exec(by)||/(webkit)[ \/]([\w.]+)/.exec(by)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(by)||/(msie) ([\w.]+)/.exec(by)||by.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(by)||[];return{browser:bx[1]||"",version:bx[2]||"0"}};bv=D.uaMatch(bu.userAgent);bw={};if(bv.browser){bw[bv.browser]=true;bw.version=bv.version}if(bw.chrome){bw.webkit=true}else{if(bw.webkit){bw.safari=true}}D.browser=bw;D.sub=function(){function by(bA,bB){return new by.fn.init(bA,bB)}D.extend(true,by,this);by.superclass=this;by.fn=by.prototype=this();by.fn.constructor=by;by.sub=this.sub;by.fn.init=function bz(bA,bB){if(bB&&bB instanceof D&&!(bB instanceof by)){bB=by(bB)}return D.fn.init.call(this,bA,bB,bx)};by.fn.init.prototype=by.fn;var bx=by(al);return by}})();var R,bd,m,ae=/alpha\([^)]*\)/i,ak=/opacity=([^)]*)/,x=/^(top|right|bottom|left)$/,aj=/^(none|table(?!-c[ea]).+)/,aw=/^margin/,j=new RegExp("^("+aF+")(.*)$","i"),aW=new RegExp("^("+aF+")(?!px)[a-z%]+$","i"),F=new RegExp("^([-+])=("+aF+")","i"),K={BODY:"block"},bb={position:"absolute",visibility:"hidden",display:"block"},aM={letterSpacing:0,fontWeight:400},E=["Top","Right","Bottom","Left"],P=["Webkit","O","Moz","ms"],bf=D.fn.toggle;function a3(by,bw){if(bw in by){return bw}var bz=bw.charAt(0).toUpperCase()+bw.slice(1),bv=bw,bx=P.length;while(bx--){bw=P[bx]+bz;if(bw in by){return bw}}return bv}function aq(bw,bv){bw=bv||bw;return D.css(bw,"display")==="none"||!D.contains(bw.ownerDocument,bw)}function bc(bA,bv){var bz,bB,bw=[],bx=0,by=bA.length;for(;bx<by;bx++){bz=bA[bx];if(!bz.style){continue}bw[bx]=D._data(bz,"olddisplay");if(bv){if(!bw[bx]&&bz.style.display==="none"){bz.style.display=""}if(bz.style.display===""&&aq(bz)){bw[bx]=D._data(bz,"olddisplay",aO(bz.nodeName))}}else{bB=R(bz,"display");if(!bw[bx]&&bB!=="none"){D._data(bz,"olddisplay",bB)}}}for(bx=0;bx<by;bx++){bz=bA[bx];if(!bz.style){continue}if(!bv||bz.style.display==="none"||bz.style.display===""){bz.style.display=bv?bw[bx]||"":"none"}}return bA}D.fn.extend({css:function(bv,bw){return D.access(this,function(by,bx,bz){return bz!==H?D.style(by,bx,bz):D.css(by,bx)},bv,bw,arguments.length>1)},show:function(){return bc(this,true)},hide:function(){return bc(this)},toggle:function(bx,bw){var bv=typeof bx==="boolean";if(D.isFunction(bx)&&D.isFunction(bw)){return bf.apply(this,arguments)}return this.each(function(){if(bv?bx:aq(this)){D(this).show()}else{D(this).hide()}})}});D.extend({cssHooks:{opacity:{get:function(bx,bw){if(bw){var bv=R(bx,"opacity");return bv===""?"1":bv}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":D.support.cssFloat?"cssFloat":"styleFloat"},style:function(bx,bw,bD,by){if(!bx||bx.nodeType===3||bx.nodeType===8||!bx.style){return}var bB,bC,bE,bz=D.camelCase(bw),bv=bx.style;bw=D.cssProps[bz]||(D.cssProps[bz]=a3(bv,bz));bE=D.cssHooks[bw]||D.cssHooks[bz];if(bD!==H){bC=typeof bD;if(bC==="string"&&(bB=F.exec(bD))){bD=(bB[1]+1)*bB[2]+parseFloat(D.css(bx,bw));bC="number"}if(bD==null||bC==="number"&&isNaN(bD)){return}if(bC==="number"&&!D.cssNumber[bz]){bD+="px"}if(!bE||!("set" in bE)||(bD=bE.set(bx,bD,by))!==H){try{bv[bw]=bD}catch(bA){}}}else{if(bE&&"get" in bE&&(bB=bE.get(bx,false,by))!==H){return bB}return bv[bw]}},css:function(bB,bz,bA,bw){var bC,by,bv,bx=D.camelCase(bz);bz=D.cssProps[bx]||(D.cssProps[bx]=a3(bB.style,bx));bv=D.cssHooks[bz]||D.cssHooks[bx];if(bv&&"get" in bv){bC=bv.get(bB,true,bw)}if(bC===H){bC=R(bB,bz)}if(bC==="normal"&&bz in aM){bC=aM[bz]}if(bA||bw!==H){by=parseFloat(bC);return bA||D.isNumeric(by)?by||0:bC}return bC},swap:function(bz,by,bA){var bx,bw,bv={};for(bw in by){bv[bw]=bz.style[bw];bz.style[bw]=by[bw]}bx=bA.call(bz);for(bw in by){bz.style[bw]=bv[bw]}return bx}});if(be.getComputedStyle){R=function(bC,bw){var bv,bz,by,bB,bA=be.getComputedStyle(bC,null),bx=bC.style;if(bA){bv=bA.getPropertyValue(bw)||bA[bw];if(bv===""&&!D.contains(bC.ownerDocument,bC)){bv=D.style(bC,bw)}if(aW.test(bv)&&aw.test(bw)){bz=bx.width;by=bx.minWidth;bB=bx.maxWidth;bx.minWidth=bx.maxWidth=bx.width=bv;bv=bA.width;bx.width=bz;bx.minWidth=by;bx.maxWidth=bB}}return bv}}else{if(al.documentElement.currentStyle){R=function(bz,bx){var bA,bv,bw=bz.currentStyle&&bz.currentStyle[bx],by=bz.style;if(bw==null&&by&&by[bx]){bw=by[bx]}if(aW.test(bw)&&!x.test(bx)){bA=by.left;bv=bz.runtimeStyle&&bz.runtimeStyle.left;if(bv){bz.runtimeStyle.left=bz.currentStyle.left}by.left=bx==="fontSize"?"1em":bw;bw=by.pixelLeft+"px";by.left=bA;if(bv){bz.runtimeStyle.left=bv}}return bw===""?"auto":bw}}}function aP(bv,bx,by){var bw=j.exec(bx);return bw?Math.max(0,bw[1]-(by||0))+(bw[2]||"px"):bx}function a0(by,bw,bv,bA){var bx=bv===(bA?"border":"content")?4:bw==="width"?1:0,bz=0;for(;bx<4;bx+=2){if(bv==="margin"){bz+=D.css(by,bv+E[bx],true)}if(bA){if(bv==="content"){bz-=parseFloat(R(by,"padding"+E[bx]))||0}if(bv!=="margin"){bz-=parseFloat(R(by,"border"+E[bx]+"Width"))||0}}else{bz+=parseFloat(R(by,"padding"+E[bx]))||0;if(bv!=="padding"){bz+=parseFloat(R(by,"border"+E[bx]+"Width"))||0}}}return bz}function Z(by,bw,bv){var bz=bw==="width"?by.offsetWidth:by.offsetHeight,bx=true,bA=D.support.boxSizing&&D.css(by,"boxSizing")==="border-box";if(bz<=0||bz==null){bz=R(by,bw);if(bz<0||bz==null){bz=by.style[bw]}if(aW.test(bz)){return bz}bx=bA&&(D.support.boxSizingReliable||bz===by.style[bw]);bz=parseFloat(bz)||0}return(bz+a0(by,bw,bv||(bA?"border":"content"),bx))+"px"}function aO(bx){if(K[bx]){return K[bx]}var bv=D("<"+bx+">").appendTo(al.body),bw=bv.css("display");bv.remove();if(bw==="none"||bw===""){bd=al.body.appendChild(bd||D.extend(al.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!m||!bd.createElement){m=(bd.contentWindow||bd.contentDocument).document;m.write("<!doctype html><html><body>");m.close()}bv=m.body.appendChild(m.createElement(bx));bw=R(bv,"display");al.body.removeChild(bd)}K[bx]=bw;return bw}D.each(["height","width"],function(bw,bv){D.cssHooks[bv]={get:function(bz,by,bx){if(by){if(bz.offsetWidth===0&&aj.test(R(bz,"display"))){return D.swap(bz,bb,function(){return Z(bz,bv,bx)})}else{return Z(bz,bv,bx)}}},set:function(by,bz,bx){return aP(by,bz,bx?a0(by,bv,bx,D.support.boxSizing&&D.css(by,"boxSizing")==="border-box"):0)}}});if(!D.support.opacity){D.cssHooks.opacity={get:function(bw,bv){return ak.test((bv&&bw.currentStyle?bw.currentStyle.filter:bw.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":bv?"1":""},set:function(bz,bA){var by=bz.style,bw=bz.currentStyle,bv=D.isNumeric(bA)?"alpha(opacity="+bA*100+")":"",bx=bw&&bw.filter||by.filter||"";by.zoom=1;if(bA>=1&&D.trim(bx.replace(ae,""))===""&&by.removeAttribute){by.removeAttribute("filter");if(bw&&!bw.filter){return}}by.filter=ae.test(bx)?bx.replace(ae,bv):bx+" "+bv}}}D(function(){if(!D.support.reliableMarginRight){D.cssHooks.marginRight={get:function(bw,bv){return D.swap(bw,{display:"inline-block"},function(){if(bv){return R(bw,"marginRight")}})}}}if(!D.support.pixelPosition&&D.fn.position){D.each(["top","left"],function(bv,bw){D.cssHooks[bw]={get:function(bz,by){if(by){var bx=R(bz,bw);return aW.test(bx)?D(bz).position()[bw]+"px":bx}}}})}});if(D.expr&&D.expr.filters){D.expr.filters.hidden=function(bv){return(bv.offsetWidth===0&&bv.offsetHeight===0)||(!D.support.reliableHiddenOffsets&&((bv.style&&bv.style.display)||R(bv,"display"))==="none")};D.expr.filters.visible=function(bv){return !D.expr.filters.hidden(bv)}}D.each({margin:"",padding:"",border:"Width"},function(bv,bw){D.cssHooks[bv+bw]={expand:function(bz){var by,bA=typeof bz==="string"?bz.split(" "):[bz],bx={};for(by=0;by<4;by++){bx[bv+E[by]+bw]=bA[by]||bA[by-2]||bA[0]}return bx}};if(!aw.test(bv)){D.cssHooks[bv+bw].set=aP}});var g=/%20/g,ag=/\[\]$/,bs=/\r?\n/g,aV=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,q=/^(?:select|textarea)/i;D.fn.extend({serialize:function(){return D.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?D.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||q.test(this.nodeName)||aV.test(this.type))}).map(function(bv,bw){var bx=D(this).val();return bx==null?null:D.isArray(bx)?D.map(bx,function(bz,by){return{name:bw.name,value:bz.replace(bs,"\r\n")}}):{name:bw.name,value:bx.replace(bs,"\r\n")}}).get()}});D.param=function(bv,bx){var by,bw=[],bz=function(bA,bB){bB=D.isFunction(bB)?bB():(bB==null?"":bB);bw[bw.length]=encodeURIComponent(bA)+"="+encodeURIComponent(bB)};if(bx===H){bx=D.ajaxSettings&&D.ajaxSettings.traditional}if(D.isArray(bv)||(bv.jqx&&!D.isPlainObject(bv))){D.each(bv,function(){bz(this.name,this.value)})}else{for(by in bv){t(by,bv[by],bx,bz)}}return bw.join("&").replace(g,"+")};function t(bx,bz,bw,by){var bv;if(D.isArray(bz)){D.each(bz,function(bB,bA){if(bw||ag.test(bx)){by(bx,bA)}else{t(bx+"["+(typeof bA==="object"?bB:"")+"]",bA,bw,by)}})}else{if(!bw&&D.type(bz)==="object"){for(bv in bz){t(bx+"["+bv+"]",bz[bv],bw,by)}}else{by(bx,bz)}}}if(D.support.ajax){D.ajaxTransport(function(bv){if(!bv.crossDomain||D.support.cors){var bw;return{send:function(bC,bx){var bA,bz,bB=bv.xhr();if(bv.username){bB.open(bv.type,bv.url,bv.async,bv.username,bv.password)}else{bB.open(bv.type,bv.url,bv.async)}if(bv.xhrFields){for(bz in bv.xhrFields){bB[bz]=bv.xhrFields[bz]}}if(bv.mimeType&&bB.overrideMimeType){bB.overrideMimeType(bv.mimeType)}if(!bv.crossDomain&&!bC["X-Requested-With"]){bC["X-Requested-With"]="XMLHttpRequest"}try{for(bz in bC){bB.setRequestHeader(bz,bC[bz])}}catch(by){}bB.send((bv.hasContent&&bv.data)||null);bw=function(bL,bF){var bG,bE,bD,bJ,bI;try{if(bw&&(bF||bB.readyState===4)){bw=H;if(bA){bB.onreadystatechange=D.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[bA]}}if(bF){if(bB.readyState!==4){bB.abort()}}else{bG=bB.status;bD=bB.getAllResponseHeaders();bJ={};bI=bB.responseXML;if(bI&&bI.documentElement){bJ.xml=bI}try{bJ.text=bB.responseText}catch(bK){}try{bE=bB.statusText}catch(bK){bE=""}if(!bG&&bv.isLocal&&!bv.crossDomain){bG=bJ.text?200:404}else{if(bG===1223){bG=204}}}}}catch(bH){if(!bF){bx(-1,bH)}}if(bJ){bx(bG,bE,bJ,bD)}};if(!bv.async){bw()}else{if(bB.readyState===4){setTimeout(bw,0)}else{bA=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};D(be).unload(xhrOnUnloadAbort)}xhrCallbacks[bA]=bw}bB.onreadystatechange=bw}}},abort:function(){if(bw){bw(0,1)}}}}})}var a7,a2,at=/^(?:toggle|show|hide)$/,aN=new RegExp("^(?:([-+])=|)("+aF+")([a-z%]*)$","i"),a8=/queueHooks$/,l=[bn],I={"*":[function(bv,bC){var by,bD,bE=this.createTween(bv,bC),bz=aN.exec(bC),bA=bE.cur(),bw=+bA||0,bx=1,bB=20;if(bz){by=+bz[2];bD=bz[3]||(D.cssNumber[bv]?"":"px");if(bD!=="px"&&bw){bw=D.css(bE.elem,bv,true)||by||1;do{bx=bx||".5";bw=bw/bx;D.style(bE.elem,bv,bw+bD)}while(bx!==(bx=bE.cur()/bA)&&bx!==1&&--bB)}bE.unit=bD;bE.start=bw;bE.end=bz[1]?bw+(bz[1]+1)*by:by}return bE}]};function bm(){setTimeout(function(){a7=H},0);return(a7=D.now())}function aa(bw,bv){D.each(bv,function(bB,bz){var bA=(I[bB]||[]).concat(I["*"]),bx=0,by=bA.length;for(;bx<by;bx++){if(bA[bx].call(bw,bB,bz)){return}}})}function bk(bx,bB,bE){var bF,bA=0,bv=0,bw=l.length,bD=D.Deferred().always(function(){delete bz.elem}),bz=function(){var bL=a7||bm(),bI=Math.max(0,by.startTime+by.duration-bL),bG=bI/by.duration||0,bK=1-bG,bH=0,bJ=by.tweens.length;for(;bH<bJ;bH++){by.tweens[bH].run(bK)}bD.notifyWith(bx,[by,bK,bI]);if(bK<1&&bJ){return bI}else{bD.resolveWith(bx,[by]);return false}},by=bD.promise({elem:bx,props:D.extend({},bB),opts:D.extend(true,{specialEasing:{}},bE),originalProperties:bB,originalOptions:bE,startTime:a7||bm(),duration:bE.duration,tweens:[],createTween:function(bJ,bG,bI){var bH=D.Tween(bx,by.opts,bJ,bG,by.opts.specialEasing[bJ]||by.opts.easing);by.tweens.push(bH);return bH},stop:function(bH){var bG=0,bI=bH?by.tweens.length:0;for(;bG<bI;bG++){by.tweens[bG].run(1)}if(bH){bD.resolveWith(bx,[by,bH])}else{bD.rejectWith(bx,[by,bH])}return this}}),bC=by.props;aX(bC,by.opts.specialEasing);for(;bA<bw;bA++){bF=l[bA].call(by,bx,bC,by.opts);if(bF){return bF}}aa(by,bC);if(D.isFunction(by.opts.start)){by.opts.start.call(bx,by)}D.fx.timer(D.extend(bz,{anim:by,queue:by.opts.queue,elem:bx}));return by.progress(by.opts.progress).done(by.opts.done,by.opts.complete).fail(by.opts.fail).always(by.opts.always)}function aX(by,bA){var bx,bw,bB,bz,bv;for(bx in by){bw=D.camelCase(bx);bB=bA[bw];bz=by[bx];if(D.isArray(bz)){bB=bz[1];bz=by[bx]=bz[0]}if(bx!==bw){by[bw]=bz;delete by[bx]}bv=D.cssHooks[bw];if(bv&&"expand" in bv){bz=bv.expand(bz);delete by[bw];for(bx in bz){if(!(bx in by)){by[bx]=bz[bx];bA[bx]=bB}}}else{bA[bw]=bB}}}D.Animation=D.extend(bk,{tweener:function(bw,bz){if(D.isFunction(bw)){bz=bw;bw=["*"]}else{bw=bw.split(" ")}var by,bv=0,bx=bw.length;for(;bv<bx;bv++){by=bw[bv];I[by]=I[by]||[];I[by].unshift(bz)}},prefilter:function(bw,bv){if(bv){l.unshift(bw)}else{l.push(bw)}}});function bn(bz,bF,bv){var bE,bx,bH,by,bL,bB,bK,bJ,bI,bA=this,bw=bz.style,bG={},bD=[],bC=bz.nodeType&&aq(bz);if(!bv.queue){bJ=D._queueHooks(bz,"fx");if(bJ.unqueued==null){bJ.unqueued=0;bI=bJ.empty.fire;bJ.empty.fire=function(){if(!bJ.unqueued){bI()}}}bJ.unqueued++;bA.always(function(){bA.always(function(){bJ.unqueued--;if(!D.queue(bz,"fx").length){bJ.empty.fire()}})})}if(bz.nodeType===1&&("height" in bF||"width" in bF)){bv.overflow=[bw.overflow,bw.overflowX,bw.overflowY];if(D.css(bz,"display")==="inline"&&D.css(bz,"float")==="none"){if(!D.support.inlineBlockNeedsLayout||aO(bz.nodeName)==="inline"){bw.display="inline-block"}else{bw.zoom=1}}}if(bv.overflow){bw.overflow="hidden";if(!D.support.shrinkWrapBlocks){bA.done(function(){bw.overflow=bv.overflow[0];bw.overflowX=bv.overflow[1];bw.overflowY=bv.overflow[2]})}}for(bE in bF){bH=bF[bE];if(at.exec(bH)){delete bF[bE];bB=bB||bH==="toggle";if(bH===(bC?"hide":"show")){continue}bD.push(bE)}}by=bD.length;if(by){bL=D._data(bz,"fxshow")||D._data(bz,"fxshow",{});if("hidden" in bL){bC=bL.hidden}if(bB){bL.hidden=!bC}if(bC){D(bz).show()}else{bA.done(function(){D(bz).hide()})}bA.done(function(){var bM;D.removeData(bz,"fxshow",true);for(bM in bG){D.style(bz,bM,bG[bM])}});for(bE=0;bE<by;bE++){bx=bD[bE];bK=bA.createTween(bx,bC?bL[bx]:0);bG[bx]=bL[bx]||D.style(bz,bx);if(!(bx in bL)){bL[bx]=bK.start;if(bC){bK.end=bK.start;bK.start=bx==="width"||bx==="height"?1:0}}}}}function v(bx,bw,bz,bv,by){return new v.prototype.init(bx,bw,bz,bv,by)}D.Tween=v;v.prototype={constructor:v,init:function(by,bw,bA,bv,bz,bx){this.elem=by;this.prop=bA;this.easing=bz||"swing";this.options=bw;this.start=this.now=this.cur();this.end=bv;this.unit=bx||(D.cssNumber[bA]?"":"px")},cur:function(){var bv=v.propHooks[this.prop];return bv&&bv.get?bv.get(this):v.propHooks._default.get(this)},run:function(bx){var bw,bv=v.propHooks[this.prop];if(this.options.duration){this.pos=bw=D.easing[this.easing](bx,this.options.duration*bx,0,1,this.options.duration)}else{this.pos=bw=bx}this.now=(this.end-this.start)*bw+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(bv&&bv.set){bv.set(this)}else{v.propHooks._default.set(this)}return this}};v.prototype.init.prototype=v.prototype;v.propHooks={_default:{get:function(bw){var bv;if(bw.elem[bw.prop]!=null&&(!bw.elem.style||bw.elem.style[bw.prop]==null)){return bw.elem[bw.prop]}bv=D.css(bw.elem,bw.prop,false,"");return !bv||bv==="auto"?0:bv},set:function(bv){if(D.fx.step[bv.prop]){D.fx.step[bv.prop](bv)}else{if(bv.elem.style&&(bv.elem.style[D.cssProps[bv.prop]]!=null||D.cssHooks[bv.prop])){D.style(bv.elem,bv.prop,bv.now+bv.unit)}else{bv.elem[bv.prop]=bv.now}}}}};v.propHooks.scrollTop=v.propHooks.scrollLeft={set:function(bv){if(bv.elem.nodeType&&bv.elem.parentNode){bv.elem[bv.prop]=bv.now}}};D.each(["toggle","show","hide"],function(bw,bv){var bx=D.fn[bv];D.fn[bv]=function(by,bA,bz){return by==null||typeof by==="boolean"||(!bw&&D.isFunction(by)&&D.isFunction(bA))?bx.apply(this,arguments):this.animate(aZ(bv,true),by,bA,bz)}});D.fn.extend({fadeTo:function(bv,by,bx,bw){return this.filter(aq).css("opacity",0).show().end().animate({opacity:by},bv,bx,bw)},animate:function(bB,by,bA,bz){var bx=D.isEmptyObject(bB),bv=D.speed(by,bA,bz),bw=function(){var bC=bk(this,D.extend({},bB),bv);if(bx){bC.stop(true)}};return bx||bv.queue===false?this.each(bw):this.queue(bv.queue,bw)},stop:function(bx,bw,bv){var by=function(bz){var bA=bz.stop;delete bz.stop;bA(bv)};if(typeof bx!=="string"){bv=bw;bw=bx;bx=H}if(bw&&bx!==false){this.queue(bx||"fx",[])}return this.each(function(){var bC=true,bz=bx!=null&&bx+"queueHooks",bB=D.timers,bA=D._data(this);if(bz){if(bA[bz]&&bA[bz].stop){by(bA[bz])}}else{for(bz in bA){if(bA[bz]&&bA[bz].stop&&a8.test(bz)){by(bA[bz])}}}for(bz=bB.length;bz--;){if(bB[bz].elem===this&&(bx==null||bB[bz].queue===bx)){bB[bz].anim.stop(bv);bC=false;bB.splice(bz,1)}}if(bC||!bv){D.dequeue(this,bx)}})}});function aZ(bx,bz){var by,bv={height:bx},bw=0;bz=bz?1:0;for(;bw<4;bw+=2-bz){by=E[bw];bv["margin"+by]=bv["padding"+by]=bx}if(bz){bv.opacity=bv.width=bx}return bv}D.each({slideDown:aZ("show"),slideUp:aZ("hide"),slideToggle:aZ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(bv,bw){D.fn[bv]=function(bx,bz,by){return this.animate(bw,bx,bz,by)}});D.speed=function(bx,by,bw){var bv=bx&&typeof bx==="object"?D.extend({},bx):{complete:bw||!bw&&by||D.isFunction(bx)&&bx,duration:bx,easing:bw&&by||by&&!D.isFunction(by)&&by};bv.duration=D.fx.off?0:typeof bv.duration==="number"?bv.duration:bv.duration in D.fx.speeds?D.fx.speeds[bv.duration]:D.fx.speeds._default;if(bv.queue==null||bv.queue===true){bv.queue="fx"}bv.old=bv.complete;bv.complete=function(){if(D.isFunction(bv.old)){bv.old.call(this)}if(bv.queue){D.dequeue(this,bv.queue)}};return bv};D.easing={linear:function(bv){return bv},swing:function(bv){return 0.5-Math.cos(bv*Math.PI)/2}};D.timers=[];D.fx=v.prototype.init;D.fx.tick=function(){var bx,bw=D.timers,bv=0;a7=D.now();for(;bv<bw.length;bv++){bx=bw[bv];if(!bx()&&bw[bv]===bx){bw.splice(bv--,1)}}if(!bw.length){D.fx.stop()}a7=H};D.fx.timer=function(bv){if(bv()&&D.timers.push(bv)&&!a2){a2=setInterval(D.fx.tick,D.fx.interval)}};D.fx.interval=13;D.fx.stop=function(){clearInterval(a2);a2=null};D.fx.speeds={slow:600,fast:200,_default:400};D.fx.step={};if(D.expr&&D.expr.filters){D.expr.filters.animated=function(bv){return D.grep(D.timers,function(bw){return bv===bw.elem}).length}}var W=/^(?:body|html)$/i;D.fn.offset=function(bF){if(arguments.length){return bF===H?this:this.each(function(bG){D.offset.setOffset(this,bF,bG)})}var bw,bB,bC,bz,bD,bv,by,bA={top:0,left:0},bx=this[0],bE=bx&&bx.ownerDocument;if(!bE){return}if((bB=bE.body)===bx){return D.offset.bodyOffset(bx)}bw=bE.documentElement;if(!D.contains(bw,bx)){return bA}if(typeof bx.getBoundingClientRect!=="undefined"){bA=bx.getBoundingClientRect()}bC=aD(bE);bz=bw.clientTop||bB.clientTop||0;bD=bw.clientLeft||bB.clientLeft||0;bv=bC.pageYOffset||bw.scrollTop;by=bC.pageXOffset||bw.scrollLeft;return{top:bA.top+bv-bz,left:bA.left+by-bD}};D.offset={bodyOffset:function(bv){var bx=bv.offsetTop,bw=bv.offsetLeft;if(D.support.doesNotIncludeMarginInBodyOffset){bx+=parseFloat(D.css(bv,"marginTop"))||0;bw+=parseFloat(D.css(bv,"marginLeft"))||0}return{top:bx,left:bw}},setOffset:function(by,bH,bB){var bC=D.css(by,"position");if(bC==="static"){by.style.position="relative"}var bA=D(by),bw=bA.offset(),bv=D.css(by,"top"),bF=D.css(by,"left"),bG=(bC==="absolute"||bC==="fixed")&&D.inArray("auto",[bv,bF])>-1,bE={},bD={},bx,bz;if(bG){bD=bA.position();bx=bD.top;bz=bD.left}else{bx=parseFloat(bv)||0;bz=parseFloat(bF)||0}if(D.isFunction(bH)){bH=bH.call(by,bB,bw)}if(bH.top!=null){bE.top=(bH.top-bw.top)+bx}if(bH.left!=null){bE.left=(bH.left-bw.left)+bz}if("using" in bH){bH.using.call(by,bE)}else{bA.css(bE)}}};D.fn.extend({isRendered:function(){var bw=this;var bv=this[0];if(bv.parentNode==null||(bv.offsetWidth===0||bv.offsetHeight===0)){return false}return true},getSizeFromStyle:function(){var bz=this;var by=null;var bv=null;var bx=this[0];var bw;if(bx.style.width){by=bx.style.width}if(bx.style.height){bv=bx.style.height}if(be.getComputedStyle){bw=getComputedStyle(bx,null)}else{bw=bx.currentStyle}if(bw){if(bw.width){by=bw.width}if(bw.height){bv=bw.height}}if(by==="0px"){by=0}if(bv==="0px"){bv=0}if(by===null){by=0}if(bv===null){bv=0}return{width:by,height:bv}},initAnimate:function(){},sizeStyleChanged:function(by){var bx=this;var bz;var bv=function(bA){var bB=bz;if(bA&&bA[0]&&bA[0].attributeName==="style"&&bA[0].type==="attributes"){if(bB.element.offsetWidth!==bB.offsetWidth||bB.element.offsetHeight!==bB.offsetHeight){bB.offsetWidth=bB.element.offsetWidth;bB.offsetHeight=bB.element.offsetHeight;if(bx.isRendered()){bB.callback()}}}};bz={element:bx[0],offsetWidth:bx[0].offsetWidth,offsetHeight:bx[0].offsetHeight,callback:by};try{if(!bx.elementStyleObserver){bx.elementStyleObserver=new MutationObserver(bv);bx.elementStyleObserver.observe(bx[0],{attributes:true,childList:false,characterData:false})}}catch(bw){}},position:function(){if(!this[0]){return}var bx=this[0],bw=this.offsetParent(),by=this.offset(),bv=W.test(bw[0].nodeName)?{top:0,left:0}:bw.offset();by.top-=parseFloat(D.css(bx,"marginTop"))||0;by.left-=parseFloat(D.css(bx,"marginLeft"))||0;bv.top+=parseFloat(D.css(bw[0],"borderTopWidth"))||0;bv.left+=parseFloat(D.css(bw[0],"borderLeftWidth"))||0;return{top:by.top-bv.top,left:by.left-bv.left}},offsetParent:function(){return this.map(function(){var bv=this.offsetParent||al.body;while(bv&&(!W.test(bv.nodeName)&&D.css(bv,"position")==="static")){bv=bv.offsetParent}return bv||al.body})}});D.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(bx,bw){var bv=/Y/.test(bw);D.fn[bx]=function(by){return D.access(this,function(bz,bC,bB){var bA=aD(bz);if(bB===H){return bA?(bw in bA)?bA[bw]:bA.document.documentElement[bC]:bz[bC]}if(bA){bA.scrollTo(!bv?bB:D(bA).scrollLeft(),bv?bB:D(bA).scrollTop())}else{bz[bC]=bB}},bx,by,arguments.length,null)}});function aD(bv){return D.isWindow(bv)?bv:bv.nodeType===9?bv.defaultView||bv.parentWindow:false}D.each({Height:"height",Width:"width"},function(bv,bw){D.each({padding:"inner"+bv,content:bw,"":"outer"+bv},function(bx,by){D.fn[by]=function(bC,bB){var bA=arguments.length&&(bx||typeof bC!=="boolean"),bz=bx||(bC===true||bB===true?"margin":"border");return D.access(this,function(bE,bD,bF){var bG;if(D.isWindow(bE)){return bE.document.documentElement["client"+bv]}if(bE.nodeType===9){bG=bE.documentElement;return Math.max(bE.body["scroll"+bv],bG["scroll"+bv],bE.body["offset"+bv],bG["offset"+bv],bG["client"+bv])}return bF===H?D.css(bE,bD,bF,bz):D.style(bE,bD,bF,bz)},bw,bA?bC:H,bA,null)}})});be.JQXLite=be.jqxHelper=D;if("function"==="function"&&__webpack_require__(425)&&__webpack_require__(425).JQXLite){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return D}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}})(window)}(function(a){if(a.jQuery){a.minQuery=a.JQXLite=a.jQuery;return}if(!a.$){a.$=a.minQuery=a.JQXLite}else{a.minQuery=a.JQXLite=a.$}})(window);JQXLite.generateID=function(){var a=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};var b="";do{b="jqx"+a()+a()+a()}while($("#"+b).length>0);return b};var jqxBaseFramework=window.jqxBaseFramework=window.minQuery||window.jQuery;(function(a){a.jqx=a.jqx||{};window.jqx=a.jqx;jqwidgets={createInstance:function(b,d,f){if(d=="jqxDataAdapter"){var e=f[0];var c=f[1]||{};return new a.jqx.dataAdapter(e,c)}a(b)[d](f||{});return a(b)[d]("getInstance")}};a.jqx.define=function(b,c,d){b[c]=function(){if(this.baseType){this.base=new b[this.baseType]();this.base.defineInstance()}this.defineInstance();this.metaInfo()};b[c].prototype.defineInstance=function(){};b[c].prototype.metaInfo=function(){};b[c].prototype.base=null;b[c].prototype.baseType=undefined;if(d&&b[d]){b[c].prototype.baseType=d}};a.jqx.invoke=function(e,d){if(d.length==0){return}var f=typeof(d)==Array||d.length>0?d[0]:d;var c=typeof(d)==Array||d.length>1?Array.prototype.slice.call(d,1):a({}).toArray();while(e[f]==undefined&&e.base!=null){if(e[f]!=undefined&&a.isFunction(e[f])){return e[f].apply(e,c)}if(typeof f=="string"){var b=f.toLowerCase();if(e[b]!=undefined&&a.isFunction(e[b])){return e[b].apply(e,c)}}e=e.base}if(e[f]!=undefined&&a.isFunction(e[f])){return e[f].apply(e,c)}if(typeof f=="string"){var b=f.toLowerCase();if(e[b]!=undefined&&a.isFunction(e[b])){return e[b].apply(e,c)}}return};a.jqx.getByPriority=function(b){var d=undefined;for(var c=0;c<b.length&&d==undefined;c++){if(d==undefined&&b[c]!=undefined){d=b[c]}}return d};a.jqx.hasProperty=function(c,b){if(typeof(b)=="object"){for(var e in b){var d=c;while(d){if(d.hasOwnProperty(e)){return true}if(d.hasOwnProperty(e.toLowerCase())){return true}d=d.base}return false}}else{while(c){if(c.hasOwnProperty(b)){return true}if(c.hasOwnProperty(b.toLowerCase())){return true}c=c.base}}return false};a.jqx.hasFunction=function(e,d){if(d.length==0){return false}if(e==undefined){return false}var f=typeof(d)==Array||d.length>0?d[0]:d;var c=typeof(d)==Array||d.length>1?Array.prototype.slice.call(d,1):{};while(e[f]==undefined&&e.base!=null){if(e[f]&&a.isFunction(e[f])){return true}if(typeof f=="string"){var b=f.toLowerCase();if(e[b]&&a.isFunction(e[b])){return true}}e=e.base}if(e[f]&&a.isFunction(e[f])){return true}if(typeof f=="string"){var b=f.toLowerCase();if(e[b]&&a.isFunction(e[b])){return true}}return false};a.jqx.isPropertySetter=function(c,b){if(b.length==1&&typeof(b[0])=="object"){return true}if(b.length==2&&typeof(b[0])=="string"&&!a.jqx.hasFunction(c,b)){return true}return false};a.jqx.validatePropertySetter=function(f,d,b){if(!a.jqx.propertySetterValidation){return true}if(d.length==1&&typeof(d[0])=="object"){for(var e in d[0]){var g=f;while(!g.hasOwnProperty(e)&&g.base){g=g.base}if(!g||!g.hasOwnProperty(e)){if(!b){var c=g.hasOwnProperty(e.toString().toLowerCase());if(!c){throw"Invalid property: "+e}else{return true}}return false}}return true}if(d.length!=2){if(!b){throw"Invalid property: "+d.length>=0?d[0]:""}return false}while(!f.hasOwnProperty(d[0])&&f.base){f=f.base}if(!f||!f.hasOwnProperty(d[0])){if(!b){throw"Invalid property: "+d[0]}return false}return true};if(!Object.keys){Object.keys=(function(){var d=Object.prototype.hasOwnProperty,e=!({toString:null}).propertyIsEnumerable("toString"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],b=c.length;return function(h){if(typeof h!=="object"&&(typeof h!=="function"||h===null)){throw new TypeError("Object.keys called on non-object")}var f=[],j,g;for(j in h){if(d.call(h,j)){f.push(j)}}if(e){for(g=0;g<b;g++){if(d.call(h,c[g])){f.push(c[g])}}}return f}}())}a.jqx.set=function(e,h){var c=0;if(h.length==1&&typeof(h[0])=="object"){if(e.isInitialized&&Object.keys&&Object.keys(h[0]).length>1){var f=!e.base?e.element:e.base.element;var b=a.data(f,e.widgetName).initArgs;if(b&&JSON&&JSON.stringify&&h[0]&&b[0]){try{if(JSON.stringify(h[0])==JSON.stringify(b[0])){var g=true;a.each(h[0],function(l,m){if(e[l]!=m){g=false;return false}});if(g){return}}}catch(d){}}e.batchUpdate=h[0];var j={};var k={};a.each(h[0],function(l,m){var n=e;while(!n.hasOwnProperty(l)&&n.base!=null){n=n.base}if(n.hasOwnProperty(l)){if(e[l]!=m){j[l]=e[l];k[l]=m;c++}}else{if(n.hasOwnProperty(l.toLowerCase())){if(e[l.toLowerCase()]!=m){j[l.toLowerCase()]=e[l.toLowerCase()];k[l.toLowerCase()]=m;c++}}}});if(c<2){e.batchUpdate=null}}a.each(h[0],function(l,m){var n=e;while(!n.hasOwnProperty(l)&&n.base!=null){n=n.base}if(n.hasOwnProperty(l)){a.jqx.setvalueraiseevent(n,l,m)}else{if(n.hasOwnProperty(l.toLowerCase())){a.jqx.setvalueraiseevent(n,l.toLowerCase(),m)}else{if(a.jqx.propertySetterValidation){throw"jqxCore: invalid property '"+l+"'"}}}});if(e.batchUpdate!=null){e.batchUpdate=null;if(e.propertiesChangedHandler&&c>1){e.propertiesChangedHandler(e,j,k)}}}else{if(h.length==2){while(!e.hasOwnProperty(h[0])&&e.base){e=e.base}if(e.hasOwnProperty(h[0])){a.jqx.setvalueraiseevent(e,h[0],h[1])}else{if(e.hasOwnProperty(h[0].toLowerCase())){a.jqx.setvalueraiseevent(e,h[0].toLowerCase(),h[1])}else{if(a.jqx.propertySetterValidation){throw"jqxCore: invalid property '"+h[0]+"'"}}}}}};a.jqx.setvalueraiseevent=function(c,d,e){var b=c[d];c[d]=e;if(!c.isInitialized){return}if(c.propertyChangedHandler!=undefined){c.propertyChangedHandler(c,d,b,e)}if(c.propertyChangeMap!=undefined&&c.propertyChangeMap[d]!=undefined){c.propertyChangeMap[d](c,d,b,e)}};a.jqx.get=function(e,d){if(d==undefined||d==null){return undefined}if(e.propertyMap){var c=e.propertyMap(d);if(c!=null){return c}}if(e.hasOwnProperty(d)){return e[d]}if(e.hasOwnProperty(d.toLowerCase())){return e[d.toLowerCase()]}var b=undefined;if(typeof(d)==Array){if(d.length!=1){return undefined}b=d[0]}else{if(typeof(d)=="string"){b=d}}while(!e.hasOwnProperty(b)&&e.base){e=e.base}if(e){return e[b]}return undefined};a.jqx.serialize=function(e){var b="";if(a.isArray(e)){b="[";for(var d=0;d<e.length;d++){if(d>0){b+=", "}b+=a.jqx.serialize(e[d])}b+="]"}else{if(typeof(e)=="object"){b="{";var c=0;for(var d in e){if(c++>0){b+=", "}b+=d+": "+a.jqx.serialize(e[d])}b+="}"}else{b=e.toString()}}return b};a.jqx.propertySetterValidation=true;a.jqx.jqxWidgetProxy=function(g,c,b){var d=a(c);var f=a.data(c,g);if(f==undefined){return undefined}var e=f.instance;if(a.jqx.hasFunction(e,b)){return a.jqx.invoke(e,b)}if(a.jqx.isPropertySetter(e,b)){if(a.jqx.validatePropertySetter(e,b)){a.jqx.set(e,b);return undefined}}else{if(typeof(b)=="object"&&b.length==0){return}else{if(typeof(b)=="object"&&b.length==1&&a.jqx.hasProperty(e,b[0])){return a.jqx.get(e,b[0])}else{if(typeof(b)=="string"&&a.jqx.hasProperty(e,b[0])){return a.jqx.get(e,b)}}}}throw"jqxCore: Invalid parameter '"+a.jqx.serialize(b)+"' does not exist."};a.jqx.applyWidget=function(c,d,k,l){var g=false;try{g=window.MSApp!=undefined}catch(f){}var m=a(c);if(!l){l=new a.jqx["_"+d]()}else{l.host=m;l.element=c}if(c.id==""){c.id=a.jqx.utilities.createId()}var j={host:m,element:c,instance:l,initArgs:k};l.widgetName=d;a.data(c,d,j);a.data(c,"jqxWidget",j.instance);var h=new Array();var l=j.instance;while(l){l.isInitialized=false;h.push(l);l=l.base}h.reverse();h[0].theme=a.jqx.theme||"";a.jqx.jqxWidgetProxy(d,c,k);for(var b in h){l=h[b];if(b==0){l.host=m;l.element=c;l.WinJS=g}if(l!=undefined){if(l.definedInstance){l.definedInstance()}if(l.createInstance!=null){if(g){MSApp.execUnsafeLocalFunction(function(){l.createInstance(k)})}else{l.createInstance(k)}}}}for(var b in h){if(h[b]!=undefined){h[b].isInitialized=true}}if(g){MSApp.execUnsafeLocalFunction(function(){j.instance.refresh(true)})}else{j.instance.refresh(true)}};a.jqx.jqxWidget=function(b,c,f){var j=false;try{jqxArgs=Array.prototype.slice.call(f,0)}catch(h){jqxArgs=""}try{j=window.MSApp!=undefined}catch(h){}var g=b;var l="";if(c){l="_"+c}a.jqx.define(a.jqx,"_"+g,l);var k=new Array();if(!window[g]){var d=function(m){if(m==null){return""}var e=a.type(m);switch(e){case"string":case"number":case"date":case"boolean":case"bool":if(m===null){return""}return m.toString()}var n="";a.each(m,function(p,q){var s=q;if(p>0){n+=", "}n+="[";var o=0;if(a.type(s)=="object"){for(var r in s){if(o>0){n+=", "}n+="{"+r+":"+s[r]+"}";o++}}else{if(o>0){n+=", "}n+="{"+p+":"+s+"}";o++}n+="]"});return n};jqwidgets[g]=window[g]=function(e,r){var m=[];if(!r){r={}}m.push(r);var n=e;if(a.type(n)==="object"&&e[0]){n=e[0].id;if(n===""){n=e[0].id=a.jqx.utilities.createId()}}else{if(a.type(e)==="object"&&e&&e.nodeName){n=e.id;if(n===""){n=e.id=a.jqx.utilities.createId()}}}if(window.jqxWidgets&&window.jqxWidgets[n]){if(r){a.each(window.jqxWidgets[n],function(s){var t=a(this.element).data();if(t&&t.jqxWidget){a(this.element)[g](r)}})}if(window.jqxWidgets[n].length==1){var p=a(window.jqxWidgets[n][0].widgetInstance.element).data();if(p&&p.jqxWidget){return window.jqxWidgets[n][0]}}var p=a(window.jqxWidgets[n][0].widgetInstance.element).data();if(p&&p.jqxWidget){return window.jqxWidgets[n]}}var o=a(e);if(o.length===0){o=a("<div></div>");if(g==="jqxInput"||g==="jqxPasswordInput"||g==="jqxMaskedInput"){o=a("<input/>")}if(g==="jqxTextArea"){o=a("<textarea></textarea>")}if(g==="jqxButton"||g==="jqxRepeatButton"||g==="jqxToggleButton"){o=a("<button/>")}if(g==="jqxSplitter"){o=a("<div><div>Panel 1</div><div>Panel 2</div></div>")}if(g==="jqxTabs"){o=a("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div>Content 1</div><div>Content 2</div></div>")}if(g==="jqxRibbon"){o=a("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div><div>Content 1</div><div>Content 2</div></div></div>")}if(g==="jqxDocking"){o=a("<div><div><div><div>Title 1</div><div>Content 1</div></div></div></div>")}if(g==="jqxWindow"){o=a("<div><div>Title 1</div><div>Content 1</div></div>")}}var q=[];a.each(o,function(v){var x=o[v];a.jqx.applyWidget(x,g,m,undefined);if(!k[g]){var t=a.data(x,"jqxWidget");var w=a.jqx["_"+g].prototype.defineInstance();var u={};if(a.jqx["_"+g].prototype.metaInfo){u=a.jqx["_"+g].prototype.metaInfo()}if(g=="jqxDockingLayout"){w=a.extend(w,a.jqx._jqxLayout.prototype.defineInstance())}if(g=="jqxToggleButton"||g=="jqxRepeatButton"){w=a.extend(w,a.jqx._jqxButton.prototype.defineInstance())}if(g=="jqxTreeGrid"){w=a.extend(w,a.jqx._jqxDataTable.prototype.defineInstance())}var s=function(z){var y=a.data(z,"jqxWidget");this.widgetInstance=y;var A=a.extend(this,y);A.on=A.addEventListener=function(C,D){A.addHandler(!A.base?A.host:A.base.host,C,D)};A.off=A.removeEventListener=function(C){A.removeHandler(!A.base?A.host:A.base.host,C)};for(var B in y){if(a.type(y[B])=="function"){A[B]=a.proxy(y[B],y)}}return A};k[g]=s;a.each(w,function(z,y){Object.defineProperty(s.prototype,z,{get:function(){if(this.widgetInstance){return this.widgetInstance[z]}return y},set:function(G){if(this.widgetInstance&&(this.widgetInstance[z]!=G||z==="width"||z==="height")){var E=this.widgetInstance[z];var D=G;var C=a.type(E);var A=a.type(D);var F=false;if(C!=A||z==="source"||z==="width"||z==="height"){F=true}if(F||(d(E)!=d(D))){var B={};B[z]=G;if(this.widgetInstance.host){this.widgetInstance.host[g](B)}else{this.widgetInstance.base.host[g](B)}this.widgetInstance[z]=G;if(this.widgetInstance.propertyUpdated){this.widgetInstance.propertyUpdated(z,E,G)}}}}})})}var t=new k[g](x);q.push(t);if(!window.jqxWidgets){window.jqxWidgets=new Array()}if(!window.jqxWidgets[n]){window.jqxWidgets[n]=new Array()}window.jqxWidgets[n].push(t)});if(q.length===1){return q[0]}return q}}a.fn[g]=function(){var e=Array.prototype.slice.call(arguments,0);if(e.length==0||(e.length==1&&typeof(e[0])=="object")){if(this.length==0){if(this.selector){throw new Error("Invalid Selector - "+this.selector+"! Please, check whether the used ID or CSS Class name is correct.")}else{throw new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.")}}return this.each(function(){var p=a(this);var o=this;var q=a.data(o,g);if(q==null){a.jqx.applyWidget(o,g,e,undefined)}else{a.jqx.jqxWidgetProxy(g,this,e)}})}else{if(this.length==0){if(this.selector){throw new Error("Invalid Selector - "+this.selector+"! Please, check whether the used ID or CSS Class name is correct.")}else{throw new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.")}}var n=null;var m=0;this.each(function(){var o=a.jqx.jqxWidgetProxy(g,this,e);if(m==0){n=o;m++}else{if(m==1){var p=[];p.push(n);n=p}n.push(o)}})}return n};try{a.extend(a.jqx["_"+g].prototype,Array.prototype.slice.call(f,0)[0])}catch(h){}a.extend(a.jqx["_"+g].prototype,{toThemeProperty:function(e,m){return a.jqx.toThemeProperty(this,e,m)}});a.jqx["_"+g].prototype.refresh=function(){if(this.base){this.base.refresh(true)}};a.jqx["_"+g].prototype.createInstance=function(){};a.jqx["_"+g].prototype.addEventHandler=function(m,e){this.host.on(m,e)};a.jqx["_"+g].prototype.removeEventHandler=function(m,e){this.host.off(m)};a.jqx["_"+g].prototype.applyTo=function(n,m){if(!(m instanceof Array)){var e=[];e.push(m);m=e}a.jqx.applyWidget(n,g,m,this)};a.jqx["_"+g].prototype.getInstance=function(){return this};a.jqx["_"+g].prototype.propertyChangeMap={};a.jqx["_"+g].prototype.addHandler=function(o,e,m,n){a.jqx.addHandler(a(o),e,m,n)};a.jqx["_"+g].prototype.removeHandler=function(n,e,m){a.jqx.removeHandler(a(n),e,m)};a.jqx["_"+g].prototype.setOptions=function(){if(!this.host||!this.host.length||this.host.length!=1){return}return a.jqx.jqxWidgetProxy(g,this.host[0],arguments)}};a.jqx.toThemeProperty=function(c,d,h){if(c.theme==""){return d}var g=d.split(" ");var b="";for(var f=0;f<g.length;f++){if(f>0){b+=" "}var e=g[f];if(h!=null&&h){b+=e+"-"+c.theme}else{b+=e+" "+e+"-"+c.theme}}return b};a.jqx.addHandler=function(g,h,e,f){var c=h.split(" ");for(var b=0;b<c.length;b++){var d=c[b];if(window.addEventListener){switch(d){case"mousewheel":if(a.jqx.browser.mozilla){g[0].addEventListener("DOMMouseScroll",e,false)}else{g[0].addEventListener("mousewheel",e,false)}continue;case"mousemove":if(!f){g[0].addEventListener("mousemove",e,false);continue}break}}if(f==undefined||f==null){if(g.on){g.on(d,e)}else{g.bind(d,e)}}else{if(g.on){g.on(d,f,e)}else{g.bind(d,f,e)}}}};a.jqx.removeHandler=function(f,g,e){if(!g){if(f.off){f.off()}else{f.unbind()}return}var c=g.split(" ");for(var b=0;b<c.length;b++){var d=c[b];if(window.removeEventListener){switch(d){case"mousewheel":if(a.jqx.browser.mozilla){f[0].removeEventListener("DOMMouseScroll",e,false)}else{f[0].removeEventListener("mousewheel",e,false)}continue;case"mousemove":if(e){f[0].removeEventListener("mousemove",e,false);continue}break}}if(d==undefined){if(f.off){f.off()}else{f.unbind()}continue}if(e==undefined){if(f.off){f.off(d)}else{f.unbind(d)}}else{if(f.off){f.off(d,e)}else{f.unbind(d,e)}}}};a.jqx.theme=a.jqx.theme||"";a.jqx.scrollAnimation=a.jqx.scrollAnimation||false;a.jqx.resizeDelay=a.jqx.resizeDelay||10;a.jqx.ready=function(){a(window).trigger("jqxReady")};a.jqx.init=function(){a.each(arguments[0],function(b,c){if(b=="theme"){a.jqx.theme=c}if(b=="scrollBarSize"){a.jqx.utilities.scrollBarSize=c}if(b=="touchScrollBarSize"){a.jqx.utilities.touchScrollBarSize=c}if(b=="scrollBarButtonsVisibility"){a.jqx.utilities.scrollBarButtonsVisibility=c}})};a.jqx.utilities=a.jqx.utilities||{};a.extend(a.jqx.utilities,{scrollBarSize:13,touchScrollBarSize:8,scrollBarButtonsVisibility:"visible",createId:function(){var b=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return"jqxWidget"+b()+b()+b()},setTheme:function(f,g,e){if(typeof e==="undefined"){return}if(!e[0].className.split){return}var h=e[0].className.split(" "),b=[],j=[],d=e.children();for(var c=0;c<h.length;c+=1){if(h[c].indexOf(f)>=0){if(f.length>0){b.push(h[c]);j.push(h[c].replace(f,g))}else{j.push(h[c].replace("-"+g,"")+"-"+g)}}}this._removeOldClasses(b,e);this._addNewClasses(j,e);for(var c=0;c<d.length;c+=1){this.setTheme(f,g,a(d[c]))}},_removeOldClasses:function(d,c){for(var b=0;b<d.length;b+=1){c.removeClass(d[b])}},_addNewClasses:function(d,c){for(var b=0;b<d.length;b+=1){c.addClass(d[b])}},getOffset:function(b){var d=a.jqx.mobile.getLeftPos(b[0]);var c=a.jqx.mobile.getTopPos(b[0]);return{top:c,left:d}},resize:function(g,s,p,o){if(o===undefined){o=true}var l=-1;var k=this;var d=function(u){if(!k.hiddenWidgets){return -1}var v=-1;for(var t=0;t<k.hiddenWidgets.length;t++){if(u.id){if(k.hiddenWidgets[t].id==u.id){v=t;break}}else{if(k.hiddenWidgets[t].id==u[0].id){v=t;break}}}return v};if(this.resizeHandlers){for(var h=0;h<this.resizeHandlers.length;h++){if(g.id){if(this.resizeHandlers[h].id==g.id){l=h;break}}else{if(this.resizeHandlers[h].id==g[0].id){l=h;break}}}if(p===true){if(l!=-1){this.resizeHandlers.splice(l,1);if(this.watchedElementData&&this.watchedElementData.length>0){this.watchedElementData.splice(l,1)}}if(this.resizeHandlers.length==0){var n=a(window);if(n.off){n.off("resize.jqx");n.off("orientationchange.jqx");n.off("orientationchanged.jqx")}else{n.unbind("resize.jqx");n.unbind("orientationchange.jqx");n.unbind("orientationchanged.jqx")}this.resizeHandlers=null}var b=d(g);if(b!=-1&&this.hiddenWidgets){this.hiddenWidgets.splice(b,1)}return}}else{if(p===true){var b=d(g);if(b!=-1&&this.hiddenWidgets){this.hiddenWidgets.splice(b,1)}return}}var k=this;var m=function(v,E){if(!k.resizeHandlers){return}var F=function(J){var I=-1;var K=J.parentNode;while(K){I++;K=K.parentNode}return I};var u=function(L,J){if(!L.widget||!J.widget){return 0}var K=F(L.widget[0]);var I=F(J.widget[0]);try{if(K<I){return -1}if(K>I){return 1}}catch(M){var N=M}return 0};var w=function(J){if(k.hiddenWidgets.length>0){k.hiddenWidgets.sort(u);var I=function(){var L=false;var N=new Array();for(var M=0;M<k.hiddenWidgets.length;M++){var K=k.hiddenWidgets[M];if(a.jqx.isHidden(K.widget)){L=true;N.push(K)}else{if(K.callback){K.callback(E)}}}k.hiddenWidgets=N;if(!L){clearInterval(k.__resizeInterval)}};if(J==false){I();if(k.__resizeInterval){clearInterval(k.__resizeInterval)}return}if(k.__resizeInterval){clearInterval(k.__resizeInterval)}k.__resizeInterval=setInterval(function(){I()},100)}};if(k.hiddenWidgets&&k.hiddenWidgets.length>0){w(false)}k.hiddenWidgets=new Array();k.resizeHandlers.sort(u);for(var B=0;B<k.resizeHandlers.length;B++){var H=k.resizeHandlers[B];var D=H.widget;var A=H.data;if(!A){continue}if(!A.jqxWidget){continue}var t=A.jqxWidget.width;var G=A.jqxWidget.height;if(A.jqxWidget.base){if(t==undefined){t=A.jqxWidget.base.width}if(G==undefined){G=A.jqxWidget.base.height}}if(t===undefined&&G===undefined){t=A.jqxWidget.element.style.width;G=A.jqxWidget.element.style.height}var C=false;if(t!=null&&t.toString().indexOf("%")!=-1){C=true}if(G!=null&&G.toString().indexOf("%")!=-1){C=true}if(a.jqx.isHidden(D)){if(d(D)===-1){if(C||v===true){if(H.data.nestedWidget!==true){k.hiddenWidgets.push(H)}}}}else{if(v===undefined||v!==true){if(C){H.callback(E);if(k.watchedElementData){for(var y=0;y<k.watchedElementData.length;y++){if(k.watchedElementData[y].element==A.jqxWidget.element){k.watchedElementData[y].offsetWidth=A.jqxWidget.element.offsetWidth;k.watchedElementData[y].offsetHeight=A.jqxWidget.element.offsetHeight;break}}}if(k.hiddenWidgets.indexOf(H)>=0){k.hiddenWidgets.splice(k.hiddenWidgets.indexOf(H),1)}}if(A.jqxWidget.element){var x=A.jqxWidget.element.className;if(x.indexOf("dropdownlist")>=0||x.indexOf("datetimeinput")>=0||x.indexOf("combobox")>=0||x.indexOf("menu")>=0){if(A.jqxWidget.isOpened){var z=A.jqxWidget.isOpened();if(z){if(E&&E=="resize"&&a.jqx.mobile.isTouchDevice()){continue}A.jqxWidget.close()}}}}}}}w()};if(!this.resizeHandlers){this.resizeHandlers=new Array();var n=a(window);if(n.on){this._resizeTimer=null;this._initResize=null;n.on("resize.jqx",function(t){if(k._resizeTimer!=undefined){clearTimeout(k._resizeTimer)}if(!k._initResize){k._initResize=true;m(null,"resize")}else{k._resizeTimer=setTimeout(function(){m(null,"resize")},a.jqx.resizeDelay)}});n.on("orientationchange.jqx",function(t){m(null,"orientationchange")});n.on("orientationchanged.jqx",function(t){m(null,"orientationchange")})}else{n.bind("resize.jqx",function(t){m(null,"orientationchange")});n.bind("orientationchange.jqx",function(t){m(null,"orientationchange")});n.bind("orientationchanged.jqx",function(t){m(null,"orientationchange")})}}var e=g.data();if(o){if(l===-1){this.resizeHandlers.push({id:g[0].id,widget:g,callback:s,data:e})}}try{var c=e.jqxWidget.width;var r=e.jqxWidget.height;if(e.jqxWidget.base){if(c==undefined){c=e.jqxWidget.base.width}if(r==undefined){r=e.jqxWidget.base.height}}if(c===undefined&&r===undefined){c=e.jqxWidget.element.style.width;r=e.jqxWidget.element.style.height}var j=false;if(c!=null&&c.toString().indexOf("%")!=-1){j=true}if(r!=null&&r.toString().indexOf("%")!=-1){j=true}if(j){if(!this.watchedElementData){this.watchedElementData=[]}var k=this;var f=function(t){if(k.watchedElementData.forEach){k.watchedElementData.forEach(function(u){if(u.element.offsetWidth!==u.offsetWidth||u.element.offsetHeight!==u.offsetHeight){u.offsetWidth=u.element.offsetWidth;u.offsetHeight=u.element.offsetHeight;if(u.timer){clearTimeout(u.timer)}u.timer=setTimeout(function(){if(!a.jqx.isHidden(a(u.element))){u.callback()}else{u.timer=setInterval(function(){if(!a.jqx.isHidden(a(u.element))){clearInterval(u.timer);u.callback()}},100)}})}})}};k.watchedElementData.push({element:g[0],offsetWidth:g[0].offsetWidth,offsetHeight:g[0].offsetHeight,callback:s});if(!k.observer){k.observer=new MutationObserver(f);k.observer.observe(document.body,{attributes:true,childList:true,characterData:true})}}}catch(q){}if(a.jqx.isHidden(g)&&o===true){m(true)}a.jqx.resize=function(){m(null,"resize")}},parseJSON:function(d){if(!d||typeof d!=="string"){return null}var b=/^[\],:{}\s]*$/,f=/(?:^|:|,)(?:\s*\[)+/g,c=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,e=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g;d=a.trim(d);if(window.JSON&&window.JSON.parse){return window.JSON.parse(d)}if(b.test(d.replace(c,"@").replace(e,"]").replace(f,""))){return(new Function("return "+d))()}throw new Error("Invalid JSON: "+d)},html:function(c,d){if(!a(c).on){return a(c).html(d)}try{return a.access(c,function(s){var f=c[0]||{},m=0,j=c.length;if(s===undefined){return f.nodeType===1?f.innerHTML.replace(rinlinejQuery,""):undefined}var r=/<(?:script|style|link)/i,n="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",h=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,p=/<([\w:]+)/,g=/<(?:script|object|embed|option|style)/i,k=new RegExp("<(?:"+n+")[\\s/>]","i"),q=/^\s+/,t={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};if(typeof s==="string"&&!r.test(s)&&(a.support.htmlSerialize||!k.test(s))&&(a.support.leadingWhitespace||!q.test(s))&&!t[(p.exec(s)||["",""])[1].toLowerCase()]){s=s.replace(h,"<$1></$2>");try{for(;m<j;m++){f=this[m]||{};if(f.nodeType===1){a.cleanData(f.getElementsByTagName("*"));f.innerHTML=s}}f=0}catch(o){}}if(f){c.empty().append(s)}},null,d,arguments.length)}catch(b){return a(c).html(d)}},hasTransform:function(d){var c="";c=d.css("transform");if(c==""||c=="none"){c=d.parents().css("transform");if(c==""||c=="none"){var b=a.jqx.utilities.getBrowser();if(b.browser=="msie"){c=d.css("-ms-transform");if(c==""||c=="none"){c=d.parents().css("-ms-transform")}}else{if(b.browser=="chrome"){c=d.css("-webkit-transform");if(c==""||c=="none"){c=d.parents().css("-webkit-transform")}}else{if(b.browser=="opera"){c=d.css("-o-transform");if(c==""||c=="none"){c=d.parents().css("-o-transform")}}else{if(b.browser=="mozilla"){c=d.css("-moz-transform");if(c==""||c=="none"){c=d.parents().css("-moz-transform")}}}}}}else{return c!=""&&c!="none"}}if(c==""||c=="none"){c=a(document.body).css("transform")}return c!=""&&c!="none"&&c!=null},getBrowser:function(){var c=navigator.userAgent.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(c)||/(webkit)[ \/]([\w.]+)/.exec(c)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c)||/(msie) ([\w.]+)/.exec(c)||c.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c)||[];var d={browser:b[1]||"",version:b[2]||"0"};if(c.indexOf("rv:11.0")>=0&&c.indexOf(".net4.0c")>=0){d.browser="msie";d.version="11";b[1]="msie"}if(c.indexOf("edge")>=0){d.browser="msie";d.version="12";b[1]="msie"}d[b[1]]=b[1];return d}});a.jqx.browser=a.jqx.utilities.getBrowser();a.jqx.isHidden=function(c){if(!c||!c[0]){return false}var b=c[0].offsetWidth,d=c[0].offsetHeight;if(b===0||d===0){return true}else{return false}};a.jqx.ariaEnabled=true;a.jqx.aria=function(c,e,d){if(!a.jqx.ariaEnabled){return}if(e==undefined){a.each(c.aria,function(g,h){var k=!c.base?c.host.attr(g):c.base.host.attr(g);if(k!=undefined&&!a.isFunction(k)){var j=k;switch(h.type){case"number":j=new Number(k);if(isNaN(j)){j=k}break;case"boolean":j=k=="true"?true:false;break;case"date":j=new Date(k);if(j=="Invalid Date"||isNaN(j)){j=k}break}c[h.name]=j}else{var k=c[h.name];if(a.isFunction(k)){k=c[h.name]()}if(k==undefined){k=""}try{!c.base?c.host.attr(g,k.toString()):c.base.host.attr(g,k.toString())}catch(f){}}})}else{try{if(c.host){if(!c.base){if(c.host){if(c.element.setAttribute){c.element.setAttribute(e,d.toString())}else{c.host.attr(e,d.toString())}}else{c.attr(e,d.toString())}}else{if(c.base.host){c.base.host.attr(e,d.toString())}else{c.attr(e,d.toString())}}}else{if(c.setAttribute){c.setAttribute(e,d.toString())}}}catch(b){}}};if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c){var b=this.length;var d=Number(arguments[1])||0;d=(d<0)?Math.ceil(d):Math.floor(d);if(d<0){d+=b}for(;d<b;d++){if(d in this&&this[d]===c){return d}}return -1}}a.jqx.mobile=a.jqx.mobile||{};a.jqx.position=function(b){var e=parseInt(b.pageX);var d=parseInt(b.pageY);if(a.jqx.mobile.isTouchDevice()){var c=a.jqx.mobile.getTouches(b);var f=c[0];e=parseInt(f.pageX);d=parseInt(f.pageY)}return{left:e,top:d}};a.extend(a.jqx.mobile,{_touchListener:function(h,f){var b=function(j,l){var k=document.createEvent("MouseEvents");k.initMouseEvent(j,l.bubbles,l.cancelable,l.view,l.detail,l.screenX,l.screenY,l.clientX,l.clientY,l.ctrlKey,l.altKey,l.shiftKey,l.metaKey,l.button,l.relatedTarget);k._pageX=l.pageX;k._pageY=l.pageY;return k};var g={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"};var d=b(g[h.type],h);h.target.dispatchEvent(d);var c=h.target["on"+g[h.type]];if(typeof c==="function"){c(h)}},setMobileSimulator:function(c,e){if(this.isTouchDevice()){return}this.simulatetouches=true;if(e==false){this.simulatetouches=false}var d={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"};var b=this;if(window.addEventListener){var f=function(){for(var g in d){if(c.addEventListener){c.removeEventListener(g,b._touchListener);c.addEventListener(g,b._touchListener,false)}}};if(a.jqx.browser.msie){f()}else{f()}}},isTouchDevice:function(){if(this.touchDevice!=undefined){return this.touchDevice}var c="Browser CodeName: "+navigator.appCodeName+"";c+="Browser Name: "+navigator.appName+"";c+="Browser Version: "+navigator.appVersion+"";c+="Platform: "+navigator.platform+"";c+="User-agent header: "+navigator.userAgent+"";if(c.indexOf("Android")!=-1){return true}if(c.indexOf("IEMobile")!=-1){return true}if(c.indexOf("Windows Phone")!=-1){return true}if(c.indexOf("WPDesktop")!=-1){return true}if(c.indexOf("ZuneWP7")!=-1){return true}if(c.indexOf("BlackBerry")!=-1&&c.indexOf("Mobile Safari")!=-1){return true}if(c.indexOf("ipod")!=-1){return true}if(c.indexOf("nokia")!=-1||c.indexOf("Nokia")!=-1){return true}if(c.indexOf("Chrome/17")!=-1){return false}if(c.indexOf("CrOS")!=-1){return false}if(c.indexOf("Opera")!=-1&&c.indexOf("Mobi")==-1&&c.indexOf("Mini")==-1&&c.indexOf("Platform: Win")!=-1){return false}if(c.indexOf("Opera")!=-1&&c.indexOf("Mobi")!=-1&&c.indexOf("Opera Mobi")!=-1){return true}var d={ios:"i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ",android:"(Android |HTC_|Silk/)",blackberry:"BlackBerry(?:.*)Version/",rimTablet:"RIM Tablet OS ",webos:"(?:webOS|hpwOS)/",bada:"Bada/"};try{if(this.touchDevice!=undefined){return this.touchDevice}this.touchDevice=false;for(i in d){if(d.hasOwnProperty(i)){prefix=d[i];match=c.match(new RegExp("(?:"+prefix+")([^\\s;]+)"));if(match){if(i.toString()=="blackberry"){this.touchDevice=false;return false}this.touchDevice=true;return true}}}var f=navigator.userAgent;if(navigator.platform.toLowerCase().indexOf("win")!=-1){if(f.indexOf("Windows Phone")>=0||f.indexOf("WPDesktop")>=0||f.indexOf("IEMobile")>=0||f.indexOf("ZuneWP7")>=0){this.touchDevice=true;return true}else{if(f.indexOf("Touch")>=0){var b=("MSPointerDown" in window)||("pointerdown" in window);if(b){this.touchDevice=true;return true}if(f.indexOf("ARM")>=0){this.touchDevice=true;return true}this.touchDevice=false;return false}}}if(navigator.platform.toLowerCase().indexOf("win")!=-1){this.touchDevice=false;return false}if(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch){this.touchDevice=true}return this.touchDevice}catch(g){this.touchDevice=false;return false}},getLeftPos:function(b){var c=b.offsetLeft;while((b=b.offsetParent)!=null){if(b.tagName!="HTML"){c+=b.offsetLeft;if(document.all){c+=b.clientLeft}}}return c},getTopPos:function(c){var e=c.offsetTop;var b=a(c).coord();while((c=c.offsetParent)!=null){if(c.tagName!="HTML"){e+=(c.offsetTop-c.scrollTop);if(document.all){e+=c.clientTop}}}var d=navigator.userAgent.toLowerCase();var f=(d.indexOf("windows phone")!=-1||d.indexOf("WPDesktop")!=-1||d.indexOf("ZuneWP7")!=-1||d.indexOf("msie 9")!=-1||d.indexOf("msie 11")!=-1||d.indexOf("msie 10")!=-1)&&d.indexOf("touch")!=-1;if(f){return b.top}if(this.isSafariMobileBrowser()){if(this.isSafari4MobileBrowser()&&this.isIPadSafariMobileBrowser()){return e}if(d.indexOf("version/7")!=-1){return b.top}if(d.indexOf("version/6")!=-1||d.indexOf("version/5")!=-1){e=e+a(window).scrollTop()}if(/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)){return e+a(window).scrollTop()}if(/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)){return e+a(window).scrollTop()}return b.top}return e},isChromeMobileBrowser:function(){var c=navigator.userAgent.toLowerCase();var b=c.indexOf("android")!=-1;return b},isOperaMiniMobileBrowser:function(){var c=navigator.userAgent.toLowerCase();var b=c.indexOf("opera mini")!=-1||c.indexOf("opera mobi")!=-1;return b},isOperaMiniBrowser:function(){var c=navigator.userAgent.toLowerCase();var b=c.indexOf("opera mini")!=-1;return b},isNewSafariMobileBrowser:function(){var c=navigator.userAgent.toLowerCase();var b=c.indexOf("ipad")!=-1||c.indexOf("iphone")!=-1||c.indexOf("ipod")!=-1;b=b&&(c.indexOf("version/5")!=-1);return b},isSafari4MobileBrowser:function(){var c=navigator.userAgent.toLowerCase();var b=c.indexOf("ipad")!=-1||c.indexOf("iphone")!=-1||c.indexOf("ipod")!=-1;b=b&&(c.indexOf("version/4")!=-1);return b},isWindowsPhone:function(){var c=navigator.userAgent.toLowerCase();var b=(c.indexOf("windows phone")!=-1||c.indexOf("WPDesktop")!=-1||c.indexOf("ZuneWP7")!=-1||c.indexOf("msie 9")!=-1||c.indexOf("msie 11")!=-1||c.indexOf("msie 10")!=-1&&c.indexOf("touch")!=-1);return b},isSafariMobileBrowser:function(){var c=navigator.userAgent.toLowerCase();if(/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)){return true}if(/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)){return true}var b=c.indexOf("ipad")!=-1||c.indexOf("iphone")!=-1||c.indexOf("ipod")!=-1||c.indexOf("mobile safari")!=-1;return b},isIPadSafariMobileBrowser:function(){var c=navigator.userAgent.toLowerCase();var b=c.indexOf("ipad")!=-1;return b},isMobileBrowser:function(){var c=navigator.userAgent.toLowerCase();var b=c.indexOf("ipad")!=-1||c.indexOf("iphone")!=-1||c.indexOf("android")!=-1;return b},getTouches:function(b){if(b.originalEvent){if(b.originalEvent.touches&&b.originalEvent.touches.length){return b.originalEvent.touches}else{if(b.originalEvent.changedTouches&&b.originalEvent.changedTouches.length){return b.originalEvent.changedTouches}}}if(!b.touches){b.touches=new Array();b.touches[0]=b.originalEvent!=undefined?b.originalEvent:b;if(b.originalEvent!=undefined&&b.pageX){b.touches[0]=b}if(b.type=="mousemove"){b.touches[0]=b}}return b.touches},getTouchEventName:function(b){if(this.isWindowsPhone()){var c=navigator.userAgent.toLowerCase();if(c.indexOf("windows phone 7")!=-1){if(b.toLowerCase().indexOf("start")!=-1){return"MSPointerDown"}if(b.toLowerCase().indexOf("move")!=-1){return"MSPointerMove"}if(b.toLowerCase().indexOf("end")!=-1){return"MSPointerUp"}}if(b.toLowerCase().indexOf("start")!=-1){return"pointerdown"}if(b.toLowerCase().indexOf("move")!=-1){return"pointermove"}if(b.toLowerCase().indexOf("end")!=-1){return"pointerup"}}else{return b}},dispatchMouseEvent:function(b,f,d){if(this.simulatetouches){return}var c=document.createEvent("MouseEvent");c.initMouseEvent(b,true,true,f.view,1,f.screenX,f.screenY,f.clientX,f.clientY,false,false,false,false,0,null);if(d!=null){d.dispatchEvent(c)}},getRootNode:function(b){while(b.nodeType!==1){b=b.parentNode}return b},setTouchScroll:function(b,c){if(!this.enableScrolling){this.enableScrolling=[]}this.enableScrolling[c]=b},touchScroll:function(A,L,V,G,w,m){if(A==null){return}var F=this;var e=0;var q=0;var f=0;var g=0;var s=0;var h=0;if(!this.scrolling){this.scrolling=[]}this.scrolling[G]=false;var j=false;var o=a(A);var P=["select","input","textarea"];var T=0;var I=0;if(!this.enableScrolling){this.enableScrolling=[]}this.enableScrolling[G]=true;var G=G;var t=this.getTouchEventName("touchstart")+".touchScroll";var C=this.getTouchEventName("touchend")+".touchScroll";var X=this.getTouchEventName("touchmove")+".touchScroll";var k,S,y,U,ad,O,W,c,E,Z,ab,d,v,u,Q,b,D,ac,n;O=L;ad=0;W=0;xoffset=0;initialOffset=0;initialXOffset=0;U=w.jqxScrollBar("max");n=325;function z(ag){if(ag.targetTouches&&(ag.targetTouches.length>=1)){return ag.targetTouches[0].clientY}else{if(ag.originalEvent&&ag.originalEvent.clientY!==undefined){return ag.originalEvent.clientY}else{var af=F.getTouches(ag);return af[0].clientY}}}function aa(ag){if(ag.targetTouches&&(ag.targetTouches.length>=1)){return ag.targetTouches[0].clientX}else{if(ag.originalEvent&&ag.originalEvent.clientX!==undefined){return ag.originalEvent.clientX}else{var af=F.getTouches(ag);return af[0].clientX}}}var H=function(){var ah,af,ai,ag;ah=Date.now();af=ah-v;v=ah;ai=W-d;xdelta=xoffset-xframe;d=W;xframe=xoffset;E=true;ag=1000*ai/(1+af);xv=1000*xdelta/(1+af);ab=0.8*ag+0.2*ab;xjqxAnimations=0.8*xv+0.2*xjqxAnimations};var B=false;var T=function(ag){if(!F.enableScrolling[G]){return true}if(a.inArray(ag.target.tagName.toLowerCase(),P)!==-1){return}W=m.jqxScrollBar("value");xoffset=w.jqxScrollBar("value");var ah=F.getTouches(ag);var ai=ah[0];if(ah.length==1){F.dispatchMouseEvent("mousedown",ai,F.getRootNode(ai.target))}U=w.jqxScrollBar("max");O=m.jqxScrollBar("max");function af(aj){B=false;E=true;c=z(aj);ac=aa(aj);ab=Q=xjqxAnimations=0;d=W;xframe=xoffset;v=Date.now();clearInterval(u);u=setInterval(H,100);initialOffset=W;initialXOffset=xoffset;if(W>0&&W<O&&m[0].style.visibility!="hidden"){}}af(ag);j=false;q=ai.pageY;s=ai.pageX;if(F.simulatetouches){if(ai._pageY!=undefined){q=ai._pageY;s=ai._pageX}}F.scrolling[G]=true;e=0;g=0;return true};if(o.on){o.on(t,T)}else{o.bind(t,T)}var Y=function(ag,af){W=(ag>O)?O:(ag<ad)?ad:ag;V(null,ag,0,0,af);return(ag>O)?"max":(ag<ad)?"min":"value"};var l=function(ag,af){xoffset=(ag>U)?U:(ag<ad)?ad:ag;V(ag,null,0,0,af);return(ag>U)?"max":(ag<ad)?"min":"value"};function R(){var af,ag;if(Q){af=Date.now()-v;ag=-Q*Math.exp(-af/n);if(ag>0.5||ag<-0.5){Y(b+ag);requestAnimationFrame(R)}else{Y(b)}}}function M(){var af,ag;if(Q){af=Date.now()-v;ag=-Q*Math.exp(-af/n);if(ag>0.5||ag<-0.5){l(D+ag);requestAnimationFrame(M)}else{l(D)}}}var x=function(af){if(!F.enableScrolling[G]){return true}if(!F.scrolling[G]){return true}if(B){af.preventDefault();af.stopPropagation()}var ak=F.getTouches(af);if(ak.length>1){return true}var ag=ak[0].pageY;var ai=ak[0].pageX;if(F.simulatetouches){if(ak[0]._pageY!=undefined){ag=ak[0]._pageY;ai=ak[0]._pageX}}var am=ag-q;var an=ai-s;I=ag;touchHorizontalEnd=ai;f=am-e;h=an-g;j=true;e=am;g=an;var ah=w!=null?w[0].style.visibility!="hidden":true;var al=m!=null?m[0].style.visibility!="hidden":true;function aj(aq){var at,ar,ap;if(E){at=z(aq);ap=aa(aq);ar=c-at;xdelta=ac-ap;var ao="value";if(ar>2||ar<-2){c=at;ao=Y(W+ar,aq);H();if(ao=="min"&&initialOffset===0){return true}if(ao=="max"&&initialOffset===O){return true}if(!al){return true}aq.preventDefault();aq.stopPropagation();B=true;return false}else{if(xdelta>2||xdelta<-2){ac=ap;ao=l(xoffset+xdelta,aq);H();if(ao=="min"&&initialXOffset===0){return true}if(ao=="max"&&initialXOffset===U){return true}if(!ah){return true}B=true;aq.preventDefault();aq.stopPropagation();return false}}aq.preventDefault()}}if(ah||al){if((ah)||(al)){aj(af)}}};if(o.on){o.on(X,x)}else{o.bind(X,x)}var r=function(ag){if(!F.enableScrolling[G]){return true}var ah=F.getTouches(ag)[0];if(!F.scrolling[G]){return true}E=false;clearInterval(u);if(ab>10||ab<-10){Q=0.8*ab;b=Math.round(W+Q);v=Date.now();requestAnimationFrame(R)}else{if(xjqxAnimations>10||xjqxAnimations<-10){Q=0.8*xjqxAnimations;D=Math.round(xoffset+Q);v=Date.now();requestAnimationFrame(M)}else{}}F.scrolling[G]=false;if(j){F.dispatchMouseEvent("mouseup",ah,ag.target)}else{var ah=F.getTouches(ag)[0],af=F.getRootNode(ah.target);F.dispatchMouseEvent("mouseup",ah,af);F.dispatchMouseEvent("click",ah,af);return true}};if(this.simulatetouches){var p=a(window).on!=undefined||a(window).bind;var N=function(af){try{r(af)}catch(ag){}F.scrolling[G]=false};a(window).on!=undefined?a(document).on("mouseup.touchScroll",N):a(document).bind("mouseup.touchScroll",N);if(window.frameElement){if(window.top!=null){var K=function(af){try{r(af)}catch(ag){}F.scrolling[G]=false};if(window.top.document){a(window.top.document).on?a(window.top.document).on("mouseup",K):a(window.top.document).bind("mouseup",K)}}}var ae=a(document).on!=undefined||a(document).bind;var J=function(af){if(!F.scrolling[G]){return true}F.scrolling[G]=false;var ah=F.getTouches(af)[0],ag=F.getRootNode(ah.target);F.dispatchMouseEvent("mouseup",ah,ag);F.dispatchMouseEvent("click",ah,ag)};a(document).on!=undefined?a(document).on("touchend",J):a(document).bind("touchend",J)}if(o.on){o.on("dragstart",function(af){af.preventDefault()});o.on("selectstart",function(af){af.preventDefault()})}o.on?o.on(C+" touchcancel.touchScroll",r):o.bind(C+" touchcancel.touchScroll",r)}});a.jqx.cookie=a.jqx.cookie||{};a.extend(a.jqx.cookie,{cookie:function(e,f,c){if(arguments.length>1&&String(f)!=="[object Object]"){c=a.extend({},c);if(f===null||f===undefined){c.expires=-1}if(typeof c.expires==="number"){var h=c.expires,d=c.expires=new Date();d.setDate(d.getDate()+h)}f=String(f);return(document.cookie=[encodeURIComponent(e),"=",c.raw?f:encodeURIComponent(f),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join(""))}c=f||{};var b,g=c.raw?function(j){return j}:decodeURIComponent;return(b=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?g(b[1]):null}});a.jqx.string=a.jqx.string||{};a.extend(a.jqx.string,{replace:function(f,d,e){if(d===e){return this}var b=f;var c=b.indexOf(d);while(c!=-1){b=b.replace(d,e);c=b.indexOf(d)}return b},contains:function(b,c){if(b==null||c==null){return false}return b.indexOf(c)!=-1},containsIgnoreCase:function(b,c){if(b==null||c==null){return false}return b.toString().toUpperCase().indexOf(c.toString().toUpperCase())!=-1},equals:function(b,c){if(b==null||c==null){return false}b=this.normalize(b);if(c.length==b.length){return b.slice(0,c.length)==c}return false},equalsIgnoreCase:function(b,c){if(b==null||c==null){return false}b=this.normalize(b);if(c.length==b.length){return b.toUpperCase().slice(0,c.length)==c.toUpperCase()}return false},startsWith:function(b,c){if(b==null||c==null){return false}return b.slice(0,c.length)==c},startsWithIgnoreCase:function(b,c){if(b==null||c==null){return false}return b.toUpperCase().slice(0,c.length)==c.toUpperCase()},normalize:function(b){if(b.charCodeAt(b.length-1)==65279){b=b.substring(0,b.length-1)}return b},endsWith:function(b,c){if(b==null||c==null){return false}b=this.normalize(b);return b.slice(-c.length)==c},endsWithIgnoreCase:function(b,c){if(b==null||c==null){return false}b=this.normalize(b);return b.toUpperCase().slice(-c.length)==c.toUpperCase()}});a.extend(a.easing,{easeOutBack:function(f,g,e,k,j,h){if(h==undefined){h=1.70158}return k*((g=g/j-1)*g*((h+1)*g+h)+1)+e},easeInQuad:function(f,g,e,j,h){return j*(g/=h)*g+e},easeInOutCirc:function(f,g,e,j,h){if((g/=h/2)<1){return -j/2*(Math.sqrt(1-g*g)-1)+e}return j/2*(Math.sqrt(1-(g-=2)*g)+1)+e},easeInOutSine:function(f,g,e,j,h){return -j/2*(Math.cos(Math.PI*g/h)-1)+e},easeInCubic:function(f,g,e,j,h){return j*(g/=h)*g*g+e},easeOutCubic:function(f,g,e,j,h){return j*((g=g/h-1)*g*g+1)+e},easeInOutCubic:function(f,g,e,j,h){if((g/=h/2)<1){return j/2*g*g*g+e}return j/2*((g-=2)*g*g+2)+e},easeInSine:function(f,g,e,j,h){return -j*Math.cos(g/h*(Math.PI/2))+j+e},easeOutSine:function(f,g,e,j,h){return j*Math.sin(g/h*(Math.PI/2))+e},easeInOutSine:function(f,g,e,j,h){return -j/2*(Math.cos(Math.PI*g/h)-1)+e}})})(jqxBaseFramework);(function(b){if(b.event&&b.event.special){b.extend(b.event.special,{close:{noBubble:true},open:{noBubble:true},cellclick:{noBubble:true},rowclick:{noBubble:true},tabclick:{noBubble:true},selected:{noBubble:true},expanded:{noBubble:true},collapsed:{noBubble:true},valuechanged:{noBubble:true},expandedItem:{noBubble:true},collapsedItem:{noBubble:true},expandingItem:{noBubble:true},collapsingItem:{noBubble:true}})}if(b.fn.extend){b.fn.extend({ischildof:function(g){if(!b(this).parents){var c=g.element.contains(this.element);return c}var e=b(this).parents().get();for(var d=0;d<e.length;d++){if(typeof g!="string"){var f=e[d];if(g!==undefined){if(f==g[0]){return true}}}else{if(g!==undefined){if(b(e[d]).is(g)){return true}}}}return false}})}b.fn.jqxProxy=function(){var e=b(this).data().jqxWidget;var c=Array.prototype.slice.call(arguments,0);var d=e.element;if(!d){d=e.base.element}return b.jqx.jqxWidgetProxy(e.widgetName,d,c)};var a=this.originalVal=b.fn.val;b.fn.val=function(d){if(typeof d=="undefined"){if(b(this).hasClass("jqx-widget")){var c=b(this).data().jqxWidget;if(c&&c.val){return c.val()}}if(this[0]&&this[0].tagName.toLowerCase().indexOf("angular")>=0){var c=b(this).find(".jqx-widget").data().jqxWidget;if(c&&c.val){return c.val()}}return a.call(this)}else{if(b(this).hasClass("jqx-widget")){var c=b(this).data().jqxWidget;if(c&&c.val){if(arguments.length!=2){return c.val(d)}else{return c.val(d,arguments[1])}}}if(this[0]&&this[0].tagName.toLowerCase().indexOf("angular")>=0){var c=b(this).find(".jqx-widget").data().jqxWidget;if(c&&c.val){if(arguments.length!=2){return c.val(d)}else{return c.val(d,arguments[1])}}}return a.call(this,d)}};if(b.fn.modal&&b.fn.modal.Constructor){b.fn.modal.Constructor.prototype.enforceFocus=function(){b(document).off("focusin.bs.modal").on("focusin.bs.modal",b.proxy(function(c){if(this.$element[0]!==c.target&&!this.$element.has(c.target).length){if(b(c.target).parents().hasClass("jqx-popup")){return true}this.$element.trigger("focus")}},this))}}b.fn.coord=function(o){var e,k,j={top:0,left:0},f=this[0],m=f&&f.ownerDocument;if(!m){return}e=m.documentElement;if(!b.contains(e,f)){return j}if(typeof f.getBoundingClientRect!==undefined){j=f.getBoundingClientRect()}var d=function(p){return b.isWindow(p)?p:p.nodeType===9?p.defaultView||p.parentWindow:false};k=d(m);var h=0;var c=0;var g=navigator.userAgent.toLowerCase();var n=g.indexOf("ipad")!=-1||g.indexOf("iphone")!=-1;if(n){h=2}if(true==o){if(document.body.style.position!="static"&&document.body.style.position!=""){var l=b(document.body).coord();h=-l.left;c=-l.top}}return{top:c+j.top+(k.pageYOffset||e.scrollTop)-(e.clientTop||0),left:h+j.left+(k.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}}})(jqxBaseFramework);



/***/ }),

/***/ 801:
/***/ (function(module, exports) {

/*
jQWidgets v5.5.0 (2017-Dec)
Copyright (c) 2011-2017 jQWidgets.
License: https://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxDraw","",{});a.extend(a.jqx._jqxDraw.prototype,{defineInstance:function(){var d={renderEngine:""};a.extend(true,this,d);var e=["clear","on","off","removeElement","attr","getAttr","line","circle","rect","path","pieslice","text","measureText"];for(var c in e){this._addFn(a.jqx._jqxDraw.prototype,e[c])}if(this===a.jqx._jqxDraw.prototype){return d}return d},_addFn:function(d,c){if(d[c]){return}d[c]=function(){return this.renderer[c].apply(this.renderer,arguments)}},createInstance:function(c){},_initRenderer:function(c){return a.jqx.createRenderer(this,c)},_internalRefresh:function(){var c=this;if(a.jqx.isHidden(c.host)){return}if(!c.renderer){c.host.empty();c._initRenderer(c.host)}var e=c.renderer;if(!e){return}var d=e.getRect();c._render({x:1,y:1,width:d.width,height:d.height});if(e instanceof a.jqx.HTML5Renderer){e.refresh()}},_saveAsImage:function(e,f,c,d){return a.jqx._widgetToImage(this,e,f,c,d)},_render:function(d){var c=this;var e=c.renderer;c._plotRect=d},refresh:function(){this._internalRefresh()},getSize:function(){var c=this._plotRect;return{width:c.width,height:c.height}},saveAsPNG:function(e,c,d){return this._saveAsImage("png",e,c,d)},saveAsJPEG:function(e,c,d){return this._saveAsImage("jpeg",e,c,d)}})})(jqxBaseFramework);(function(a){a.jqx.toGreyScale=function(c){if(c.indexOf("#")==-1){return c}var d=a.jqx.cssToRgb(c);d[0]=d[1]=d[2]=Math.round(0.3*d[0]+0.59*d[1]+0.11*d[2]);var e=a.jqx.rgbToHex(d[0],d[1],d[2]);return"#"+e[0]+e[1]+e[2]},a.jqx.adjustColor=function(f,e){if(typeof(f)!="string"){return"#000000"}if(f.indexOf("#")==-1){return f}var h=a.jqx.cssToRgb(f);var d=a.jqx.rgbToHsl(h);d[2]=Math.min(1,d[2]*e);d[1]=Math.min(1,d[1]*e*1.1);h=a.jqx.hslToRgb(d);var f="#";for(var j=0;j<3;j++){var k=Math.round(h[j]);k=a.jqx.decToHex(k);if(k.toString().length==1){f+="0"}f+=k}return f.toUpperCase()};a.jqx.decToHex=function(c){return c.toString(16)};a.jqx.hexToDec=function(c){return parseInt(c,16)};a.jqx.rgbToHex=function(e,d,c){return[a.jqx.decToHex(e),a.jqx.decToHex(d),a.jqx.decToHex(c)]};a.jqx.hexToRgb=function(d,f,c){return[a.jqx.hexToDec(d),a.jqx.hexToDec(f),a.jqx.hexToDec(c)]};a.jqx.cssToRgb=function(c){if(c.indexOf("rgb")<=-1){return a.jqx.hexToRgb(c.substring(1,3),c.substring(3,5),c.substring(5,7))}return c.substring(4,c.length-1).split(",")};a.jqx.hslToRgb=function(d){var f=parseFloat(d[0]);var e=parseFloat(d[1]);var c=parseFloat(d[2]);if(e==0){r=g=b=c}else{var i=c<0.5?c*(1+e):c+e-c*e;var j=2*c-i;r=a.jqx.hueToRgb(j,i,f+1/3);g=a.jqx.hueToRgb(j,i,f);b=a.jqx.hueToRgb(j,i,f-1/3)}return[r*255,g*255,b*255]};a.jqx.hueToRgb=function(e,d,c){if(c<0){c+=1}if(c>1){c-=1}if(c<1/6){return e+(d-e)*6*c}else{if(c<1/2){return d}else{if(c<2/3){return e+(d-e)*(2/3-c)*6}}}return e};a.jqx.rgbToHsl=function(j){var c=parseFloat(j[0])/255;var i=parseFloat(j[1])/255;var k=parseFloat(j[2])/255;var m=Math.max(c,i,k),e=Math.min(c,i,k);var f,o,d=(m+e)/2;if(m==e){f=o=0}else{var n=m-e;o=d>0.5?n/(2-m-e):n/(m+e);switch(m){case c:f=(i-k)/n+(i<k?6:0);break;case i:f=(k-c)/n+2;break;case k:f=(c-i)/n+4;break}f/=6}return[f,o,d]};a.jqx.swap=function(c,e){var d=c;c=e;e=d};a.jqx.getNum=function(c){if(!a.isArray(c)){if(isNaN(c)){return 0}}else{for(var d=0;d<c.length;d++){if(!isNaN(c[d])){return c[d]}}}return 0};a.jqx._ptdist=function(d,f,c,e){return Math.sqrt((c-d)*(c-d)+(e-f)*(e-f))};a.jqx._ptrnd=function(d){if(!document.createElementNS){if(Math.round(d)==d){return d}return a.jqx._rnd(d,1,false,true)}var c=a.jqx._rnd(d,0.5,false,true);if(Math.abs(c-Math.round(c))!=0.5){return c>d?c-0.5:c+0.5}return c};a.jqx._ptRotate=function(e,k,d,j,h){var c=Math.sqrt(Math.pow(Math.abs(e-d),2)+Math.pow(Math.abs(k-j),2));var f=Math.asin((e-d)/c);var i=f+h;e=d+Math.cos(i)*c;k=j+Math.sin(i)*c;return{x:e,y:k}};a.jqx._rup=function(d){var c=Math.round(d);if(d>c){c++}return c};a.jqx.log=function(d,c){return Math.log(d)/(c?Math.log(c):1)};a.jqx._mod=function(d,c){var e=Math.abs(d>c?c:d);var f=1;if(e!=0){while(e*f<100){f*=10}}d=d*f;c=c*f;return(d%c)/f};a.jqx._rnd=function(e,h,f,d){if(isNaN(e)){return e}if(undefined===d){d=true}var c=e-((d==true)?e%h:a.jqx._mod(e,h));if(e==c){return c}if(f){if(e>c){c+=h}}else{if(c>e){c-=h}}return(h==1)?Math.round(c):c};a.jqx.commonRenderer={pieSlicePath:function(m,l,j,u,D,E,e){if(!u){u=1}var o=Math.abs(D-E);var s=o>180?1:0;if(o>=360){E=D+359.99}var t=D*Math.PI*2/360;var k=E*Math.PI*2/360;var B=m,A=m,h=l,f=l;var p=!isNaN(j)&&j>0;if(p){e=0}if(e+j>0){if(e>0){var n=o/2+D;var C=n*Math.PI*2/360;m+=e*Math.cos(C);l-=e*Math.sin(C)}if(p){var z=j;B=m+z*Math.cos(t);h=l-z*Math.sin(t);A=m+z*Math.cos(k);f=l-z*Math.sin(k)}}var w=m+u*Math.cos(t);var v=m+u*Math.cos(k);var d=l-u*Math.sin(t);var c=l-u*Math.sin(k);var q="";var i=(Math.abs(Math.abs(E-D)-360)>0.02);if(p){q="M "+A+","+f;q+=" a"+j+","+j;q+=" 0 "+s+",1 "+(B-A)+","+(h-f);if(i){q+=" L"+w+","+d}else{q+=" M"+w+","+d}q+=" a"+u+","+u;q+=" 0 "+s+",0 "+(v-w)+","+(c-d);if(i){q+=" Z"}}else{q="M "+v+","+c;q+=" a"+u+","+u;q+=" 0 "+s+",1 "+(w-v)+","+(d-c);if(i){q+=" L"+m+","+l;q+=" Z"}}return q},measureText:function(q,h,i,p,n){var f=n._getTextParts(q,h,i);var k=f.width;var c=f.height;if(false==p){c/=0.6}var d={};if(isNaN(h)){h=0}if(h==0){d={width:a.jqx._rup(k),height:a.jqx._rup(c)}}else{var m=h*Math.PI*2/360;var e=Math.abs(Math.sin(m));var l=Math.abs(Math.cos(m));var j=Math.abs(k*e+c*l);var o=Math.abs(k*l+c*e);d={width:a.jqx._rup(o),height:a.jqx._rup(j)}}if(p){d.textPartsInfo=f}return d},alignTextInRect:function(t,p,c,u,o,q,k,s,f,e){var m=f*Math.PI*2/360;var d=Math.sin(m);var l=Math.cos(m);var n=o*d;var j=o*l;if(k=="center"||k==""||k=="undefined"){t=t+c/2}else{if(k=="right"){t=t+c}}if(s=="center"||s=="middle"||s==""||s=="undefined"){p=p+u/2}else{if(s=="bottom"){p+=u-q/2}else{if(s=="top"){p+=q/2}}}e=e||"";var h="middle";if(e.indexOf("top")!=-1){h="top"}else{if(e.indexOf("bottom")!=-1){h="bottom"}}var i="center";if(e.indexOf("left")!=-1){i="left"}else{if(e.indexOf("right")!=-1){i="right"}}if(i=="center"){t-=j/2;p-=n/2}else{if(i=="right"){t-=j;p-=n}}if(h=="top"){t-=q*d;p+=q*l}else{if(h=="middle"){t-=q*d/2;p+=q*l/2}}t=a.jqx._rup(t);p=a.jqx._rup(p);return{x:t,y:p}}};a.jqx.svgRenderer=function(){};a.jqx.svgRenderer.prototype={_svgns:"http://www.w3.org/2000/svg",init:function(h){var f="<table class=tblChart cellspacing='0' cellpadding='0' border='0' align='left' valign='top'><tr><td colspan=2 class=tdTop></td></tr><tr><td class=tdLeft></td><td><div class='chartContainer' style='position:relative' onselectstart='return false;'></div></td></tr></table>";h.append(f);this.host=h;var c=h.find(".chartContainer");c[0].style.width=h.width()+"px";c[0].style.height=h.height()+"px";var j;try{var d=document.createElementNS(this._svgns,"svg");d.setAttribute("id","svgChart");d.setAttribute("version","1.1");d.setAttribute("width","100%");d.setAttribute("height","100%");d.setAttribute("overflow","hidden");c[0].appendChild(d);this.canvas=d}catch(i){return false}this._id=new Date().getTime();this.clear();this._layout();this._runLayoutFix();return true},getType:function(){return"SVG"},refresh:function(){},_runLayoutFix:function(){var c=this;this._fixLayout()},_fixLayout:function(){var h=this.canvas.getBoundingClientRect();var e=(parseFloat(h.left)==parseInt(h.left));var c=(parseFloat(h.top)==parseInt(h.top));if(a.jqx.browser.msie){var e=true,c=true;var f=this.host;var d=0,i=0;while(f&&f.position&&f[0].parentNode){var j=f.position();d+=parseFloat(j.left)-parseInt(j.left);i+=parseFloat(j.top)-parseInt(j.top);f=f.parent()}e=parseFloat(d)==parseInt(d);c=parseFloat(i)==parseInt(i)}if(!e){this.host.find(".tdLeft")[0].style.width="0.5px"}if(!c){this.host.find(".tdTop")[0].style.height="0.5px"}},_layout:function(){var c=this.host.find(".chartContainer");this._width=Math.max(a.jqx._rup(this.host.width())-1,0);this._height=Math.max(a.jqx._rup(this.host.height())-1,0);c[0].style.width=this._width;c[0].style.height=this._height;this._fixLayout()},getRect:function(){return{x:0,y:0,width:this._width,height:this._height}},getContainer:function(){var c=this.host.find(".chartContainer");return c},clear:function(){while(this.canvas.childElementCount>0){this.removeElement(this.canvas.firstElementChild)}this._defaultParent=undefined;this._defs=document.createElementNS(this._svgns,"defs");this._gradients={};this.canvas.appendChild(this._defs)},removeElement:function(e){if(undefined==e){return}this.removeHandler(e);try{while(e.firstChild){this.removeElement(e.firstChild)}if(e.parentNode){e.parentNode.removeChild(e)}else{this.canvas.removeChild(e)}}catch(d){var c=d}},_openGroups:[],beginGroup:function(){var c=this._activeParent();var d=document.createElementNS(this._svgns,"g");c.appendChild(d);this._openGroups.push(d);return d},endGroup:function(){if(this._openGroups.length==0){return}this._openGroups.pop()},_activeParent:function(){return this._openGroups.length==0?this.canvas:this._openGroups[this._openGroups.length-1]},createClipRect:function(e){var f=document.createElementNS(this._svgns,"clipPath");var d=document.createElementNS(this._svgns,"rect");this.attr(d,{x:e.x,y:e.y,width:e.width,height:e.height,fill:"none"});this._clipId=this._clipId||0;f.id="cl"+this._id+"_"+(++this._clipId).toString();f.appendChild(d);this._defs.appendChild(f);return f},getWindowHref:function(){var d=a.jqx.browser;if(d&&d.browser=="msie"&&d.version<10){return""}var c=window.location.href;if(!c){return c}c=c.replace(/([\('\)])/g,"\\$1");c=c.replace(/#.*$/,"");return c},setClip:function(e,d){var c="url("+this.getWindowHref()+"#"+d.id+")";return this.attr(e,{"clip-path":c})},_clipId:0,addHandler:function(c,e,d){if(a(c).on){a(c).on(e,d)}else{a(c).bind(e,d)}},removeHandler:function(c,e,d){if(a(c).off){a(c).off(e,d)}else{a(c).unbind(e,d)}},on:function(c,e,d){this.addHandler(c,e,d)},off:function(c,e,d){this.removeHandler(c,e,d)},shape:function(c,f){var d=document.createElementNS(this._svgns,c);if(!d){return undefined}for(var e in f){if(isNaN(f[e])){continue}else{d.setAttribute(e,f[e])}}this._activeParent().appendChild(d);return d},_getTextParts:function(t,j,k){var h={width:0,height:0,parts:[]};if(undefined===t){return h}var o=0.6;var u=t.toString().split("<br>");var q=this._activeParent();var m=document.createElementNS(this._svgns,"text");this.attr(m,k);for(var l=0;l<u.length;l++){var d=u[l];var f=m.ownerDocument.createTextNode(d);m.appendChild(f);q.appendChild(m);var s;try{s=m.getBBox()}catch(p){}var n=a.jqx._rup(s.width);var c=a.jqx._rup(s.height*o);m.removeChild(f);h.width=Math.max(h.width,n);h.height+=c+(l>0?4:0);h.parts.push({width:n,height:c,text:d})}q.removeChild(m);return h},_measureText:function(f,e,d,c){return a.jqx.commonRenderer.measureText(f,e,d,c,this)},measureText:function(e,d,c){return this._measureText(e,d,c,false)},text:function(z,t,s,E,C,K,M,L,v,m,d){var B=this._measureText(z,K,M,true);var l=B.textPartsInfo;var j=l.parts;var D;if(!v){v="center"}if(!m){m="center"}if(j.length>1||L){D=this.beginGroup()}if(L){var k=this.createClipRect({x:a.jqx._rup(t)-1,y:a.jqx._rup(s)-1,width:a.jqx._rup(E)+2,height:a.jqx._rup(C)+2});this.setClip(D,k)}var q=this._activeParent();var O=0,n=0;var c=0.6;O=l.width;n=l.height;if(isNaN(E)||E<=0){E=O}if(isNaN(C)||C<=0){C=n}var u=E||0;var J=C||0;if(!K||K==0){s+=n;if(m=="center"||m=="middle"){s+=(J-n)/2}else{if(m=="bottom"){s+=J-n}}if(!E){E=O}if(!C){C=n}var q=this._activeParent();var p=0;for(var I=j.length-1;I>=0;I--){var A=document.createElementNS(this._svgns,"text");this.attr(A,M);this.attr(A,{cursor:"default"});var H=A.ownerDocument.createTextNode(j[I].text);A.appendChild(H);var P=t;var o=j[I].width;var f=j[I].height;if(v=="center"){P+=(u-o)/2}else{if(v=="right"){P+=(u-o)}}this.attr(A,{x:a.jqx._rup(P),y:a.jqx._rup(s+p),width:a.jqx._rup(o),height:a.jqx._rup(f)});q.appendChild(A);p-=j[I].height+4}if(D){this.endGroup();return D}return A}var F=a.jqx.commonRenderer.alignTextInRect(t,s,E,C,O,n,v,m,K,d);t=F.x;s=F.y;var G=this.shape("g",{transform:"translate("+t+","+s+")"});var e=this.shape("g",{transform:"rotate("+K+")"});G.appendChild(e);var p=0;for(var I=j.length-1;I>=0;I--){var N=document.createElementNS(this._svgns,"text");this.attr(N,M);this.attr(N,{cursor:"default"});var H=N.ownerDocument.createTextNode(j[I].text);N.appendChild(H);var P=0;var o=j[I].width;var f=j[I].height;if(v=="center"){P+=(l.width-o)/2}else{if(v=="right"){P+=(l.width-o)}}this.attr(N,{x:a.jqx._rup(P),y:a.jqx._rup(p),width:a.jqx._rup(o),height:a.jqx._rup(f)});e.appendChild(N);p-=f+4}q.appendChild(G);if(D){this.endGroup()}return G},line:function(e,h,d,f,i){var c=this.shape("line",{x1:e,y1:h,x2:d,y2:f});this.attr(c,i);return c},path:function(d,e){var c=this.shape("path");c.setAttribute("d",d);if(e){this.attr(c,e)}return c},rect:function(c,j,d,f,i){c=a.jqx._ptrnd(c);j=a.jqx._ptrnd(j);d=Math.max(1,a.jqx._rnd(d,1,false));f=Math.max(1,a.jqx._rnd(f,1,false));var e=this.shape("rect",{x:c,y:j,width:d,height:f});if(i){this.attr(e,i)}return e},circle:function(c,h,e,f){var d=this.shape("circle",{cx:c,cy:h,r:e});if(f){this.attr(d,f)}return d},pieSlicePath:function(d,j,i,f,h,e,c){return a.jqx.commonRenderer.pieSlicePath(d,j,i,f,h,e,c)},pieslice:function(l,j,i,e,h,c,k,d){var f=this.pieSlicePath(l,j,i,e,h,c,k);var m=this.shape("path");m.setAttribute("d",f);if(d){this.attr(m,d)}return m},attr:function(c,e){if(!c||!e){return}for(var d in e){if(d=="textContent"){c.textContent=e[d]}else{c.setAttribute(d,e[d])}}},removeAttr:function(c,e){if(!c||!e){return}for(var d in e){if(d=="textContent"){c.textContent=""}else{c.removeAttribute(e[d])}}},getAttr:function(d,c){return d.getAttribute(c)},_gradients:{},_toLinearGradient:function(f,k,l){var d="grd"+this._id+f.replace("#","")+(k?"v":"h");var c="url("+this.getWindowHref()+"#"+d+")";if(this._gradients[c]){return c}var e=document.createElementNS(this._svgns,"linearGradient");this.attr(e,{x1:"0%",y1:"0%",x2:k?"0%":"100%",y2:k?"100%":"0%",id:d});for(var h=0;h<l.length;h++){var j=l[h];var n=document.createElementNS(this._svgns,"stop");var m="stop-color:"+a.jqx.adjustColor(f,j[1]);this.attr(n,{offset:j[0]+"%",style:m});e.appendChild(n)}this._defs.appendChild(e);this._gradients[c]=true;return c},_toRadialGradient:function(f,l,k){var d="grd"+this._id+f.replace("#","")+"r"+(k!=undefined?k.key:"");var c="url("+this.getWindowHref()+"#"+d+")";if(this._gradients[c]){return c}var e=document.createElementNS(this._svgns,"radialGradient");if(k==undefined){this.attr(e,{cx:"50%",cy:"50%",r:"100%",fx:"50%",fy:"50%",id:d})}else{this.attr(e,{cx:k.x,cy:k.y,r:k.outerRadius,id:d,gradientUnits:"userSpaceOnUse"})}for(var h=0;h<l.length;h++){var j=l[h];var n=document.createElementNS(this._svgns,"stop");var m="stop-color:"+a.jqx.adjustColor(f,j[1]);this.attr(n,{offset:j[0]+"%",style:m});e.appendChild(n)}this._defs.appendChild(e);this._gradients[c]=true;return c}};a.jqx.vmlRenderer=function(){};a.jqx.vmlRenderer.prototype={init:function(j){var h="<div class='chartContainer' style=\"position:relative;overflow:hidden;\"><div>";j.append(h);this.host=j;var c=j.find(".chartContainer");c[0].style.width=j.width()+"px";c[0].style.height=j.height()+"px";var f=true;try{for(var d=0;d<document.namespaces.length;d++){if(document.namespaces[d].name=="v"&&document.namespaces[d].urn=="urn:schemas-microsoft-com:vml"){f=false;break}}}catch(k){return false}if(a.jqx.browser.msie&&parseInt(a.jqx.browser.version)<9&&(document.childNodes&&document.childNodes.length>0&&document.childNodes[0].data&&document.childNodes[0].data.indexOf("DOCTYPE")!=-1)){if(f){document.namespaces.add("v","urn:schemas-microsoft-com:vml")}this._ie8mode=true}else{if(f){document.namespaces.add("v","urn:schemas-microsoft-com:vml");document.createStyleSheet().cssText="v\\:* { behavior: url(#default#VML); display: inline-block; }"}}this.canvas=c[0];this._width=Math.max(a.jqx._rup(c.width()),0);this._height=Math.max(a.jqx._rup(c.height()),0);c[0].style.width=this._width+2;c[0].style.height=this._height+2;this._id=new Date().getTime();this.clear();return true},getType:function(){return"VML"},refresh:function(){},getRect:function(){return{x:0,y:0,width:this._width,height:this._height}},getContainer:function(){var c=this.host.find(".chartContainer");return c},clear:function(){while(this.canvas.childElementCount>0){this.removeHandler(this.canvas.firstElementChild);this.canvas.removeChild(this.canvas.firstElementChild)}this._gradients={};this._defaultParent=undefined},removeElement:function(c){if(c!=null){this.removeHandler(c);c.parentNode.removeChild(c)}},_openGroups:[],beginGroup:function(){var c=this._activeParent();var d=document.createElement("v:group");d.style.position="absolute";d.coordorigin="0,0";d.coordsize=this._width+","+this._height;d.style.left=0;d.style.top=0;d.style.width=this._width;d.style.height=this._height;c.appendChild(d);this._openGroups.push(d);return d},endGroup:function(){if(this._openGroups.length==0){return}this._openGroups.pop()},_activeParent:function(){return this._openGroups.length==0?this.canvas:this._openGroups[this._openGroups.length-1]},createClipRect:function(c){var d=document.createElement("div");d.style.height=(c.height+1)+"px";d.style.width=(c.width+1)+"px";d.style.position="absolute";d.style.left=c.x+"px";d.style.top=c.y+"px";d.style.overflow="hidden";this._clipId=this._clipId||0;d.id="cl"+this._id+"_"+(++this._clipId).toString();this._activeParent().appendChild(d);return d},setClip:function(d,c){},_clipId:0,addHandler:function(c,e,d){if(a(c).on){a(c).on(e,d)}else{a(c).bind(e,d)}},removeHandler:function(c,e,d){if(a(c).off){a(c).off(e,d)}else{a(c).unbind(e,d)}},on:function(c,e,d){this.addHandler(c,e,d)},off:function(c,e,d){this.removeHandler(c,e,d)},_getTextParts:function(q,h,j){var f={width:0,height:0,parts:[]};var o=0.6;var s=q.toString().split("<br>");var p=this._activeParent();var l=document.createElement("v:textbox");this.attr(l,j);p.appendChild(l);for(var k=0;k<s.length;k++){var d=s[k];var e=document.createElement("span");e.appendChild(document.createTextNode(d));l.appendChild(e);if(j&&j["class"]){e.className=j["class"]}var n=a(l);var m=a.jqx._rup(n.width());var c=a.jqx._rup(n.height()*o);if(c==0&&a.jqx.browser.msie&&parseInt(a.jqx.browser.version)<9){var t=n.css("font-size");if(t){c=parseInt(t);if(isNaN(c)){c=0}}}l.removeChild(e);f.width=Math.max(f.width,m);f.height+=c+(k>0?2:0);f.parts.push({width:m,height:c,text:d})}p.removeChild(l);return f},_measureText:function(f,e,d,c){if(Math.abs(e)>45){e=90}else{e=0}return a.jqx.commonRenderer.measureText(f,e,d,c,this)},measureText:function(e,d,c){return this._measureText(e,d,c,false)},text:function(u,p,o,D,z,J,L,K,t,k){var E;if(L&&L.stroke){E=L.stroke}if(E==undefined){E="black"}var v=this._measureText(u,J,L,true);var f=v.textPartsInfo;var c=f.parts;var M=v.width;var l=v.height;if(isNaN(D)||D==0){D=M}if(isNaN(z)||z==0){z=l}var B;if(!t){t="center"}if(!k){k="center"}if(c.length>0||K){B=this.beginGroup()}if(K){var d=this.createClipRect({x:a.jqx._rup(p),y:a.jqx._rup(o),width:a.jqx._rup(D),height:a.jqx._rup(z)});this.setClip(B,d)}var n=this._activeParent();var s=D||0;var I=z||0;if(Math.abs(J)>45){J=90}else{J=0}var A=0,H=0;if(t=="center"){A+=(s-M)/2}else{if(t=="right"){A+=(s-M)}}if(k=="center"){H=(I-l)/2}else{if(k=="bottom"){H=I-l}}if(J==0){o+=l+H;p+=A}else{p+=M+A;o+=H}var m=0,N=0;var e;for(var G=c.length-1;G>=0;G--){var C=c[G];var q=(M-C.width)/2;if(J==0&&t=="left"){q=0}else{if(J==0&&t=="right"){q=M-C.width}else{if(J==90){q=(l-C.width)/2}}}var j=m-C.height;H=J==90?q:j;A=J==90?j:q;e=document.createElement("v:textbox");e.style.position="absolute";e.style.left=a.jqx._rup(p+A);e.style.top=a.jqx._rup(o+H);e.style.width=a.jqx._rup(C.width);e.style.height=a.jqx._rup(C.height);if(J==90){e.style.filter="progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";e.style.height=a.jqx._rup(C.height)+5}var F=document.createElement("span");F.appendChild(document.createTextNode(C.text));if(L&&L["class"]){F.className=L["class"]}e.appendChild(F);n.appendChild(e);m-=C.height+(G>0?2:0)}if(B){this.endGroup();return n}return e},shape:function(c,f){var d=document.createElement(this._createElementMarkup(c));if(!d){return undefined}for(var e in f){d.setAttribute(e,f[e])}this._activeParent().appendChild(d);return d},line:function(f,i,e,h,j){var c="M "+f+","+i+" L "+e+","+h+" X E";var d=this.path(c);this.attr(d,j);return d},_createElementMarkup:function(c){var d="<v:"+c+' style=""></v:'+c+">";if(this._ie8mode){d=d.replace('style=""','style="behavior: url(#default#VML);"')}return d},path:function(d,e){var c=document.createElement(this._createElementMarkup("shape"));c.style.position="absolute";c.coordsize=this._width+" "+this._height;c.coordorigin="0 0";c.style.width=parseInt(this._width);c.style.height=parseInt(this._height);c.style.left=0+"px";c.style.top=0+"px";c.setAttribute("path",d);this._activeParent().appendChild(c);if(e){this.attr(c,e)}return c},rect:function(c,j,d,e,i){c=a.jqx._ptrnd(c);j=a.jqx._ptrnd(j);d=a.jqx._rup(d);e=a.jqx._rup(e);var f=this.shape("rect",i);f.style.position="absolute";f.style.left=c;f.style.top=j;f.style.width=d;f.style.height=e;f.strokeweight=0;if(i){this.attr(f,i)}return f},circle:function(c,h,e,f){var d=this.shape("oval");c=a.jqx._ptrnd(c-e);h=a.jqx._ptrnd(h-e);e=a.jqx._rup(e);d.style.position="absolute";d.style.left=c;d.style.top=h;d.style.width=e*2;d.style.height=e*2;if(f){this.attr(d,f)}return d},updateCircle:function(e,c,f,d){if(c==undefined){c=parseFloat(e.style.left)+parseFloat(e.style.width)/2}if(f==undefined){f=parseFloat(e.style.top)+parseFloat(e.style.height)/2}if(d==undefined){d=parseFloat(e.width)/2}c=a.jqx._ptrnd(c-d);f=a.jqx._ptrnd(f-d);d=a.jqx._rup(d);e.style.left=c;e.style.top=f;e.style.width=d*2;e.style.height=d*2},pieSlicePath:function(m,l,j,u,E,F,e){if(!u){u=1}var o=Math.abs(E-F);var s=o>180?1:0;if(o>360){E=0;F=360}var t=E*Math.PI*2/360;var k=F*Math.PI*2/360;var B=m,A=m,h=l,f=l;var p=!isNaN(j)&&j>0;if(p){e=0}if(e>0){var n=o/2+E;var D=n*Math.PI*2/360;m+=e*Math.cos(D);l-=e*Math.sin(D)}if(p){var z=j;B=a.jqx._ptrnd(m+z*Math.cos(t));h=a.jqx._ptrnd(l-z*Math.sin(t));A=a.jqx._ptrnd(m+z*Math.cos(k));f=a.jqx._ptrnd(l-z*Math.sin(k))}var w=a.jqx._ptrnd(m+u*Math.cos(t));var v=a.jqx._ptrnd(m+u*Math.cos(k));var d=a.jqx._ptrnd(l-u*Math.sin(t));var c=a.jqx._ptrnd(l-u*Math.sin(k));u=a.jqx._ptrnd(u);j=a.jqx._ptrnd(j);m=a.jqx._ptrnd(m);l=a.jqx._ptrnd(l);var i=Math.round(E*65535);var C=Math.round((F-E)*65536);if(j<0){j=1}var q="";if(p){q="M"+B+" "+h;q+=" AE "+m+" "+l+" "+j+" "+j+" "+i+" "+C;q+=" L "+v+" "+c;i=Math.round((E-F)*65535);C=Math.round(F*65536);q+=" AE "+m+" "+l+" "+u+" "+u+" "+C+" "+i;q+=" L "+B+" "+h}else{q="M"+m+" "+l;q+=" AE "+m+" "+l+" "+u+" "+u+" "+i+" "+C}q+=" X E";return q},pieslice:function(m,k,j,f,i,c,l,e){var h=this.pieSlicePath(m,k,j,f,i,c,l);var d=this.path(h,e);if(e){this.attr(d,e)}return d},_keymap:[{svg:"fill",vml:"fillcolor"},{svg:"stroke",vml:"strokecolor"},{svg:"stroke-width",vml:"strokeweight"},{svg:"stroke-dasharray",vml:"dashstyle"},{svg:"fill-opacity",vml:"fillopacity"},{svg:"stroke-opacity",vml:"strokeopacity"},{svg:"opacity",vml:"opacity"},{svg:"cx",vml:"style.left"},{svg:"cy",vml:"style.top"},{svg:"height",vml:"style.height"},{svg:"width",vml:"style.width"},{svg:"x",vml:"style.left"},{svg:"y",vml:"style.top"},{svg:"d",vml:"v"},{svg:"display",vml:"style.display"}],_translateParam:function(c){for(var d in this._keymap){if(this._keymap[d].svg==c){return this._keymap[d].vml}}return c},attr:function(d,f){if(!d||!f){return}for(var e in f){var c=this._translateParam(e);if(undefined==f[e]){continue}if(c=="fillcolor"&&f[e].indexOf("grd")!=-1){d.type=f[e]}else{if(c=="fillcolor"&&f[e]=="transparent"){d.style.filter="alpha(opacity=0)";d["-ms-filter"]="progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"}else{if(c=="opacity"||c=="fillopacity"){if(d.fill){d.fill.opacity=f[e]}}else{if(c=="textContent"){d.children[0].innerText=f[e]}else{if(c=="dashstyle"){d.dashstyle=f[e].replace(","," ")}else{if(c.indexOf("style.")==-1){d[c]=f[e]}else{d.style[c.replace("style.","")]=f[e]}}}}}}}},removeAttr:function(c,e){if(!c||!e){return}for(var d in e){c.removeAttribute(e[d])}},getAttr:function(e,d){var c=this._translateParam(d);if(c=="opacity"||c=="fillopacity"){if(e.fill){return e.fill.opacity}else{return 1}}if(c.indexOf("style.")==-1){return e[c]}return e.style[c.replace("style.","")]},_gradients:{},_toRadialGradient:function(c,e,d){return c},_toLinearGradient:function(j,m,n){if(this._ie8mode){return j}var e="grd"+j.replace("#","")+(m?"v":"h");var f="#"+e+"";if(this._gradients[f]){return f}var h=document.createElement(this._createElementMarkup("fill"));h.type="gradient";h.method="linear";h.angle=m?0:90;var d="";for(var k=0;k<n.length;k++){var l=n[k];if(l>0){d+=", "}d+=l[0]+"% "+a.jqx.adjustColor(j,l[1])}h.colors=d;var c=document.createElement(this._createElementMarkup("shapetype"));c.appendChild(h);c.id=e;this.canvas.appendChild(c);return f}};a.jqx.HTML5Renderer=function(){};a.jqx.ptrnd=function(d){if(Math.abs(Math.round(d)-d)==0.5){return d}var c=Math.round(d);if(c<d){c=c-1}return c+0.5};a.jqx.HTML5Renderer.prototype={init:function(c){try{this.host=c;this.host.append("<div class='chartContainer' style='position:relative' onselectstart='return false;'><canvas id='__jqxCanvasWrap' style='width:100%; height: 100%;'/></div>");this.canvas=c.find("#__jqxCanvasWrap");this.canvas[0].width=c.width();this.canvas[0].height=c.height();this.ctx=this.canvas[0].getContext("2d");this._elements={};this._maxId=0;this._gradientId=0;this._gradients={};this._currentPoint={x:0,y:0};this._lastCmd="";this._pos=0}catch(d){return false}return true},getType:function(){return"HTML5"},getContainer:function(){var c=this.host.find(".chartContainer");return c},getRect:function(){return{x:0,y:0,width:this.canvas[0].width-1,height:this.canvas[0].height-1}},beginGroup:function(){},endGroup:function(){},setClip:function(){},createClipRect:function(c){},addHandler:function(c,e,d){},removeHandler:function(c,e,d){},on:function(c,e,d){this.addHandler(c,e,d)},off:function(c,e,d){this.removeHandler(c,e,d)},clear:function(){this._elements={};this._maxId=0;this._renderers._gradients={};this._gradientId=0},removeElement:function(c){if(undefined==c){return}if(this._elements[c.id]){delete this._elements[c.id]}},shape:function(c,f){var d={type:c,id:this._maxId++};for(var e in f){d[e]=f[e]}this._elements[d.id]=d;return d},attr:function(c,e){for(var d in e){c[d]=e[d]}},removeAttr:function(c,e){for(var d in e){delete c[e[d]]}},rect:function(c,j,d,f,i){if(isNaN(c)){throw'Invalid value for "x"'}if(isNaN(j)){throw'Invalid value for "y"'}if(isNaN(d)){throw'Invalid value for "width"'}if(isNaN(f)){throw'Invalid value for "height"'}var e=this.shape("rect",{x:c,y:j,width:d,height:f});if(i){this.attr(e,i)}return e},path:function(c,e){var d=this.shape("path",e);this.attr(d,{d:c});return d},line:function(d,f,c,e,h){return this.path("M "+d+","+f+" L "+c+","+e,h)},circle:function(c,h,e,f){var d=this.shape("circle",{x:c,y:h,r:e});if(f){this.attr(d,f)}return d},pieSlicePath:function(d,j,i,f,h,e,c){return a.jqx.commonRenderer.pieSlicePath(d,j,i,f,h,e,c)},pieslice:function(l,j,i,f,h,c,k,d){var e=this.path(this.pieSlicePath(l,j,i,f,h,c,k),d);this.attr(e,{x:l,y:j,innerRadius:i,outerRadius:f,angleFrom:h,angleTo:c});return e},_getCSSStyle:function(d){var k=document.styleSheets;try{for(var f=0;f<k.length;f++){for(var c=0;k[f].cssRules&&c<k[f].cssRules.length;c++){if(k[f].cssRules[c].selectorText.indexOf(d)!=-1){return k[f].cssRules[c].style}}}}catch(h){}return{}},_getTextParts:function(s,h,j){var n="Arial";var t="10pt";var o="";if(j&&j["class"]){var c=this._getCSSStyle(j["class"]);if(c.fontSize){t=c.fontSize}if(c.fontFamily){n=c.fontFamily}if(c.fontWeight){o=c.fontWeight}}this.ctx.font=o+" "+t+" "+n;var f={width:0,height:0,parts:[]};var m=0.6;var q=s.toString().split("<br>");for(var k=0;k<q.length;k++){var e=q[k];var l=this.ctx.measureText(e).width;var p=document.createElement("span.jqxchart");p.font=this.ctx.font;p.textContent=e;document.body.appendChild(p);var d=p.offsetHeight*m;document.body.removeChild(p);f.width=Math.max(f.width,a.jqx._rup(l));f.height+=d+(k>0?4:0);f.parts.push({width:l,height:d,text:e})}return f},_measureText:function(f,e,d,c){return a.jqx.commonRenderer.measureText(f,e,d,c,this)},measureText:function(e,d,c){return this._measureText(e,d,c,false)},text:function(o,n,l,d,p,h,i,e,j,m,f){var q=this.shape("text",{text:o,x:n,y:l,width:d,height:p,angle:h,clip:e,halign:j,valign:m,rotateAround:f});if(i){this.attr(q,i)}q.fontFamily="Arial";q.fontSize="10pt";q.fontWeight="";q.color="#000000";if(i&&i["class"]){var c=this._getCSSStyle(i["class"]);q.fontFamily=c.fontFamily||q.fontFamily;q.fontSize=c.fontSize||q.fontSize;q.fontWeight=c.fontWeight||q.fontWeight;q.color=c.color||q.color}var k=this._measureText(o,0,i,true);this.attr(q,{textPartsInfo:k.textPartsInfo,textWidth:k.width,textHeight:k.height});if(d<=0||isNaN(d)){this.attr(q,{width:k.width})}if(p<=0||isNaN(p)){this.attr(q,{height:k.height})}return q},_toLinearGradient:function(d,j,h){if(this._renderers._gradients[d]){return d}var c=[];for(var f=0;f<h.length;f++){c.push({percent:h[f][0]/100,color:a.jqx.adjustColor(d,h[f][1])})}var e="gr"+this._gradientId++;this.createGradient(e,j?"vertical":"horizontal",c);return e},_toRadialGradient:function(d,h){if(this._renderers._gradients[d]){return d}var c=[];for(var f=0;f<h.length;f++){c.push({percent:h[f][0]/100,color:a.jqx.adjustColor(d,h[f][1])})}var e="gr"+this._gradientId++;this.createGradient(e,"radial",c);return e},createGradient:function(e,d,c){this._renderers.createGradient(this,e,d,c)},_renderers:{createGradient:function(f,e,d,c){f._gradients[e]={orientation:d,colorStops:c}},setStroke:function(d,e){var c=d.ctx;c.strokeStyle=e.stroke||"transparent";c.lineWidth=e["stroke-width"]||1;if(e["fill-opacity"]!=undefined){c.globalAlpha=e["fill-opacity"]}else{if(e.opacity!=undefined){c.globalAlpha=e.opacity}else{c.globalAlpha=1}}if(c.setLineDash){if(e["stroke-dasharray"]){c.setLineDash(e["stroke-dasharray"].split(","))}else{c.setLineDash([])}}},setFillStyle:function(d,h){var p=d.ctx;p.fillStyle="transparent";if(h["fill-opacity"]!=undefined){p.globalAlpha=h["fill-opacity"]}else{if(h.opacity!=undefined){p.globalAlpha=h.opacity}else{p.globalAlpha=1}}if(h.fill&&h.fill.indexOf("#")==-1&&d._gradients[h.fill]){var n=d._gradients[h.fill].orientation!="horizontal";var k=d._gradients[h.fill].orientation=="radial";var e=a.jqx.ptrnd(h.x);var o=a.jqx.ptrnd(h.y);var c=a.jqx.ptrnd(h.x+(n?0:h.width));var l=a.jqx.ptrnd(h.y+(n?h.height:0));var m;if((h.type=="circle"||h.type=="path"||h.type=="rect")&&k){x=a.jqx.ptrnd(h.x);y=a.jqx.ptrnd(h.y);r1=h.innerRadius||0;r2=h.outerRadius||h.r||0;if(h.type=="rect"){x+=h.width/2;y+=h.height/2}m=p.createRadialGradient(x,y,r1,x,y,r2)}if(!k){if(isNaN(e)||isNaN(c)||isNaN(o)||isNaN(l)){e=0;o=0;c=n?0:p.canvas.width;l=n?p.canvas.height:0}m=p.createLinearGradient(e,o,c,l)}var f=d._gradients[h.fill].colorStops;for(var j=0;j<f.length;j++){m.addColorStop(f[j].percent,f[j].color)}p.fillStyle=m}else{if(h.fill){p.fillStyle=h.fill}}},rect:function(c,d){if(d.width==0||d.height==0){return}c.fillRect(a.jqx.ptrnd(d.x),a.jqx.ptrnd(d.y),d.width,d.height);c.strokeRect(a.jqx.ptrnd(d.x),a.jqx.ptrnd(d.y),d.width,d.height)},circle:function(c,d){if(d.r==0){return}c.beginPath();c.arc(a.jqx.ptrnd(d.x),a.jqx.ptrnd(d.y),d.r,0,Math.PI*2,false);c.closePath();c.fill();c.stroke()},_parsePoint:function(d){var c=this._parseNumber(d);var e=this._parseNumber(d);return({x:c,y:e})},_parseNumber:function(e){var f=false;for(var c=this._pos;c<e.length;c++){if((e[c]>="0"&&e[c]<="9")||e[c]=="."||e[c]=="e"||(e[c]=="-"&&!f)||(e[c]=="-"&&c>=1&&e[c-1]=="e")){f=true;continue}if(!f&&(e[c]==" "||e[c]==",")){this._pos++;continue}break}var d=parseFloat(e.substring(this._pos,c));if(isNaN(d)){return undefined}this._pos=c;return d},_cmds:"mlcazq",_isRelativeCmd:function(c){return a.jqx.string.contains(this._cmds,c)},_parseCmd:function(c){for(var d=this._pos;d<c.length;d++){if(a.jqx.string.containsIgnoreCase(this._cmds,c[d])){this._pos=d+1;this._lastCmd=c[d];return this._lastCmd}if(c[d]==" "){this._pos++;continue}if(c[d]>="0"&&c[d]<="9"){this._pos=d;if(this._lastCmd==""){break}else{return this._lastCmd}}}return undefined},_toAbsolutePoint:function(c){return{x:this._currentPoint.x+c.x,y:this._currentPoint.y+c.y}},path:function(E,N){var B=N.d;this._pos=0;this._lastCmd="";var n=undefined;this._currentPoint={x:0,y:0};E.beginPath();var I=0;while(this._pos<B.length){var H=this._parseCmd(B);if(H==undefined){break}if(H=="M"||H=="m"){var F=this._parsePoint(B);if(F==undefined){break}E.moveTo(F.x,F.y);this._currentPoint=F;if(n==undefined){n=F}continue}if(H=="L"||H=="l"){var F=this._parsePoint(B);if(F==undefined){break}E.lineTo(F.x,F.y);this._currentPoint=F;continue}if(H=="A"||H=="a"){var j=this._parseNumber(B);var h=this._parseNumber(B);var L=this._parseNumber(B)*(Math.PI/180);var P=this._parseNumber(B);var f=this._parseNumber(B);var q=this._parsePoint(B);if(this._isRelativeCmd(H)){q=this._toAbsolutePoint(q)}if(j==0||h==0){continue}var k=this._currentPoint;var K={x:Math.cos(L)*(k.x-q.x)/2+Math.sin(L)*(k.y-q.y)/2,y:-Math.sin(L)*(k.x-q.x)/2+Math.cos(L)*(k.y-q.y)/2};var l=Math.pow(K.x,2)/Math.pow(j,2)+Math.pow(K.y,2)/Math.pow(h,2);if(l>1){j*=Math.sqrt(l);h*=Math.sqrt(l)}var t=(P==f?-1:1)*Math.sqrt(((Math.pow(j,2)*Math.pow(h,2))-(Math.pow(j,2)*Math.pow(K.y,2))-(Math.pow(h,2)*Math.pow(K.x,2)))/(Math.pow(j,2)*Math.pow(K.y,2)+Math.pow(h,2)*Math.pow(K.x,2)));if(isNaN(t)){t=0}var J={x:t*j*K.y/h,y:t*-h*K.x/j};var D={x:(k.x+q.x)/2+Math.cos(L)*J.x-Math.sin(L)*J.y,y:(k.y+q.y)/2+Math.sin(L)*J.x+Math.cos(L)*J.y};var C=function(i){return Math.sqrt(Math.pow(i[0],2)+Math.pow(i[1],2))};var z=function(m,i){return(m[0]*i[0]+m[1]*i[1])/(C(m)*C(i))};var O=function(m,i){return(m[0]*i[1]<m[1]*i[0]?-1:1)*Math.acos(z(m,i))};var G=O([1,0],[(K.x-J.x)/j,(K.y-J.y)/h]);var p=[(K.x-J.x)/j,(K.y-J.y)/h];var o=[(-K.x-J.x)/j,(-K.y-J.y)/h];var M=O(p,o);if(z(p,o)<=-1){M=Math.PI}if(z(p,o)>=1){M=0}if(f==0&&M>0){M=M-2*Math.PI}if(f==1&&M<0){M=M+2*Math.PI}var z=(j>h)?j:h;var A=(j>h)?1:j/h;var w=(j>h)?h/j:1;E.translate(D.x,D.y);E.rotate(L);E.scale(A,w);E.arc(0,0,z,G,G+M,1-f);E.scale(1/A,1/w);E.rotate(-L);E.translate(-D.x,-D.y);continue}if((H=="Z"||H=="z")&&n!=undefined){E.lineTo(n.x,n.y);this._currentPoint=n;continue}if(H=="C"||H=="c"){var e=this._parsePoint(B);var d=this._parsePoint(B);var c=this._parsePoint(B);E.bezierCurveTo(e.x,e.y,d.x,d.y,c.x,c.y);this._currentPoint=c;continue}if(H=="Q"||H=="q"){var e=this._parsePoint(B);var d=this._parsePoint(B);E.quadraticCurveTo(e.x,e.y,d.x,d.y);this._currentPoint=d;continue}}E.fill();E.stroke();E.closePath()},text:function(A,G){var p=a.jqx.ptrnd(G.x);var o=a.jqx.ptrnd(G.y);var v=a.jqx.ptrnd(G.width);var t=a.jqx.ptrnd(G.height);var s=G.halign;var k=G.valign;var D=G.angle;var c=G.rotateAround;var f=G.textPartsInfo;var e=f.parts;var E=G.clip;if(E==undefined){E=true}A.save();if(!s){s="center"}if(!k){k="center"}if(E){A.rect(p,o,v,t);A.clip()}var H=G.textWidth;var l=G.textHeight;var q=v||0;var C=t||0;A.fillStyle=G.color;A.font=G.fontWeight+" "+G.fontSize+" "+G.fontFamily;if(!D||D==0){o+=l;if(k=="center"||k=="middle"){o+=(C-l)/2}else{if(k=="bottom"){o+=C-l}}if(!v){v=H}if(!t){t=l}var n=0;for(var B=e.length-1;B>=0;B--){var u=e[B];var I=p;var m=e[B].width;var d=e[B].height;if(s=="center"){I+=(q-m)/2}else{if(s=="right"){I+=(q-m)}}A.fillText(u.text,I,o+n);n-=u.height+(B>0?4:0)}A.restore();return}var z=a.jqx.commonRenderer.alignTextInRect(p,o,v,t,H,l,s,k,D,c);p=z.x;o=z.y;var j=D*Math.PI*2/360;A.translate(p,o);A.rotate(j);var n=0;var F=f.width;for(var B=e.length-1;B>=0;B--){var I=0;if(s=="center"){I+=(F-e[B].width)/2}else{if(s=="right"){I+=(F-e[B].width)}}A.fillText(e[B].text,I,n);n-=e[B].height+4}A.restore()}},refresh:function(){this.ctx.clearRect(0,0,this.canvas[0].width,this.canvas[0].height);for(var c in this._elements){var d=this._elements[c];this._renderers.setFillStyle(this,d);this._renderers.setStroke(this,d);this._renderers[this._elements[c].type](this.ctx,d)}}};a.jqx.createRenderer=function(c,e){var d=c;var f=d.renderer=null;if(document.createElementNS&&(d.renderEngine!="HTML5"&&d.renderEngine!="VML")){f=new a.jqx.svgRenderer();if(!f.init(e)){if(d.renderEngine=="SVG"){throw"Your browser does not support SVG"}return null}}if(f==null&&d.renderEngine!="HTML5"){f=new a.jqx.vmlRenderer();if(!f.init(e)){if(d.renderEngine=="VML"){throw"Your browser does not support VML"}return null}d._isVML=true}if(f==null&&(d.renderEngine=="HTML5"||d.renderEngine==undefined)){f=new a.jqx.HTML5Renderer();if(!f.init(e)){throw"Your browser does not support HTML5 Canvas"}}d.renderer=f;return f},a.jqx._widgetToImage=function(q,k,f,o,i,h){var m=q;if(!m){return false}if(f==undefined||f==""){f="image."+k}var n=m.renderEngine;var d=m.enableAnimations;m.enableAnimations=false;m.renderEngine="HTML5";if(m.renderEngine!=n){try{m.refresh()}catch(j){m.renderEngine=n;m.refresh();m.enableAnimations=d;return false}}var c=m.renderer.getContainer().find("canvas")[0];var l=true;if(a.isFunction(h)){l=h(q,c)}var p=true;if(l){p=a.jqx.exportImage(c,k,f,o,i)}if(m.renderEngine!=n){m.renderEngine=n;m.refresh();m.enableAnimations=d}return p};a.jqx.getByPriority=function(c){var e=undefined;for(var d=0;d<c.length&&e==undefined;d++){if(e==undefined&&c[d]!=undefined){e=c[d]}}return e};a.jqx.exportImage=function(f,p,h,t,k){if(!f){return false}var m=p.toLowerCase()==="pdf";if(m){p="jpeg"}if(h==undefined||h==""){h="image."+p}if(t==undefined||t==""){throw"Please specifiy export server"}var v=true;try{if(f){var i=f.toDataURL("image/"+p);if(m){if(!a.jqx.pdfExport){a.jqx.pdfExport={orientation:"portrait",paperSize:"a4"}}var j=595;switch(a.jqx.pdfExport.paperSize){case"legal":var j=612;if(a.jqx.pdfExport.orientation!=="portrait"){j=1008}break;case"letter":var j=612;if(a.jqx.pdfExport.orientation!=="portrait"){j=792}break;case"a3":var j=841;if(a.jqx.pdfExport.orientation!=="portrait"){j=1190}break;case"a4":var j=595;if(a.jqx.pdfExport.orientation!=="portrait"){j=842}break;case"a5":var j=420;if(a.jqx.pdfExport.orientation!=="portrait"){j=595}break}var l=a(f).width();var q=l*72/96;if(q>=j-20){q=j-20}var s;try{var s=new pdfDataExport(a.jqx.pdfExport.orientation,"pt",a.jqx.pdfExport.paperSize)}catch(o){var s=new window.jqxPdfDataExport(a.jqx.pdfExport.orientation,"pt",a.jqx.pdfExport.paperSize)}s.addImage(i,"JPEG",10,10,q,0);s.save(h);return}i=i.replace("data:image/"+p+";base64,","");if(k){a.ajax({dataType:"string",url:t,type:"POST",data:{content:i,fname:h},async:false,success:function(w,e,z){v=true},error:function(w,e,z){v=false}})}else{var d=document.createElement("form");d.method="POST";d.action=t;d.style.display="none";document.body.appendChild(d);var u=document.createElement("input");u.name="fname";u.value=h;u.style.display="none";var c=document.createElement("input");c.name="content";c.value=i;c.style.display="none";d.appendChild(u);d.appendChild(c);d.submit();document.body.removeChild(d);v=true}}}catch(n){v=false}return v}})(jqxBaseFramework);(function(a){jqxPlot=function(){};jqxPlot.prototype={get:function(e,c,d){return d!==undefined?e[c][d]:e[c]},min:function(h,e){var d=NaN;for(var c=0;c<h.length;c++){var f=this.get(h,c,e);if(isNaN(d)||f<d){d=f}}return d},max:function(h,e){var c=NaN;for(var d=0;d<h.length;d++){var f=this.get(h,d,e);if(isNaN(c)||f>c){c=f}}return c},sum:function(h,d){var e=0;for(var c=0;c<h.length;c++){var f=this.get(h,c,d);if(!isNaN(f)){e+=f}}return e},count:function(h,d){var e=0;for(var c=0;c<h.length;c++){var f=this.get(h,c,d);if(!isNaN(f)){e++}}return e},avg:function(d,c){return this.sum(d,c)/Math.max(1,count(d,c))},filter:function(f,e){if(!e){return f}var c=[];for(var d=0;d<f.length;d++){if(e(f[d])){c.push(f[d])}}return c},scale:function(e,k,l,i){if(isNaN(e)){return NaN}if(e<Math.min(k.min,k.max)||e>Math.max(k.min,k.max)){if(!i||i.ignore_range!==true){return NaN}}var p=NaN;var n=1;if(k.type===undefined||k.type!="logarithmic"){var m=Math.abs(k.max-k.min);if(!m){m=1}n=Math.abs(e-Math.min(k.min,k.max))/m}else{if(k.type==="logarithmic"){var f=k.base;if(isNaN(f)){f=10}var j=Math.min(k.min,k.max);if(j<=0){j=1}var o=Math.max(k.min,k.max);if(o<=0){o=1}var h=a.jqx.log(o,f);o=Math.pow(f,h);var d=a.jqx.log(j,f);j=Math.pow(f,d);var c=a.jqx.log(e,f);n=Math.abs(c-d)/(h-d)}}if(l.type==="logarithmic"){var f=l.base;if(isNaN(f)){f=10}var h=a.jqx.log(l.max,f);var d=a.jqx.log(l.min,f);if(l.flip){n=1-n}var c=Math.min(d,h)+n*Math.abs(h-d);p=Math.pow(f,c)}else{p=Math.min(l.min,l.max)+n*Math.abs(l.max-l.min);if(l.flip){p=Math.max(l.min,l.max)-p+l.min}}return p},axis:function(q,s,m){if(m<=1){return[s,q]}var h=q;var k=s;if(isNaN(m)||m<2){m=2}var c=0;while(Math.round(q)!=q&&Math.round(s)!=s&&c<10){q*=10;s*=10;c++}var n=(s-q)/m;while(c<10&&Math.round(n)!=n){q*=10;s*=10;n*=10;c++}var w=[1,2,5];var j=0;var t=0;while(true){var o=t%w.length;var f=Math.floor(t/w.length);var p=Math.pow(10,f)*w[o];o=(t+1)%w.length;f=Math.floor((t+1)/w.length);var l=Math.pow(10,f)*w[o];if(n>=p&&n<l){break}t++}var e=l;var u=[];var v=a.jqx._rnd(q,e,false);var d=c<=0?1:Math.pow(10,c);while(v<s+e){u.push(v/d);v+=e}return u}}})(jqxBaseFramework);



/***/ }),

/***/ 802:
/***/ (function(module, exports) {

/*
jQWidgets v5.5.0 (2017-Dec)
Copyright (c) 2011-2017 jQWidgets.
License: https://jqwidgets.com/license/
*/

(function(d){var b={defineInstance:function(){var e={width:350,height:350,radius:"50%",endAngle:270,startAngle:30,int64:false,editableLabels:false,value:0,min:0,max:220,disabled:false,ticksDistance:"20%",colorScheme:"scheme01",animationDuration:400,showRanges:true,easing:"easeOutCubic",labels:null,pointer:null,cap:null,caption:null,border:null,ticksMinor:null,ticksMajor:null,tickMode:"default",niceInterval:false,style:null,ranges:[],_radius:100,_border:null,_radiusDifference:2,_pointer:null,_labels:[],_cap:null,_ticks:[],_ranges:[],_gauge:null,_caption:null,_animationTimeout:10,renderer:null,_animations:[],aria:{"aria-valuenow":{name:"value",type:"number"},"aria-valuemin":{name:"min",type:"number"},"aria-valuemax":{name:"max",type:"number"},"aria-disabled":{name:"disabled",type:"boolean"}}};if(this===d.jqx._jqxGauge.prototype){return e}d.extend(true,this,e);return e},createInstance:function(f){var e=this;e.that=this;d.jqx.aria(e);e._radius=e.radius;e.endAngle=e.endAngle*Math.PI/180+Math.PI/2;e.startAngle=e.startAngle*Math.PI/180+Math.PI/2;if(e.int64==="s"){if(!d.jqx.longInt){throw new Error("jqxGauge: Missing reference to jqxmath.js")}d.jqx.longInt(e);e._value64=new d.jqx.math().fromString(e.value.toString(),10);e._min64=new d.jqx.math().fromString(e.min.toString(),10);e._max64=new d.jqx.math().fromString(e.max.toString(),10)}else{if(e.int64==="u"){try{BigNumber}catch(g){throw new Error("jqxGauge: Missing reference to jqxmath.js")}e._value64=new BigNumber(e.value);e._min64=new BigNumber(e.min);e._max64=new BigNumber(e.max)}else{e.value=new Number(e.value)}}e._refresh();e.renderer.getContainer().css("overflow","hidden");if(e.int64!==false){e.setValue(e._value64,0)}else{e.setValue(e.value,0)}d.jqx.utilities.resize(e.host,function(){e._refresh(true)});e.host.addClass(e.toThemeProperty("jqx-widget"))},_validateEasing:function(){return !!d.easing[this.easing]},_validateProperties:function(){if(this.startAngle===this.endAngle){throw new Error("The end angle can not be equal to the start angle!")}if(!this._validateEasing()){this.easing="linear"}this.ticksDistance=this._validatePercentage(this.ticksDistance,"20%");this.border=this._borderConstructor(this.border,this);this.style=this.style||{fill:"#ffffff",stroke:"#E0E0E0"};this.ticksMinor=new this._tickConstructor(this.ticksMinor,this);this.ticksMajor=new this._tickConstructor(this.ticksMajor,this);this.cap=new this._capConstructor(this.cap,this);this.pointer=new this._pointerConstructor(this.pointer,this);this.labels=new this._labelsConstructor(this.labels,this);this.caption=new this._captionConstructor(this.caption,this);for(var e=0;e<this.ranges.length;e+=1){this.ranges[e]=new this._rangeConstructor(this.ranges[e],this)}},_hostInit:function(f){var e=this._getScale(this.width,"width",this.host.parent()),l=this._getScale(this.height,"height",this.host.parent()),g=this._outerBorderOffset(),m=this.host,i;m.width(e);m.height(l);this.radius=i=0;var k=(this._getScale(this._radius,"width",this.host)||e/2)-g;var j=(this._getScale(this._radius,"height",this.host)||l/2)-g;this.radius=i=Math.min(k,j);this._originalRadius=parseInt(this.radius,10)-this._radiusDifference;this._innerRadius=this._originalRadius;if(this.border){this._innerRadius-=this._getSize(this.border.size)}if(!f){m[0].innerHTML="<div />"}this._gaugeParent=m.children();this._gaugeParent.width(e);this._gaugeParent.height(l);if(!f){this.renderer.init(this._gaugeParent)}else{var h=this.renderer.getContainer();h[0].style.width=e+"px";h[0].style.height=l+"px"}},_initRenderer:function(e){if(!d.jqx.createRenderer){throw"Please include a reference to jqxdraw.js"}return d.jqx.createRenderer(this,e)},_refresh:function(f){var e=this;if(f){e._ticksIterator=0;e._labelsIterator=0;if(e._ranges){d(e._ranges).remove()}if(e._pointer){d(e._pointer).remove()}e._pointer=null;e._ranges=[];if(e.niceInterval){if(e._labels){d(e._labels).remove()}e._labels=[];if(e._ticks){d(e._ticks).remove();e._ticks=[]}}e._hostInit(f);e._render(f);return}if(!e.renderer){e._isVML=false;e.host.empty();e._initRenderer(e.host)}var g=e.renderer;if(!g){return}if(e._ranges){d(e._ranges).remove()}if(e._pointer){d(e._pointer).remove()}if(e._labels){d(e._labels).remove()}if(e._cap){d(e._cap).remove()}if(e._ticks){d(e._ticks).remove()}if(e._border){d(e._border).remove()}if(e._caption){d(e._caption).remove()}e._caption=null;e._labels=[];e._cap=null;e._ticks=[];e._ranges=[];e._border=null;e._pointer=null;e._validateProperties();e._removeElements();e._hostInit();e._render();e.setValue(this.value,0);e._editableLabels()},val:function(e){if(arguments.length==0||typeof(e)=="object"){return this.value}this.setValue(e,0)},refresh:function(e){if(e===true){return}this._refresh.apply(this,Array.prototype.slice(arguments))},_outerBorderOffset:function(){var e=parseInt(this.border.style["stroke-width"],10)||1;return e/2},_removeCollection:function(f){for(var e=0;e<f.length;e+=1){d(f[e]).remove()}f=[]},_render:function(e){this._addBorder(e);this._addGauge(e);this._addRanges(e);if(!this.niceInterval){this._addTicks(e);this._addLabels(e)}else{this._addTicks()}this._styleLabels();this._addCaption(e);this._addPointer(e);this._addCap(e)},_addBorder:function(g){if(!this.border.visible){return}if(g){var f=this._outerBorderOffset();this._border.setAttribute("cx",this._originalRadius+f);this._border.setAttribute("cy",this._originalRadius+f);this._border.setAttribute("r",this._originalRadius);return}var e=this.border.style.fill,f=this._outerBorderOffset();if(!e){e="#BABABA"}if(this.border.showGradient){if(e.indexOf("url")<0&&e.indexOf("#grd")<0){this._originalColor=e}else{e=this._originalColor}e=this.renderer._toLinearGradient(e,true,[[0,1],[25,1.1],[50,1.5],[100,1]])}this._border=this.renderer.circle(this._originalRadius+f,this._originalRadius+f,this._originalRadius);this.border.style.fill=e;this.renderer.attr(this._border,this.border.style)},_addGauge:function(g){var h=this._originalRadius,e=this.renderer._toLinearGradient("#ffffff",[[3,2],[100,1]],true),f=this._outerBorderOffset();if(g){this._gauge.setAttribute("cx",h+f);this._gauge.setAttribute("cy",h+f);this._gauge.setAttribute("r",this._innerRadius)}else{this._gauge=this.renderer.circle(h+f,h+f,this._innerRadius);this.renderer.attr(this._gauge,this.style)}},_addCap:function(h){var e="visible",g=this._outerBorderOffset();if(!this.cap.visible){e="hidden"}var i=this._originalRadius,f=this._getSize(this.cap.size),j;if(h){this._cap.setAttribute("cx",i+g);this._cap.setAttribute("cy",i+g);this._cap.setAttribute("r",f);this._capCenter=[i,i]}else{j=this.renderer.circle(i+g,i+g,f);this._capCenter=[i,i];this.renderer.attr(j,this.cap.style);d(j).css("visibility",e);this._cap=j}},_addTicks:function(k){var t=this;var v=this.ticksMinor,g=this.ticksMajor,p,u,r={};if(g.visible===false&&v.visible===false&&this.labels.visible===false){return}function o(i){if(g.visible){t._drawTick({angle:t._getAngleByValue(i),distance:t._getDistance(t.ticksDistance),style:g.style,size:t._getSize(g.size),type:"major"},k)}}function h(j){if(v.visible){t._drawTick({angle:t._getAngleByValue(j),distance:t._getDistance(t.ticksDistance),style:v.style,size:t._getSize(v.size),type:"minor"},k)}}function e(i){if(t.labels.visible){t._addLabel({angle:t._getAngleByValue(i),value:u>=1?i:new Number(i).toFixed(2),distance:t._getDistance(t._getLabelsDistance()),style:t.labels.className},k)}}var n=0;if(t.int64==="s"){if(this.tickMode==="default"){if(this.niceInterval){u=this._getNiceInterval("radial");p=this._getNiceInterval("radial",true)}else{u=new d.jqx.math().fromString((g.interval).toString(),10);p=new d.jqx.math().fromString((v.interval).toString(),10)}}else{startToEnd=this._max64.subtract(this._min64);p=startToEnd.div(new d.jqx.math().fromString((v.number).toString(),10));u=startToEnd.div(new d.jqx.math().fromString((g.number).toString(),10))}if(this.niceInterval){o(this._min64);e(this._min64);var f=this._min64.subtract(this._min64.modulo(u)).add(u),s;for(var q=f;q.greaterThanOrEqual(this._min64);q=q.subtract(p)){s=q}for(var m=s,l=f;m.lessThan(this._max64)||l.lessThan(this._max64);m=m.add(p),l=l.add(u)){n+=1;if(n>250){break}if(l.lessThanOrEqual(this._max64)){o(l);r[l.toString()]=true;if(m.equals(f)){if(Math.abs(this._getAngleByValue(l)-this._getAngleByValue(this.min))*this._innerRadius>this._getMaxLabelSize()["height"]){e(l)}}else{if((l.add(u)).lessThan(this._max64)){e(l)}else{if(Math.abs(this._getAngleByValue(l)-this._getAngleByValue(this.max))*this._innerRadius>this._getMaxLabelSize()["height"]){e(l)}}}}if(!r[m.toString()]&&m.lessThanOrEqual(t._max64)){h(m)}if(t._checkForOverflow(m,p)||t._checkForOverflow(l,u)){break}}o(this._max64);e(this._max64)}else{for(var m=new d.jqx.math().fromString((t.min).toString(),10),l=new d.jqx.math().fromString((t.min).toString(),10);m.lessThanOrEqual(t._max64)||l.lessThanOrEqual(t._max64);m=m.add(p),l=l.add(u)){n+=1;if(n>250){break}if(l.lessThanOrEqual(t._max64)&&g.visible){o(l);r[l.toString()]=true}if(!r[m.toString()]&&v.visible&&m.lessThanOrEqual(t._max64)){h(m)}}}}else{if(t.int64==="u"){if(this.tickMode==="default"){if(this.niceInterval){u=this._getNiceInterval("radial");p=this._getNiceInterval("radial",true)}else{u=new BigNumber(g.interval);p=new BigNumber(v.interval)}}else{startToEnd=this._max64.subtract(this._min64);p=startToEnd.divide(new BigNumber(v.number));u=startToEnd.divide(new BigNumber(g.number))}if(this.niceInterval){o(this._min64);e(this._min64);var f=this._min64.subtract(this._min64.mod(u)).add(u),s;for(var q=f;q.compare(this._min64)!==-1;q=q.subtract(p)){s=q}for(var m=s,l=f;m.compare(this._max64)===-1||l.compare(this._max64)===-1;m=m.add(p),l=l.add(u)){n+=1;if(n>250){break}if(l.compare(this._max64)!==1){o(l);r[l.toString()]=true;if(m.compare(f)===0){if(Math.abs(this._getAngleByValue(l)-this._getAngleByValue(this.min))*this._innerRadius>this._getMaxLabelSize()["height"]){e(l)}}else{if((l.add(u)).compare(this._max64)===-1){e(l)}else{if(Math.abs(this._getAngleByValue(l)-this._getAngleByValue(this.max))*this._innerRadius>this._getMaxLabelSize()["height"]){e(l)}}}}if(!r[m.toString()]&&(m.compare(t._max64)!==1)){h(m)}}o(this._max64);e(this._max64)}else{for(var m=new BigNumber(t.min),l=new BigNumber(t.min);(m.compare(t._max64)!==1)||(l.compare(t._max64)!==1);m=m.add(p),l=l.add(u)){n+=1;if(n>250){break}if((l.compare(t._max64)!==1)&&g.visible){o(l);r[l.toString()]=true}if(!r[m.toString()]&&v.visible&&(m.compare(t._max64)!==1)){h(m)}}}}else{if(this.tickMode==="default"){if(this.niceInterval){u=this._getNiceInterval("radial");p=this._getNiceInterval("radial",true)}else{u=g.interval;p=v.interval}}else{startToEnd=this.max-this.min;p=startToEnd/v.number;u=startToEnd/g.number}if(this.niceInterval){o(this.min);e(this.min);var f=this.min-(this.min%u)+u,s;for(var q=f;q>=this.min;q=q-p){s=q}for(var m=s,l=f;m<this.max||l<this.max;m+=p,l+=u){n+=1;if(n>250){break}if(l<=this.max){o(l);r[l.toFixed(5)]=true;if(m===f){if(Math.abs(this._getAngleByValue(l)-this._getAngleByValue(this.min))*this._innerRadius>this._getMaxLabelSize()["height"]){e(l)}}else{if(l+u<this.max){e(l)}else{if(Math.abs(this._getAngleByValue(l)-this._getAngleByValue(this.max))*this._innerRadius>this._getMaxLabelSize()["height"]){e(l)}}}}if(!r[m.toFixed(5)]&&m<=this.max){h(m)}}o(this.max);e(this.max)}else{for(var m=this.min,l=this.min;m<=this.max||l<=this.max;m+=p,l+=u){n+=1;if(n>250){break}if(l<=this.max&&g.visible){o(l);r[l.toFixed(5)]=true}if(!r[m.toFixed(5)]&&v.visible&&m<=this.max){h(m)}}}}}this._handleTicksVisibility()},_handleTicksVisibility:function(){if(!this.ticksMinor.visible){this.host.children(".jqx-gauge-tick-minor").css("visibility","hidden")}else{this.host.children(".jqx-gauge-tick-minor").css("visibility","visible")}if(!this.ticksMajor.visible){this.host.children(".jqx-gauge-tick-major").css("visibility","hidden")}else{this.host.children(".jqx-gauge-tick-major").css("visibility","visible")}},_getSize:function(e){if(e.toString().indexOf("%")>=0){e=(parseInt(e,10)/100)*this._innerRadius}e=parseInt(e,10);return e},_getDistance:function(e){return this._getSize(e)+(this._originalRadius-this._innerRadius)},_drawTick:function(t,k){var m=this.that;var j=t.angle,g=t.distance,s=t.size,l=m._outerBorderOffset(),e=m._originalRadius,i=e-g,n=i-s,h=e+l+i*Math.sin(j),p=e+l+i*Math.cos(j),f=e+l+n*Math.sin(j),o=e+l+n*Math.cos(j),q;t.style["class"]=m.toThemeProperty("jqx-gauge-tick-"+t.type);if(m._isVML){h=Math.round(h);f=Math.round(f);p=Math.round(p);o=Math.round(o)}if(k&&!m.niceInterval){var q=m._ticks[m._ticksIterator];q.setAttribute("x1",h);q.setAttribute("x2",f);q.setAttribute("y1",p);q.setAttribute("y2",o);m._ticksIterator++}else{q=m.renderer.line(h,p,f,o,t.style);m._ticks.push(q)}},_addRanges:function(h){var f="visible";if(!this.showRanges){f="hidden"}else{var e=this.ranges;for(var g=0;g<e.length;g+=1){this._addRange(e[g],f,h)}}},_getMaxRangeSize:function(){var f,h=-1,j,e;for(var g=0;g<this.ranges.length;g+=1){j=this.ranges[g].startWidth;e=this.ranges[g].endWidth;if(j>h){h=j}if(e>h){h=e}}return h},_getRangeDistance:function(i,e){var h=this._getLabelsDistance(),f=this._getDistance(i),g=this._getMaxRangeSize();if(this.labels.position==="outside"){if(h<f+this._getMaxTickSize()){return this._getDistance(this.ticksDistance)+g/2+this._getSize(this.ticksMajor.size)}}else{if(this.labels.position==="inside"){if(h+this._getMaxTickSize()<f){return this._getSize(this.border.size)+this._originalRadius/20}}}return f},_addRange:function(m,u,i){var h=this.that;if((h.int64==="s"&&(m._startValue64.lessThan(h._min64)||m._endValue64.greaterThan(h._max64)))||(h.int64==="u"&&((m._startValue64.compare(h._min64)===-1)||(m._endValue64.compare(h._max64)===1)))||(h.int64===false&&(m.startValue<h.min||m.endValue>h.max))){return}var s=h.int64?h._getAngleByValue(m._startValue64):h._getAngleByValue(m.startValue),q=h.int64?h._getAngleByValue(m._endValue64):h._getAngleByValue(m.endValue);var f=h._originalRadius,r=f-h._getRangeDistance(m.startDistance,m.startWidth),t=f-h._getRangeDistance(m.endDistance,m.endWidth),n=m.startWidth,k=m.endWidth,j=h._outerBorderOffset(),p={x:f+j+r*Math.sin(s),y:f+j+r*Math.cos(s)},l={x:f+j+t*Math.sin(q),y:f+j+t*Math.cos(q)},v=h._getProjectionPoint(s,f+j,r,n),g=h._getProjectionPoint(q,f+j,t,k),e="default",o,m;if(Math.abs(q-s)>Math.PI){e="opposite"}if(h._isVML){o=h._rangeVMLRender(p,l,f,v,g,k,n,r,t,e)}else{o=h._rangeSVGRender(p,l,f,v,g,k,n,r,t,e)}m.style.visibility=u;m.style["class"]=h.toThemeProperty("jqx-gauge-range");m=h.renderer.path(o,m.style);h._ranges.push(m)},_rangeSVGRender:function(i,m,k,o,l,e,j,f,n,h){var p="",f=k-f,n=k-n,g=["0,1","0,0"];if(h==="opposite"){g=["1,1","1,0"]}p="M"+i.x+","+i.y+" ";p+="A"+(k-f)+","+(k-f)+" 100 "+g[0]+" "+m.x+","+m.y+" ";p+="L "+(l.x)+","+(l.y)+" ";p+="A"+(k-e-f)+","+(k-e-f)+" 100 "+g[1]+" "+(o.x)+","+(o.y)+" ";p+="L "+(i.x)+","+(i.y)+" ";p+="z";return p},_rangeVMLRender:function(p,m,h,w,i,l,n,q,s,f){h-=h-q+10;var o="",r=Math.floor(h+(n+l)/2),q=Math.floor(h-q),s=Math.floor(s),t={x:(w.x+i.x)/2,y:(w.y+i.y)/2},e=Math.sqrt((i.x-w.x)*(i.x-w.x)+(i.y-w.y)*(i.y-w.y)),v=Math.floor(t.x+Math.sqrt(h*h-(e/2)*(e/2))*(w.y-i.y)/e),u=Math.floor(t.y+Math.sqrt(h*h-(e/2)*(e/2))*(i.x-w.x)/e),x={x:(p.x+m.x)/2,y:(p.y+m.y)/2},g=Math.sqrt((m.x-p.x)*(m.x-p.x)+(m.y-p.y)*(m.y-p.y)),k=Math.floor(x.x+Math.sqrt(Math.abs(r*r-(g/2)*(g/2)))*(p.y-m.y)/g),j=Math.floor(x.y+Math.sqrt(Math.abs(r*r-(g/2)*(g/2)))*(m.x-p.x)/g);if(f==="opposite"){v=Math.floor(t.x-Math.sqrt(h*h-(e/2)*(e/2))*(w.y-i.y)/e);u=Math.floor(t.y-Math.sqrt(h*h-(e/2)*(e/2))*(i.x-w.x)/e);k=Math.floor(x.x-Math.sqrt(Math.abs(r*r-(g/2)*(g/2)))*(p.y-m.y)/g);j=Math.floor(x.y-Math.sqrt(Math.abs(r*r-(g/2)*(g/2)))*(m.x-p.x)/g)}h=Math.floor(h);m={x:Math.floor(m.x),y:Math.floor(m.y)};p={x:Math.floor(p.x),y:Math.floor(p.y)};w={x:Math.floor(w.x),y:Math.floor(w.y)};i={x:Math.floor(i.x),y:Math.floor(i.y)};o="m "+m.x+","+m.y;o+="at "+(k-r)+" "+(j-r)+" "+(r+k)+" "+(r+j)+" "+m.x+","+m.y+" "+p.x+","+p.y;o+="l "+w.x+","+w.y;o+="m "+m.x+","+m.y;o+="l "+i.x+","+i.y;o+="at "+(v-h)+" "+(u-h)+" "+(h+v)+" "+(h+u)+" "+i.x+","+i.y+" "+w.x+","+w.y;o+="qx "+w.x+" "+w.y;return o},_getProjectionPoint:function(i,f,h,g){var e={x:f+(h-g)*Math.sin(i),y:f+(h-g)*Math.cos(i)};return e},_addLabels:function(i){var g=this,f=g._getLabelInterval();if(g.labels.visible&&g.labels.interval.toString()!=="0"){var k=this._getDistance(this._getLabelsDistance()),j;var h=0;if(g.int64==="s"){for(var e=new d.jqx.math().fromNumber(g.min.toString(),10);e.lessThanOrEqual(g._max64);e=e.add(f)){h+=1;if(h>250){break}if(e.lessThan(g._min64)||e.greaterThan(g._max64)){break}this._addLabel({angle:this._getAngleByValue(e),value:e.toString(),distance:k,style:this.labels.className})}}else{if(g.int64==="u"){for(var e=new BigNumber(g.min);e.compare(g._max64)!==1;e=e.add(f)){h+=1;if(h>250){break}if((e.compare(g._min64)===-1)||(e.compare(g._max64)===1)){break}this._addLabel({angle:this._getAngleByValue(e),value:e.toString(),distance:k,style:this.labels.className})}}else{for(var e=this.min;e<=this.max;e+=f){h+=1;if(h>250){break}this._addLabel({angle:this._getAngleByValue(e),value:f>=1?e:new Number(e).toFixed(2),distance:k,style:this.labels.className},i)}}}}},_getLabelsDistance:function(){var g=this._getMaxLabelSize(),f=this._getDistance(this.labels.distance),e=this._getDistance(this.ticksDistance);g=g.width;if(this.labels.position==="inside"){return e+g-5}else{if(this.labels.position==="outside"){if(f<(e-g*1.5)){return f}return Math.max(e-g*1.5,0.6*g)}}return this.labels.distance},_addLabel:function(k,p){var n=this.that;var C=k.angle,z=n._originalRadius,t=z-k.distance,m=n.labels.offset,u=n._outerBorderOffset(),s=z+u+t*Math.sin(C)+m[0],q=z+u+t*Math.cos(C)+m[1],B=k.value,f=k.style||"",A,o,h=n.labels.fontSize;B=n._formatLabel(B.toString());var i={"class":f};if(h){i["font-size"]=h}if(n.labels.fontFamily){i["font-family"]=n.labels.fontFamily}if(n.labels.fontWeight){i["font-weight"]=n.labels.fontWeight}if(n.labels.fontStyle){i["font-style"]=n.labels.fontStyle}if(p&&!n.niceInterval){var o=n._labels[n._labelsIterator];var v=n.renderer._measureText(B,0,i,true);var j=v.textPartsInfo;var g=j.parts;var D=j.width;var l=j.height;o.setAttribute("x",Math.round(s)-v.width/2+(v.width-j.width)/2);o.setAttribute("y",Math.round(q)+l+(v.height-l)/2);n._labelsIterator++}else{var A=n.renderer.measureText(B,0,i);var e=0;if(h!==undefined&&Math.PI>C){e=(-A.width/2)*(parseInt(h)/25);if(parseInt(h)<=10){e*=-1}}i["class"]=this.toThemeProperty("jqx-gauge-label");o=n.renderer.text(B,Math.round(s)-A.width/2+e,Math.round(q),A.width,A.height,0,i);n._labels.push(o)}},_addCaption:function(g){if(this.caption.visible!==false){var j=this.that;var l=j.caption.value,k=j.toThemeProperty("jqx-gauge-caption"),h=j.caption.offset,n=j.renderer.measureText(l,0,{"class":k}),i=j._getPosition(this.caption.position,n,h),e=j.caption.style,f=j._outerBorderOffset();if(!g){var m=j.renderer.text(l,i.left+f,i.top+f,n.width,n.height,0,{"class":k});this._caption=m}else{this._caption.setAttribute("x",i.left+f);this._caption.setAttribute("y",i.top+f)}}},_getPosition:function(e,f,j){var i=0,h=0,g=this._originalRadius;switch(e){case"left":i=(g-f.width)/2;h=g-f.height/2;break;case"right":i=g+(g-f.width)/2;h=g-f.height/2;break;case"bottom":i=(2*g-f.width)/2;h=(g+2*g-f.height)/2;break;default:i=(2*g-f.width)/2;h=(g+f.height)/2;break}return{left:i+j[0],top:h+j[1]}},_addPointer:function(i){var g="visible";if(!this.pointer.visible){g="hidden"}var f=this._originalRadius,j=this._getSize(this.pointer.length),k=j*0.9,l=this._getAngleByValue(this.value),e=this.pointer.pointerType,h;h=this._computePointerPoints(this._getSize(this.pointer.width),l,j,e!=="default");this._pointer=this.renderer.path(h,this.pointer.style);d(this._pointer).css("visibility",g)},_computePointerPoints:function(e,g,h,f){if(!f){return this._computeArrowPoints(e,g,h)}else{return this._computeRectPoints(e,g,h)}},_computeArrowPoints:function(n,g,k){var f=this._originalRadius-0.5,l=Math.sin(g),q=Math.cos(g),j=this._outerBorderOffset(),o=f+j+k*l,m=f+j+k*q,i=f+j+n*q,e=f+j-n*l,h=f+j-n*q,s=f+j+n*l,p;if(this._isVML){i=Math.round(i);h=Math.round(h);e=Math.round(e);s=Math.round(s);o=Math.round(o);m=Math.round(m)}p="M "+i+","+e+" L "+h+","+s+" L "+o+","+m+"";return p},_computeRectPoints:function(q,i,o){var f=this._originalRadius,p=Math.sin(i),t=Math.cos(i),u=o,l=this._outerBorderOffset(),n=f+l-q*t+o*p,h=f+l+q*p+o*t,m=f+l+q*t+o*p,g=f+l-q*p+o*t,k=f+l+q*t,e=f+l-q*p,j=f+l-q*t,v=f+l+q*p,s;if(this._isVML){k=Math.round(k);j=Math.round(j);e=Math.round(e);v=Math.round(v);n=Math.round(n);h=Math.round(h);m=Math.round(m);g=Math.round(g)}s="M "+k+","+e+" L "+j+","+v+" L "+n+","+h+" "+m+","+g;return s},_getAngleByValue:function(s){var v=this,p=v.startAngle,t=p-v.endAngle,e,k,o,n,h;if(v.int64!==false){if(v.int64==="s"){s=new d.jqx.math().fromString(s.toString(),10)}else{s=new BigNumber(s)}e=v._min64;k=v._max64;o=k.subtract(e);n=s.subtract(e);if(v.int64==="u"){n=n.intPart()}var f=o.toString(),j,r=n.toString(),g;if(f.length>15){var u=f.length-15;f=f.slice(0,15)+"."+f.slice(15);j=parseFloat(f);if(r.length>u){var q=r.length-u;r=r.slice(0,q)+"."+r.slice(q)}else{if(r.length===u){r="0."+r}else{var m="0.";for(var l=0;l<u-r.length;l++){m+="0"}r=m+""+r}}g=parseFloat(r)}else{j=parseFloat(o.toString());g=parseFloat(n.toString())}h=t*g/j+p+Math.PI}else{e=v.min;k=v.max;o=k-e;n=s-e;h=t*n/o+p+Math.PI}return h},_setValue:function(h){var f=this;if((f.int64==="s"&&h.lessThanOrEqual(f._max64)&&h.greaterThanOrEqual(f._min64))||(f.int64==="u"&&h.compare(f._max64)!==1&&h.compare(f._min64)!==-1)||(f.int64===false&&h<=f.max&&h>=f.min)){var i=f._getAngleByValue(h),e=f.pointer.pointerType,g=f._computePointerPoints(f._getSize(f.pointer.width),i,f._getSize(f.pointer.length),e!=="default");if(f._isVML){if(f._pointer){d(f._pointer).remove()}f._pointer=f.renderer.path(g,f.pointer.style)}else{f.renderer.attr(f._pointer,{d:g})}if(f.int64!==false){f.value=h.toString();if(f.int64==="s"){f._value64=new d.jqx.math().fromString(f.value,10)}else{f._value64=new BigNumber(f.value)}}else{f.value=h}d.jqx.aria(f,"aria-valuenow",h.toString())}},resize:function(f,e){this.width=f;this.height=e;this.refresh()},propertiesChangedHandler:function(e,f,g){if(g.width&&g.height&&Object.keys(g).length==2){e._refresh(true)}},propertyChangedHandler:function(e,f,h,g){if(g==h){return}if(e.batchUpdate&&e.batchUpdate.width&&e.batchUpdate.height&&Object.keys(e.batchUpdate).length==2){return}if(f=="min"){if(e.int64===true){e._min64=new d.jqx.math().fromString(g.toString(),10)}else{this.min=parseInt(g)}d.jqx.aria(e,"aria-valuemin",g)}if(f=="max"){if(e.int64===true){e._max64=new d.jqx.math().fromString(g.toString(),10)}else{this.max=parseInt(g)}d.jqx.aria(e,"aria-valuemax",g)}if(f==="disabled"){if(g){this.disable()}else{this.enable()}d.jqx.aria(this,"aria-disabled",g)}else{if(f==="value"){this.value=h;this.setValue(g)}else{if(f==="startAngle"){this.startAngle=this.startAngle*Math.PI/180+Math.PI/2}else{if(f==="endAngle"){this.endAngle=this.endAngle*Math.PI/180+Math.PI/2}else{if(f==="colorScheme"){this.pointer.style=null;this.cap.style=null}else{if(f==="radius"){this._radius=g}}}}if(f!=="animationDuration"&&f!=="easing"){this._refresh()}}}if(this.renderer instanceof d.jqx.HTML5Renderer){this.renderer.refresh()}},_tickConstructor:function(g,e){if(this.host){return new this._tickConstructor(g,e)}g=g||{};this.size=e._validatePercentage(g.size,"10%");function f(h,i){if(e.int64===false){h[i]=parseFloat(g[i])}else{h[i]=g[i]}if(!h[i]){h[i]=5}}f(this,"interval");f(this,"number");this.style=g.style||{stroke:"#898989","stroke-width":1};if(typeof g.visible==="undefined"){this.visible=true}else{this.visible=g.visible}},_capConstructor:function(g,e){var f=e._getColorScheme(e.colorScheme)[0];if(this.host){return new this._capConstructor(g,e)}g=g||{};if(typeof g.visible==="undefined"){this.visible=true}else{this.visible=g.visible}this.size=e._validatePercentage(g.size,"4%");this.style=g.style||{fill:f,"stroke-width":"1px",stroke:f,"z-index":30}},_pointerConstructor:function(g,e){var f=e._getColorScheme(e.colorScheme)[0];if(this.host){return new this._pointerConstructor(g,e)}g=g||{};if(typeof g.visible==="undefined"){this.visible=true}else{this.visible=g.visible}this.pointerType=g.pointerType;if(this.pointerType!=="default"&&this.pointerType!=="rectangle"){this.pointerType="default"}this.style=g.style||{"z-index":0,stroke:f,fill:f,"stroke-width":1};this.length=e._validatePercentage(g.length,"70%");this.width=e._validatePercentage(g.width,"2%")},_labelsConstructor:function(f,e){if(this.host){return new this._labelsConstructor(f,e)}f=f||{};if(typeof f.visible==="undefined"){this.visible=true}else{this.visible=f.visible}this.offset=f.offset;if(!(this.offset instanceof Array)){this.offset=[0,-10]}if(!f.interval){f.interval=20}if(e.int64!==false){this.interval=f.interval;if(e.int64==="s"){this._interval64=new d.jqx.math().fromString(f.interval.toString(),10)}else{this._interval64=new BigNumber(f.interval)}}else{this.interval=parseFloat(f.interval)}if(!f.number){f.number=5}this.number=f.number;this.distance=e._validatePercentage(f.distance,"38%");this.position=f.position;if(this.position!=="inside"&&this.position!=="outside"){this.position="none"}this.formatValue=f.formatValue;this.formatSettings=f.formatSettings;this.fontSize=f.fontSize;this.fontFamily=f.fontFamily;this.fontWeight=f.fontWeight;this.fontStyle=f.fontStyle},_captionConstructor:function(f,e){if(this.host){return new this._captionConstructor(f,e)}f=f||{};if(typeof f.visible==="undefined"){this.visible=true}else{this.visible=f.visible}this.value=f.value||"";this.position=f.position;if(this.position!=="bottom"&&this.position!=="top"&&this.position!=="left"&&this.position!=="right"){this.position="bottom"}this.offset=f.offset;if(!(this.offset instanceof Array)){this.offset=[0,0]}},_rangeConstructor:function(f,e){if(this.host){return new this._rangeConstructor(f,e)}f=f||{};this.startDistance=e._validatePercentage(f.startDistance,"5%");this.endDistance=e._validatePercentage(f.endDistance,"5%");this.style=f.style||{fill:"#000000",stroke:"#111111"};this.startWidth=parseFloat(f.startWidth,10);if(!this.startWidth){this.startWidth=10}this.startWidth=Math.max(this.startWidth,2);this.endWidth=parseFloat(f.endWidth,10);if(!this.endWidth){this.endWidth=10}this.endWidth=Math.max(this.endWidth,2);if(f.startValue===undefined){f.startValue=0}if(f.endValue===undefined){f.endValue=100}if(e.int64!==false){this.startValue=f.startValue;this.endValue=f.endValue;if(e.int64==="s"){this._startValue64=new d.jqx.math().fromString(f.startValue.toString(),10);this._endValue64=new d.jqx.math().fromString(f.endValue.toString(),10)}else{this._startValue64=new BigNumber(f.startValue);this._endValue64=new BigNumber(f.endValue)}}else{this.startValue=parseFloat(f.startValue,10);this.endValue=parseFloat(f.endValue,10)}},_borderConstructor:function(f,e){if(this.host){return new this._borderConstructor(f,e)}f=f||{};this.size=e._validatePercentage(f.size,"10%");this.style=f.style||{stroke:"#cccccc"};if(typeof f.showGradient==="undefined"){this.showGradient=true}else{this.showGradient=f.showGradient}if(typeof f.visible==="undefined"){this.visible=true}else{this.visible=f.visible}}};var c={_events:["valueChanging","valueChanged"],_animationTimeout:10,_schemes:[{name:"scheme01",colors:["#307DD7","#AA4643","#89A54E","#71588F","#4198AF"]},{name:"scheme02",colors:["#7FD13B","#EA157A","#FEB80A","#00ADDC","#738AC8"]},{name:"scheme03",colors:["#E8601A","#FF9639","#F5BD6A","#599994","#115D6E"]},{name:"scheme04",colors:["#D02841","#FF7C41","#FFC051","#5B5F4D","#364651"]},{name:"scheme05",colors:["#25A0DA","#309B46","#8EBC00","#FF7515","#FFAE00"]},{name:"scheme06",colors:["#0A3A4A","#196674","#33A6B2","#9AC836","#D0E64B"]},{name:"scheme07",colors:["#CC6B32","#FFAB48","#FFE7AD","#A7C9AE","#888A63"]},{name:"scheme08",colors:["#3F3943","#01A2A6","#29D9C2","#BDF271","#FFFFA6"]},{name:"scheme09",colors:["#1B2B32","#37646F","#A3ABAF","#E1E7E8","#B22E2F"]},{name:"scheme10",colors:["#5A4B53","#9C3C58","#DE2B5B","#D86A41","#D2A825"]},{name:"scheme11",colors:["#993144","#FFA257","#CCA56A","#ADA072","#949681"]},{name:"scheme12",colors:["#105B63","#EEEAC5","#FFD34E","#DB9E36","#BD4932"]},{name:"scheme13",colors:["#BBEBBC","#F0EE94","#F5C465","#FA7642","#FF1E54"]},{name:"scheme14",colors:["#60573E","#F2EEAC","#BFA575","#A63841","#BFB8A3"]},{name:"scheme15",colors:["#444546","#FFBB6E","#F28D00","#D94F00","#7F203B"]},{name:"scheme16",colors:["#583C39","#674E49","#948658","#F0E99A","#564E49"]},{name:"scheme17",colors:["#142D58","#447F6E","#E1B65B","#C8782A","#9E3E17"]},{name:"scheme18",colors:["#4D2B1F","#635D61","#7992A2","#97BFD5","#BFDCF5"]},{name:"scheme19",colors:["#844341","#D5CC92","#BBA146","#897B26","#55591C"]},{name:"scheme20",colors:["#56626B","#6C9380","#C0CA55","#F07C6C","#AD5472"]},{name:"scheme21",colors:["#96003A","#FF7347","#FFBC7B","#FF4154","#642223"]},{name:"scheme22",colors:["#5D7359","#E0D697","#D6AA5C","#8C5430","#661C0E"]},{name:"scheme23",colors:["#16193B","#35478C","#4E7AC7","#7FB2F0","#ADD5F7"]},{name:"scheme24",colors:["#7B1A25","#BF5322","#9DA860","#CEA457","#B67818"]},{name:"scheme25",colors:["#0081DA","#3AAFFF","#99C900","#FFEB3D","#309B46"]},{name:"scheme26",colors:["#0069A5","#0098EE","#7BD2F6","#FFB800","#FF6800"]},{name:"scheme27",colors:["#FF6800","#A0A700","#FF8D00","#678900","#0069A5"]}],_getScale:function(e,g,f){if(e&&e.toString().indexOf("%")>=0){e=parseInt(e,10)/100;return f[g]()*e}return parseInt(e,10)},_removeElements:function(){this.host.children(".chartContainer").remove();this.host.children("#tblChart").remove()},_getLabelInterval:function(){var g=this,h=g.labels,e;if(g.tickMode==="default"){if(g.niceInterval){e=g._getNiceInterval(g.widgetName==="jqxGauge"?"radial":"linear")}else{if(g.int64===false){e=h.interval}else{if(!h._interval64){h._interval64=g.int64==="s"?new d.jqx.math().fromNumber(h.interval):new BigNumber(h.interval)}e=h._interval64}}}else{if(g.int64===false){var f=g.max-g.min;e=f/h.number}else{var f=g._max64.subtract(g._min64);if(g.int64==="s"){e=f.div(new d.jqx.math().fromNumber(h.number))}else{e=f.divide(new BigNumber(h.number))}}}return e},_getMaxLabelSize:function(){var f=this,j=this.max,e=this.min;e=f._formatLabel(e);j=f._formatLabel(j);var h=d('<div style="position: absolute; visibility: hidden;" class="'+f.toThemeProperty("jqx-gauge-label")+'"></div>');h.css({"font-size":f.labels.fontSize,"font-family":f.labels.fontFamily,"font-weight":f.labels.fontWeight,"font-style":f.labels.fontStyle});d("body").append(h);h.html(e);var g={width:h.width(),height:h.height()};h.html(j);var i={width:h.width(),height:h.height()};h.remove();if(g.width>i.width){return g}return i},disable:function(){this.disabled=true;this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"))},enable:function(){this.disabled=false;this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"))},destroy:function(){var e=this;if(e._timeout){clearTimeout(this._timeout)}e._timeout=null;d.jqx.utilities.resize(e.host,null,true);e._removeElements();e.renderer.clear();e.renderer=null;var f=d.data(e.element,"jqxGauge");if(f){delete f.instance}e.host.children().remove();e._caption=null;e._caption=null;e._pointer=null;e._labels=[];e._cap=null;e._ticks=[];e._ranges=[];e._border=null;e._gauge=null;e._caption=null;e.renderer=null;e._animations=[];e.host.removeData();e.host.removeClass();e.host.remove();e.that=null;e.element=null;e._gaugeParent=null;delete e._gaugeParent;delete e.element;delete e.host},_validatePercentage:function(f,e){if(parseFloat(f)!==0&&(!f||!parseInt(f,10))){f=e}return f},_getColorScheme:function(f){var e;for(var g=0;g<this._schemes.length;g+=1){e=this._schemes[g];if(e.name===f){return e.colors}}return null},setValue:function(f,g){var e=this;if(!e.disabled){g=g||e.animationDuration||0;if(e.int64==="s"){if(typeof f==="number"){f=new d.jqx.math().fromNumber(f,10)}else{if(typeof f==="string"){f=new d.jqx.math().fromString(f,10)}}if(f.greaterThan(e._max64)){f=new d.jqx.math().fromString(e._max64.toString(),10)}if(f.lessThan(e._min64)){f=new d.jqx.math().fromString(e._min64.toString(),10)}e._animate(e._value64,f,g)}else{if(e.int64==="u"){f=new BigNumber(f);if(f.compare(e._max64)===1){f=new BigNumber(e._max64)}if(f.compare(e._min64)===-1){f=new BigNumber(e._min64)}e._animate(e._value64,f,g)}else{if(f>e.max){f=e.max}if(f<e.min){f=e.min}e._animate(e.value,f,g)}}d.jqx.aria(e,"aria-valuenow",f.toString())}},_animate:function(h,e,g){var f=this;if(f._timeout){f._endAnimation(f.int64?f._value64:f.value,false)}if(!g){f._endAnimation(e,true);return}f._animateHandler(h,e,0,g)},_animateHandler:function(i,e,h,g){var f=this;if(h<=g){this._timeout=setTimeout(function(){if(f.int64!==false){var k=e.subtract(i);if(f.int64==="s"){var j=new d.jqx.math().fromNumber((d.easing[f.easing](h/g,h,0,1,g))*100,10);f._value64=i.add(k.multiply(j).div(new d.jqx.math().fromNumber(100,10)))}else{var j=new BigNumber((d.easing[f.easing](h/g,h,0,1,g))*100);f._value64=i.add(k.multiply(j).divide(100))}f.value=f._value64.toString();f._setValue(f._value64)}else{f.value=i+(e-i)*d.easing[f.easing](h/g,h,0,1,g);f._setValue(f.value)}f._raiseEvent(0,{value:f.value.toString()});f._animateHandler(i,e,h+f._animationTimeout,g)},this._animationTimeout)}else{this._endAnimation(e,true)}},_endAnimation:function(e,f){clearTimeout(this._timeout);this._timeout=null;this._setValue(e);if(f){this._raiseEvent(1,{value:e.toString()})}},_getMaxTickSize:function(){return Math.max(this._getSize(this.ticksMajor.size),this._getSize(this.ticksMinor.size))},_raiseEvent:function(g,f){var h=d.Event(this._events[g]),e;h.args=f||{};e=this.host.trigger(h);return e},_getNiceInterval:function(k,h){function A(C){return Math.log(parseFloat(C))/Math.LN10}function v(){var C=Math.abs(n.startAngle-n.endAngle)*n._innerRadius;return Math.round(C)}var n=this,B="width";if(k==="linear"&&n.orientation==="vertical"){B="height"}var g=d.jqx.browser.msie?0:1;var f;var j=d('<span class="'+n.toThemeProperty("jqx-gauge-label")+'" style="position: absolute; visibility: hidden;"></span>'),y=n._formatLabel(n.min),z=n._formatLabel(n.max);j.css({"font-size":n.labels.fontSize,"font-family":n.labels.fontFamily,"font-weight":n.labels.fontWeight,"font-style":n.labels.fontStyle});d("body").append(j);j.text(y);var x=j[B]()+g;j.text(z);var l=j[B]()+g;j.remove();var f=Math.max(l,x);var o=1;if(k==="radial"){var r;if(n._innerRadius<50){r=0.3}else{if(n._innerRadius<150){r=0.6}else{if(n._innerRadius<250){r=0.7}else{r=1}}}o=8/Math.max(1,A(n._innerRadius))*r}else{var m=0;if(f>105){m=(f-105)/100}o=1.5+m}f*=o;var e;if(k==="radial"){e=v()}else{e=n._getScaleLength()}var i=Math.ceil(e/f),t,w,p,u,q,s;if(h===true){if(k==="radial"){i*=4}else{i*=3}}if(n.int64===false){t=n.max-n.min;w=Math.floor(A(t)-A(i));p=Math.pow(10,w);u=i*p;q;if(t<2*u){q=1}else{if(t<3*u){q=2}else{if(t<7*u){q=5}else{q=10}}}s=q*p}else{t=new BigNumber(n.max).subtract(new BigNumber(n.min));w=Math.floor(A(t.toString())-A(i));p=new BigNumber(10).pow(new BigNumber(w));u=new BigNumber(i).multiply(p);q;if(t.compare(new BigNumber(2*u))===-1){q=1}else{if(t.compare(new BigNumber(3*u))===-1){q=2}else{if(t.compare(new BigNumber(7*u))===-1){q=5}else{q=10}}}s=new BigNumber(q).multiply(p);if(s.compare(1)===-1){s=new BigNumber(1)}if(n.int64==="s"){s=new d.jqx.math().fromString(s.toString())}}return s},_styleLabels:function(){return;var f=this,e=f.labels,g=f.host.find(".jqx-gauge-label");g.css({"font-size":e.fontSize,"font-family":e.fontFamily,"font-weight":e.fontWeight,"font-style":e.fontStyle})},_checkForOverflow:function(h,f){var e=new BigNumber("9223372036854775807"),g=new BigNumber(h.toString()),i=new BigNumber(f.toString());if(g.add(i).compare(e)===1){return true}else{return false}},_formatLabel:function(i,e){var h=this,f=h.labels.formatValue,j=h.labels.formatSettings,g;if(f){g=f(i,e)}else{if(j){if(j.radix!==undefined){g=new d.jqx.math().getRadixValue(i,h.int64,j.radix)}else{if(j.outputNotation!==undefined&&j.outputNotation!=="default"&&j.outputNotation!=="decimal"){g=new d.jqx.math().getDecimalNotation(i,j.outputNotation,j.decimalDigits,j.digits)}else{if(j.decimalDigits!==undefined){g=Number(i).toFixed(j.decimalDigits)}else{if(j.digits!==undefined){g=Number(i).toPrecision(j.digits)}}}}}else{g=i}}return g},_editableLabels:function(j){var k=this;function f(p,q){var o=k.renderer.measureText(k._formatLabel(q),0,{"class":k.toThemeProperty("jqx-gauge-label")});i.offset(d(p).offset());n.style.width=(o.width+10)+"px";n.style.height=o.height+"px";n.style.visibility="visible";n.value=q;i.select()}if(k.editableLabels){var h=k._labels;if(h.length===0){return}var g=h[0],m=h[h.length-1],n,i;if(j!==true){n=document.createElement("input");i=d(n);n.className="jqx-gauge-label-input";k.element.appendChild(n)}else{i=k.host.children("input");n=i[0]}g.style.cursor="text";m.style.cursor="text";k.addHandler(d(g),"dblclick.jqxGauge"+k.element.id,function(o){f(this,k.min);k._editedProperty="min"});k.addHandler(d(m),"dblclick.jqxGauge"+k.element.id,function(o){f(this,k.max);k._editedProperty="max"});var e=/^-?\d+\.?\d*$/;function l(t,r,s,p){if(t===k[r].toString()){return false}if(k.int64==="s"){var q=new d.jqx.math().fromString(t,10);if((r==="min"&&q.compare(k["_"+p+"64"])!==-1)||(r==="max"&&q.compare(k["_"+p+"64"])!==1)){return false}k[s]=q;k[r]=t}else{if(k.int64==="u"){var o=new BigNumber(t);if(o.compare(0)===-1||(r==="min"&&o.compare(k["_"+p+"64"])!==-1)||(r==="max"&&o.compare(k["_"+p+"64"])!==1)){return false}k[s]=o;k[r]=t}else{if((r==="min"&&t>=k[p])||(r==="max"&&t<=k[p])){return false}k[r]=parseFloat(t)}}}if(j!==true){k.addHandler(i,"blur.jqxGauge"+k.element.id,function(p){var q=this.value,o;n.style.visibility="hidden";if(!e.test(q)){return}if(k._editedProperty==="min"){o=l(q,"min","_min64","max");if(o===false){return}d.jqx.aria(k,"aria-valuemin",q)}else{o=l(q,"max","_max64","min");if(o===false){return}d.jqx.aria(k,"aria-valuemax",q)}k.refresh();if(k.renderer instanceof d.jqx.HTML5Renderer){k.renderer.refresh()}})}}}},a={defineInstance:function(){var e={int64:false,editableLabels:false,value:-50,max:40,min:-60,width:100,height:300,pointer:{},labels:{},animationDuration:1000,showRanges:{},ticksMajor:{size:"15%",interval:5},ticksMinor:{size:"10%",interval:2.5},tickMode:"default",niceInterval:false,ranges:[],easing:"easeOutCubic",colorScheme:"scheme01",disabled:false,rangesOffset:0,background:{},ticksPosition:"both",rangeSize:"5%",scaleStyle:null,ticksOffset:null,scaleLength:"90%",orientation:"vertical",aria:{"aria-valuenow":{name:"value",type:"number"},"aria-valuemin":{name:"min",type:"number"},"aria-valuemax":{name:"max",type:"number"},"aria-disabled":{name:"disabled",type:"boolean"}},displayTank:false,tankStyle:null,_originalColor:"",_width:null,_height:null,renderer:null};if(this===d.jqx._jqxLinearGauge.prototype){return e}d.extend(true,this,e);return e},createInstance:function(){d.jqx.aria(this);this.host.css("overflow","hidden");this.host.addClass(this.toThemeProperty("jqx-widget"));this.host.append('<input class="jqx-gauge-label-input"/>');var e=this;if(e.int64==="s"){if(!d.jqx.longInt){throw new Error("jqxLinearGauge: Missing reference to jqxmath.js")}d.jqx.longInt(e);e._value64=new d.jqx.math().fromString(e.value.toString(),10);e._min64=new d.jqx.math().fromString(e.min.toString(),10);e._max64=new d.jqx.math().fromString(e.max.toString(),10)}else{if(e.int64==="u"){try{BigNumber}catch(f){throw new Error("jqxLinearGauge: Missing reference to jqxmath.js")}e._value64=new BigNumber(e.value);e._min64=new BigNumber(e.min);e._max64=new BigNumber(e.max)}}d.jqx.utilities.resize(this.host,function(){e.refresh(false,false)})},val:function(e){if(arguments.length==0||typeof(e)=="object"){return this.value}this.setValue(e,0)},_initRenderer:function(e){if(!d.jqx.createRenderer){throw"Please include a reference to jqxdraw.js"}return d.jqx.createRenderer(this,e)},refresh:function(i,h){var f=this;f._nearLabels=[];f._farLabels=[];if(!f.renderer){f._isVML=false;f.host.empty();f._initRenderer(f.host)}var g=f.renderer;if(!g){return}f._validateProperties();f._reset();f._init();f._performLayout();f._render();if(h!==false){f.setValue(f.value,1)}if(!i){var e=f.labels.position;if(e==="both"||e==="near"){f._labels=f._nearLabels;f._editableLabels()}if(e==="both"||e==="far"){f._labels=f._farLabels;f._editableLabels(e==="both"?true:undefined)}}},_getBorderSize:function(){var f=1,e;if(this._isVML){f=0}if(this.background){e=(parseInt(this.background.style["stroke-width"],10)||f)/2;if(this._isVML){return Math.round(e)}return e}return f},_validateProperties:function(){this.background=this._backgroundConstructor(this.background,this);this.ticksOffset=this.ticksOffset||this._getDefaultTicksOffset();this.rangesOffset=this.rangesOffset||0;this.rangeSize=this._validatePercentage(this.rangeSize,5);this.ticksOffset[0]=this._validatePercentage(this.ticksOffset[0],"5%");this.ticksOffset[1]=this._validatePercentage(this.ticksOffset[1],"5%");this.ticksMinor=this._tickConstructor(this.ticksMinor,this);this.ticksMajor=this._tickConstructor(this.ticksMajor,this);this.scaleStyle=this.scaleStyle||this.ticksMajor.style;this.labels=this._labelsConstructor(this.labels,this);this.pointer=this._pointerConstructor(this.pointer,this);for(var e=0;e<this.ranges.length;e+=1){this.ranges[e]=this._rangeConstructor(this.ranges[e],this)}},_getDefaultTicksOffset:function(){if(this.orientation==="horizontal"){return["5%","36%"]}return["36%","5%"]},_handleOrientation:function(){if(this.orientation==="vertical"){d.extend(this,linearVerticalGauge)}else{d.extend(this,linearHorizontalGauge)}},_reset:function(){this.host.empty()},_performLayout:function(){var e=parseInt(this.background.style["stroke-width"],10)||1;this._width-=e;this._height-=e;this.host.css("padding",e/2)},_init:function(){var f=this._getBorderSize(),e;this._width=this._getScale(this.width,"width",this.host.parent())-3;this._height=this._getScale(this.height,"height",this.host.parent())-3;this.element.innerHTML="<div/>";this.host.width(this._width);this.host.height(this._height);this.host.children().width(this._width);this.host.children().height(this._height);this.renderer.init(this.host.children());e=this.renderer.getContainer();e.width(this._width);e.height(this._height)},_render:function(){this._renderBackground();this._renderTicks();if(!this.niceInterval){this._renderLabels()}this._styleLabels();this._renderRanges();this._renderPointer()},_renderBackground:function(){if(!this.background.visible){return}var g=this.background.style,f=d.jqx._rup(this._getBorderSize()),e="rect",h;g=this._handleShapeOptions(g);if(this.background.backgroundType==="roundedRectangle"&&this._isVML){e="roundrect"}if(!this._Vml){g.x=f;g.y=f}h=this.renderer.shape(e,g);if(this._isVML){this._fixVmlRoundrect(h,g)}},_handleShapeOptions:function(g){var e=this.background.style.fill,f=this._getBorderSize();if(!e){e="#cccccc"}if(this.background.showGradient){if(e.indexOf("url")<0&&e.indexOf("#grd")<0){this._originalColor=e}else{e=this._originalColor}e=this.renderer._toLinearGradient(e,this.orientation==="horizontal",[[1,1.1],[90,1.5]])}this.background.style.fill=e;if(this.background.backgroundType==="roundedRectangle"){if(this._isVML){g.arcsize=this.background.borderRadius+"%"}else{g.rx=this.background.borderRadius;g.ry=this.background.borderRadius}}g.width=this._width-1;g.height=this._height-1;return g},_fixVmlRoundrect:function(g,f){var e=this._getBorderSize();g.style.position="absolute";g.style.left=e;g.style.top=e;g.style.width=this._width-1;g.style.height=this._height-1;g.strokeweight=0;delete f.width;delete f.height;delete f.arcsize;this.renderer.attr(g,f)},_renderTicks:function(){var k=this.ticksMinor,l=this.ticksMajor,f,i,h,g,e,m,j;if(this.int64==="s"){f=this._max64.subtract(this._min64);if(f.isNegative()){f=f.negate()}if(this.tickMode==="default"){if(this.niceInterval){i=this._getNiceInterval("linear");h=this._getNiceInterval("linear",true)}else{i=l._interval64;h=k._interval64}}else{i=f.div(new d.jqx.math().fromNumber(l.number));h=f.div(new d.jqx.math().fromNumber(k.number))}}else{if(this.int64==="u"){f=this._max64.subtract(this._min64).abs();if(this.tickMode==="default"){if(this.niceInterval){i=this._getNiceInterval("linear");h=this._getNiceInterval("linear",true)}else{i=l._interval64;h=k._interval64}}else{i=f.divide(new BigNumber(l.number));h=f.divide(new BigNumber(k.number))}}else{f=Math.abs(this.max-this.min);if(this.tickMode==="default"){if(this.niceInterval){i=this._getNiceInterval("linear");h=this._getNiceInterval("linear",true)}else{i=l.interval;h=k.interval}}else{i=f/l.number;h=f/k.number}}}m={size:this._getSize(l.size),style:l.style,visible:l.visible,interval:i,type:"major"};j={size:this._getSize(k.size),style:k.style,visible:k.visible,interval:h,checkOverlap:true,type:"minor"};if(this.ticksPosition==="near"||this.ticksPosition==="both"){this._ticksRenderHandler(m);this._ticksRenderHandler(j)}if(this.ticksPosition==="far"||this.ticksPosition==="both"){m.isFar=true;j.isFar=true;this._ticksRenderHandler(m);this._ticksRenderHandler(j)}this._renderConnectionLine()},_ticksRenderHandler:function(f){if(!f.visible&&f.type==="minor"){return}var i=this._getSize(this.ticksOffset[0],"width"),g=this._getSize(this.ticksOffset[1],"height"),e=this._getBorderSize(),h=this._calculateTickOffset()+this._getMaxTickSize();if(f.isFar){h+=f.size}this._drawTicks(f,e,h+e)},_drawTicks:function(u,l,r){var t=this,k=u.interval,p,m=t.orientation==="vertical"?"width":"height",j=t.orientation==="vertical"?"height":"width",e=t._getMaxLabelSize()[m],q=t._getMaxLabelSize()[j],h=t._getInterval("ticksMajor"),g=t._getInterval("ticksMinor");function o(w){p=t._valueToCoordinates(w);if(!u.checkOverlap||!t._overlapTick(w,h,g)){if(u.visible){t._renderTick(u.size,p,u.style,r)}if(t.niceInterval&&t.labels.visible){var x,B,A;if(t.orientation==="vertical"){A=t._getSize(t.ticksOffset[1],"height")}else{A=t._getSize(t.ticksOffset[0],"width")}A+=l;var v=u.isFar?"far":"near",y;if(v==="near"){y=t._calculateTickOffset()-e+l+t._getSize(t.labels.offset)}else{y=t._calculateTickOffset()+2*t._getMaxTickSize()+e+l+t._getSize(t.labels.offset)}if(t.int64===false){if(w!==t.min&&Math.abs(t._valueToCoordinates(t.min)-p)<q){return}if(w!==t.max&&Math.abs(t._valueToCoordinates(t.max)-p)<q){return}}else{if(t.int64==="s"){if(w.equals(t._min64)===false&&Math.abs(t._valueToCoordinates(t._min64)-p)<q){return false}if(w.equals(t._max64)===false&&Math.abs(t._valueToCoordinates(t._max64)-p)<q){return}}else{if(t.int64==="u"){if(w.compare(t._min64)!==0&&Math.abs(t._valueToCoordinates(t._min64)-p)<q){return false}if(w.compare(t._max64)!==0&&Math.abs(t._valueToCoordinates(t._max64)-p)<q){return}}}}var z=t.labels.position;if(u.type==="major"&&(z==="both"||z==="near"&&u.isFar!==true||z==="far"&&u.isFar)){t._renderLabel(p,v,y,e,w)}}}}if(t.niceInterval){var f;if(t.int64==="s"){o(t._min64);f=t._min64.subtract(t._min64.modulo(k)).add(k);if(u.type==="minor"){for(var s=f;s.greaterThanOrEqual(t._min64);s=s.subtract(k)){f=s}}for(var n=f;n.lessThan(t._max64);n=n.add(k)){if(t._checkForOverflow(n,k)){break}o(n)}o(t._max64)}else{if(t.int64==="u"){o(t._min64);f=t._min64.subtract(t._min64.mod(k)).add(k);if(u.type==="minor"){for(var s=f;s.compare(t._min64)!==-1;s=s.subtract(k)){f=s}}for(var n=f;n.compare(t._max64)===-1;n=n.add(k)){o(n)}o(t._max64)}else{o(t.min);f=t.min-(t.min%k)+k;if(u.type==="minor"){for(var s=f;s>=t.min;s=s-k){f=s}}for(var n=f;n<=t.max;n+=k){o(n)}o(t.max)}}}else{if(t.int64==="s"){for(var n=new d.jqx.math().fromString(t._min64.toString(),10);n.lessThanOrEqual(t._max64);n=n.add(k)){o(n)}}else{if(t.int64==="u"){for(var n=new BigNumber(t._min64);n.compare(t._max64)!==1;n=n.add(k)){o(n)}}else{for(var n=t.min;n<=t.max;n+=k){o(n)}}}}},_calculateTickOffset:function(){var f=this._getSize(this.ticksOffset[0],"width"),e=this._getSize(this.ticksOffset[1],"height"),g=e;if(this.orientation==="vertical"){g=f}return g},_getInterval:function(g){var i=this,f;if(i.tickMode==="default"){if(i.niceInterval===true){f=i._getNiceInterval("linear",g==="ticksMinor")}else{if(i.int64!==false){f=i[g]._interval64}else{f=i[g].interval}}}else{var h=i[g].number,e;if(i.int64!==false){e=i._max64.subtract(i._min64);if(i.int64==="s"){f=e.div(new d.jqx.math().fromNumber(h))}else{f=e.divide(new BigNumber(h))}}else{e=i.max-i.min;f=e/i[g].number}}return f},_overlapTick:function(g,e,f){if(this.int64==="s"){g=g.add(this._min64);if((g.modulo(f)).equals(g.modulo(e))){return true}else{return false}}else{if(this.int64==="u"){g=g.add(this._min64);if((g.mod(f)).compare(g.mod(e))===0){return true}else{return false}}else{g+=this.min;if(g%f===g%e){return true}return false}}},_renderConnectionLine:function(){if(!this.ticksMajor.visible&&!this.ticksMinor.visible){return}var g=this._getScaleLength(),f=this._getBorderSize(),i,k,j=this._getMaxTickSize(),h=j+f;if(this.int64!==false){i=this._valueToCoordinates(this._max64);k=this._valueToCoordinates(this._min64)}else{i=this._valueToCoordinates(this.max);k=this._valueToCoordinates(this.min)}if(this.orientation==="vertical"){h+=this._getSize(this.ticksOffset[0],"width");this.renderer.line(h,i,h,k,this.scaleStyle)}else{h+=this._getSize(this.ticksOffset[1],"height");var e=this._getSize(this.ticksOffset[0],"width");this.renderer.line(e+i-k,h,e,h,this.scaleStyle)}},_getScaleLength:function(){return this._getSize(this.scaleLength,(this.orientation==="vertical"?"height":"width"))},_renderTick:function(e,i,f,h){var g=this._handleTickCoordinates(e,i,h);this.renderer.line(Math.round(g.x1),Math.round(g.y1),Math.round(g.x2),Math.round(g.y2),f)},_handleTickCoordinates:function(e,g,f){if(this.orientation==="vertical"){return{x1:f-e,x2:f,y1:g,y2:g}}return{x1:g,x2:g,y1:f-e,y2:f}},_getTickCoordinates:function(f,g){var e=this._handleTickCoordinates(f,0,this._calculateTickOffset());if(this.orientation==="vertical"){e=e.x1}else{e=e.y1}e+=f;return e},_renderLabels:function(){if(!this.labels.visible){return}var g=this._getSize(this.ticksOffset[0],"width"),i=this._getMaxTickSize(),k=this.labels.position,j="height",f=this._getBorderSize(),h=this._calculateTickOffset()+i,e;if(this.orientation==="vertical"){g=this._getSize(this.ticksOffset[1],"height");j="width"}e=this._getMaxLabelSize()[j];if(k==="near"||k==="both"){this._labelListRender(h-i-e+f,g+f,e,"near")}if(k==="far"||k==="both"){this._labelListRender(h+i+e+f,g+f,e,"far")}},_labelListRender:function(l,e,f,o){var h,p,j,q,n,k,g=this._getScaleLength();l+=this._getSize(this.labels.offset);if(this.int64!==false){n=this._max64.subtract(this._min64);if(this.tickMode==="default"){h=this.labels._interval64;if(this.int64==="s"){p=n.div(h).toNumber()}else{p=parseFloat((n).divide(h).toString())}}else{p=this.labels.number;if(this.int64==="s"){h=n.div(new d.jqx.math().fromNumber(p))}else{h=n.divide(p)}}q=(this.orientation==="vertical")?this._max64:this._min64}else{n=Math.abs(this.max-this.min);if(this.tickMode==="default"){h=this.labels.interval;p=n/h}else{p=this.labels.number;h=n/p}q=(this.orientation==="vertical")?this.max:this.min}j=g/p;for(var m=0;m<=p;m+=1){this._renderLabel(e,o,l,f,q);if(this.int64!==false){q=(this.orientation==="vertical")?q.subtract(h):q.add(h)}else{q+=(this.orientation==="vertical")?-h:h}e+=j}},_renderLabel:function(g,o,l,h,r){var p=this,k=p.labels,j={"class":this.toThemeProperty("jqx-gauge-label")},i=this.labels.interval,n,e,m,q;var f="";if(k.fontSize){f+="font-size: "+k.fontSize+";"}if(k.fontFamily){f+="font-family: "+k.fontFamily}if(k.fontWeight){f+="font-weight: "+k.fontWeight}if(k.fontStyle){f+="font-style: "+k.fontStyle}if(f!==""){j.style=f}m=this._formatLabel(r.toString(),o);e=this.renderer.measureText(m,0,j);if(this.orientation==="vertical"){n=(o==="near")?h-e.width:0;q=this.renderer.text(m,Math.round(l)+n-h/2,Math.round(g-e.height/2),e.width,e.height,0,j)}else{n=(o==="near")?h-e.height:0;q=this.renderer.text(m,Math.round(g-e.width/2),Math.round(l)+n-h/2,e.width,e.height,0,j)}if(o==="near"){if(this.niceInterval||this.orientation==="horizontal"){this._nearLabels.push(q)}else{this._nearLabels.unshift(q)}}else{if(this.niceInterval||this.orientation==="horizontal"){this._farLabels.push(q)}else{this._farLabels.unshift(q)}}},_renderRanges:function(){if(!this.showRanges){return}var h=(this.orientation==="vertical")?"width":"height",j=this._getSize(this.rangesOffset,h),g=this._getSize(this.rangeSize,h),e;for(var f=0;f<this.ranges.length;f+=1){e=this.ranges[f];e.size=g;this._renderRange(e,j)}},_renderRange:function(q,k){var h=this._getScaleLength(),j=this._getBorderSize(),i=this._getSize(this.ticksOffset[0],"width"),g=this._getSize(this.ticksOffset[1],"height"),n=this._getMaxTickSize(),p=this._getSize(q.size),m,f;if(this.int64!==false){m=this._valueToCoordinates(q._endValue64);f=q._startValue64;if(this.int64==="s"&&f.lessThan(this._min64)){f=new d.jqx.math().fromString(this._min64.toString(),10)}else{if(this.int64==="u"&&f.compare(this._min64)===-1){f=new BigNumber(this._min64)}}}else{m=this._valueToCoordinates(q.endValue);f=q.startValue;if(f<this.min){f=this.min}}var o=Math.abs(this._valueToCoordinates(f)-m),l,e;if(this.orientation==="vertical"){l=this.renderer.rect(i+n+k-p+j,m,q.size,o,q.style)}else{e=o;l=this.renderer.rect(this._valueToCoordinates(f),g+n+j,e,q.size,q.style)}this.renderer.attr(l,q.style)},_renderPointer:function(){if(!this.pointer.visible){return}if(this.pointer.pointerType==="default"){this._renderColumnPointer()}else{this._renderArrowPointer()}},_renderColumnPointer:function(){if(this.displayTank){var e={fill:"#FFFFFF"};e["fill-opacity"]=0;if(this.tankStyle){e.stroke=this.tankStyle.stroke;e["stroke-width"]=this.tankStyle.strokeWidth}else{e.stroke="#A1A1A1";e["stroke-width"]="1px"}this._tank=this.renderer.rect(0,0,0,0,e);this._performTankLayout()}this._pointer=this.renderer.rect(0,0,0,0,this.pointer.style);this.renderer.attr(this._pointer,this.pointer.style);if(this.int64!==false){this._setValue(this._value64)}else{this._setValue(this.value)}},_performTankLayout:function(){var e,h,o,l=this._valueToCoordinates(),j=this._getBorderSize(),i=this._getSize(this.ticksOffset[0],"width"),g=this._getSize(this.ticksOffset[1],"height"),m=this._getMaxTickSize(),f=this._getSize(this.pointer.size),k=this._getSize(this.pointer.offset),n={};if(this.int64!==false){l=this._valueToCoordinates(this._max64);e=this._valueToCoordinates(this._min64)}else{l=this._valueToCoordinates(this.max);e=this._valueToCoordinates(this.min)}o=Math.abs(e-l);if(this.orientation==="vertical"){h=i+m;n={left:h+k+1+j,top:l,height:o,width:f}}else{h=g+m;n={left:e,top:h+k-f-1+j,height:f,width:o}}if(!this._isVML){this.renderer.attr(this._tank,{x:n.left});this.renderer.attr(this._tank,{y:n.top});this.renderer.attr(this._tank,{width:n.width});this.renderer.attr(this._tank,{height:n.height})}else{this._tank.style.top=n.top;this._tank.style.left=n.left;this._tank.style.width=n.width;this._tank.style.height=n.height}},_renderArrowPointer:function(){var e=this._getArrowPathByValue(0);this._pointer=this.renderer.path(e,this.pointer.style)},_renderArrowPointerByValue:function(e){var f=this._getArrowPathByValue(e);this._pointer=this.renderer.path(f,this.pointer.style)},_getArrowPathByValue:function(o){var i=this._getBorderSize(),m=Math.ceil(this._valueToCoordinates(o))+i,g=i,h=Math.ceil(this._getSize(this.ticksOffset[0],"width")),f=Math.ceil(this._getSize(this.ticksOffset[1],"height")),j=Math.ceil(this._getSize(this.pointer.offset)),n=Math.ceil(this._getMaxTickSize()),r=Math.ceil(this._getSize(this.pointer.size)),k=Math.ceil(Math.sqrt((r*r)/3)),q,l,p;if(this.orientation==="vertical"){g+=h+n+j;l=(j>=0)?g+r:g-r;q="M "+g+" "+m+" L "+l+" "+(m-k)+" L "+l+" "+(m+k)}else{var e=this._getMaxLabelSize()["height"];g+=h+n+j+e;if(this._isVML){g-=2}p=m;m=g;g=p;l=m-r;q="M "+g+" "+m+" L "+(g-k)+" "+l+" L "+(g+k)+" "+l}return q},_setValue:function(e){if(this.pointer.pointerType==="default"){this._performColumnPointerLayout(e)}else{this._performArrowPointerLayout(e)}this.value=e},_performColumnPointerLayout:function(h){var e,i,p,m=this._valueToCoordinates(h),k=this._getBorderSize(),j=this._getSize(this.ticksOffset[0],"width"),g=this._getSize(this.ticksOffset[1],"height"),n=this._getMaxTickSize(),f=this._getSize(this.pointer.size),l=this._getSize(this.pointer.offset),o={};if(this.int64!==false){e=this._valueToCoordinates(this._min64)}else{e=this._valueToCoordinates(this.min)}p=Math.abs(e-m);if(this.orientation==="vertical"){i=j+n;o={left:i+l+1+k,top:m,height:p,width:f}}else{i=g+n;o={left:e,top:i+l-f-1+k,height:f,width:p}}this._setRectAttrs(o)},_performArrowPointerLayout:function(f){var e=this._getArrowPathByValue(f);if(this._isVML){if(this._pointer){d(this._pointer).remove()}this._renderArrowPointerByValue(f)}else{this.renderer.attr(this._pointer,{d:e})}},_setRectAttrs:function(e){if(!this._isVML){this.renderer.attr(this._pointer,{x:e.left});this.renderer.attr(this._pointer,{y:e.top});this.renderer.attr(this._pointer,{width:e.width});this.renderer.attr(this._pointer,{height:e.height})}else{this._pointer.style.top=e.top;this._pointer.style.left=e.left;this._pointer.style.width=e.width;this._pointer.style.height=e.height}},_valueToCoordinates:function(t){var n=this._getBorderSize(),k=this._getScaleLength(),l=this._getSize(this.ticksOffset[0],"width"),j=this._getSize(this.ticksOffset[1],"height"),q,f,h;if(this.int64!==false){q=t.subtract(this._min64);f=this._max64.subtract(this._min64);if(this.int64==="s"){if(q.isNegative()){q.negate()}if(f.isNegative()){f.negate()}}else{q=q.intPart().abs();f=f.abs()}var e=q.toString(),g=f.toString(),m,s;if(g.length>15){var u=g.length-15;g=g.slice(0,15)+"."+g.slice(15);s=parseFloat(g);if(e.length>u){var r=e.length-u;e=e.slice(0,r)+"."+e.slice(r)}else{if(e.length===u){e="0."+e}else{var p="0.";for(var o=0;o<u-e.length;o++){p+="0"}e=p+""+e}}m=parseFloat(e)}else{if(this.int64==="s"){m=q.toNumber();s=f.toNumber()}else{m=parseFloat(q.toString());s=parseFloat(f.toString())}}h=(m/s)*k}else{q=Math.abs(this.min-t);f=Math.abs(this.max-this.min);h=(q/f)*k}if(this.orientation==="vertical"){return this._height-h-(this._height-j-k)+n}return h+l},_getSize:function(e,f){f=f||(this.orientation==="vertical"?"width":"height");if(e.toString().indexOf("%")>=0){e=(parseInt(e,10)/100)*this["_"+f]}e=parseInt(e,10);return e},propertiesChangedHandler:function(e,f,g){if(g.width&&g.height&&Object.keys(g).length==2){e.refresh()}},propertyChangedHandler:function(f,g,i,h){if(h==i){return}if(f.batchUpdate&&f.batchUpdate.width&&f.batchUpdate.height&&Object.keys(f.batchUpdate).length==2){return}if(g==="tankStyle"&&f.pointer.pointerType==="arrow"){return}if(g=="min"){if(f.int64==="s"){f._min64=new d.jqx.math().fromString(h.toString(),10)}else{if(f.int64==="u"){f._min64=new BigNumber(h)}else{this.min=parseFloat(h)}}d.jqx.aria(this,"aria-valuemin",h)}if(g=="max"){if(f.int64==="s"){f._max64=new d.jqx.math().fromString(h.toString(),10)}else{if(f.int64==="u"){f._max64=new BigNumber(h)}else{this.max=parseFloat(h)}}d.jqx.aria(this,"aria-valuemax",h)}if(g==="disabled"){if(h){this.disable()}else{this.enable()}d.jqx.aria(this,"aria-disabled",h)}else{if(g==="value"){if(this._timeout!=undefined){clearTimeout(this._timeout);this._timeout=null}this.value=i;this.setValue(h)}else{if(g==="colorScheme"){this.pointer.style=null}else{if(g==="orientation"&&i!==h){var e=this.ticksOffset[0];this.ticksOffset[0]=this.ticksOffset[1];this.ticksOffset[1]=e}}if(g!=="animationDuration"&&g!=="easing"){this.refresh()}}}if(this.renderer instanceof d.jqx.HTML5Renderer){this.renderer.refresh()}},_backgroundConstructor:function(g,e){if(this.host){return new this._backgroundConstructor(g,e)}var f={rectangle:true,roundedRectangle:true};g=g||{};this.style=g.style||{stroke:"#cccccc",fill:null};if(g.visible||typeof g.visible==="undefined"){this.visible=true}else{this.visible=false}if(f[g.backgroundType]){this.backgroundType=g.backgroundType}else{this.backgroundType="roundedRectangle"}if(this.backgroundType==="roundedRectangle"){if(typeof g.borderRadius==="number"){this.borderRadius=g.borderRadius}else{this.borderRadius=15}}if(typeof g.showGradient==="undefined"){this.showGradient=true}else{this.showGradient=g.showGradient}},resize:function(f,e){this.width=f;this.height=e;this.refresh()},_tickConstructor:function(f,e){if(this.host){return new this._tickConstructor(f,e)}this.size=e._validatePercentage(f.size,"10%");if(f.interval){this.interval=f.interval}else{this.interval=5}if(e.int64==="s"){this._interval64=new d.jqx.math().fromString(this.interval.toString(),10)}else{if(e.int64==="u"){this._interval64=new BigNumber(this.interval)}else{this.interval=parseFloat(this.interval)}}if(f.number){this.number=f.number}else{this.number=5}this.style=f.style||{stroke:"#A1A1A1","stroke-width":"1px"};if(typeof f.visible==="undefined"){this.visible=true}else{this.visible=f.visible}},_labelsConstructor:function(f,e){if(this.host){return new this._labelsConstructor(f,e)}this.position=f.position;if(this.position!=="far"&&this.position!=="near"&&this.position!=="both"){this.position="both"}this.formatValue=f.formatValue;this.formatSettings=f.formatSettings;this.visible=f.visible;if(this.visible!==false&&this.visible!==true){this.visible=true}if(f.interval){this.interval=f.interval}else{this.interval=10}if(e.int64==="s"){this._interval64=new d.jqx.math().fromString(this.interval.toString(),10)}else{if(e.int64==="u"){this._interval64=new BigNumber(this.interval)}else{this.interval=parseFloat(this.interval)}}if(f.number){this.number=f.number}else{this.number=10}this.fontSize=f.fontSize;this.fontFamily=f.fontFamily;this.fontWeight=f.fontWeight;this.fontStyle=f.fontStyle;this.offset=e._validatePercentage(f.offset,0)},_rangeConstructor:function(f,e){if(this.host){return new this._rangeConstructor(f,e)}if(f.startValue){this.startValue=f.startValue}else{this.startValue=e.min}if(f.endValue){this.endValue=f.endValue}else{this.endValue=e.max}if(e.int64==="s"){this._startValue64=new d.jqx.math().fromString(this.startValue.toString(),10);this._endValue64=new d.jqx.math().fromString(this.endValue.toString(),10);if(this._endValue64.lessThanOrEqual(this._startValue64)){this._endValue64=this._startValue64.add(new d.jqx.math().fromNumber(1,10));this.endValue=this._endValue64.toString()}}else{if(e.int64==="u"){this._startValue64=new BigNumber(this.startValue);this._endValue64=new BigNumber(this.endValue);if(this._endValue64.compare(this._startValue64)!==1){this._endValue64=this._startValue64.add(1);this.endValue=this._endValue64.toString()}}else{this.startValue=parseFloat(this.startValue);this.endValue=parseFloat(this.endValue);if(this.endValue<=this.startValue){this.endValue=this.startValue+1}}}this.style=f.style||{fill:"#dddddd",stroke:"#dddddd"}},_pointerConstructor:function(g,e){if(this.host){return new this._pointerConstructor(g,e)}var f=e._getColorScheme(e.colorScheme)[0];this.pointerType=g.pointerType;if(this.pointerType!=="default"&&this.pointerType!=="arrow"){this.pointerType="default"}this.style=g.style||{fill:f,stroke:f,"stroke-width":1};this.size=e._validatePercentage(g.size,"7%");this.visible=g.visible;if(this.visible!==true&&this.visible!==false){this.visible=true}this.offset=e._validatePercentage(g.offset,0)}};d.extend(b,c);d.extend(a,c);d.jqx.jqxWidget("jqxLinearGauge","",{});d.jqx.jqxWidget("jqxGauge","",{});d.extend(d.jqx._jqxGauge.prototype,b);d.extend(d.jqx._jqxLinearGauge.prototype,a)})(jqxBaseFramework);



/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentCirculationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_config__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocumentCirculationService = (function () {
    function DocumentCirculationService(_http) {
        this._http = _http;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
    }
    DocumentCirculationService.prototype.readData = function (idVehicule, type, fileName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'runningDocuments/readData/' + idVehicule + '?type=' + type + '&fileName=' + fileName, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    DocumentCirculationService.prototype.getListDocuments = function (idVehicule, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'runningDocuments/listByType/' + idVehicule + '?type=' + type, { headers: headers }).map(function (res) { return res.json(); });
    };
    DocumentCirculationService.prototype.getProviders = function (type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'providers/listByType?type=' + type, { headers: headers }).map(function (res) { return res.json(); });
    };
    DocumentCirculationService.prototype.getExpirationDates = function (idVehicule) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'runningDocuments/expirationDates/' + idVehicule, { headers: headers }).map(function (res) { return res.json(); });
    };
    DocumentCirculationService.prototype.downloadFile = function (fileName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'upload/files/' + fileName, { headers: headers }).map(function (res) { return res.json(); });
    };
    DocumentCirculationService.prototype.delete = function (idRunningDocument) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'runningDocuments/' + idRunningDocument, { headers: headers }).map(function (res) { return res.json(); });
    };
    DocumentCirculationService.prototype.getDataInExcel = function (idVehicule, type, date) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* ResponseContentType */].Blob });
        var body = JSON.stringify(date);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'runningDocuments/exportExcel/' + idVehicule + '?type=' + type, date, options).map(function (res) { return res.blob(); });
    };
    DocumentCirculationService.prototype.add = function (documente, idVehicule, idProvider, providerName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(documente);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'runningDocuments/?idVehicule=' + idVehicule + '&idProvider=' + idProvider + '&providerName=' + providerName, documente, options).map(function (res) { return res.json(); });
    };
    DocumentCirculationService.prototype.update = function (documente, idProvider, providerName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(documente);
        return this._http.put(__WEBPACK_IMPORTED_MODULE_4__global_config__["a" /* dns */] + 'runningDocuments/?idProvider=' + idProvider + '&providerName=' + providerName, documente, options).map(function (res) { return res.json(); });
    };
    return DocumentCirculationService;
}());
DocumentCirculationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], DocumentCirculationService);

//# sourceMappingURL=document-circulation.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_config__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuelingService = (function () {
    function FuelingService(_http) {
        this._http = _http;
        this.currentuser = JSON.parse(localStorage.getItem('currentuser'));
    }
    FuelingService.prototype.getListFueling = function (idVehicule) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'fuelings/list/' + idVehicule, { headers: headers }).map(function (res) { return res.json(); });
    };
    FuelingService.prototype.getListType = function (type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'types/list?type=' + type, { headers: headers }).map(function (res) { return res.json(); });
    };
    FuelingService.prototype.getProviders = function (type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'providers/listByType?type=' + type, { headers: headers }).map(function (res) { return res.json(); });
    };
    FuelingService.prototype.getDataInExcel = function (idVehicule, date) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(date);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'fuelings/exportExcel/' + idVehicule, date, options).map(function (res) { return res.json(); });
    };
    FuelingService.prototype.readData = function (idVehicule, fileName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'fuelings/readData/' + idVehicule + '?fileName=' + fileName, { headers: headers }).map(function (res) { return res.json(); });
    };
    FuelingService.prototype.delete = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'fuelings/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    FuelingService.prototype.add = function (fueling, idVehicule, idProvider, idType, providerName, typePayment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(fueling);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'fuelings?idVehicule=' + idVehicule + '&idProvider=' + idProvider + '&idType=' + idType + '&providerName=' + providerName + '&typePayment=' + typePayment, fueling, options).map(function (res) { return res.json(); });
    };
    FuelingService.prototype.update = function (fueling, idProvider, idType, providerName, typePayment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(fueling);
        return this._http.put(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'fuelings?idProvider=' + idProvider + '&idType=' + idType + '&providerName=' + providerName + '&typePayment=' + typePayment, fueling, options).map(function (res) { return res.json(); });
    };
    FuelingService.prototype.getDashbordInfo = function (idVehicule, date) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', this.currentuser.token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(date);
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__global_config__["a" /* dns */] + 'vehicules/' + idVehicule, date, options).map(function (res) { return res.json(); });
    };
    return FuelingService;
}());
FuelingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], FuelingService);

//# sourceMappingURL=fueling.service.js.map

/***/ })

},[430]);
//# sourceMappingURL=main.js.map