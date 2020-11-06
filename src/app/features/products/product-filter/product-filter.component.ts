import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ProductFilter } from 'src/app/models/product.models';
import { Categoryservice } from '../category-service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  artists: SelectItem[] = [];
  designers: SelectItem[] = [];
  mechanics: SelectItem[] = [];

  filter: ProductFilter = {};
  showContainer: boolean = true;

  constructor(private readonly categoryService: Categoryservice) { }

  ngOnInit(): void {
    this.getArtists();
    this.getDesigners();
    this.getMechanics();
  }

  toggleFilterClick() {
    this.showContainer = !this.showContainer;
  }

  private getArtists() {
    this.categoryService.getArtists().subscribe(
      response => {
        this.artists = response.map(a => {
          return <SelectItem>{
            value: a.id,
            label: a.name
          }
        })
      }
    )
  }

  private getDesigners() {
    this.categoryService.getDesigners().subscribe(
      response => {
        this.designers = response.map(d => {
          return <SelectItem>{
            value: d.id,
            label: d.name
          }
        })
      }
    )
  }

  private getMechanics() {
    this.categoryService.getMechanics().subscribe(
      response => {
        this.artists = response.map(m => {
          return <SelectItem>{
            value: m.id,
            label: m.name
          }
        })
      }
    )
  }

}
