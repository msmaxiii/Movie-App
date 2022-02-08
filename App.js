
// http://www.omdbapi.com/?i=tt3896198&apikey=719a4309

class App extends React.Component {
    state ={
        baseURL:'http://www.omdbapi.com/?',
        apiKey:'apikey=719a4309',
        query:'&t=',
        movieTitle:'',
        searchURL:'',
        movie: null,
        loading: false
    }


handleChange =(e) => {
     console.log(e.target.value);
    this.setState({
        movieTitle: e.target.value
    });
}
handleSubmit =(e)=> {
e.preventDefault();
this.setState({
    searchURL:`${this.state.baseURL}${this.state.apiKey}${this.state.query}${this.state.movieTitle}`
},
()=>{
    fetch(this.state.searchURL)
    .then(response =>response.json())
    .then(movie =>{
        this.setState({movie:movie,movieTitle:''})
        // console.log(this.state.movie);
     
    })
    .catch(error =>console.log(error))
}
);
}

    render(){
        return(
        <div>  
            <h1>Movie App</h1>

    <form onSubmit={this.handleSubmit}>
        <label htmlFor='movieTitle'>Movie Title</label>
        <input type='text'
        id='movieTitle' 
        value={this.state.movieTitle}
        onChange={this.handleChange} />
         
      
        <input type='submit'/>

            </form>
            {/* truthy value */}
         {this.state.movie &&  <MovieInfo movie={this.state.movie}/>}

         {this.state.loading && <h1>True</h1>}

        </div>
        );
    }
}


const MovieInfo =(props)=>{
    return(
        
        <div> 
        <h1>Movie Title:{props.movie.Title}</h1>
        <h2>Year:{props.movie.Year}</h2>
        <img src={props.movie.Poster}/>
        <h3>Genre:{props.movie.Genre}</h3>
        <p>{props.movie.Plot}</p>
        </div>
    )


}
    
    


ReactDOM.render(<App/>,document.getElementById('root'));