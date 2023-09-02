import React from 'react'

function VideoCard({ videoData }) {
    const { title, thumbnailUrl,Url } = videoData;
    return (
        <>
            <div className="flex-item w-80 bg-white rounded-lg shadow-md overflow-hidden">
                <img src={thumbnailUrl} className="w-80 h-44 object-fill" />
                <div className="px-6 py-4">
                    <div className="text-xl font-semibold mb-2">{title}</div>
                </div>
                <div className="px-6 py-4">
                    <a
                        href={Url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Watch Video
                    </a>
                </div>
            </div>
        </>
    )
}

export default VideoCard