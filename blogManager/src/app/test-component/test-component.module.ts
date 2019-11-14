import { NgModule } from '@angular/core';

import { TestComponentComponent } from './test-component.component';

import { LyIconModule } from '@alyle/ui/icon';
import { LyTypographyModule } from '@alyle/ui/typography';


console.log('test component');

@NgModule({
  declarations: [TestComponentComponent],
  exports: [
    TestComponentComponent
  ],
  imports: [
    LyIconModule,
    LyTypographyModule,
  ]
})

export class TestComponentModule { }
