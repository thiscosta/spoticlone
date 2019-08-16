import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import { Creators as PlaylistActions } from '../../store/ducks/playlists'
import { useSelector, useDispatch } from 'react-redux'

import Loading from '../../components/Loading'

import { Container, Title, List, Playlist } from './styles'

const Browse = () => {
    const dispatch = useDispatch()
    const playlists = useSelector(state => state.playlists)

    useEffect(() => {
        dispatch(PlaylistActions.getPlaylistsRequest())
    }, [])

    return (
        <Container>
            <Title>Navegar {playlists.loading && <Loading />}</Title>
            <List>
                {
                    playlists.data.map(playlist => (
                        <Playlist to={`/playlists/${playlist.id}`} key={playlist.id}>
                            <img src={playlist.thumbnail} alt={playlist.title} />
                            <strong>{playlist.title}</strong>
                            <p>{playlist.description}</p>
                        </Playlist>
                    ))
                }
            </List>
        </Container>
    )
}

Browse.propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            thumbnail: PropTypes.string,
            description: PropTypes.string,
        })),
        loading: PropTypes.bool
    })
}

export default Browse