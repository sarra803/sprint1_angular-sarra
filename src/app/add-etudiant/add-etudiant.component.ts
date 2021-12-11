//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';
import { Etudiant } from '../model/etudiant.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  newEtudiant = new Etudiant();
 // message: string; 
  //router: any;
  etudiant:any;

  constructor( private etudiantService: EtudiantService,private router :Router) { }
  ngOnInit(): void {
  }
  addEtudiant(){
    this.etudiantService.ajouterEtudiant(this.newEtudiant).subscribe(etu => {
    console.log(etu);
    });
    this.router.navigate(['etudiants']);
    }
}


