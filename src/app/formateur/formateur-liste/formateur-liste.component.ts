//import { FormateurDetailsComponent } from 'src/app/component/formateur/formateur-details/formateur-details.component';
import { Observable } from "rxjs";
import { FormateurService } from "src/app/service/formateur.service";
import { Formateur } from "src/app/model/formateur";
import { Organisme } from "src/app/model/organisme";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-formateur-liste',
  templateUrl: './formateur-liste.component.html',
  styleUrls: ['./formateur-liste.component.css']
})
export class FormateurListeComponent implements OnInit {

   formateurs: Observable<Formateur[]>;

      constructor(private formateurService: FormateurService,
        private router: Router) {}

      ngOnInit() {
        this.reloadData();
      }

      reloadData() {
        this.formateurs = this.formateurService.getFormateursList();
        console.log(this.formateurs);
      }

      deleteFormateur(id: number) {
        this.formateurService.deleteFormateur(id)
          .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error));
      }

      formateurDetails(id: number){
        this.router.navigate(['formateur', id]);
      }

      updateFormateur(id: number){
          this.router.navigate(['updateformateur', id]);
        }

      addFormateur(){
          this.router.navigate(['addFormateur']);
            }
}
