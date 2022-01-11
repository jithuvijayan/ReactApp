import React from 'react';
import UserItem from './UserItem';
import spinner from '../layout/spinner';

const users = ({users, loading}) => {

    if (loading) {
      return <spinner/>
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                         <UserItem key={user.id} user={user} />
                    ))}
            </div>
        )
    }

       
}

const userStyle = {
    display: 'grid',
    gridTemplateCoulumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
    grid: '225px / auto auto auto'
}

export default users
