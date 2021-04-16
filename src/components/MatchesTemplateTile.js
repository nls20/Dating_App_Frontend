import './MatchesTemplateTile.css'

const MatchesTemplateTile = ({match}) => {

    return (
        <section id="tile-template-section">
            <p>{match.name}</p>
        </section >
    )
}
export default MatchesTemplateTile