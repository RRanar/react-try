import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";

function App() {
    const titles = [
      'Header',
      'Main',
      'Footer'
    ];

    const links = [
        {id:1, title:"Home", link:"/"},
        {id:2, title:"About", link: "/about"},
        {id:3, title: "ContactUs", link: "/contact"}
    ];

  return (
    <div className="App" >
      <Header title = {titles[0]} links={links}/>
      <Main title = {titles[1]}/>
      <Footer title = {titles[2]}/>
    </div>
  );
}

export default App;
