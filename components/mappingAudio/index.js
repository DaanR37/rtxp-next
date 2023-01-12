
const MappingAudio = (props) => {
    const { audiotour } = props;
    const { name, url } = audiotour;

    return (
        <>
            <div className="audiofiles">
                <h1>{name}</h1>
            </div>
            <div className="audiosource">
                <audio src={url} type="audio/mp3" preload="metadata">{url}</audio>
                {/* <div>{url}</div> */}
            </div>
        </>
    )
}

export default MappingAudio;