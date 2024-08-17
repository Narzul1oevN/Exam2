import "./nav.css"

const Nav = ({logo}) => {
  return (
    <div>
      <div className="nav">
            <img className="sec" src={logo} alt="" />
            <div className="navHref">
                <p>Главная</p>
                <p>О нас</p>
                <p>Продукция</p>
                <p>Процесс</p>
                <p>Надёжность</p>
                <p>Клиенты</p>
                <p>Связатся с нами</p>
                <button>Заказать демо</button>
            </div>
      </div>
    </div>
  )
}

export default Nav
