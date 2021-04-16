import MatchesTemplateTile from "./MatchesTemplateTile"

const MatchesPreviewTiles = () => {

    const matches = [
        {name: "andrew", picture: "pic"},
        {name: "david", picture: "pic"},
        {name: "mark", picture: "pic"},
        {name: "nicola", picture: "pic"},
        {name: "brian", picture: "pic"}
    ]

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