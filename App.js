import { Text, View, TextInput, Button, Image } from 'react-native';
import react, { useState } from 'react';
import styles from './style';

export default function App() {
  const [ usuario, setUsuario ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ logado, setLogado ] = useState(false);

  function fazerLogin(){
    if (usuario === 'Kaio' && senha === '123'){
      setLogado(true)
    } else {
      alert('Usuário ou senha incorretos!!')
    }
  } 

  if(!logado){
  return (
   <View style={styles.container}> 
   <Image
    source={{
      uri: 'https://www.svgrepo.com/show/333590/react.svg'
    }}
    style={styles.logo}
   />
   <Image />
   <TextInput
   style={styles.input}
   placeholder='Usuário'
   value={usuario}
   onChangeText={setUsuario} 
   />
   <TextInput 
   style={styles.input}
   placeholder='Senha'
   value={senha}
   onChangeText={setSenha}
   secureTextEntry 
   />
   <Button title='Fazer Login' onPress={fazerLogin}/>
   </View>

  );
  }

  return (
    <View style={styles.container}>
    <Text style={styles.bemVindo}>Sistema logado com sucesso!!</Text>
    <Text style={styles.nomeTopo}>Sistema bem-vindo, { usuario }</Text>
    
    </View>
  )
}
