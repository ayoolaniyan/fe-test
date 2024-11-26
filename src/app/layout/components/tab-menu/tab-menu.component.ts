import { Component, Input } from '@angular/core';
import { TabMenuItem } from '../../modules/TabMenuItem'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.scss'
})
export class TabMenuComponent {
  @Input() tabs: TabMenuItem[] = [];
  activeTab: number = 0;

  onSelectTab(index: number) {
    this.activeTab = index;
  }

}
