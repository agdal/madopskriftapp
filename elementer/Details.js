import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';

const Details = ({route}) => {
    const {recipe} = route.params;

    return(
        <ScrollView>
            <View style={styles.details}>
                <View style={styles.item}>
                    <Text style={{fontSize: 22, color: '#008080', fontWeight:'800'}}>
                      Ingredienser:
                    </Text>
                    <Text style={styles.ingredienser}>{`${recipe.ingredients.map((item) => item['food'])}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize: 22, color: '#008080', fontWeight:'800'}}>
                      Mad kategorier:
                    </Text>
                    <Text style={styles.ingredienser}>{`${recipe.ingredients.map((item) => item['foodCategory'])}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize: 22, color: '#008080', fontWeight:'800'}}>
                      Kalorier: 
                    </Text>
                    <Text style={styles.ingredienser}> {`${recipe.calories}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize: 22, color: '#008080', fontWeight:'800'}}>
                      Label:
                    </Text>
                    <Text style={styles.ingredienser}> {`${recipe.label}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize: 22, color: '#008080', fontWeight:'800'}}>
                      Måltids type:
                    </Text>
                    <Text style={styles.ingredienser}> {`${recipe.mealType}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize: 22, color: '#008080', fontWeight:'800'}}>
                      Beskrivelse:
                    </Text>
                    <Text style={styles.ingredienser}>{`${recipe.ingredientLines}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize: 22, color: '#008080', fontWeight:'800'}}>
                      Diet type:
                    </Text>
                    <Text style={styles.ingredienser}> {`${recipe.dietLabels}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize: 22, color: '#008080', fontWeight:'800'}}>
                      Køkken type:
                    </Text>
                    <Text style={styles.ingredienser}> {`${recipe.cuisineType}`}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    details:{
        marginBottom: 30,
        padding: 5,
    },
    ingredienser: {
        fontSize: 20,
        color: '#008080',

    },
    item: {
        shadowColor: 'black',
        shadowOpacity: 0.16,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 3,
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default Details;