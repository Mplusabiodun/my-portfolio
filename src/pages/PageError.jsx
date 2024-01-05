import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

export default function PageError() {
  return (
    
    <main>
      <h1>404</h1>
      <p>Error! Sorry, Page Not Found</p>
      <p>something went wrong. The page you 
      requested doesn't exist
      </p>
      <Button as = {Link} to="/" color="blue">Go Back Home
      </Button>
    </main>
  );
};