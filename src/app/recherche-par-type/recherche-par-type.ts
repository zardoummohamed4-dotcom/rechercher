import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vetement } from '../model/vetement.model';
import { Tyype } from '../model/type.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-recherche-par-type',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './recherche-par-type.html'
})
export class RechercheParType implements OnInit {

  vetements!: Vetement[];
  types!: Tyype[];
  idType!: number;

  constructor(private vetementService: VetementService) {}

  ngOnInit(): void {
    this.types = this.vetementService.listeTypes();
    this.vetements = this.vetementService.listeVetements();
  }
  
  onChange(): void {
    if (this.idType) {
      this.vetements = this.vetementService.rechercherParType(this.idType);
    } else {
      this.vetements = this.vetementService.listeVetements();
    }
  }
}