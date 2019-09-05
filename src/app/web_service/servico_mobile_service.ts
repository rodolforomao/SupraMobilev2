
import { HttpHeaders, HttpRequest,  HttpResponse, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { forkJoin } from 'rxjs';


@Injectable()

export class servico_mobile_service {

  constructor(private http: HttpClient) { }

  public OnLogarUsuario({ LoginPost, string }: { LoginPost; string; }) {
    
  }

 
}