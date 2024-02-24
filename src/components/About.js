import React from "react";
import UserInfo from "./UserInfo";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    render() {
        return (
            <div> 
                <h1>About Page</h1>
                <h1>This is A Restaurant Page for Ordering Items</h1>
                <div>
                    <UserContext.Consumer>
                        {({ LoggedInUser }) => (
                            <h1 className="font-bold">LoggedInUser: {LoggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <UserInfo name={"Ayushmaan Pandey"} location={"Hyderabad"} mail={"ayushmaan1122pandey@gmail.com"}/>
            </div>
        )
    }
}

export default About;
