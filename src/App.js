import "./App.css";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name = "Ali";

function App() {
    return (
        // let price = 500;
        // let status = false;
        //   return (
        //     <div>
        //     <h1>Table</h1>
        //     <h3>RS: {price}</h3>
        //     <h4>status: {status===true ? "Active":"Not Available"}</h4>
        //     <img src ="1.jpg" />
        //     </div>
        // --------------------------------------------------------------------
        // let marks = [10, 20, 30, 40];
        // return ( <
        //     div >
        //     <
        //     h1 > Marks Sheet < /h1> <
        //     ul > {
        //         marks.map(m => < li > { m } < /li>)
        //         } <
        //         /ul> < /
        //         div >
        // --------------------------------------------------------------------------
        <>
        <Navbar title = "TextUtils" aboutText = "About TextUtils" />
        <div className="container my-3">
        <TextForm heading ="Enter the text to capitalize"/>
        </div>
        
        </>
       
    );
}

export default App;