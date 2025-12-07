import { Routes } from '@angular/router';
import { Forum } from './forum/forum';
import { News } from './news/news';
import { Social } from './social/social';
import { Support } from './support/support';

export const routes: Routes = [
    {path: 'forum', component: Forum },
    {path: 'news', component: News },
    {path: 'social', component: Social },
    {path: 'support', component: Support },
];
