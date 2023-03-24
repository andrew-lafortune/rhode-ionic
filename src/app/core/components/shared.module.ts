import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DueDateModalComponent } from './due-date-modal/due-date-modal.component';
import { NgModule } from '@angular/core';

const componentsArr = [DueDateModalComponent];

@NgModule({
  declarations: [...componentsArr],
  imports: [CommonModule, IonicModule],
  exports: [...componentsArr],
})
export class SharedModule {}
