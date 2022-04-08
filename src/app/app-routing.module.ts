import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FazerComponent } from './fazer/fazer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'fazer', component: FazerComponent },
  { path: 'portfolio', component: PortfolioComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
