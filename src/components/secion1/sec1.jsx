import "./sec1.css"

const Sec1 = ({secImage, secImage1, seccardimage, sec1h1, sec1p}) => {
  return (
    <div>
      <div className="secion1">

        <h1>Умная доставка материалов для <br /> сложных строительных площадок</h1>
        <div className="secdiv">
            <button className="sec1btn">Заказать демо</button>
            <button className="sec1btn2">Подробнее</button>
        </div>

        <img src={secImage} className="sec1image" alt="" />
        <img src={secImage1} className="sec1image" alt="" />

      </div>


        <div className="card">
            <div className="sec1card">
                <img src={seccardimage} alt="" />
                <h1>{sec1h1}</h1>
                <p>{sec1p}</p>
            </div>

            <div className="sec1card">
                <img src={seccardimage} alt="" />
                <h1>{sec1h1}</h1>
                <p>{sec1p}</p>
            </div>

            <div className="sec1card">
                <img src={seccardimage} alt="" />
                <h1>{sec1h1}</h1>
                <p>{sec1p}</p>
            </div>
        </div>

    </div>
  )
}

export default Sec1
