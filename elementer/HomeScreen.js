import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet,Image ,TextInput, TouchableOpacity, Keyboard, SafeAreaView, ActivityIndicator, FlatList} from 'react-native';

const HomeScreen = ({navigation}) => {

    const [recipes, setRecipes] = useState();

    const [searchQuery, setsearchQuery] = useState('');

    const [numberofRecipes, setNumberofRecipes] = useState('1');

    const [loading, setLoading] = useState(false);

    const apiId = '7d320534';
    const apiKey = `b48e6dd566606935ee5c315457c21ffa`;
    const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&from=0&to=${numberofRecipes}&calories=591-722&health=alcohol-free`

    async function apiCall(){
        setLoading(true);
        let resp = await fetch(apiUrl);

        let respJson = await resp.json();
        setRecipes(respJson.hits);
        setLoading(false);
        Keyboard.dismiss();
        setsearchQuery('');
    }

    useEffect(() => {
        setLoading(true);
        apiCall();
    },[])

    return (
    <View style={styles.container}>
            <Text style={styles.text}>
                Hvad søger du efter?
            </Text>
    
            <View>
                <TextInput 
                placeholder="Søg efter opskrift"
                onChangeText={text => setsearchQuery(text)}
                style={styles.inputField1}
                />

                <TextInput
                style={[styles.inputField, {width:'20%', fontSize: 18, marginLeft: 15,
                fontWeight: 'bold'}]}
                keyboardType='number-pad'
                onChangeText={text => setNumberofRecipes(text)}
                value={numberofRecipes}
                />
                
                <TouchableOpacity 
                style={styles.button}
                title='sumbit'
                onPress={apiCall}
                >
                    
                    <Text style={styles.buttonTet}>Søg</Text>
                </TouchableOpacity>

                <SafeAreaView
                style={{flex: 1}}>
                    {loading ? <ActivityIndicator size='large' color='#008080' /> :
                    <FlatList
                    style={styles.recipes}
                    data={recipes}
                    renderItem={({item}) => (
                       <View style={styles.recipe}>
                           <Image style={styles.image}
                           source={{uri: `${item.recipe.image}`}}
                           />
                           <View style={{padding: 20, flexDirection:'row'}}>
                               <Text style={styles.label}>{item.recipe.label}</Text>
                               <TouchableOpacity onPress={() => {navigation.navigate('Detaljer', {recipe: item.recipe})}}>
                                   <Text style={{marginLeft: 50, borderRadius:5, borderColor: '#00000', borderWidth: 0, padding: 5, backgroundColor: '#008080', color:'white'}}>
                                       Detaljer
                                   </Text>
                               </TouchableOpacity>
                           </View>
                       </View> 
                    )}
                    keyExtractor={(item, index) => index.toString()} />}
                </SafeAreaView>
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        width: '90%',
        top: -140,
    },
    inputField: {
        position:'absolute',
        height: '7%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 10,
        paddingLeft: 15,
        left: -13,
        zIndex: 10,
    },
    inputField1: {
        position:'absolute',
        height: '7.3%',
        width: '75%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 10,
        marginLeft: 65,
        paddingLeft: 15,
        zIndex: 10,
        left: 15,
    },
    buttons: {
        
    },
    button: {
        backgroundColor: '#008080',
        width: '100%',
        float: 'none',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection:'row',
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        marginTop: 75,
        zIndex: 11,
        position: 'relative',
        alignSelf: 'stretch',
    },
    buttonTet: {
        color: 'white',
        fontSize: 15,
        fontWeight:'bold',
        width: '100%',
        alignSelf: 'center',
        alignContent: 'center',
        left: 155,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20,
    },
    recipe: {
       // marginTop: '40%',
        margin: 11,
        backgroundColor: 'white',
        borderRadius: 20,
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    },
    label: {
        fontSize: 15,
        width: '60%',
        color: '#008080',
        fontStyle: '700',
    },
})
export default HomeScreen;