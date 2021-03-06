import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { database } from '../../Config/firebase';

import CardItem from '../../Components/Cards/CardItem';
import MyButton from '../../Components/MyButton';
import Card from '../../Components/Cards/Card';
import Header from '../../Components/Header';

import { useNavigation } from '@react-navigation/native';


const Edit = () => {

    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [curso, setCurso] = useState('');
    const navigation = useNavigation();

    function update(id) {
        database.collection('alunos').doc(id).update({
            nome,
            matricula,
            curso
        });
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Header title='Editar' />
            <Card>
                <CardItem style={{ flexDirection: 'column' }}>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome'
                        value={nome}
                        onChangeText={setNome} />
                    <TextInput
                        style={styles.input}
                        placeholder='Matrícula'
                        value={matricula}
                        onChangeText={setMatricula} />
                    <TextInput
                        style={styles.input}
                        placeholder='Curso'
                        value={curso}
                        onChangeText={setCurso} />
                </CardItem>

                <CardItem>
                    <MyButton
                        style={{ backgroundColor: '#00a86b' }}
                        onPress= {update}
                    >
                        Salvar
                    </MyButton>
                </CardItem>

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    card: {
        marginLeft: 10,
        flexDirection: 'column',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#191970',
    },
    input: {
        width: '100%',
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#D8BFD8',
        padding: 15,
    }

})

export default Edit;
