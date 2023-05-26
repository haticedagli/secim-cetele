
import React from 'react';
import Cookies from 'js-cookie';
export default class App extends React.Component {
  
  constructor(props) {
    super(props);

    let kemal = Cookies.get('kemal')
    let tayyip = Cookies.get('tayyip')
    let bosoy = Cookies.get('bosoy')
    let sandik = Cookies.get('sandik')
    let zarf = Cookies.get('zarf')
    let gecerli = Cookies.get('gecerli')

    this.state = {
      kemal: kemal ? Number(kemal) : 0,
      tayyip: tayyip ? Number(tayyip) : 0,
      bosoy: bosoy ? Number(bosoy) : 0,
      sandik: sandik ? sandik : "",
      zarf: zarf ? zarf : "",
      gecerli: gecerli ? gecerli : ""
    };
  }
    
  render() {
    return (
      <div>
        <div className='parent bordergreen width300'>
              <div className='adaysayacgecersiz'>Sandık Numarası :</div>
              <input value={this.state.sandik} onChange={this.sandikChange.bind(this)} type="text" id="sandık" name="sandık"></input>
        </div>
        <div className='parent'>
          <div className='aday'>
            <div className='adayisim'>Kemal Kılıçdaroğlu</div>
            <img className='adayresim' src="https://media.chp.org.tr/pi/63c23731-e0c5-4fed-a634-452640ad0245.jpg" alt="benkemal"></img>
            <div className='adaysayac'>Oy Sayısı : {this.state.kemal}</div>
            <button className='greenButton' type="button" onClick={this.kemaleBirOy.bind(this)}>+1</button>
            <button className='redButton' type="button" onClick={this.kemaleEksiBirOy.bind(this)}>-1</button>
          </div>

          <div className='cubuk'></div>

          <div className='aday'>
            <div className='adayisim'>Recep Tayyip Erdoğan</div>
            <img className='adayresim' src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Recep_Tayyip_Erdo%C4%9Fan_2021_%28cropped%29.jpg" alt="reis"></img>
            <div className='adaysayac'>Oy Sayısı : {this.state.tayyip}</div>
            <button className='greenButton' type="button" onClick={this.tayyibeBirOy.bind(this)}>+1</button>
            <button className='redButton' type="button" onClick={this.tayyibeEksiBirOy.bind(this)}>-1</button>
          </div>

        </div> 
        <div className='parent bordergreen width300'>
            <div className='adaysayacgecersiz'>Geçersiz Oy Sayısı : {this.state.bosoy}</div>
            <button className='greenButton2' type="button" onClick={this.bosOy.bind(this)}>+1</button>
            <button className='redButton2' type="button" onClick={this.bosOyEksi.bind(this)}>-1</button>
        </div>
        <div className='parent bordergreen width300'>
            <div className='adaysayacgecersiz'>Geçerli Oy Sayısı :</div>
            <input value={this.state.gecerli} onChange={this.gecerliChange.bind(this)} type="text" id="gecerlioy" name="gecerli oy"></input>
        </div>
        <div className='parent bordergreen width300'>
            <div className='adaysayacgecersiz'>Zarf Sayısı :</div>
            <input value={this.state.zarf} onChange={this.zarfChange.bind(this)} type="text" id="zarf" name="zarf"></input>
        </div>
      </div>
      
      )
  }

  sandikChange(e){
    this.setState({sandik: e.target.value});
    Cookies.set('sandik', e.target.value)
  }

  zarfChange(e){
    this.setState({zarf: e.target.value});
    Cookies.set('zarf', e.target.value)
  }

  gecerliChange(e){
    this.setState({gecerli: e.target.value});
    Cookies.set('gecerli', e.target.value)
  }

  kemaleBirOy(){
    this.setState({kemal: this.state.kemal + 1});
    Cookies.set('kemal', this.state.kemal + 1)
  }

  kemaleEksiBirOy(){
    this.setState({kemal: this.state.kemal - 1});
    Cookies.set('kemal', this.state.kemal - 1)
  }

  bosOy(){
    this.setState({bosoy: this.state.bosoy + 1});
    Cookies.set('bosoy', this.state.bosoy + 1)
  }

  bosOyEksi(){
    this.setState({bosoy: this.state.bosoy - 1});
    Cookies.set('bosoy', this.state.bosoy - 1)
  }

  tayyibeBirOy(){
    this.setState({tayyip: this.state.tayyip + 1});
    Cookies.set('tayyip', this.state.tayyip + 1)
  }

  tayyibeEksiBirOy(){
    this.setState({tayyip: this.state.tayyip - 1});
    Cookies.set('tayyip', this.state.tayyip - 1)
  }

  
  
  getState(callback) {
    this.setState((prevState) => {
      callback(prevState);
    });
  }
}