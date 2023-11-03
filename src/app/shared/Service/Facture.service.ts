import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  readonly API_URL = 'http://192.168.1.40:8282/SpringMVC/fournisseur';

  constructor(private httpClient: HttpClient) { }

  getAllFactures() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-fournisseurs`)
  }
  addFacture(facture : any) {
    console.log("fourn=", facture)
    return this.httpClient.post(`${this.API_URL}/add-fournisseur`, facture)
  }
}
 
