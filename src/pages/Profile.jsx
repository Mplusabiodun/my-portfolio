import React from 'react'
import Portfolio from './Portfolio'
import {Link} from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

const Profile = (repos) => (
  <Card>
    <Image src={repos.owner.avatar_url} alt="wrapper" wrapped ui={false} />
    <Card.Content>
      <Card.Header>
        {repos.owner.login} 
      </Card.Header>
      <Card.Meta>
        <span className='date'>{repos.created_at}
        </span>
      </Card.Meta>
      <Card.Description>
        <strong>{repos.name}</strong>
      </Card.Description>
      <Link to={`/Profile/:details/${repos.details}`}>View Details
      </Link>
    </Card.Content>
    <Card. Content extra>
      <a>
        <Icon name="user"/>
        {repos.owner.followers_url}
      </a>
    </Card.Content>
  </Card>
);

export default Profile





