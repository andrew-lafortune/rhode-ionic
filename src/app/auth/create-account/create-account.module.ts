import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAccountPageRoutingModule } from './create-account-routing.module';

import { CreateAccountPage } from './create-account.page';
import { GeneralModule } from 'src/app/core/general/general.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAccountPageRoutingModule,
    GeneralModule,
  ],
  declarations: [CreateAccountPage],
})
export class CreateAccountPageModule {}
