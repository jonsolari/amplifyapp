import React from 'react';

export default function About(){
    return(
        <div class="about">
            <h2>What was used to make this project?</h2>
                <p>Deployment with Amplify</p>
                <p>Image hosting with S3</p>
                <p>Groups and users created with IAM</p>
                <p>DNS routing with Route 53</p>
        </div>
    )
}