//import { OrganismeDetailsComponent } from 'src/app/organisme/organisme-details/organisme-details.component';
import { Observable } from "rxjs";
import { OrganismeService } from "src/app/service/organisme.service";
import { Organisme } from "src/app/model/organisme";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-organisme-liste',
  templateUrl: './organisme-liste.component.html',
  styleUrls: ['./organisme-liste.component.css']
})
export class OrganismeListeComponent implements OnInit {


   organismes: Observable<Organisme[]>;

    constructor(private organismeService: OrganismeService,
      private router: Router) {}

    ngOnInit() {
      this.reloadData();
    }

    reloadData() {
      this.organismes = this.organismeService.getOrganismesList();
    }

    deleteOrganisme(id: number) {
      this.organismeService.deleteOrganisme(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }

    organismeDetails(id: number){
      this.router.navigate(['organisme', id]);
    }

    updateOrganisme(id: number){
        this.router.navigate(['updateorganisme', id]);
      }

    addOrganisme(){
        this.router.navigate(['addOrganisme']);
          }

}
