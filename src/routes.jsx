import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import CompanyPage from './pages/CompanyPage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/DashboardPage';
import InvoicePage from './pages/InvoicePage';
import BidPage from './pages/BidPage';
import TransactionPage from './pages/TransactionPage';
import Contact from './pages/contact';
import About from './pages/about';
import Footer from './components/common/Footer';
import Navbar from './components/common/navbar';



const AppRoute = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/ProductPage" element={<ProductPage/>} />
        <Route path="/OrderPage" element={<OrderPage/>} />
        <Route path="/CompanyPage" element={<CompanyPage/>} />
        <Route path="/NotFoundPage" element={<NotFoundPage/>} />
        <Route path="/DashboardPage" element={<DashboardPage/>} />
        <Route path="/InvoicePage" element={<InvoicePage/>} />
        <Route path="/BidPage" element={<BidPage/>} />
        <Route path="/TransactionPage" element={<TransactionPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRoute;