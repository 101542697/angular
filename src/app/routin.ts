import {RouterModule, Routes} from '@angular/Router';

import {ProductComponent} from './component/product/product.component';
import {ComprarComponent} from './component/comprar/comprar.component';


const condicionales:Routes=[
    
    {path:"producto",
    component: ProductComponent

    },
    {
        path:"compra",
        component:ComprarComponent,
    }

]

export const appRoutingModule = RouterModule.forRoot(condicionales);
