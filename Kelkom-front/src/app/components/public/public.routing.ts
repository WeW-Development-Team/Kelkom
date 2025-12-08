import { Routes } from '@angular/router';
import { Forum } from './forum/forum';
import { News } from './news/news';
import { Social } from './social/social';
import { Support } from './support/support';
import { HomePage } from './home-page/home-page';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

export const publicRoutes: Routes = [

    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: 'forum', component: Forum },
            { path: 'news', component: News },
            { path: 'social', component: Social },
            { path: 'support', component: Support },
            {  path: 'home', component: HomePage },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    }

    
];
