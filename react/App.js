import React from 'react';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import Property from './pages/Property';
import SingleProperty from './pages/SingleProperty';
import Contact from './pages/Contact';
function Layout() {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
function App() {
    return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="properties/all" element={<Property/>}/>
                    <Route path="/pages/contact" element={<Contact/>}/>
                    <Route path="properties/:handel" element={<SingleProperty/>}/>
                    <Route path="*" element={<h1> Page Not Found</h1>}/>
                </Route>
            </Routes>

    );
}

export default App;
