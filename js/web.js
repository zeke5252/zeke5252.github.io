class Slogan extends React.Component {
    state = {
        mySlogan : 'Helllllo~~~~This is my website'
    }
    changeText = () => {
        this.setState({
            mySlogan: 'Have a Good Time!'
        });
    };
    render(){
        return (
            <div className="header-slogan">
                    <div className="header-text" id="header-welcome" onClick={this.changeText}>
                        {this.state.mySlogan}
                    </div>
            </div>
        )
    }
};
class BoxContainer extends React.Component {
    render(){
        return (
            <div className={this.props.class}>
                <div className="col-1-of-2">
                    <div className="main-box">
                        Content box {this.props.boxNumber[0]} 
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="main-box">
                        Content box {this.props.boxNumber[1]}  
                    </div>
                </div>
            </div>
        )
    }
}
class MainContainer extends React.Component {
    state = {
        idHiddenRow : "row-hide",
        idShowRow : "row-show"
    };
    showHiddenBoxes = () => {
        this.setState({
            idHiddenRow : "row-show"
        });
        console.log(this.state.idHiddenRow)
    };
    render(){
        return (
            <main className="main-container">
                <section className="main-content">
                    <h2 className="main-title">{this.props.secTitle}</h2>
                    <BoxContainer class={this.state.idShowRow} boxNumber={[1,2]} />
                    <BoxContainer class={this.state.idShowRow} boxNumber={[3,4]} />                    
                    <BoxContainer class={this.state.idHiddenRow} boxNumber={[5,6]} />
                    <BoxContainer class={this.state.idHiddenRow} boxNumber={[7,8]} />
                    <BoxContainer class={this.state.idHiddenRow} boxNumber={[9,10]} />
                    <a href="#" className="main-button" onClick={this.showHiddenBoxes}>
                    Call to action
                    </a>
                </section>
            </main>
        )
    }
}

class Navlist extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <ul className={this.props.class}>
                <li>About</li>
                <li>Works</li>
                <li>Experiences</li>
                <li>Contact me</li>
            </ul>
        )
    }
}

class Container extends React.Component {
    state = {
        headerMenu:'header-menu',
        headerNavMobile:'header-nav-mobile',
        headerClose:'header-closeImg'
    }
    openMenu = () => {
        this.setState({ headerNavMobile:"header-nav-mobile displayBlock"})
    };
    closeMenu = () => {
        this.setState({ headerNavMobile:"header-nav-mobile"})
    };
    render(){
        return(
            <div className="container">
                <header>
                    <header className="header-head">
                        <div className="header-logo">
                            <span className="header-title">Zeke's website</span>
                            <img className="header-logoImg" src="img/logo.svg"  />
                        </div>
                        <img src="img/menu.svg" alt="" className={this.state.headerMenu} onClick={this.openMenu} />
                        <nav className={this.state.headerNavMobile}>
                        <img src="img/close.svg" alt="close" title="icon designed by Zeke" className={this.state.headerClose} onClick = {this.closeMenu}/>
                            <Navlist class="header-ul-mobile" />
                        </nav>
                        <nav className="header-nav">
                            <Navlist class="header-ul" />
                        </nav>
                    </header>
                    <Slogan />
                </header>
                <MainContainer secTitle="Here is section title" />
            </div>
        )
    }
};
ReactDOM.render(
    <Container />,
    document.getElementById('root')
)
