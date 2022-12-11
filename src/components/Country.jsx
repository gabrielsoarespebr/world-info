// (props) was unstructure to ({name}), so you can use just {name} instead of {props.name}
export const Country = ({ name }) => {
    return (
        <div className="country-card">
            <h2 className="country-name">{name}</h2>
        </div>
    )
}