import './MatchesTemplateTile.css'

const MatchesTemplateTile = ({match}) => {

    return (
        <section id="tile-template-section">
            <img src={match.picture}/>
            <p>{match.name}</p>
        </section >
    )
}
export default MatchesTemplateTile