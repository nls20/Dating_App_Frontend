import MatchesTemplateTile from "./MatchesTemplateTile"
import './MatchesPreviewTiles.css'

const MatchesPreviewTiles = ({matches}) => {

    

    const previews = matches.map((match, index) => {
        return <a href="/matches/conversation/{match.name}"><MatchesTemplateTile match={match} key={index}/></a>
    })

    return(
        <section id="template-section">
            {previews}
        </section>
    )
}
export default MatchesPreviewTiles