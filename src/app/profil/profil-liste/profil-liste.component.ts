import { Component, OnInit } from '@angular/core';
//import { ProfilDetailsComponent } from 'src/app/profil-details/profil-details.component';
import { Observable } from "rxjs";
import { ProfilService } from "src/app/service/profil.service";
import { Profil} from "src/app/model/profil";
import { Router } from '@angular/router';
@Component({
  selector: 'app-profil-liste',
  templateUrl: './profil-liste.component.html',
  styleUrls: ['./profil-liste.component.css']
})
export class ProfilListeComponent implements OnInit {


  profils: Observable<Profil[]>;

      constructor(private profilService: ProfilService,
        private router: Router) {}

      ngOnInit() {
        this.reloadData();
      }

      reloadData() {
        this.profils = this.profilService.getProfilsList();
      }

      deleteProfil(id: number) {
        this.profilService.deleteProfil(id)
          .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error));
      }

      profilDetails(id: number){
        this.router.navigate(['profile', id]);
      }

      updateProfil(id: number){
          this.router.navigate(['updateprofile', id]);
        }

      addProfil(){
          this.router.navigate(['addProfil']);
            }

}
