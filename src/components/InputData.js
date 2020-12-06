import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const InputData = ({ label }) => {
    return (
        <View>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput style={styles.input} />
        </View>
    )
}

export default InputData

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 10,
        padding: 12,
    },
    label: {
        fontSize: 16,
        //color: 'blue',
        marginBottom: 6,
        //fontFamily: fonts.primary[400],
    }
})
