import { call, put, actionChannel } from 'redux-saga/effects'

import api from '../../services/api'

import { Creators as PlaylistDetailsAction } from '../ducks/playlistDetails'
import { Creators as ErrorActions } from '../ducks/error'

export function* getPlaylistDetails(action) {
    try {
        const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`)
        yield put(PlaylistDetailsAction.getPlaylistDetailsSuccess(response.data))
    } catch (err) {
        yield put(ErrorActions.setError("Não foi possível obter os detalhes da playlist"))
    }
}