import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DomaineService } from "src/app/service/domaine.service";
import { Domaine } from "src/app/model/domaine";
import { Router } from '@angular/router';
@Component({
  selector: 'app-domaine-liste',
  templateUrl: './domaine-liste.component.html',
  styleUrls: ['./domaine-liste.component.css']
})
export class DomaineListeComponent implements OnInit {

domaines: Observable<Domaine[]>;

        constructor(private domaineService: DomaineService,
          private router: Router) {}

        ngOnInit() {
          this.reloadData();
        }

        reloadData() {
          this.domaines = this.domaineService.getDomainesList();
        }

        deleteDomaine(id: number) {
          this.domaineService.deleteDomaine(id)
            .subscribe(
              data => {
                console.log(data);
                this.reloadData();
              },
              error => console.log(error));
        }

        domaineDetails(id: number){
          this.router.navigate(['domaine', id]);
        }

        updateDomaine(id: number){
            this.router.navigate(['updateDomaine', id]);
          }

        addDomaine(){
            this.router.navigate(['addDomaine']);
              }

}
