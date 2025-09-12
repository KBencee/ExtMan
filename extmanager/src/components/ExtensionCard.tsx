import type { Extension } from "../App";

const ExtensionCard = (props: Extension) => {

  return (
    <div className="extensionCard">
        <img src={props.logo} alt=""/>
        <h4 className="name">{props.name}</h4>
        <p className="description">{props.description}</p>
        <button className="activateBtn">{props.isactive}</button>

    </div>
  )
}

export default ExtensionCard