import type { Extension } from "../App";

const ExtensionCard = (props: Extension) => {

  return (
    <div className="extensionCard">
        <img className="img" src={props.logo} alt=""/>
        <h3 className="name">{props.name}</h3>
        <p className="description">{props.description}</p>
        <button className="activateBtn">{props.isActive}</button>
        <button className="removeBtn">Remove</button>

    </div>
  )
}

export default ExtensionCard