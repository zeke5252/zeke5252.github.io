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
            <div className="row">
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
        idRowHidden: ['.row:nth-child(4)','.row:nth-child(5)','.row:nth-child(6)']
    }
    showBoxes = () => {
        for(let i=0; i<this.state.idRowHidden.length; i++){
            document.querySelector(this.state.idRowHidden[i]).style.display='block';
        }
    };
    render(){
        return (
            <main className="main-container">
                <section className="main-content">
                    <h2 className="main-title">{this.props.secTitle}</h2>
                    <BoxContainer boxNumber={[1,2]} />
                    <BoxContainer boxNumber={[3,4]} />
                    <BoxContainer boxNumber={[5,6]} />
                    <BoxContainer boxNumber={[7,8]} />
                    <BoxContainer boxNumber={[9,10]} />
                    <a href="#" className="main-button" onClick={this.showBoxes}>
                    Call to action
                    </a>
                </section>
            </main>
        )
    }
}
class Menu extends React.Component {
    state = {
        idHeaderNavMobile: '.header-nav-mobile'
    }
    switchMenu = () => {
        let tempStr = document.querySelector(this.state.idHeaderNavMobile).classList;
        (tempStr.contains('displayBlock'))? tempStr.remove('displayBlock'):tempStr.add('displayBlock');
    };
    render(){
        return(
            <img src="img/menu.svg" alt="" className="header-menu" onClick = {this.switchMenu}/>
        )
    }
}
class Close extends React.Component {
    state = {
        idHeaderNavMobile: '.header-nav-mobile'
    }
    switchMenu = () => {
        let tempStr = document.querySelector(this.state.idHeaderNavMobile).classList;
        (tempStr.contains('displayBlock'))? tempStr.remove('displayBlock'):tempStr.add('displayBlock');
    };
    render(){
        return(
            <img src="img/close.svg" alt="close" title="icon designed by Zeke" className="header-closeImg" onClick = {this.switchMenu}/>
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
    render(){
        return(
            <div className="container">
                <header>
                    <header className="header-head">
                        <div className="header-logo">
                            <span className="header-title">Zeke's website</span>
                            <img className="header-logoImg" src="img/logo.svg"  />
                        </div>
                        <Menu />
                        <nav className="header-nav-mobile displaySwitch">
                            <Close />
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
//Pending issue. The width is separated with that in CSS, which means I need to modify both files if I change the width
window.addEventListener("resize", function() {
    let tempStr = document.querySelector('.header-nav-mobile').classList;
    if (window.matchMedia("(min-width: 800px)").matches) {
    //Remove the class
    tempStr.remove('displayBlock')
    } else {
    console.log("stay as it is");
    }
    });
