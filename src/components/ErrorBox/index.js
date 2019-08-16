import React from 'react'

import CloseIcon from '../../assets/images/close.svg'

import { Container } from './styles'

import { Creators as ErrorActions } from '../../store/ducks/error'
import { useSelector, useDispatch } from 'react-redux'

import PropTypes from 'prop-types'

const ErrorBox = () => {

    const error = useSelector(store => store.error)
    const dispatch = useDispatch()

    return error.visible
        && (
            <Container>
                <p>{error.message}</p>
                <button onClick={() => {
                    dispatch(ErrorActions.hideError())
                }}>
                    <img src={CloseIcon} alt="Fechar" />
                </button>
            </Container>
        )

}

ErrorBox.propTypes = {
    hideError: PropTypes.func.isRequired,
    error: PropTypes.shape({
        message: PropTypes.string,
        visible: PropTypes.bool
    })
}

export default ErrorBox