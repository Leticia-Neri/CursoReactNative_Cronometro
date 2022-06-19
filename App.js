import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity, ImageBackgroundComponent} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero : 0,
      botao : 'VAI'
    };

    this.timer = null;

    this.vai=this.vai.bind(this);
    this.limpar=this.limpar.bind(this);
    
  }

  vai(){

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;

      this.setState({
        botao : 'VAI'
      });
    }else{
      this.timer = setInterval(() => {
        this.setState({
          numero:this.state.numero + 0.1
        })
      }, 100); 
      this.setState({
        botao: 'PARAR'
      });
    }

  }
  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      numero : 0,
      botao : 'VAI'
    })
  }
  render(){
    return(
      <View style={styles.conatiner}>

        <Image
        source={require('./src/cronometro2.png')}
        style={styles.cronometro} 
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>

          <TouchableOpacity onPress={this.vai} style={styles.btn}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.limpar} style={styles.btn}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00aeef'
  },
  timer:{
    marginTop:-170,
    color:'#fff',
    fontSize:65,
    fontWeight:'bold'
  },
  btnArea:{
    flexDirection:'row',
    marginTop:70,
    height:40
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    height:40,
    margin:17,
    borderRadius:9
  },
  btnTexto:{
    fontSize:20,
    fontWeight:'bold',
    color:'#00aeef'
  }
});
export default App;


