import React from 'react'
import playlists from './List'
import PlaylistRow from './PlaylistRow'
import './Playlist.css'
import YoutubeContext from './YoutubeContext'
import SongRow from './SongRow'

const Playlist = () => {
    return (
        <YoutubeContext>
            <table>
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>Playlists</th>
                        <th>Subscription</th>
                    </tr>
                    {playlists.map((item, index) => {
                        return (
                            <PlaylistRow key={index} id={index} listItems={item} />
                        )
                    })}
                </tbody>

            </table>
            <br />
            <SongRow />
        </YoutubeContext>
    )
}

export default Playlist