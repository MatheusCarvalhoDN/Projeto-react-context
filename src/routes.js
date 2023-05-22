import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UsuarioProvider } from 'commom/context/Usuario';
import { CarrinhoProvider } from 'commom/context/Carrinho';
import { PagamentoProvider } from 'commom/context/Pagamento';

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <UsuarioProvider>
                    <Route exact path="/" >
                        <Login />
                    </Route>
                    <CarrinhoProvider>
                    <PagamentoProvider>
                        <Route path="/feira">
                            <Feira />
                        </Route>
                        
                        <Route path="/carrinho">
                            <Carrinho />
                        </Route> 
                        </PagamentoProvider>
                    </CarrinhoProvider>
                </UsuarioProvider>
            </Switch>
        </BrowserRouter>
    )
}


export default Router;