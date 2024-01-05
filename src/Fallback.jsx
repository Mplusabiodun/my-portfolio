import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

export default function Fallback() {
  return (
    <main>
      <p>something went wrong. The page you 
      requested doesn't exist
      </p>
      <Button as = {Link} to="/" color="blue">Go Back Home
      </Button>
    </main>
  );
};