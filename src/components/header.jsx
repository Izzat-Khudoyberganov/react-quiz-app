import logo from "../assets/quiz-logo.png";

const Header = () => {
    return (
        <header>
            <img src={logo} alt='logo' />
            <h1>JS Quiz</h1>
        </header>
    );
};

export default Header;
