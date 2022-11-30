import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function EditHabit( { habit, frequency, habitArea, checkColor } )
{
    const handleEdit = ( ) =>
    {
        console.log("Botão de Editar clicado");
    }

    const handleCheck = ( ) => 
    {
        console.log(`Botão do check do ${habitArea}`);
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={handleEdit}>
            <View style={styles.habitText}>
                <Text style={styles.habitTitle}> { habit } </Text>
                <Text style={styles.habitFrequency}> { frequency } </Text>
            </View>

            <TouchableOpacity style={[ styles.check, {borderColor: checkColor} ]} onPress={handleCheck} />

        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor: "#151515",
        borderRadius: 5,
        width: 320,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    habitTitle: {
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    habitFrequency: {
        color: "#FFFFFF",
    },
    check: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 10
    }
})