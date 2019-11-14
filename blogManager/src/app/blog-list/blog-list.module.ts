import { NgModule } from '@angular/core';

import { BlogListRoutingModule } from './blog-list-routing.module';
import { BlogListComponent } from './blog-list.component';

console.log('blog')

@NgModule({
  declarations: [BlogListComponent],
  imports: [
    BlogListRoutingModule
  ]
})
export class BlogListModule { }
