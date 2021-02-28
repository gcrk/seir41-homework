import React from 'react';

const Video = (props) => {

    if (props.data.id.length > 1) {
        const videos = props.data.edge_felix_video_timeline.edges;

        return (
            <div>
            {videos.map(({ node }) => {
                <img src={node.display_url} alt=""/>
            })}
            </div>
        )
    } else {
        return null
    }
}

export default Video;

