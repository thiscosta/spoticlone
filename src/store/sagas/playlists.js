import { call, put } from 'redux-saga/effects'

import api from '../../services/api'

import { Creators as PlaylistsAction } from '../ducks/playlists'
import { Creators as ErrorActions } from '../ducks/error'

export function* getPlaylists() {
    try{
        const response = yield call(api.get, '/playlists')
        console.tron.log('response: ', response)
        yield put(PlaylistsAction.getPlaylistsSuccess(response.data))
    }catch(err){
        yield put(ErrorActions.setError("Não foi possível obter as playlists"))

    }
}