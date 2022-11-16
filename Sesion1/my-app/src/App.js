import './App.css';

const links = [
  {
    url: "https://www.google.com.mx/",
    name: "Google"
  },
  {
    url: "https://twitter.com/marflyy_",
    name: "Twitter"
  },
  {
    url: "https://www.linkedin.com/in/maribel-melendezd/",
    name: "LinkedIn"
  },
  {
    url: "https://www.facebook.com/lizbeth.melendez.07",
    name: "Facebook"
  }

]

function ListItem(props) {
  return (
    <li>
      <a href={props.url}> {props.name} </a>
    </li>
  );
} 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          links.map(element => <ListItem url={element.url} name={element.name}/>)
        }
      </header>
    </div>
  );
}

export default App;
