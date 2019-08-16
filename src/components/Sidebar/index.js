import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Creators as PlaylistActions } from '../../store/ducks/playlists'
import { useSelector, useDispatch } from 'react-redux'

import { Container, NewPlaylist, Nav } from './styles'

import Loading from '../../components/Loading'

import AddPlaylistIcon from '../../assets/images/add_playlist.svg'

function Sidebar() {

    const dispatch = useDispatch()
    const playlists = useSelector(state => state.playlists)

    useEffect(() => {
        dispatch(PlaylistActions.getPlaylistsRequest())
    }, [])

    return (
        <Container>
            <div>
                <Nav main>
                    <li>
                        <Link to="/">Navegar</Link>
                    </li>
                    <li>
                        <a href="#">Rádio</a>
                    </li>
                </Nav>

                <Nav>
                    <li>
                        <span>SUA BIBLIOTECA</span>
                    </li>
                    <li>
                        <a href="#">Seu Daily mix</a>
                    </li>
                    <li>
                        <a href="#">Tocados recentemente</a>
                    </li>
                    <li>
                        <a href="#">ÁLbums</a>
                    </li>
                    <li>
                        <a href="#">Artistas</a>
                    </li>
                    <li>
                        <a href="#">Estações</a>
                    </li>
                    <li>
                        <a href="#">Arquivos locais</a>
                    </li>
                    <li>
                        <a href="#">Vídeos</a>
                    </li>
                    <li>
                        <a href="#">Podcasts</a>
                    </li>
                </Nav>

                <Nav>
                    <li>
                        <span>PLAYLISTS</span>
                        {playlists.loading && <Loading />}
                    </li>

                    {playlists.data.map(playlist => (
                        <li key={playlist.id}>
                            <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
                        </li>
                    ))}

                </Nav>
            </div>
            <NewPlaylist>
                <img src={AddPlaylistIcon} alt="Adicionar playlist" />
                Nova playlist
            </NewPlaylist>
        </Container>
    )
}

Sidebar.propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string
        })),
        loading: PropTypes.bool
    })
}

export default Sidebar