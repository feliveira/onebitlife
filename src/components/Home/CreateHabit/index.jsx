import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function CreateHabit( { habitArea, borderColor } )
{

    const handleCreate = () =>
    {
        console.log(`Criando Hábito de ${habitArea}`)
    }

    return (
      <TouchableOpacity 
      activeOpacity={0.8} 
      style={[styles.button, {borderColor: borderColor }]}
      onPress={handleCreate}
      >
        <Text style={styles.habitTitle}>
            Adicionar Meta {habitArea === "Mente" ? "da" : "do"} {habitArea}
        </Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 315,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderStyle: "dotted",
        borderColor: "#FFFFFF",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    habitTitle: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold"
    }
})