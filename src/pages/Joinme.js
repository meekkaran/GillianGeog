import React from 'react';
import "./joinme.css";

function Joinme() {
    return (
        <div>
        {/*contact page*/}
        <div class="app">
            <form>
                <h2>Contact us...</h2>

                <label>Name</label>
                <input placholder="name"/>

                <label>email</label>
                <input placholder="Email"/>

                <label>Message</label>
                <textarea placeholder="Message"></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    
        </div>
    )
}

export default Joinme
