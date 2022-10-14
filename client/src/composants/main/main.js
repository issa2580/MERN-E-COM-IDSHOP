import React from "react";
import { useContext } from "react";
import { Switch ,Route } from 'react-router-dom';
import { GlobalState } from "../../etat";
import AddProduit from "./addProduct/produit";
import AddProduitV from "./addProduct/produitV";
import Login from "./auth/login";
import Register from "./auth/register";
import Category from "./category/category";
import Commande from "./commande/commande";
import DetailCommande from "./commande/detailCommande";
import DetailProduits from "./detail/detailProduits";
import Panier from "./panier/panier";
import Payement from "./panier/payement";
import Produits from "./produit/produit";
import NotFound from "./utile/page/notFound";




function Main (){

    const state = useContext(GlobalState);
    const [isLogin] = state.clientAPI.isLogin;
    const [isAdmin] = state.clientAPI.isAdmin;
    const [isVender] = state.clientAPI.isVender;

    return (
        <Switch>
            <Route path = '/' exact component = {Produits} />
            <Route path = '/detail/:id' exact component = {DetailProduits} />

            <Route path = '/login' exact component = {isLogin ? NotFound : Login} />
            <Route path = '/register' exact component = {isLogin ? NotFound : Register} />

            <Route path = '/category' exact component = {isAdmin ? Category : NotFound} />
            <Route path = '/create_prod' exact component = {isAdmin ? AddProduit : NotFound} />
            <Route path = '/modif_prod/:id' exact component = {isAdmin ? AddProduit : NotFound} />

            <Route path = '/categoryV' exact component = {isVender ? Category : NotFound} />
            <Route path = '/create_prodV' exact component = {isVender ? AddProduitV : NotFound} />
            <Route path = '/modif_prodV/:id' exact component = {isVender ? AddProduitV : NotFound} />

            <Route path = '/panier' exact component = {Panier} />
            <Route path = '/payement' exact component = {Payement} />

            <Route path = '/history' exact component = {isLogin ? Commande : NotFound} />
            <Route path = '/history/:id' exact component = {DetailCommande} />
  
            <Route path = '/*' exact component = {NotFound} />
        </Switch>
    )
}

export default Main;