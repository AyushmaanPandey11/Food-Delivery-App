import React from "react";

class UserInfo extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            count:0,
            UserDetails: {
                name:"UserName",
                location:"Earth",
            },
        };
        
    } 
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/AyushmaanPandey11");
        const json = await data.json();
        this.setState({
            UserDetails:json,
        })
    }
    render()
    {
        const {count} = this.state;
        const { login,avatar_url, name,bio  } = this.state.UserDetails;
        return (
            <div className="User-info-container" >
                <h1>Data Fetching Using Api call</h1>
                <img src={avatar_url} />
                <h1>Name : {name}</h1>
                <h2>UserName : {login}</h2>
                <h3>Bio : {bio}</h3>
                <h3> Count: {count} </h3>
                <button onClick={ ()=> {
                    this.setState(
                        {
                            count : count +1,
                        }
                    )
                }}>Count Increase</button><br></br>
                <button onClick={ ()=> {
                    this.setState({
                        count : count - 1,
                    })
                }} >Count Decrease</button>
            </div>
        );
    }
};
export default UserInfo;