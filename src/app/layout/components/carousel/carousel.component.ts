import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CarouselItem } from '../../modules/CarouselItem';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy {

  @Input() items: CarouselItem[] = [];
  @Input() autoPlay: boolean = false;
  @Input() autoPlayInterval: number = 3000;
  @Input() showIndicators: boolean = true;
  @Input() transitionSpeed: number = 500;

  @Output() slideChanged = new EventEmitter<number>();

  currentIndex: number = 0;
  private intervalId: any;

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => this.next(), this.autoPlayInterval);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.slideChanged.emit(this.currentIndex);
  }

  previous() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.slideChanged.emit(this.currentIndex);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.slideChanged.emit(this.currentIndex);
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

}
