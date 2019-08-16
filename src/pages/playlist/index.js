import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails'

import useReactRouter from 'use-react-router';

import PropTypes from 'prop-types'

import { Container, Header, SongList } from './styles'

import Loading from '../../components/Loading'

import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

const Playlist = () => {

    const dispatch = useDispatch()
    const playlistDetails = useSelector(store => store.playlistDetails)
    const { match } = useReactRouter()

    useEffect(() => {
        dispatch(PlaylistDetailsActions.getPlaylistDetailsRequest(match.params.id))
    }, [match.params.id])

    const renderDetails = () => {
        const playlist = playlistDetails.data
        return (
            <Container>
                <Header>
                    <img src={playlist.thumbnail} alt={playlist.title} />

                    <div>
                        <span>PLAYLIST</span>
                        <h1>{playlist.title}</h1>
                        {!!playlist.songs && <p> {playlist.songs.length} músicas</p>}
                        <button>PLAY</button>
                    </div>
                </Header>

                <SongList>
                    <thead>
                        <th />
                        <th>Título</th>
                        <th>Artista</th>
                        <th>Álbum</th>
                        <th><img src={ClockIcon} alt="Duração" /></th>
                    </thead>

                    <tbody>
                        {
                            !playlist.songs ? (
                                <tr>
                                    <td colSpan={5}>Nenhuma música cadastrada</td>
                                </tr>
                            )
                                :
                                (
                                    playlist.songs.map(song => (
                                        <tr>
                                            <td><img src={PlusIcon} alt="Adicionar" /></td>
                                            <td>{song.title}</td>
                                            <td>{song.author}</td>
                                            <td>{song.album}</td>
                                            <td>3:26</td>
                                        </tr>
                                    ))
                                )
                        }
                    </tbody>
                </SongList>
            </Container>

        )
    }

    return playlistDetails.loading ? <Container loading> <Loading /> </Container> : renderDetails()
}

Playlist.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number
        }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
        data: PropTypes.shape({
            thumbnail: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            songs: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string, 
                title: PropTypes.string, 
                author: PropTypes.string,
                album: PropTypes.string
            }))
        })
    }).isRequired
}

export default Playlist