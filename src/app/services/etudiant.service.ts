import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
//import { Etudiant } from './model/etudiant.model';
import { Observable } from 'rxjs';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
 headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
 apiURL: string = 'http://localhost:8091/api';

  etudiants : Etudiant[];
  etudiant: Etudiant;


 constructor(private http : HttpClient) {

  }
  listeEtudiants(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.apiURL);
    }
 
  ajouterEtudiant(etu:Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(this.apiURL, etu, httpOptions);
    }
  
  
  supprimerEtudiant(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
    
  
    consulterEtudiant(id: number): Observable<Etudiant> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Etudiant>(url);
      }
      
    trierEtudiants(){
      this.etudiants = this.etudiants.sort((n1,n2) => {
      if (n1.idEtudiant > n2.idEtudiant) {
      return 1;
      }
      if (n1.idEtudiant < n2.idEtudiant) {
      return -1;
      }
      return 0;
      });
      }
      updateEtudiant(etu :Etudiant) : Observable<Etudiant>
      {
      return this.http.put<Etudiant>(this.apiURL, etu, httpOptions);
      }
  }
    


