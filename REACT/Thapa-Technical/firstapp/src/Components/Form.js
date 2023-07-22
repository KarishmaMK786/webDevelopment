import React, {useState} from "react";
import "./form.css";

const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    
    const dataStore = (e) => {
        e.preventDefault();
        
        if (email && password) {
            const newEntry = {id: new Date().getTime().toString(),  email:email, password:password};

            setAllEntry([...allEntry, newEntry]);
            setEmail("");
            setPassword("");
        }else {
            alert("Please fill the data");
        }

    }

    return (
        <div className="container">
             
             <form action="" onSubmit={dataStore}>
                <div className="email">
                    <label htmlFor="email" id="lemail">Email</label><br />
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                </div>
                <div className="password" >
                    <label htmlFor="password"  id="lpassword">Password</label><br />
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
                </div>
                <div className="button">
                    <button type="submit">Submit</button>
                </div>
             </form>
             <div>
                {
                    allEntry.map((currEle) => {

                        const {id,email,password} = currEle;
                        return(
                            console.log(id,email,password)
                        )

                    })
                }
             </div>

        </div>
    )

}
export  default Form ;