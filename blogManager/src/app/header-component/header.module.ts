import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';

import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyButtonModule } from '@alyle/ui/button';
import { LyBadgeModule } from '@alyle/ui/badge';
import { LyIconModule } from '@alyle/ui/icon';

console.log('header')

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    LyToolbarModule,
    LyTypographyModule,
    LyButtonModule,
    LyIconModule,
    LyBadgeModule
  ],
  exports:[HeaderComponent],
  providers: [],
})
export class HeaderModule { }
