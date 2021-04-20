import MatchesTemplateTile from "./MatchesTemplateTile"
import './MatchesPreviewTiles.css'

const MatchesPreviewTiles = ({matches}) => {

    

    const previews = matches.map((match, index) => {
        const hrefName = "/matches/conversation/" + match.name
        return <a href={hrefName}><MatchesTemplateTile match={match} key={index}/></a>
    })

    return(
        <section id="template-section">
            {previews}
        </section>
    )
}
export default MatchesPreviewTiles