import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewFeaturePageRoutingModule } from './new-feature-routing.module';

import { NewFeaturePage } from './new-feature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewFeaturePageRoutingModule,
  ],
  declarations: [NewFeaturePage],
})
export class NewFeaturePageModule {}
