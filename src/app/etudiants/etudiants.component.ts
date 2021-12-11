import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';

import { Etudiant } from '../model/etudiant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  etudiants : Etudiant[]; 
  
  constructor(private etudiantService: EtudiantService,private router :Router ) {
    //this.etudiants = produitService.listeEtudiants();
    }
    

    ngOnInit(): void {
      this.etudiantService.listeEtudiants().subscribe(etuds => {
        console.log(etuds);
        this.etudiants =etuds;
        });
        
    }
    supprimerEtudiant(p: Etudiant)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.etudiantService.supprimerEtudiant(p.idEtudiant).subscribe(() => {
      console.log("etudiant supprimé");
      this.supprimerEtudiantDuTab(p);
    });
  }
    
    supprimerEtudiantDuTab(prod : Etudiant) {
      this.etudiants.forEach((cur, index) => {
      if(prod.idEtudiant=== cur.idEtudiant) {
      this.etudiants.splice(index, 1);
      }
      });
      }   
  }
    
  
  


