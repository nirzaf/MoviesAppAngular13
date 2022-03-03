import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;

  imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
