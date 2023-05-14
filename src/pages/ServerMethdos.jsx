import React from 'react';

const ServerMethdos = () => {
    return (
        <div className='text-center w-[550px] mx-auto'>
            <h2>::to install a server site with database::</h2>
            <div className="mockup-code">
                <pre data-prefix="$"><code>
                    1. create a project: mkdir name
                    <br />
                    (i) go to the folder
                    <br />
                    2. need init: npm init -y
                    <br />
                    3. install p: npm i express cors mongodb dotenv
                    <br />
                    4. create a index.js file and run with nodemon
                    <br />
                    **to create gitignore file
                </code></pre>
            </div>
            <h2>::-to explore index file-::</h2>
            <div className="mockup-code">
                <pre data-prefix="$"><code>
                    1. require express
                    <br />
                    2. require cors to handle localhost server error
                    <br />
                    3. app call with express();
                    <br />
                    4. assigne port with process.env.PORT || 9988
                </code></pre>
            </div>
            <h2>
                ::-middleware-::
            </h2>
            <div className="mockup-code">
                <pre data-prefix="$"><code>
                    app.use(cors())
                    <br />
                    app.use(express.json())
                </code></pre>
            </div>
            <h2>::-mongodb connection and create all server route-::</h2>
            <div className="mockup-code">
                <pre data-prefix="$"><code>
                    1. go to mongodb atlast and create new user if you want provide a username password
                    <br />
                    2. then go to connect and copy full code, change the password and user
                    <br />
                    3. then run your project and check your project pingged or not..
                    <br />
                    4. must comment out this code finally section..

                </code></pre>
            </div>
            <h2>::-hide the uname & pass with dotenv-::</h2>
            <div className="mockup-code">
                <pre data-prefix="$"><code>
                    1. first create a .env file and put the secret code with name then import it
                    <br />
                    2. import: require('dotenv').config(); must as same
                    <br />
                    3. to access the secret code: (process.env.secretName)
                    <br />
                    4. use this with dynamic caret key and add this code with dynamic as well.
                </code></pre>
            </div>
            <div className="mockup-code">
                <pre data-prefix="$"><code>npm i daisyui</code></pre>
            </div>
            <div className="mockup-code">
                <pre data-prefix="$"><code>npm i daisyui</code></pre>
            </div>
            <div className="mockup-code">
                <pre data-prefix="$"><code>npm i daisyui</code></pre>
            </div>
            <div className="mockup-code">
                <pre data-prefix="$"><code>npm i daisyui</code></pre>
            </div>
            <div className="mockup-code">
                <pre data-prefix="$"><code>npm i daisyui</code></pre>
            </div>
            
        </div>
    );
};

export default ServerMethdos;