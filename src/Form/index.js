import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" autofocus placeholder="Wpisz nowe zadanie." />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;