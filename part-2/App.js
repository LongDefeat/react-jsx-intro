const App = () => {
   return <div>
        <TweetComponent
            username="javascript420"
            name="Tyler"
            date={new Date().toDateString()}
            message="School is cool."    
        />
        <TweetComponent 
            username="codeboy19"
            name="Marge"
            date={new Date().toDateString()}
            message="Pizza with my sistas." 
        />
        <TweetComponent 
            username="smoothcriminal"
            name="Michael"
            date={new Date().toDateString()}
            message="Watch me ollie." 
        />
    </div>
}

