import MatchesTemplateTile from "./MatchesTemplateTile"

const MatchesPreviewTiles = ({matches}) => {

    

    const previews = matches.map((match, index) => {
        return <MatchesTemplateTile match={match} key={index}/>
    })

    return(
        <section>
            {previews}
        </section>
    )
}
export default MatchesPreviewTiles