import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import LifeStatus from "../../components/Common/LifeStatus";
import StatusBar from "../../components/Home/StatusBar"
import CreateHabit from "../../components/Home/CreateHabit";
import EditHabit from "../../components/Home/EditHabit";

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
                    
                    { mindHabit ? (
                        <EditHabit 
                        habit={mindHabit?.habitName} 
                        frequency={`${mindHabit?.habitFrequency} - ${mindHabit?.habitTime}`} 
                        habitArea={mindHabit?.habitArea}
                        checkColor={"#90B7F3"}
                        />
                        ) :
                        (
                            <CreateHabit habitArea={"Mente"} borderColor={"#90B7F3"} />
                        )
                    }
                    
                    { moneyHabit ? (
                        <EditHabit 
                        habit={moneyHabit?.habitName} 
                        frequency={`${moneyHabit?.habitFrequency} - ${moneyHabit?.habitTime}`} 
                        habitArea={moneyHabit?.habitArea}
                        checkColor={"#85BB65"}
                        />
                        ) :
                        (
                            <CreateHabit habitArea={"Financeiro"} borderColor={"#85BB65"} />
                        )
                    }
                    
                    { bodyHabit ? (
                        <EditHabit 
                        habit={bodyHabit?.habitName} 
                        frequency={`${bodyHabit?.habitFrequency} - ${bodyHabit?.habitTime}`} 
                        habitArea={bodyHabit?.habitArea}
                        checkColor={"#FF0044"}
                        />
                        ) :
                        (
                            <CreateHabit habitArea={"Corpo"} borderColor={"#FF0044"} />
                        )
                    }

                    { funHabit ? (
                        <EditHabit 
                        habit={funHabit?.habitName} 
                        frequency={`${funHabit?.habitFrequency} - ${funHabit?.habitTime}`} 
                        habitArea={funHabit?.habitArea}
                        checkColor={"#FE7F23"}
                        />
                        ) :
                        (
                            <CreateHabit habitArea={"Humor"} borderColor={"#FE7F23"} />
                        )
                    }
                





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