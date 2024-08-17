import "./sec2.css"

const Sec2 = ({sec2h1, sec2p, sec2img, sec2footerh1}) => {
  return (
    <div className = "sec2div">
        <h1 className="sec2h1">{sec2h1}</h1>
        <p className="sec2lorem"> {sec2p}</p>
        <img className="sec2img" src={sec2img} alt="" />
        <h1 className="footerh11">{sec2footerh1}</h1>
    </div>
  )
}

export default Sec2
