import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent {
  id: string | null;

  constructor(private arouter:ActivatedRoute){
    this.id = this.arouter.snapshot.paramMap.get('id');
  }
}
