const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent
            name="Mason" 
        />
    </div>

)
ReactDOM.render(<App />, document.getElementById("root"))
