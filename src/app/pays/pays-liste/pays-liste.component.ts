import { Component, OnInit } from '@angular/core';
//import { PaysDetailsComponent } from 'src/app/pays/pays-details/pays-details.component';
import { Observable } from "rxjs";
import { PaysService } from "src/app/service/pays.service";
import { Pays} from "src/app/model/pays";
import { Router } from '@angular/router';
@Component({
  selector: 'app-pays-liste',
  templateUrl: './pays-liste.component.html',
  styleUrls: ['./pays-liste.component.css']
})
export class PaysListeComponent implements OnInit {

 payss: Observable<Pays[]>;

        constructor(private paysService: PaysService,
          private router: Router) {}

        ngOnInit() {
          this.reloadData();
        }

        reloadData() {
          this.payss = this.paysService.getPayssList();
        }

        deletePays(id: number) {
          this.paysService.deletePays(id)
            .subscribe(
              data => {
                console.log(data);
                this.reloadData();
              },
              error => console.log(error));
        }

        paysDetails(id: number){
          this.router.navigate(['pays', id]);
        }

        updatePays(id: number){
            this.router.navigate(['updatepays', id]);
          }

        addPays(){
            this.router.navigate(['addPays']);
              }


}
