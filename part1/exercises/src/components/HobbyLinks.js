function HobbyLinks() {
    const hobbyLinks = ["https://www.youtube.com","https://www.reddit.com","https://store.steampowered.com/"];
    return (
        <div>
            <a href={hobbyLinks[0]}>Watch YouTube</a>
            <a href={hobbyLinks[1]}>Browse Reddit</a>
            <a href={hobbyLinks[2]}>Play Games on Steam</a>
        </div>
    );
}

export default HobbyLinks;