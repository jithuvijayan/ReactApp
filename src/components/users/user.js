import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Repos from './Repos';
const UserInfo = ({ user, loading, getUser, getUserRepos, repos, match }) => {

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    })


    const { avatar_url, login,
        name, bio, html_url, company, blog, followers, following,
        public_repos,
        public_gists,
        location } = user;
    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>Back to search</Link>
            <div className='card grid-2'>
                <div className='all-center'>
                    <img src={avatar_url} className='round-img' alt='' style={{ width: '150px' }}></img>
                    <h1>{name}</h1>
                    <p>Location: {location} </p>
                </div>
                <div>
                    {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                        <a href={html_url} className='btn btn-darj my-1'>View Github Profile</a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>UserName:</strong>{login}
                                </Fragment>}
                            </li>
                            <li>
                                {login && <Fragment>
                                    <strong>Company:</strong>{company}
                                </Fragment>}
                            </li>
                            <li>
                                {login && <Fragment>
                                    <strong>Website:</strong>{blog}
                                </Fragment>}
                            </li>
                        </ul>
                    </Fragment>}
                </div>
            </div>
            <div className='card text-center'>
                <div className='badge badge-primary'>Followers: {followers}</div>
                <div className='badge badge-success'>Following: {following}</div>
                <div className='badge badge-danger'>Public Repos: {public_repos}</div>
                <div className='badge badge-dark'>Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    )
}

export default UserInfo
