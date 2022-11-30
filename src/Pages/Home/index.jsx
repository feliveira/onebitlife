import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import LifeStatus from "../../components/Common/LifeStatus";
import StatusBar from "../../components/Home/StatusBar"
import CreateHabit from "../../components/Home/CreateHabit";

export default function Home( )
{
    const navigation = useNavigation( )
    const [mindHabit, setMindHabit] = useState( )
    const [moneyHabit, setMoneyHabit] = useState( )
    const [bodyHabit, setBodyHabit] = useState( )
    const [funHabit, setFunHabit] = useState( )


    const handleNavExplanation = ( ) =>
    {
        navigation.navigate("Start")
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.dailyCheck}>
                        ❤️ 20 dias - ✔️ 80 checks
                    </Text>
                    <LifeStatus />
                    <StatusBar />
                    <CreateHabit habitArea={"Mente"} borderColor={"#90B7F3"} />
                </View>
                <Text style={styles.explanationText} onPress={() => handleNavExplanation()}>
                    Ver explicação novamente
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)"
    },
    dailyCheck: {
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginTop: 40
    },
    explanationText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25
    }
})