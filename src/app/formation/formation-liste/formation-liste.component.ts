import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Formation} from "src/app/model/Formation";
import {Router} from "@angular/router";
import { FormationService } from "src/app/service/formation.service";
@Component({
  selector: 'app-formation-liste',
  templateUrl: './formation-liste.component.html',
  styleUrls: ['./formation-liste.component.css']
})
export class FormationListeComponent implements OnInit {

  formations: Observable<Formation[]>;
     constructor(private formationService: FormationService,
                 private router: Router) { }


     ngOnInit(): void {
       this.reloadData();
     }

     reloadData() {
       this.formations = this.formationService.getFormationsList();
     }

     updateFormation(id: number){
       this.router.navigate(['updateformation', id]);
     }

     deleteFormation(id: number) {
       this.formationService.deleteFormation(id)
         .subscribe(
           data => {
             console.log(data);
             this.reloadData();
           },
           error => console.log(error));
     }
     formationDetails(id: number){
       this.router.navigate(['formation', id]);
     }

   }
