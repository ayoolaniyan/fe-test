import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { TabMenuComponent } from "../../layout/components/tab-menu/tab-menu.component";
import { TabMenuItem } from '../../layout/modules/TabMenuItem';
import { OrderListComponent } from "../../layout/components/list/list.component";
import { OrderInformation } from '../../layout/modules/OrderInformation';
import { CalculatorComponent } from "../../layout/components/calculator/calculator.component";
import { CarouselComponent } from "../../layout/components/carousel/carousel.component";
import { CarouselItem } from '../../layout/modules/CarouselItem';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../layout/components/card/card.component";
import { ProductItem } from '../../layout/modules/ProductItem';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TabMenuComponent, OrderListComponent, CalculatorComponent, CarouselComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('customTemplate') customTemplate!: TemplateRef<any>;
  @ViewChild('customTemplate2') customTemplate2!: TemplateRef<any>;

  faSearch = faSearch;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  tabItems: TabMenuItem[] = [];
  newOrders: OrderInformation[] = [];
  completedOrders: OrderInformation[] = [];
  carouselItems: CarouselItem[] = [];
  productItems: ProductItem[] = [];

  ngAfterViewInit() {
    setTimeout(() => {
      this.tabItems = [
        { label: 'New orders', content: null, template: this.customTemplate2 },
        { label: 'Completed orders', content: null, template: this.customTemplate },
      ];

      this.newOrders = [
        { time: '10:00am', frequency: 'weekly delivery', status: 'canceled' },
        { time: '12:00am', frequency: 'yearly delivery', status: 'accepted' },
        { time: '14:00pm', frequency: 'monthly delivery', status: 'reviewed' },
      ];

      this.completedOrders = [
        { time: '10:00am', frequency: 'weekly delivery', status: 'delivered' },
        { time: '12:00am', frequency: 'yearly delivery', status: 'delivered' },
        { time: '14:00pm', frequency: 'monthly delivery', status: 'delivered' },
      ];

      this.carouselItems = [
        {
          title: 'Slide 1',
          description: 'Description for slide one.',
          link: '#',
        },
        {
          title: 'Slide 2',
          description: 'Description for slide two.',
          link: '#',
        },
        {
          title: 'Slide 3',
          description: 'Description for slide three.',
          link: '#',
        },
      ];

      this.productItems = [
        {
          imageUrl: 'images/image-1.png',
          title: 'Malskivor Macap M2M',
          price: '100 SEK',
          description: '956601 - 10 variants',
          promoText: 'Super Deal'
        },
        {
          imageUrl: 'images/image-2.png',
          title: 'Malskivor Macap M4D',
          price: '200 SEK',
          description: '956601 - 10 variants',
          promoText: 'Hot Deal'
        },
        {
          imageUrl: 'images/image-3.png',
          title: 'Kugghjul Baratza',
          price: '100 SEK',
          description: '956601 - 10 variants',
          promoText: 'Super Deal'
        },
        {
          imageUrl: 'images/image-4.png',
          title: 'Hopper Eureka',
          price: '100 SEK',
          description: '56601 - 10 variants',
          promoText: 'Super Deal'
        },
        {
          imageUrl: 'images/image-4.png',
          title: 'Hopper Eureka',
          price: '100 SEK',
          description: '56601 - 10 variants',
          promoText: 'Super Deal'
        },
      ];

    });
  }

  onSlideChanged(index: number) {
    console.log('Current Slide:', index);
  }

  handleAddToCart(product: ProductItem): void {
    console.log(`${product.title} added to cart!`);
  }

}
