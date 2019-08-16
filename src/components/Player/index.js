import React from 'react'

import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider } from './styles'

import VolumeIcon from '../../assets/images/volume.svg'
import ShuffleIcon from '../../assets/images/shuffle.svg'
import BackwardIcon from '../../assets/images/backward.svg'
import PlayIcon from '../../assets/images/play.svg'
import PauseIcon from '../../assets/images/pause.svg'
import FowardIcon from '../../assets/images/forward.svg'
import RepeatIcon from '../../assets/images/repeat.svg'

import Slider from 'rc-slider';

const Player = () => {
    return (
        <Container>
            <Current>
                <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="Cover" />

                <div>
                    <span>Times like these</span>
                    <small>Foo Figthers</small>
                </div>
            </Current>

            <Progress>
                <Controls>
                    <button>
                        <img src={ShuffleIcon} alt="Suffle" />
                    </button>

                    <button>
                        <img src={BackwardIcon} alt="Backward" />
                    </button>

                    <button>
                        <img src={PlayIcon} alt="Play" />
                    </button>

                    <button>
                        <img src={FowardIcon} alt="Foward" />
                    </button>

                    <button>
                        <img src={RepeatIcon} alt="Repeat" />
                    </button>
                </Controls>

                <Time>
                    <span>1:39</span>
                    <ProgressSlider>
                        <Slider
                            railStyle={{ background: '#404040', borderRadius: 10 }}
                            trackStyle={{ background: '#1ED760' }}
                            handleStyle={{ border: 0 }}
                        />
                    </ProgressSlider>
                    <span>5:00</span>
                </Time>
            </Progress>

            <Volume>
                <img src={VolumeIcon} alt="volume" />
                <Slider
                    railStyle={{ background: '#404040', borderRadius: 10 }}
                    trackStyle={{ background: '#fff' }}
                    handleStyle={{ display: 'none' }}
                    value={100}
                />
            </Volume>
        </Container>
    )
}

export default Player