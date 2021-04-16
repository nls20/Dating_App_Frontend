import MatchesTemplateTile from "./MatchesTemplateTile"
import './MatchesPreviewTiles.css'

const MatchesPreviewTiles = ({matches}) => {

    

    const previews = matches.map((match, index) => {
        return <MatchesTemplateTile match={match} key={index}/>
    })

    return(
        <section id="template-section">
            {previews}
        </section>
    )
}
export default MatchesPreviewTiles