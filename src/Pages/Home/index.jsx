import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LifeStatus from "../../components/Common/LifeStatus";

export default function Home( )
{
    const navigation = useNavigation( )

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